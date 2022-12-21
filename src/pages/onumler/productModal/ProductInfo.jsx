import React, { useState } from "react";
import "./product-info.scss";
import wear1 from "../../../images/wear1.png";
import wear2 from "../../../images/wear2.png";
import upload from "../../../images/upload.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import AddBanner from "../../bazar/bannerlar/addBanner/AddBanner";

const images = [
  {
    id: 1,
    img: wear1,
  },
  {
    id: 2,
    img: wear2,
  },
];

const emptySlots = [1, 2, 3, 4, 5, 6, 7, 8];

function ProductInfo(props) {
  const [openModal, setOpenModal] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const url =
    "http://localhost:3002/api/roles/products/add-images/86103333-313c-48c8-95ae-175ab2241bd6";

  const handleClickOpen = () => {
    setProductImage(null);
    setImageUrl(null);
    setProductTitle(null);
    setOpenModal(true);
  };

  const handleClose = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    const token = window.localStorage.getItem("token");

    if (productImage) {
      formData.append("photo", productImage);

      try {
        await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    setOpenModal(false);
  };

  return (
    <div
      className={`product-info ${props.animate ? "animate" : ""}`}
      id={props.animate ? "" : "animate-back"}
    >
      <div className="nav-btns">
        <button className="go-back" onClick={props.close}>
          Yza gaýt
        </button>
        <button className="add-btn">Önümi goş</button>
      </div>

      <div className="product-images info">
        <div className="title">Önümiň surady*</div>
        <div className="image-fields">
          {images.map((img) => {
            return (
              <div key={img.id} className="uploaded-img img">
                <img src={img.img} alt="product" />
              </div>
            );
          })}

          {emptySlots.map((slot) => {
            return (
              <div
                className="empty-img img"
                key={slot}
                onClick={handleClickOpen}
              >
                <img src={upload} alt="upload" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="inventory-info info">
        <div className="title">Inwentar maglumatlary</div>
        <form action="#">
          <div className="quantity">
            <label htmlFor="quan">Mukdary*</label>
            <input type="text" id="quan" defaultValue={999} />
          </div>
          <div className="barcode">
            <label htmlFor="bar">Ştrih kody*</label>
            <input type="text" id="bar" defaultValue={192857104742} />
          </div>
        </form>
      </div>

      <div className="about-product info">
        <div className="title">Önüm barada</div>
        <form action="#">
          <div className="name-cat">
            <div className="name">
              <label htmlFor="name">Ady*</label>
              <input type="text" id="name" defaultValue="Lorem ipsum amed" />
            </div>
            <div className="category">
              <label htmlFor="cat">Kategoriýasy</label>
              <input type="text" id="cat" defaultValue="Eşik" />
            </div>
          </div>
          <div className="add-info">
            <div className="add-title">Goşmaça maglumatlar</div>
          </div>

          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              editor.ui.view.editable.element.style.padding = "20px";
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </form>
      </div>

      <div className="sales-info info">
        <div className="title">Satyş maglumatlary</div>
        <form action="#">
          <div className="quantity">
            <label htmlFor="quan">Bahasy*</label>
            <input type="text" id="quan" defaultValue={`${9999} TMT`} />
          </div>
          <div className="barcode">
            <label htmlFor="bar">Arzanladyş (%) </label>
            <input type="text" id="bar" defaultValue={70} />
          </div>
        </form>
      </div>

      <AddBanner
        handleClose={handleClose}
        open={openModal}
        setImage={setProductImage}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        imageName={productTitle}
        setTitle={setProductTitle}
      />
    </div>
  );
}

export default ProductInfo;

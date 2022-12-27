import React, { useState } from "react";
import "./product-info.scss";
import upload from "../../../images/upload.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import AddBanner from "../../bazar/bannerlar/addBanner/AddBanner";
import { useFormik } from "formik";

const emptySlots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const url = "http://localhost:3002/api/roles/products/add";

const validate = (values) => {
  const errors = {};
  if (!values.quantity) {
    errors.quantity = "Mukdaryny giriziň!";
  }

  if (!values.barcode) {
    errors.barcode = "Ştrih kody giriziň!";
  }

  if (!values.name_tm) {
    errors.name_tm = "Hokmany!";
  } else if (values.name_tm.length < 3) {
    errors.name_tm = "Girizen adyňyz örän kiçi!";
  }

  if (!values.category) {
    errors.category = "Kategoriýany giriziň!";
  } else if (values.category.length < 2) {
    errors.category = "Kategoriýanyň ady örän kiçi!";
  }

  if (!values.given_price) {
    errors.given_price = "Bahany giriziň!";
  }

  if (!values.discount) {
    errors.discount = "Arzanlyşygy giriziň!";
  } else if (values.discount > 99) {
    errors.discount = "Ýalňyş san girizdiňiz!";
  }

  return errors;
};

function ProductInfo(props) {
  const [openModal, setOpenModal] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [images, setImages] = useState([]);
  const [productInfo, setProductInfo] = useState({
    code: 111,
    name_tm: "",
    name_ru: "",
    name_en: "",
    description_tm: "Depder",
    description_ru: "",
    description_en: "",
    barcode: "",
    given_price: 5,
    categories: [1, 3],
    brandId: 3,
    discount: 0,
  });

  const token = window.localStorage.getItem("token");

  const handleClickOpen = () => {
    setProductImage(null);
    setImageUrl(null);
    setProductTitle(null);
    setOpenModal(true);
  };

  const handleClose = () => {
    setProductImage(null);
    setImageUrl(null);
    setProductTitle(null);
    setOpenModal(false);
  };

  const uploadThePhoto = async (event) => {
    event.preventDefault();
    setImages((images) => [...images, imageUrl]);
    emptySlots.pop();
    setOpenModal(false);
  };

  const formik = useFormik({
    initialValues: {
      quantity: 0,
      barcode: "",
      name_tm: "",
      category: "",
      given_price: 0,
      discount: 0,
    },
    validate,
    onSubmit: (values) => {
      const info = Object.values(values);
      Object.keys(values).forEach(function (key, index) {
        setProductInfo((productInfo) => ({
          ...productInfo,
          [productInfo[key]]: info[index],
        }));
      });

      console.log(productInfo);
    },
  });

  const handleAddProduct = async () => {
    const formData = new FormData();

    try {
      await axios
        .post(url, productInfo, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err.message);
    }

    props.close();
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
        <button className="add-btn" onClick={formik.handleSubmit}>
          Önümi goş
        </button>
      </div>

      <div className="product-images info">
        <div className="title">Önümiň surady*</div>
        <div className="image-fields">
          {images.map((img) => {
            return (
              <div key={img} className="uploaded-img img">
                <img src={img} alt="" />
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
            <input
              type="number"
              id="quantity"
              name="quantity"
              onChange={formik.handleChange}
              value={formik.values.quantity}
              onBlur={formik.handleBlur}
              className={
                formik.errors.quantity && formik.touched.quantity ? "error" : ""
              }
            />

            {formik.errors.quantity && formik.touched.quantity ? (
              <div className="error-msg">{formik.errors.quantity}</div>
            ) : null}
          </div>
          <div className="barcode">
            <label htmlFor="bar">Ştrih kody*</label>
            <input
              type="text"
              id="barcode"
              name="barcode"
              onChange={formik.handleChange}
              value={formik.values.barcode}
              onBlur={formik.handleBlur}
              className={
                formik.errors.barcode && formik.touched.barcode ? "error" : ""
              }
            />
            {formik.errors.barcode && formik.touched.barcode ? (
              <div className="error-msg">{formik.errors.barcode}</div>
            ) : null}
          </div>
        </form>
      </div>

      <div className="about-product info">
        <div className="title">Önüm barada</div>
        <form action="#">
          <div className="name-cat">
            <div className="name">
              <label htmlFor="name">Ady*</label>
              <input
                type="text"
                id="name"
                name="name_tm"
                onChange={formik.handleChange}
                value={formik.values.name_tm}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.name_tm && formik.touched.name_tm ? "error" : ""
                }
              />
              {formik.errors.name_tm && formik.touched.name_tm ? (
                <div className="error-msg">{formik.errors.name_tm}</div>
              ) : null}
            </div>
            <div className="category">
              <label htmlFor="category">Kategoriýasy</label>
              <input
                type="text"
                id="category"
                name="category"
                onChange={formik.handleChange}
                value={formik.values.category}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.category && formik.touched.category
                    ? "error"
                    : ""
                }
              />
              {formik.errors.category && formik.touched.category ? (
                <div className="error-msg">{formik.errors.category}</div>
              ) : null}
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
          <div>
            <label htmlFor="price">Bahasy*</label>
            <input
              type="number"
              id="given_price"
              name="given_price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.given_price}
              className={
                formik.errors.given_price && formik.touched.given_price
                  ? "error"
                  : ""
              }
            />

            {formik.errors.given_price && formik.touched.given_price ? (
              <div className="error-msg">{formik.errors.given_price}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="discount">Arzanladyş (%) </label>
            <input
              type="number"
              id="discount"
              name="discount"
              onChange={formik.handleChange}
              value={formik.values.discount}
              onBlur={formik.handleBlur}
              className={
                formik.errors.discount && formik.touched.discount ? "error" : ""
              }
            />
            {formik.errors.discount && formik.touched.discount ? (
              <div className="error-msg">{formik.errors.discount}</div>
            ) : null}
          </div>
        </form>
      </div>

      <AddBanner
        handleClose={handleClose}
        handleUpload={uploadThePhoto}
        open={openModal}
        setImage={setProductImage}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        imageName={productTitle}
        setTitle={setProductTitle}
        modalTitle={"Surat goş"}
      />
    </div>
  );
}

export default ProductInfo;

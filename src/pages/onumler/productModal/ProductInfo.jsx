import React, { useState } from "react";
import "./product-info.scss";
import wear1 from "../../../images/wear1.png";
import wear2 from "../../../images/wear2.png";
import upload from "../../../images/upload.png";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
const sample = "";

function ProductInfo(props) {
  const [text, setText] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(
          "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in</p>"
        )
      )
    )
  );

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
              <div className="empty-img img" key={slot}>
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

            <Editor
              wrapperClassName="wrapper"
              editorClassName="editor"
              toolbarClassName="toolbar"
              editorState={text}
            />
          </div>
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
    </div>
  );
}

export default ProductInfo;

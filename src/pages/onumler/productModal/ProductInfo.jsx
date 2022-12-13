import React from "react";
import "./product-info.scss";

function ProductInfo(props) {
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
    </div>
  );
}

export default ProductInfo;

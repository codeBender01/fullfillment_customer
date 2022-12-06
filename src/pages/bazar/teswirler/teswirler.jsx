import React from "react";
import ProductReview from "../../../components/ProductReview/ProductReview";
import pr1 from "../../../images/product-1.png";
import pr2 from "../../../images/product-2.png";
import pr3 from "../../../images/product-3.png";
import "./teswirler.scss";

const productReviews = [
  {
    id: 1,
    img: pr1,
    isBorder: true,
  },
  {
    id: 2,
    img: pr2,
    isBorder: true,
  },
  {
    id: 3,
    img: pr3,
    isBorder: false,
  },
];

function Requests() {
  return (
    <div className="requests">
      {productReviews.map((pr) => {
        return (
          <ProductReview img={pr.img} key={pr.id} isBorder={pr.isBorder} />
        );
      })}
    </div>
  );
}

export default Requests;

import React from "react";
import profile from "../../images/profilePic.png";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./product-review.scss";

const arr = [1, 2, 3, 4, 5];

function ProductReview(props) {
  return (
    <div
      className="review"
      style={{
        borderBottom: props.isBorder ? "1px solid #767676" : "none",
      }}
    >
      <div className="image-side">
        <div className="img">
          <img src={[props.img]} alt="product" />
          <p>Önümiň doly ady</p>
        </div>
        <div className="stars">
          {arr.map((i, idx) => {
            return (
              <IconContext.Provider value={{ color: " #FFB400" }} key={i}>
                <AiFillStar className="star" />
              </IconContext.Provider>
            );
          })}
        </div>
      </div>

      <div className="comments flex">
        {arr.slice(0, 2).map((i) => {
          return (
            <div className="user-side flex" key={i}>
              <div className="profile-pic">
                <img src={profile} alt="profile" />
              </div>
              <div className="comment-name">
                <div className="name flex">
                  <span>Katy</span>
                  <div className="stars">
                    {arr.map((i, idx) => {
                      return (
                        <IconContext.Provider
                          value={{ color: " #FFB400" }}
                          key={i}
                        >
                          <AiFillStar className="star" size={12} />
                        </IconContext.Provider>
                      );
                    })}
                  </div>
                </div>

                <p className="comment">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductReview;

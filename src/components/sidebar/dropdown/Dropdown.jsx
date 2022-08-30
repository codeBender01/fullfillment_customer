import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import "./dropdown.scss";

function Dropdown() {
  const [isActive, setIsActive] = useState(false);

  const applyActiveClass = () => {
    const menu = document.body.querySelector(".menu");
    menu.classList.toggle("active");
    setIsActive(isActive !== true);
  };
  return (
    <div className="dropdown">
      <div className="title" onClick={applyActiveClass}>
        {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}

        <h4>Tölegine garaşýanlar</h4>
      </div>

      <ul className="menu">
        <li className="menu-item">hey ther</li>
      </ul>
    </div>
  );
}

export default Dropdown;

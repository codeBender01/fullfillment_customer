import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

import "./dropdown.scss";

function Dropdown(props) {
  const [selectedDrop, setSelectedDrop] = useState(null);
  const location = useLocation();

  function applyActiveClass(id) {
    const drops = document.querySelectorAll(".sidebar-drop");
    for (let d of drops) {
      if (d.classList.contains("title-active")) {
        d.classList.remove("title-active");
        setSelectedDrop(-1);
      } else if (id === selectedDrop && selectedDrop) {
        setSelectedDrop(-1);
      } else {
        setSelectedDrop(id);
      }
    }
  }

  function menuStandStill(event) {
    event.stopPropagation();
    event.currentTarget.classList.toggle("white-bg");
  }

  useEffect(() => {
    if (props.title.path) {
      if (location.pathname === props.title.path) {
        setSelectedDrop(props.title.id);
      }
    }
  }, [location.pathname]);

  return (
    <div className="dropdown">
      <div
        className={`sidebar-drop ${
          selectedDrop === props.title.id ? "title-active" : ""
        }`}
        onClick={() => applyActiveClass(props.title.id)}
      >
        {props.title.path ? (
          <NavLink to={props.title.path}>
            <div className="title">
              {props.title.isIcon ? (
                selectedDrop === props.title.id ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowForward />
                )
              ) : null}

              <h4>{props.title.text}</h4>
            </div>
          </NavLink>
        ) : (
          <div className="title">
            {props.title.isIcon ? (
              selectedDrop === props.title.id ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )
            ) : null}

            <h4>{props.title.text}</h4>
          </div>
        )}
        {props.title.subMenu
          ? props.title.subMenu.map((menuItem) => {
              return (
                <ul
                  className={`menu `}
                  key={menuItem.id}
                  onClick={menuStandStill}
                >
                  <li className="menu-item">
                    <IconContext.Provider
                      value={{
                        color: `${menuItem.color ? menuItem.color : ""}`,
                      }}
                    >
                      {menuItem.icon}
                    </IconContext.Provider>
                    <span>{menuItem.text}</span>
                  </li>
                </ul>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Dropdown;

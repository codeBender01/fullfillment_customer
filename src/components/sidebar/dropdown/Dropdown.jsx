import React, { useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

import "./dropdown.scss";

function Dropdown(props) {
  const { selectedDrop, setSelectedDrop } = props;
  const { isActive, onClick } = props;
  const location = useLocation();

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
  }, [location.pathname, props.title.id, props.title.path]);

  return (
    <div className="dropdown">
      <div
        className={`sidebar-drop ${isActive ? "title-active" : ""}`}
        onClick={onClick}
      >
        {props.title.path ? (
          <NavLink to={props.title.path}>
            <div className="title">
              {props.title.isIcon ? (
                isActive ? (
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
              isActive ? (
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
                <NavLink to={menuItem.path} key={menuItem.id}>
                  <ul className={`menu `} onClick={menuStandStill}>
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
                </NavLink>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Dropdown;

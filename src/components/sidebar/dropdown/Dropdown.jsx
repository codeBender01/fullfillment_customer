import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

import "./dropdown.scss";
import { LocationCity } from "@mui/icons-material";

function Dropdown(props) {
  const { setSelectedDrop } = props;
  const { isActive, onClick } = props;
  const [selectedSubMenuItem, setSelectedSub] = useState(null);
  const location = useLocation();

  function menuStandStill(event) {
    event.stopPropagation();
  }

  useEffect(() => {
    if (props.title.path) {
      if (location.pathname === props.title.path) {
        setSelectedDrop(props.title.id);
      }

      for (let subMenuItem of props.title.subMenu) {
        if (location.pathname === subMenuItem.path) {
          setSelectedSub(subMenuItem.id);
          console.log("hey man", selectedSubMenuItem);
        }
      }
    }
  });

  return (
    <div className="dropdown">
      <div
        className={`sidebar-drop ${isActive ? "title-active" : ""}`}
        onClick={onClick}
      >
        {props.title.path ? (
          <NavLink end to={props.title.path}>
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
                <ul
                  className={`menu `}
                  onClick={menuStandStill}
                  key={menuItem.id}
                >
                  <NavLink to={menuItem.path}>
                    <li
                      className={`menu-item ${
                        menuItem.id === selectedSubMenuItem ? "white-bg" : null
                      }`}
                      onClick={() =>
                        setSelectedSub(
                          menuItem.id === selectedSubMenuItem
                            ? null
                            : menuItem.id
                        )
                      }
                    >
                      <IconContext.Provider
                        value={{
                          color: `${menuItem.color ? menuItem.color : ""}`,
                        }}
                      >
                        {menuItem.icon}
                      </IconContext.Provider>
                      <span>{menuItem.text}</span>
                    </li>
                  </NavLink>
                </ul>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Dropdown;

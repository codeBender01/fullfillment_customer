import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import nav from "../../../data/navData";
import "./dropdown.scss";

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
    }
    for (let n of nav) {
      if (location.pathname === n.path) {
        setSelectedSub(n.id);
      }
    }
  }, [props.title.path, props.title.id, location.pathname, setSelectedDrop]);

  return (
    <div className="dropdown">
      <div
        className={`sidebar-drop ${isActive ? "title-active" : null}`}
        onClick={onClick}
      >
        <NavLink to={`${props.title.path}`}>
          <div className="title">
            <IconContext.Provider
              value={{
                color: "#fff",
              }}
            >
              <BsDot className="active-dot" size={20} />
            </IconContext.Provider>
            <h4>{props.title.text}</h4>

            {props.title.isIcon ? (
              <IoIosArrowForward className="drop-icon" />
            ) : null}
          </div>
        </NavLink>

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
                        menuItem.id === selectedSubMenuItem
                          ? "active-drop-link"
                          : null
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

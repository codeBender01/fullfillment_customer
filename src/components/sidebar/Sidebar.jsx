import React from "react";
import Dropdown from "./dropdown/Dropdown";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import nav from "../../data/navData";
import { useLocation } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  const location = useLocation();

  const sendCurrentSidebar = () => {
    for (let n of nav) {
      if (n.sidebar) {
        for (let title of n.sidebar.titles) {
          if (
            location.pathname === n.path ||
            location.pathname === title.path
          ) {
            if (n.sidebar) {
              return n.sidebar.titles;
            } else {
              return [];
            }
          }
        }
      }
    }
  };

  const sideNav = sendCurrentSidebar();

  return (
    <div className="sidebar">
      <div className="search-field">
        <div className="input">
          <input type="text" />
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </div>
        <span className="gozleg">Giňişleýin gözleg...</span>
      </div>

      {sideNav
        ? sideNav.map((title) => {
            return <Dropdown title={title} key={title.id} />;
          })
        : ""}
    </div>
  );
}

export default Sidebar;

import React from "react";
import Dropdown from "./dropdown/Dropdown";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="search-field">
        <div className="input">
          <input type="text" />
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </div>
        <span>Giňişleýin gözleg...</span>
      </div>
      <Dropdown />
    </div>
  );
}

export default Sidebar;

import React, { useState, useEffect } from "react";
import Dropdown from "./dropdown/Dropdown";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import nav from "../../data/navData";
import { useLocation } from "react-router-dom";
import StickyBox from "react-sticky-box";
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

          if (title.subMenu) {
            for (let subMenu of title.subMenu) {
              if (
                location.pathname === n.path ||
                location.pathname === title.path ||
                location.pathname === subMenu.path
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
      }
    }
  };

  const sideNav = sendCurrentSidebar();

  const [selectedDrop, setSelectedDrop] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin, location.pathname]);

  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <div
        className="sidebar"
        style={{
          display: isLogin ? "none" : null,
        }}
      >
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
              return (
                <Dropdown
                  title={title}
                  key={title.id + title.text}
                  selectedDrop={selectedDrop}
                  setSelectedDrop={setSelectedDrop}
                  isActive={title.id === selectedDrop}
                  onClick={() =>
                    setSelectedDrop(title.id === selectedDrop ? null : title.id)
                  }
                />
              );
            })
          : ""}
      </div>
    </StickyBox>
  );
}

export default Sidebar;

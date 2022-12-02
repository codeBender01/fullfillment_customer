import React, { useState, useEffect } from "react";
import Dropdown from "./dropdown/Dropdown";

import { sidebar } from "../../data/navData";
import { useLocation } from "react-router-dom";
import StickyBox from "react-sticky-box";
import "./sidebar.scss";

function Sidebar() {
  const location = useLocation();

  const sideNav = sidebar;

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

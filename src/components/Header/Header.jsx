import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import nav, { sidebar } from "../../data/navData";
import "./header.scss";

function Header() {
  const [selectedNavbarLink, setSelectedNavbarLink] = useState(nav[0].id);
  const [isLogin, setIsLogin] = useState(false);

  const location = useLocation();
  const placeholder = "gözleg";

  useEffect(() => {
    for (let n of nav) {
      if (location.pathname === n.path) {
        setSelectedNavbarLink(n.id);
      }
    }
    for (let subMenu of sidebar[1].subMenu) {
      if (location.pathname === subMenu.path) {
        setSelectedNavbarLink(subMenu.id);
      }
    }

    if (location.pathname === "/login" || location.pathname === "/signup") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [location.pathname]);

  const applyActiveClass = (id) => {
    setSelectedNavbarLink(id);
  };

  const renderedNavbarLinks = () => {
    return nav.map((link) => {
      return (
        <li key={link.id} onClick={() => applyActiveClass(link.id)}>
          <NavLink to={link.path}>
            <span className={link.id === selectedNavbarLink ? "active" : ""}>
              {link.name}
            </span>
          </NavLink>

          <span className={link.notificationClassName}>{link.messages}</span>
        </li>
      );
    });
  };

  return (
    <>
      <header
        className="header"
        style={{
          display: isLogin ? "none" : null,
        }}
      >
        <div className="container">
          <div className="logo">LOGOTIP</div>
          <ul className="header-links">{renderedNavbarLinks()}</ul>

          <div className="search-bar">
            <AiOutlineSearch size={15} />
            <input type="text" placeholder={placeholder} />
          </div>
          <NavLink to="/login">
            <IconContext.Provider
              value={{
                color: "#B2B2B2",
              }}
            >
              <IoMdPerson size={20} />
            </IconContext.Provider>
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;

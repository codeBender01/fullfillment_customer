import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import nav from "../../data/navData";
import "./header.scss";

function Header() {
  const [selectedNavbarLink, setSelectedNavbarLink] = useState(nav[0].id);
  const [isLogin, setIsLogin] = useState(false);

  const location = useLocation();
  const placeholder = "gözleg";

  useEffect(() => {
    for (let n of nav) {
      if (n.sidebar) {
        for (let title of n.sidebar.titles) {
          if (
            location.pathname === n.path ||
            location.pathname === title.path
          ) {
            if (n.sidebar) {
              setSelectedNavbarLink(n.id);
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
                  setSelectedNavbarLink(n.id);
                }
              }
            }
          }
        }
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

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import nav from "../../data/navData";
import "./header.scss";

function Header() {
  const [selectedNavbarLink, setSelectedNavbarLink] = useState(nav[0].id);
  const location = useLocation();

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
  }, [location.pathname]);

  const applyActiveClass = (id) => {
    setSelectedNavbarLink(id);
  };

  const renderedNavbarLinks = () => {
    return nav.map((link) => {
      return (
        <li key={link.id} onClick={() => applyActiveClass(link.id)}>
          <NavLink to={link.path}>
            <span
              className={link.id === selectedNavbarLink ? "color-yellow" : ""}
            >
              {link.name}
            </span>
          </NavLink>
        </li>
      );
    });
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">Logo</div>
          <ul className="header-links">{renderedNavbarLinks()}</ul>
        </div>
      </header>
    </>
  );
}

export default Header;

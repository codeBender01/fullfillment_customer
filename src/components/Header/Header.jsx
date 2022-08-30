import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";

const nav = [
  {
    id: 1,
    name: "Bortda",
    path: "/",
  },
  {
    id: 2,
    name: "Düşünjeler",
    path: "/services",
  },
  {
    id: 3,
    name: "Sargytlar",
    path: "/about",
  },
  {
    id: 4,
    name: "Iberişler",
    path: "/technologies",
  },
  {
    id: 5,
    name: "Önümler",
    path: "/contactus",
  },
  {
    id: 6,
    name: "Müşderiler",
    path: "/contactus",
  },
];

function Header() {
  const [selectedNavbarLink, setSelectedNavbarLink] = useState(nav[0].id);
  const location = useLocation();

  useEffect(() => {
    for (let n of nav) {
      if (location.pathname === n.path) {
        setSelectedNavbarLink(n.id);
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
    <header className="header">
      <div className="container">
        <div className="logo">Logo</div>
        <ul className="header-links">{renderedNavbarLinks()}</ul>
      </div>
    </header>
  );
}

export default Header;

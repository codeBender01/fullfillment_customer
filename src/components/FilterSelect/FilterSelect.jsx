import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./filter-select.scss";

export default function FilterSelect(props) {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const toggleDropdown = () => setOpen(!isOpen);
  return (
    <div className="filter-select">
      <div className="filter-drop" onClick={toggleDropdown}>
        {selectedItem
          ? props.btn.options.find((item) => item.id === selectedItem).text
          : props.btn.text}
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      <div className={`filter-body ${isOpen && "open"}`}>
        {props.btn.options.map((opt) => (
          <div
            className="filter-item"
            onClick={() => handleItemClick(opt.id)}
            id={opt.id}
            key={opt.id}
          >
            {opt.text}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./select.scss";

const Select = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <>
      {props.btn.items ? (
        <div className="select">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedItem
              ? props.btn.items.find((item) => item.id === selectedItem).label
              : props.btn.text}
            {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          <div className={`dropdown-body ${isOpen && "open"}`}>
            {props.btn.items.map((item) => (
              <div
                className="dropdown-item"
                onClick={() => handleItemClick(item.id)}
                id={item.id}
                key={item.id}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="option">{props.btn.text}</div>
      )}
    </>
  );
};

export default Select;

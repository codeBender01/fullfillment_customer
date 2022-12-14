import React from "react";
import Select from "../../../../components/Select/Select";
import FilterSelect from "../../../../components/FilterSelect/FilterSelect";

const selectBtns = [
  {
    id: 1,
    text: "Topary belläň",
  },

  {
    id: 2,
    text: "Topary arhiwle",
  },
  {
    id: 3,
    text: "Topary ýatyr",
  },
];

const filterBtns = [
  {
    id: 1,
    text: "Bellenen",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 2,
    text: "Döredilen senesi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Beýlekiler",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

class Ach extends React.Component {
  render() {
    return (
      <div className="iber-sonky nested-page">
        <h1>Toparlar /Aç</h1>
        <div className="select-btns" id="minuscule">
          {selectBtns.map((btn) => {
            return <Select btn={btn} key={btn.id + btn.text} />;
          })}
        </div>
        <div className="line"></div>
        <div className="filters" id="minuscule">
          <div className="title">Filtr:</div>
          {filterBtns.map((btn) => {
            return <FilterSelect btn={btn} key={btn.id + btn.text} />;
          })}
        </div>
        <div className="line"></div>
      </div>
    );
  }
}

export default Ach;

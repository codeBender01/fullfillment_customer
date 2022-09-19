import React from "react";
import Select from "../../../../components/Select/Select";
import FilterSelect from "../../../../components/FilterSelect/FilterSelect";
import "./gowshuryldy.scss";

const selectBtns = [
  {
    id: 1,
    text: "Çap et",
    open1: false,

    items: [
      {
        id: 1,
        label: "option 1",
      },
      {
        id: 2,
        label: "option 2",
      },
      {
        id: 3,
        label: "option 3",
      },
    ],
  },

  {
    id: 2,
    text: "Duýduryş iberiň",
  },

  {
    id: 3,
    text: "Bazara habar beriň",
  },
  {
    id: 4,
    text: "Yzyna dörediň",
  },
];

const filterBtns = [
  {
    id: 1,
    text: "Dükan",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 2,
    text: "Daşaýjy",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Gämi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 4,
    text: "Gämi senesi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 5,
    text: "Sargyt senesi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 6,
    text: "Iberilýän hasap",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 7,
    text: "Beýlekiler",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

class Gowshuryldy extends React.Component {
  render() {
    return (
      <div className="iber-gowshur nested-page">
        <h1>Iberilen /Gowşuryldy</h1>
        <div className="select-btns" id="small">
          {selectBtns.map((btn) => {
            return <Select btn={btn} key={btn.id + btn.text} />;
          })}
        </div>
        <div className="line"></div>
        <div className="filters">
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

export default Gowshuryldy;

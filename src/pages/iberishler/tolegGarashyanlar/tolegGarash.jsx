import React from "react";
import Select from "../../../components/Select/Select";
import FilterSelect from "../../../components/FilterSelect/FilterSelect";

const selectBtns = [
  {
    id: 1,
    text: "Çap et",

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
    text: "Bellemek",
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
    id: 3,
    text: "Täze tertip",
  },

  {
    id: 4,
    text: "Köpçülikleýin täzelenme",

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
    id: 5,
    text: "Beýleki açarlar",

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
    text: "Bellenen adam",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Bellik",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 4,
    text: "Bölüniş ýagdaýy",
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
    text: "Beýleki",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 7,
    text: "Saklanan süzgüçler",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

class TolegGarash extends React.Component {
  render() {
    return (
      <div className="iber-sonky nested-page">
        <h1>Toparlar</h1>
        <div className="select-btns">
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

export default TolegGarash;

import React from "react";
import Select from "../../../components/Select/Select";
import FilterSelect from "../../../components/FilterSelect/FilterSelect";

const selectBtns = [
  {
    id: 1,
    text: "Bölmek",
  },
  {
    id: 2,
    text: "Import",

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
    text: "Eksport",
  },
];

const filterBtns = [
  {
    id: 1,
    text: "Duýduryş",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 2,
    text: "Döredildi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Gözegçilik",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

class Inwentar extends React.Component {
  render() {
    return (
      <div className="iber-sonky nested-page">
        <h1>Toparlar</h1>
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

export default Inwentar;

import React from "react";
import Select from "../../../../components/Select/Select";
import FilterSelect from "../../../../components/FilterSelect/FilterSelect";

const selectBtns = [
  {
    id: 1,
    text: "Ýerine ýetirilmegini ýatyryň",
  },
  {
    id: 2,
    text: "Status ýagdaýy täzeläň",
  },
  {
    id: 3,
    text: "Duýduryş iberiň",
  },

  {
    id: 4,
    text: "Bazara habar beriň",
  },
  {
    id: 5,
    text: "Yzyna dörediň",
  },
  {
    id: 6,
    text: "Eksport",
  },
];

const filterBtns = [
  {
    id: 1,
    text: "Gämi senesi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 2,
    text: "Üpjün ediji",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Bazar barada bildiriş",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 4,
    text: "Iberiş habarnamasy",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

class Sonky extends React.Component {
  render() {
    return (
      <div className="iber-sonky nested-page">
        <h1>Ýerine ýetirmek /Soňky</h1>
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

export default Sonky;

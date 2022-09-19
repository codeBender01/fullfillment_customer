import React, { useState } from "react";
import "./sonky.scss";
import Select from "../../../components/Select/Select";

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
    text: "Boş bellik",
  },
  {
    id: 3,
    text: "Gözegçiligi täzeläň",
  },
  {
    id: 4,
    text: "Duýduryş iberiň",
  },

  {
    id: 5,
    text: "Belle",
    open2: false,

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
    id: 6,
    text: "Yzyna dörediň",
  },
  {
    id: 7,
    text: "Ibermek",
  },
];

class Sonky extends React.Component {
  render() {
    return (
      <div className="iber-sonky">
        <h1>Iberilen /Soňky</h1>
        <div className="select-btns">
          {selectBtns.map((btn) => {
            return <Select btn={btn} key={btn.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Sonky;

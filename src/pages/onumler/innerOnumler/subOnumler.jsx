import React from "react";
import Select from "../../../components/Select/Select";
import FilterSelect from "../../../components/FilterSelect/FilterSelect";
import { BsCheck } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./sub-onumler.scss";

const selectBtns = [
  {
    id: 1,
    text: "Öňünden düzülen topary goşuň",

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
    text: "Kategoriýalaşdyryň",
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
    text: "Bellik",
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
    id: 4,
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
    id: 5,
    text: "Eksport",
  },
  {
    id: 6,
    text: "Öçürmek",
  },
  {
    id: 7,
    text: "Öçür",
  },
  {
    id: 8,
    text: "Täze önüm",
  },
  {
    id: 9,
    text: "Birleşdiriň",
  },
];

const filterBtns = [
  {
    id: 1,
    text: "Bellikler",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 2,
    text: "Öňünden düzülen toparlar",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Önüm görnüşi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 4,
    text: "Kategoriýalary",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 5,
    text: "Döredilen",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 6,
    text: "Üýtgedilen",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 7,
    text: "Surat url ",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

class SubOnumler extends React.Component {
  render() {
    return (
      <div className="sub-onumler nested-page" id="">
        <h1>Önümler</h1>
        <div className="sutunler">Sütünler</div>
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
        <div className="onum-chars">
          <span>23fs</span>
          <div>
            <span>20kg</span>
            <span>500g</span>
          </div>
          <span>500 sss</span>
          <IconContext.Provider
            value={{
              color: "#3D943B",
            }}
          >
            <BsCheck size={25} />
          </IconContext.Provider>

          <span>11/11/2022</span>
          <span>0</span>
          <span>$222.222</span>
          <span>22x22x22 sm</span>
          <span>3223</span>
          <IconContext.Provider
            value={{
              color: "#3D943B",
            }}
          >
            <BsCheck size={25} />
          </IconContext.Provider>
        </div>
        <div className="line" id="no-mg"></div>
      </div>
    );
  }
}

export default SubOnumler;

import React from "react";
import Select from "../../../../components/Select/Select";
import FilterSelect from "../../../../components/FilterSelect/FilterSelect";
import { IoMdArrowDropdown } from "react-icons/io";
import { IconContext } from "react-icons";
import "./ishlenildi.scss";

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
    text: "Topary belläň",
  },
  {
    id: 3,
    text: "Topary arhiwle",
  },
];

const filterBtns = [
  {
    id: 1,
    text: "Gämi",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 2,
    text: "Lorem ipsum",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
  {
    id: 3,
    text: "Işlenen senesi",
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
    text: "Beýlekiler",
    options: [
      { id: 1, text: "opt1" },
      { id: 2, text: "opt2" },
    ],
  },
];

const tData = [
  {
    id: "td-1",
    value: 11111,
    className: "blue",
  },
  {
    id: "td-2",
    value: "000",
  },
  {
    id: "td-3",
    value: "11/11/2022",
  },
  {
    id: "td-4",
    value: "Lorem ipsum",
  },
  {
    id: "td-5",
    value: "$0.00",
  },
  {
    id: "td-6",
    value: "000",
  },
];

class Ishlenildi extends React.Component {
  render() {
    return (
      <div className="nested-page ishlenildi">
        <h1>Toparlar /Ishlenildi</h1>
        <div className="select-btns" id="minuscule">
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
        <table id="ishlenildi">
          <colgroup>
            {[...Array(4)].map(() => {
              return (
                <col
                  span="1"
                  style={{
                    width: "10%",
                  }}
                />
              );
            })}

            <col
              span="1"
              style={{
                width: "15%",
              }}
            />
            <col
              span="1"
              style={{
                width: "15%",
              }}
            />
          </colgroup>
          <thead>
            <tr>
              <th>
                <div className="flexing">
                  <span>Toparyň ady</span>
                  <IconContext.Provider
                    value={{
                      color: "#ADADAD",
                    }}
                  >
                    <IoMdArrowDropdown size={20} />
                  </IconContext.Provider>
                </div>
              </th>
              <th>
                <div className="flexing">
                  <span># Ibermeler</span>
                  <IconContext.Provider
                    value={{
                      color: "#ADADAD",
                    }}
                  >
                    <IoMdArrowDropdown size={20} />
                  </IconContext.Provider>
                </div>
              </th>
              <th>
                <div className="flexing">
                  <span>Döredildi</span>
                  <IconContext.Provider
                    value={{
                      color: "#ADADAD",
                    }}
                  >
                    <IoMdArrowDropdown size={20} />
                  </IconContext.Provider>
                </div>
              </th>
              <th>
                <span>Bellendi</span>
              </th>
              <th>
                <span>Iberişleriň bahasy</span>
              </th>
              <th>
                <span># Çap edilen gaplar</span>
              </th>
              <th>
                <span>Çap edilen senesi</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {tData.map((td) => {
                return (
                  <td key={td.id} className={td.className}>
                    {td.value}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ishlenildi;

import React from "react";
import Select from "../../../components/Select/Select";
import { IoMdArrowDropdown } from "react-icons/io";
import { IconContext } from "react-icons";
import "./hasabat.scss";

const selectBtns = [
  {
    id: 1,
    text: "Hasabat kategoriýasyny goş",
  },
];

class Hasabat extends React.Component {
  render() {
    return (
      <div className="nested-page hasabat">
        <h1>Toparlar</h1>
        <div className="select-btns" id="minuscule">
          {selectBtns.map((btn) => {
            return <Select btn={btn} key={btn.id + btn.text} />;
          })}
        </div>

        <table id="hasabat">
          <colgroup>
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
            <col
              span="1"
              style={{
                width: "70%",
              }}
            />
          </colgroup>
          <thead>
            <tr>
              <th>
                <div className="flexing">
                  <span>Ady</span>
                  <IoMdArrowDropdown size={20} />
                </div>
              </th>
              <th>
                <div className="flexing">
                  <span># Önümler</span>
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
                <span>Hereketler</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Lorem ipsum</td>
              <td>0</td>
              <td>
                <button>Düzet</button>
                <button>Aýyr</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Hasabat;

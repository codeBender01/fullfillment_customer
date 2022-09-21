import React from "react";
import Select from "../../../components/Select/Select";

const selectBtns = [
  {
    id: 1,
    text: "Öňünden düzülen topary goş",
  },
];

class Onunden extends React.Component {
  render() {
    return (
      <div className="nested-page">
        <h1>Toparlar</h1>
        <div className="select-btns" id="minuscule">
          {selectBtns.map((btn) => {
            return <Select btn={btn} key={btn.id + btn.text} />;
          })}
        </div>
        <div className="line"></div>

        <div className="line"></div>
      </div>
    );
  }
}

export default Onunden;

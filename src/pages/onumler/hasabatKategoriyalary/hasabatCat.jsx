import React from "react";
import Select from "../../../components/Select/Select";
import DataTable from "../../../components/table/Table";
import { IoMdArrowDropdown } from "react-icons/io";
import { IconContext } from "react-icons";
import "./hasabat.scss";

const selectBtns = [
  {
    id: 1,
    text: "Hasabat kategoriýasyny goş",
  },
];

const columns = [
  { field: "name", headerName: "Ady", width: 100 },
  { field: "products", headerName: "# Önümer", width: 100 },
  { field: "actions", headerName: "Hereketler", width: 100 },
];

const rows = [
  {
    id: 1,
    name: "Lorem ipsum",
    products: 0,
    actions: "Düzet  Aýyr",
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

        <DataTable headerColor="#CBDAFF" rows={rows} columns={columns} />
      </div>
    );
  }
}

export default Hasabat;

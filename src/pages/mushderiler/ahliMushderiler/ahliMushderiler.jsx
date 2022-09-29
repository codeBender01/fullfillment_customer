import React from "react";
import Select from "../../../components/Select/Select";
import DataTable from "../../../components/table/Table";

const selectBtns = [
  {
    id: 1,
    text: "Bellik dörediň",
  },
  {
    id: 2,
    text: "Täze tertip",
  },
  {
    id: 3,
    text: "Bellik",
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
    id: 4,
    text: "Import",
  },
  {
    id: 5,
    text: "Birleşdiriň",
  },
];

const columns = [
  { field: "name", headerName: "Ady", width: 100 },
  { field: "email", headerName: "E-mail", width: 100 },
  { field: "phone", headerName: "Telefon", width: 100 },
  { field: "city", headerName: "Şäher", width: 100 },
  {
    field: "markets",
    headerName: "Bazar(lar)",
    width: 100,
  },
  {
    field: "username",
    headerName: "Bazar ulanyjy ady",
    width: 100,
    sortable: false,
  },
  {
    field: "note",
    headerName: "Bellik",
    width: 100,
    sortable: false,
  },
];

const rows = [
  {
    id: 1,
    name: null,
    email: null,
    phone: null,
    city: null,
    markets: null,
    username: null,
    note: null,
  },
];

class AhliMushderiler extends React.Component {
  render() {
    return (
      <div className="nested-page ishlenildi">
        <h1>Ähli müşderiler</h1>
        <div className="select-btns" id="small">
          {selectBtns.map((btn) => {
            return <Select btn={btn} key={btn.id + btn.text} />;
          })}
        </div>

        <div className="line"></div>
        <DataTable
          headerColor="#CBDAFF"
          checkbox={true}
          columns={columns}
          rows={rows}
        />
      </div>
    );
  }
}

export default AhliMushderiler;

import React from "react";
import Select from "../../../../components/Select/Select";
import FilterSelect from "../../../../components/FilterSelect/FilterSelect";
import DataTable from "../../../../components/table/Table";

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

const columns = [
  { field: "groupName", headerName: "Toparyň ady", width: 100 },
  { field: "sendings", headerName: "# Ibermeler", width: 100 },
  { field: "created", headerName: "Döredildi", width: 100 },
  { field: "marked", headerName: "Bellendi", width: 100, sortable: false },
  {
    field: "cost",
    headerName: "Iberişleriň bahasy",
    width: 100,
    sortable: false,
  },
  {
    field: "printedOutContainers",
    headerName: "# Çap edilen gaplar",
    width: 100,
    sortable: false,
  },
  {
    field: "printedOutDate",
    headerName: "Çap edilen senesi",
    width: 100,
    sortable: false,
  },
];

const rows = [
  {
    id: 1,
    groupName: "Lorem ipsum",
    sendings: "000",
    created: "11/11/2022",
    marked: "Lorem ipsum",
    cost: "$0.00",
    printedOutContainers: "000",
    printedOutDate: null,
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
        <DataTable headerColor="#CBDAFF" rows={rows} columns={columns} />
      </div>
    );
  }
}

export default Ishlenildi;

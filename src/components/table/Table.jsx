import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { PropaneSharp } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "Dükan#", width: 100 },
  { field: "age", headerName: "Ýaş", width: 100 },
  { field: "date", headerName: "Sargyt senesi", width: 100 },
  { field: "sowgat", headerName: "Sowgat", width: 100 },
  { field: "sku", headerName: "SKU elementi", width: 100 },
  {
    field: "productName",
    headerName: "Harydyň ady",
    width: 100,
  },
  {
    field: "topar",
    headerName: "Topar",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },

  {
    field: "alyjy",
    headerName: "Alyjy",
    width: 100,
  },
  {
    field: "mukdary",
    headerName: "Mukdary",
    width: 200,
  },
  {
    field: "jemiSargyt",
    headerName: "Jemi sargyt",
    width: 500,
  },
];

const rows = [
  {
    id: 11111,
    age: "99 sagat",
    date: "11/11/2022",
    sowgat: null,
    sku: null,
    productName: null,
    topar: null,
    alyjy: "Ady",
    mukdary: "9999",
    jemiSargyt: "999999999$",
  },
];

export default function DataTable(props) {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{ overflowX: "scroll" }}
        onCellClick={props.onClick}
      />
    </div>
  );
}

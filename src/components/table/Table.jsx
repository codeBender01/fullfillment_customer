import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable(props) {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={props.checkbox}
        onCellClick={props.onClick}
        rowHeight={30}
        headerHeight={30}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${props.headerColor}`,
            color: "#000000",
            fontSize: 12,
          },
          "& .MuiDataGrid-virtualScrollerRenderZone": {
            "& .MuiDataGrid-row": {
              fontSize: 12,
            },
          },
        }}
      />
    </div>
  );
}

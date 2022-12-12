import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable(props) {
  return (
    <div style={{ height: props.height ? props.height : 300, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={props.checkbox}
        onCellClick={props.onClick}
        rowHeight={props.rowHeight}
        headerHeight={props.headerHeight}
        sx={{
          "& ": {
            borderRadius: 0,
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${props.headerColor}`,
            color: "#ffffff",
            fontSize: 14,
            borderRadius: 0,
          },
          "& .MuiDataGrid-virtualScrollerRenderZone": {
            "& .MuiDataGrid-row": {
              fontSize: 14,
            },
          },

          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-sortIcon ": {
            color: "#ffffff",
          },
          "& .css-ptiqhd-MuiSvgIcon-root ": {
            color: "#ffffff",
          },

          "& .MuiDataGrid-footerContainer": {
            display: "none",
          },
        }}
      />
    </div>
  );
}

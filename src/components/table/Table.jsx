import * as React from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

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
        components={{
          Pagination: CustomPagination,
        }}
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
              fontWeight: 600,
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
            display: props.displayTable ? "flex" : "none",
          },
        }}
      />
    </div>
  );
}

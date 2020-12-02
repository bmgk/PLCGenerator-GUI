import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";

import { DashboardTableProps } from "../../types";

const ID_SIZE = 50;
const SMALL_SIZE = 100;
const LARGE_SIZE = 250;

const columns = [
  { field: "id", headerName: "ID", width: ID_SIZE },
  {
    field: "operandIdentifier",
    headerName: "operandIdentifier",
    width: SMALL_SIZE,
  },
  { field: "address", headerName: "address", width: SMALL_SIZE },
  { field: "name", headerName: "name", width: LARGE_SIZE },
  { field: "dataType", headerName: "dataType", width: SMALL_SIZE },
  { field: "comment", headerName: "comment", width: LARGE_SIZE },
  {
    field: "accessibleFromHmi",
    headerName: "accessibleFromHmi",
    width: SMALL_SIZE,
  },
  {
    field: "visibleInHmiEngineering",
    headerName: "visibleInHmiEngineering",
    width: SMALL_SIZE,
  },
  {
    field: "writableFromHmi",
    headerName: "writableFromHmi",
    width: SMALL_SIZE,
  },
];

const useStyles = makeStyles(() => ({
  tableContainer: { height: "40rem", width: "100%" },
}));

export const DashboardTable: React.FC<DashboardTableProps> = (props) => {
  const { rows } = props;
  const classes = useStyles();

  return (
    <div className={classes.tableContainer}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
};

export default DashboardTable;

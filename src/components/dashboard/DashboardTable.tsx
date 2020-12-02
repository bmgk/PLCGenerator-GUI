import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

import { DashboardTableProps } from "../../types";

const ID_SIZE = 50;
const SMALL_SIZE = 100;
const LARGE_SIZE = 250;

const columns = (t: TFunction) => [
  {
    field: "id",
    headerName: t("dashboard.dashboardTable.header.ID"),
    width: ID_SIZE,
  },
  {
    field: "operandIdentifier",
    headerName: "dashboard.dashboardTable.header.operandIdentifier",
    width: SMALL_SIZE,
  },
  {
    field: "address",
    headerName: "dashboard.dashboardTable.header.address",
    width: SMALL_SIZE,
  },
  {
    field: "name",
    headerName: "dashboard.dashboardTable.header.name",
    width: LARGE_SIZE,
  },
  {
    field: "dataType",
    headerName: "dashboard.dashboardTable.header.dataType",
    width: SMALL_SIZE,
  },
  {
    field: "comment",
    headerName: "dashboard.dashboardTable.header.comment",
    width: LARGE_SIZE,
  },
  {
    field: "accessibleFromHmi",
    headerName: "dashboard.dashboardTable.header.accessibleFromHmi",
    width: SMALL_SIZE,
  },
  {
    field: "visibleInHmiEngineering",
    headerName: "dashboard.dashboardTable.header.visibleInHmiEngineering",
    width: SMALL_SIZE,
  },
  {
    field: "writableFromHmi",
    headerName: "dashboard.dashboardTable.header.writableFromHmi",
    width: SMALL_SIZE,
  },
];

const useStyles = makeStyles(() => ({
  tableContainer: { height: "40rem", width: "100%" },
}));

export const DashboardTable: React.FC<DashboardTableProps> = (props) => {
  const { rows } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.tableContainer}>
      <DataGrid rows={rows} columns={columns(t)} pageSize={10} />
    </div>
  );
};

export default DashboardTable;
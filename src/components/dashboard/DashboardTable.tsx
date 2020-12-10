import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

import { useDashboardStore } from "./context";

const ID_SIZE = 50;
const SMALL_SIZE = 100;
const LARGE_SIZE = 300;

const columns = (t: TFunction) => [
  {
    field: "id",
    headerName: t("dashboard.dashboardTable.header.ID"),
    width: ID_SIZE,
  },
  {
    field: "operandIdentifier",
    headerName: t("dashboard.dashboardTable.header.operandIdentifier"),
    width: SMALL_SIZE,
  },
  {
    field: "address",
    headerName: t("dashboard.dashboardTable.header.address"),
    width: SMALL_SIZE,
  },
  {
    field: "name",
    headerName: t("dashboard.dashboardTable.header.name"),
    width: LARGE_SIZE,
  },
  {
    field: "dataType",
    headerName: t("dashboard.dashboardTable.header.dataType"),
    width: SMALL_SIZE,
  },
  {
    field: "comment",
    headerName: t("dashboard.dashboardTable.header.comment"),
    width: LARGE_SIZE,
  },
  {
    field: "accessibleFromHmi",
    headerName: t("dashboard.dashboardTable.header.accessibleFromHmi"),
    width: SMALL_SIZE,
  },
  {
    field: "visibleInHmiEngineering",
    headerName: t("dashboard.dashboardTable.header.visibleInHmiEngineering"),
    width: SMALL_SIZE,
  },
  {
    field: "writableFromHmi",
    headerName: t("dashboard.dashboardTable.header.writableFromHmi"),
    width: SMALL_SIZE,
  },
];

const useStyles = makeStyles(() => ({
  tableContainer: { height: "40rem", width: "80%", margin: "0 auto" },
}));

export const DashboardTable: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { rows } = useDashboardStore();

  return (
    <div className={classes.tableContainer}>
      <DataGrid rows={rows} columns={columns(t)} pageSize={10} />
    </div>
  );
};

export default DashboardTable;

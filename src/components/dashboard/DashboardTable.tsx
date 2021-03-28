import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { useDashboardStore } from './context';

const SMALL_SIZE = 100;
const MEDIUM_SIZE = 200;
const LARGE_SIZE = 300;

const columns = (t: TFunction) => [
  {
    field: 'id',
    headerName: t('dashboard.dashboardTable.header.ID'),
    flex: SMALL_SIZE,
  },
  {
    field: 'OperandIdentifier',
    headerName: t(
      'dashboard.dashboardTable.header.operandIdentifier',
    ),
    flex: MEDIUM_SIZE,
  },
  {
    field: 'Address',
    headerName: t('dashboard.dashboardTable.header.address'),
    flex: SMALL_SIZE,
  },
  {
    field: 'Name',
    headerName: t('dashboard.dashboardTable.header.name'),
    flex: LARGE_SIZE,
  },
  {
    field: 'DataType',
    headerName: t('dashboard.dashboardTable.header.dataType'),
    flex: SMALL_SIZE,
  },
  {
    field: 'Comment',
    headerName: t('dashboard.dashboardTable.header.comment'),
    flex: LARGE_SIZE,
  },
  {
    field: 'AccessibleFromHmi',
    headerName: t(
      'dashboard.dashboardTable.header.accessibleFromHmi',
    ),
    flex: MEDIUM_SIZE,
  },
  {
    field: 'VisibleInHmiEngineering',
    headerName: t(
      'dashboard.dashboardTable.header.visibleInHmiEngineering',
    ),
    flex: MEDIUM_SIZE,
  },
  {
    field: 'WritableFromHmi',
    headerName: t('dashboard.dashboardTable.header.writableFromHmi'),
    flex: MEDIUM_SIZE,
  },
];

const useStyles = makeStyles(() => ({
  tableContainer: {
    height: '90vh',
    width: '100%',
    margin: '0 auto',
  },
}));

const DashboardTable: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { rows } = useDashboardStore();

  return (
    <div className={classes.tableContainer}>
      <DataGrid rows={rows} columns={columns(t)} pageSize={25} />
    </div>
  );
};

export default DashboardTable;

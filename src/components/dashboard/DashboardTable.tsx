import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { useTranslation } from 'react-i18next';

import { useDashboardStore } from './context';
import { columns } from './utils';

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

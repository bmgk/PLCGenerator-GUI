import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import ProcessDefinitionBack from './ProcessDefinitionBack';

const useStyles = makeStyles(() => ({
  tableContainer: {
    minHeight: '40rem',
  },
}));

const ProcessDefinitionStepDetails = () => {
  const classes = useStyles();
  return (
    <>
      <ProcessDefinitionBack />
      <TableContainer
        className={classes.tableContainer}
        component={Paper}
      >
        <Table aria-label="process-definition-details">
          x<TableBody>x</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProcessDefinitionStepDetails;

import React, { SetStateAction, useEffect, useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { SelectedLeaf, useDashboardStore, useDashboardDispatch, setLeaf } from "./context";
import { DashboardTreePanelCreateTableBody, DashboardTreePanelHeader, DashboardTreePanelTableBody, HomeResponseTreeAvailableValues, } from "types";

const SET_VALUES = "SET_VALUES"
const CLEAR_VALUES = "CLEAR_VALUES"

const useStyles = makeStyles((theme) => ({
  panel: {
    display: "flex",
    height: "90vh",
    flex: 3,
  },
  cardContainer: {
    minWidth: "100%",
    overflowY: "scroll",
    padding: "0 auto",
  },
  action: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
    margin: 0,
  },
  root: { alignItems: "flex-start" },
  title: {
    textAlign: "center",
    fontSize: "3rem",
  },
  formControl: { margin: theme.spacing(1) },
  selectEmpty: { marginTop: theme.spacing(2) },
  cell: { width: '50%' },
  tableContainer: { margin: '2rem 0' }
}));

const RootTreePanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography>Pick item from tree</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const EmptyParametersPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography>Parameters are empty</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const CardHeaderPanel: React.FC<DashboardTreePanelHeader> = (props) => {
  const { index, setIndex, selectedLeaf } = props;
  const classes = useStyles();
  const length = selectedLeaf.parameters.length;

  const handlePrev = () => {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      const newIndex = index - 1;
      if (newIndex > length) setIndex(length - 1);
      setIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (index === length - 1) {
      setIndex(0);
    } else {
      const newIndex = index + 1;
      if (newIndex > length) setIndex(0);
      setIndex(newIndex);
    }
  };

  return (
    <CardHeader
      avatar={
        length > 1 ? (
          <IconButton aria-label="previous-parameter" onClick={handlePrev}>
            <ChevronLeftOutlinedIcon fontSize="large" />
          </IconButton>
        ) : null
      }
      action={
        length > 1 ? (
          <IconButton aria-label="next-parameter" onClick={handleNext}>
            <ChevronRightOutlinedIcon fontSize="large" />
          </IconButton>
        ) : null
      }
      title={selectedLeaf.parameters[index].name}
      classes={{
        root: classes.root,
        title: classes.title,
        action: classes.action,
      }}
    />
  );
};

const initValues = (availableValues: HomeResponseTreeAvailableValues[]) => {
  return availableValues.reduce((acc: any, el: HomeResponseTreeAvailableValues) => {
    //@ts-ignore
    acc[el.name] = el.multiSelect ? [] : "";
    return acc;
  }, {})
}

const setValues = (name: string, value: any) => ({
  type: SET_VALUES,
  name,
  value
})

const clearValues = () => ({
  type: CLEAR_VALUES,
})

const reducer = (state: any, action: any): any => {
  switch (action.type) {
    case SET_VALUES: {
      const { name, value } = action;

      return { ...state, [name]: value }
    }
    case CLEAR_VALUES: {
      return Object.keys(state).reduce((acc, el) => {
        //@ts-ignore
        acc[el] = Array.isArray(state[el]) ? [] : ""
        return acc;
      }, {})
    }

    default: {
      throw new Error(
        `Unhandled action type: ${JSON.stringify(
          action
        )}, state: ${JSON.stringify(action)}`
      );
    }
  }
}

const ParameterTableBody: React.FC<DashboardTreePanelTableBody> = (props) => {
  const { initialValues, carousele, index, selectedLeaf } = props;
  const classes = useStyles();
  const parameter = selectedLeaf.parameters[carousele];

  const dispatch = useDashboardDispatch();
  const [values, reducerDispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    const selectedLeafClone: SelectedLeaf = JSON.parse(JSON.stringify(selectedLeaf));
    selectedLeafClone.parameters[carousele].value[index] = values
    dispatch(setLeaf(selectedLeafClone))
  }, [values])

  const handleChange = (name: string) => (event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>, child: React.ReactNode) =>
    reducerDispatch(setValues(name, event.target.value))

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table aria-label="parameter-table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell} component="th" align="center">Name</TableCell>
            <TableCell className={classes.cell} component="th" align="center">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parameter.availableValues.map(el => {
            return (
              <TableRow key={el.name}>
                <TableCell className={classes.cell} align="center" component="td">
                  {el.name}
                </TableCell>
                <TableCell className={classes.cell} align="center" component="td">
                  <FormControl className={classes.formControl}>
                    <Select
                      value={values[el.name]}
                      name={el.name}
                      onChange={handleChange(el.name)}
                      displayEmpty
                      className={classes.selectEmpty}
                      multiple={el.multiSelect}
                    >
                      {Array.isArray(el.value) ? el.value.map((el: any) => <MenuItem key={el} value={el}>{el}</MenuItem>) : null}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const ParameterCreateTableBody: React.FC<DashboardTreePanelCreateTableBody> = (props) => {
  const { carousele, selectedLeaf } = props;
  const classes = useStyles();
  const parameter = selectedLeaf.parameters[carousele];

  const dispatch = useDashboardDispatch();
  const [values, reducerDispatch] = useReducer(reducer, initValues(parameter.availableValues));
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const disabled = Object.keys(values).some(el => values[el] === "" || (Array.isArray(values[el]) && values[el].length === 0))
    setDisabled(disabled)
  }, [values])

  const handleChange = (name: string) => (event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>, child: React.ReactNode) => reducerDispatch(setValues(name, event.target.value))

  const handleClick = () => {
    const selectedLeafClone: SelectedLeaf = JSON.parse(JSON.stringify(selectedLeaf));
    selectedLeafClone.parameters[carousele].value.push(values);
    dispatch(setLeaf(selectedLeafClone))
    reducerDispatch(clearValues())
    setDisabled(true);
  }

  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table aria-label="parameter-table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell} component="th" align="center">Name</TableCell>
              <TableCell className={classes.cell} component="th" align="center">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parameter.availableValues.map(el => {
              return (
                <TableRow key={`${el.name}`}>
                  <TableCell className={classes.cell} align="center" component="td">
                    {el.name}
                  </TableCell>
                  <TableCell className={classes.cell} align="center" component="td">
                    <FormControl className={classes.formControl}>
                      <Select
                        value={values[el.name]}
                        name={el.name}
                        onChange={handleChange(el.name)}
                        displayEmpty
                        className={classes.selectEmpty}
                        multiple={el.multiSelect}
                      >
                        {Array.isArray(el.value) ? el.value.map((el: any) => <MenuItem key={el} value={el}>{el}</MenuItem>) : null}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button disabled={disabled} onClick={handleClick}>Create</Button>
    </>
  )
}

export const DashboardTreePanel: React.FC = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const { selectedLeaf } = useDashboardStore();

  if (selectedLeaf === null)
    return <RootTreePanel />;

  if (selectedLeaf.parameters.length === 0)
    return <EmptyParametersPanel />;

  const initialValues = selectedLeaf.parameters[index].value;

  return (
    <div className={classes.panel}>
      <Card className={classes.cardContainer}>
        <CardHeaderPanel selectedLeaf={selectedLeaf} index={index} setIndex={setIndex} />
        <CardContent>
          {Array.isArray(initialValues) && initialValues.length !== 0 ?
            initialValues.map((el: any, i: number) => <ParameterTableBody key={index} selectedLeaf={selectedLeaf} initialValues={el} carousele={index} index={i} />)
            : null}
          <ParameterCreateTableBody key={index} selectedLeaf={selectedLeaf} carousele={index} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardTreePanel;

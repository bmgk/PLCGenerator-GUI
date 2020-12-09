import React, { useEffect, useReducer } from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";

import { SelectedLeaf, useDashboardDispatch, setLeaf } from "../context";
import { reducer, setValues, useStyles } from "./utils";

import { DashboardParameterSingleTableBodyBody, } from "types";

export const ParameterSingleTableBody: React.FC<DashboardParameterSingleTableBodyBody> = (props) => {
    const { initialValues, carousele, selectedLeaf } = props;
    const { t } = useTranslation();
    const classes = useStyles();
    const parameter = selectedLeaf.Parameters[carousele];

    const dispatch = useDashboardDispatch();
    const [values, reducerDispatch] = useReducer(reducer, initialValues);

    useEffect(() => {
        const selectedLeafClone: SelectedLeaf = JSON.parse(JSON.stringify(selectedLeaf));
        selectedLeafClone.Parameters[carousele].Value = values
        dispatch(setLeaf(selectedLeafClone))
    }, [values])

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        //@ts-ignore
        reducerDispatch(setValues(event.target.name, event.target.value))
    };

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table aria-label="parameter-table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cell} component="th" align="center">{t("dashboard.dashboardTreeTranslations.header.name")}</TableCell>
                        <TableCell className={classes.cell} component="th" align="center">{t("dashboard.dashboardTreeTranslations.header.value")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={`${parameter.AvailableValues[0].Name}`}>
                        <TableCell className={classes.cell} align="center" component="td">
                            {parameter.AvailableValues[0].Name}
                        </TableCell>
                        <TableCell className={classes.cell} align="center" component="td">
                            <FormControl className={classes.formControl}>
                                <Select
                                    data-testid={`${parameter.AvailableValues[0].Name}`}
                                    value={values[parameter.AvailableValues[0].Name]}
                                    name={parameter.AvailableValues[0].Name}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    multiple={parameter.AvailableValues[0].MultiSelect}
                                    native
                                >
                                    {Array.isArray(parameter.AvailableValues[0].Value) ? parameter.AvailableValues[0].Value.map((el: any) => <option key={el} value={el}>{el}</option >) : null}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}
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

import { DashboardTreePanelTableBody, } from "types";

export const ParameterTableBody: React.FC<DashboardTreePanelTableBody> = (props) => {
    const { initialValues, carousele, index, selectedLeaf } = props;
    const { t } = useTranslation();
    const classes = useStyles();
    const parameter = selectedLeaf.parameters[carousele];

    const dispatch = useDashboardDispatch();
    const [values, reducerDispatch] = useReducer(reducer, initialValues);

    useEffect(() => {
        const selectedLeafClone: SelectedLeaf = JSON.parse(JSON.stringify(selectedLeaf));
        selectedLeafClone.parameters[carousele].value[index] = values
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
                    {parameter.availableValues.map(el => {
                        return (
                            <TableRow key={`${el.name}-${index}`}>
                                <TableCell className={classes.cell} align="center" component="td">
                                    {el.name}
                                </TableCell>
                                <TableCell className={classes.cell} align="center" component="td">
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            data-testid={`${el.name}-${index}`}
                                            value={values[el.name]}
                                            name={el.name}
                                            onChange={handleChange}
                                            displayEmpty
                                            className={classes.selectEmpty}
                                            multiple={el.multiSelect}
                                            native
                                        >
                                            {Array.isArray(el.value) ? el.value.map((el: any) => <option key={el} value={el}>{el}</option >) : null}
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
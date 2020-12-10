import React, { useEffect, useReducer } from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import { useTranslation } from "react-i18next";

import { SelectedLeaf, useDashboardDispatch, setLeaf } from "../context";
import { DashboardSelect } from "./DashboardSelect";
import { DashboardInput } from "./DashboardInput";
import { reducer, setValues, useStyles } from "./utils";

import { DashboardParameterArrayTableBodyBody, } from "types";

export const ParameterArrayTableBody: React.FC<DashboardParameterArrayTableBodyBody> = (props) => {
    const { initialValues, carousele, index, selectedLeaf } = props;
    const { t } = useTranslation();
    const classes = useStyles();
    const parameter = selectedLeaf.Parameters[carousele];

    const dispatch = useDashboardDispatch();
    const [values, reducerDispatch] = useReducer(reducer, initialValues);

    useEffect(() => {
        const selectedLeafClone: SelectedLeaf = JSON.parse(JSON.stringify(selectedLeaf));
        selectedLeafClone.Parameters[carousele].Value[index] = values
        dispatch(setLeaf(selectedLeafClone))
    }, [values])

    const handleChangeSelect = (multiple: boolean) => (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        if (multiple) {
            //@ts-ignore
            const options = event.target.options;
            const value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            //@ts-ignore
            reducerDispatch(setValues(event.target.name, value))
        } else {
            //@ts-ignore
            reducerDispatch(setValues(event.target.name, event.target.value))
        }
    };

    const handleChangeInput = (name: string) => (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        reducerDispatch(setValues(name, event.target.value))
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
                    {parameter.AvailableValues.map(el => {
                        return (
                            <TableRow key={`${el.Name}-${index}`}>
                                <TableCell className={classes.cell} align="center" component="td">
                                    {el.Name}
                                </TableCell>
                                <TableCell className={classes.cell} align="center" component="td">
                                    {Array.isArray(el.Value) ?
                                        <DashboardSelect
                                            values={values}
                                            el={el}
                                            handleChange={handleChangeSelect}
                                        /> :
                                        <DashboardInput
                                            values={values}
                                            el={el}
                                            handleChange={handleChangeInput(el.Name)}
                                        />}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
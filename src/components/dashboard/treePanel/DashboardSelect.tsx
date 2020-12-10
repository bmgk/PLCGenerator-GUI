import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { useStyles } from "./utils";
import { DashboardSelectProps } from "types";

export const DashboardSelect: React.FC<DashboardSelectProps> = (props) => {
    const { values, el, handleChange, testId = el.Name, isCreate = false } = props;
    const classes = useStyles();

    const options = isCreate ? ["", ...el.Value] : el.Value

    return (
        <FormControl className={classes.formControl}>
            <Select
                data-testid={testId}
                value={values[el.Name]}
                name={el.Name}
                onChange={handleChange(el.MultiSelect)}
                displayEmpty
                className={classes.selectEmpty}
                multiple={el.MultiSelect}
                native
            >
                {Array.isArray(el.Value) ? options.map((el: any) => <option key={el} value={el}>{el}</option >) : null}
            </Select>
        </FormControl>
    )
}

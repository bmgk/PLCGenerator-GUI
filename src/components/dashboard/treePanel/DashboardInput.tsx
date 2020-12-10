import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

import { useStyles } from "./utils";
import { DashboardInputProps } from "types";

export const DashboardInput: React.FC<DashboardInputProps> = (props) => {
    const { values, el, handleChange, testId = el.Name } = props;
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <Input
                data-testid={testId}
                value={values[el.Name]}
                name={el.Name}
                onChange={handleChange}
            />
        </FormControl>
    )
}

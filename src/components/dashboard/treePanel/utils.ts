import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HomeResponseTreeAvailableValues, } from "types";

export const SET_VALUES = "SET_VALUES"
export const CLEAR_VALUES = "CLEAR_VALUES"

export const useStyles = makeStyles((theme) => ({
    treePanelContainer: {
        display: "flex",
        height: "90vh",
        flex: 3,
    },
    cardContainer: {
        minWidth: "100%",
        overflowY: "scroll",
        padding: "0 auto",
    },
    headerAction: {
        flex: "0 0 auto",
        alignSelf: "flex-start",
        margin: 0,
    },
    headerRoot: { alignItems: "flex-start" },
    headerTitle: {
        textAlign: "center",
        fontSize: "3rem",
    },
    formControl: { margin: theme.spacing(1) },
    selectEmpty: { marginTop: theme.spacing(2) },
    cell: { width: '50%' },
    tableContainer: { margin: '2rem 0' },
    createButtonContainer: { display: 'flex', flexDirection: 'row-reverse' },
    submitButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 0 2rem 2rem'
    },
    cardInformation: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export const initValues = (availableValues: HomeResponseTreeAvailableValues[]) => {
    return availableValues.reduce((acc: any, el: HomeResponseTreeAvailableValues) => {
        //@ts-ignore
        acc[el.name] = el.multiSelect ? [] : "";
        return acc;
    }, {})
}

export const setValues = (name: string, value: any) => ({
    type: SET_VALUES,
    name,
    value
})

export const clearValues = () => ({
    type: CLEAR_VALUES,
})

export const reducer = (state: any, action: any): any => {
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
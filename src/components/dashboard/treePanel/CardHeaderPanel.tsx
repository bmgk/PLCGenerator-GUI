import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import CardHeader from "@material-ui/core/CardHeader";

import { DashboardTreePanelHeader, } from "types";
import { useStyles } from "./utils";

export const CardHeaderPanel: React.FC<DashboardTreePanelHeader> = (props) => {
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
                root: classes.headerRoot,
                title: classes.headerTitle,
                action: classes.headerAction,
            }}
        />
    );
};



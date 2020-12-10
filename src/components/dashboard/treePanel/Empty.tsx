import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

import { useStyles } from "./utils";

export const EmptyParametersPanel = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <div className={classes.treePanelContainer}>
            <Card className={`${classes.cardContainer} ${classes.cardInformation}`}>
                <Typography align="center" variant="h2">{t("dashboard.dashboardTreeTranslations.emptyPanel")}</Typography>
            </Card>
        </div>
    );
};

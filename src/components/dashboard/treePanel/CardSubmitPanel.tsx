import React from 'react'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import { useTranslation } from "react-i18next";

import { useStyles } from './utils';
import { replaceLeafInTree, useDashboardDispatch } from '../context';

export const CardSubmitPanel: React.FC = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const dispatch = useDashboardDispatch();

    const handleClick = () => {
        dispatch(replaceLeafInTree())
    }

    return (
        <CardActions classes={{ root: classes.submitButtonContainer }}>
            <Button size="small" color="primary" variant="contained" onClick={handleClick}>
                {t("dashboard.dashboardTreeTranslations.create")}
            </Button>
        </CardActions>
    )
}

import React from "react";
import { makeStyles } from "@material-ui/core";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { DashboardTable } from "../components/dashboard";
import { HomeFormReponse } from "../types";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

const Home: React.FC<RouteComponentProps> = (props) => {
  const state = props.location.state;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/*//@ts-ignore */}
      <DashboardTable rows={state} />
    </div>
  );
};

export default withRouter(Home);

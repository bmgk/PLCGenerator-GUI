import React from "react";
import { makeStyles } from "@material-ui/core";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { DashboardTable, DashboardTree } from "../components/dashboard";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

const Dashboard: React.FC<RouteComponentProps> = (props) => {
  const state = props.location.state;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/*//@ts-ignore */}
      <DashboardTree tree={state.tree[0]} />
      {/*//@ts-ignore */}
      <DashboardTable rows={state.rows} />
    </div>
  );
};

export default withRouter(Dashboard);

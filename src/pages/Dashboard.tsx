import React from "react";
import { makeStyles } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { DashboardTable, DashboardTree } from "../components/dashboard";
import { DashboardProps } from "types";
import Paper from "@material-ui/core/Paper/Paper";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    flexGrow: 1,
  },
}));

const Dashboard: React.FC<RouteComponentProps<any, any, DashboardProps>> = (
  props
) => {
  const state = props.location.state;
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Table" />
          <Tab label="Tree" />
        </Tabs>
      </Paper>
      {value === 0 ? <DashboardTable rows={state.rows} /> : null}
      {value === 1 ? <DashboardTree tree={state.tree} /> : null}
    </div>
  );
};

export default withRouter(Dashboard);

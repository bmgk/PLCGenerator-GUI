import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <DashboardTree />
      <DashboardTable />
    </div>
  );
};

export default Home;

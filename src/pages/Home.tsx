import React from "react";
import { makeStyles } from "@material-ui/core";

import { HomeForm } from "../components/home";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: "30vh",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HomeForm />
    </div>
  );
};

export default Home;

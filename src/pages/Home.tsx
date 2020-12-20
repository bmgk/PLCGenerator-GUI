import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";

import { HomeForm } from "../components/home";
import { submitHomeForm, submitHomeFormTree } from "../api/home";
import { HomeFormValues } from "../types";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: "10vh",
  },
}));

export const Home: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>
  ) => {
    submitHomeForm(values)
      .then((rows) => Promise.all([rows, submitHomeFormTree(values)]))
      .then(([rows, tree]) => {
        history.push("/dashboard", { rows, tree });
      })
      .catch(err => console.log(err))
  };

  return (
    <div className={classes.container}>
      <HomeForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Home;

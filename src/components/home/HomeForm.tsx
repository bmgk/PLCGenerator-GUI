import React from "react";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
  },
  formContainer: {
    margin: "0 auto",
    minWidth: "20rem",
    maxHeight: "30rem",
    padding: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  submit: {
    marginTop: "2rem",
  },
}));

export const HomeForm: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.formContainer}>
      <Formik
        initialValues={{
          projectName: "",
          eplanTags: [],
        }}
        onSubmit={(values, helpers) => {}}
      >
        <Form className={classes.form}>
          <FormControl className={classes.formControl}>
            <Field
              type="text"
              name="projectName"
              label="Project Name"
              component={TextField}
              inputProps={{
                id: "projectName",
                "data-testid": "projectName",
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="eplanTags">EPLAN Tags</InputLabel>
            <Field
              component={Select}
              name="eplanTags"
              inputProps={{
                id: "eplanTags",
              }}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"eplanTags1"}>eplanTags1</MenuItem>
              <MenuItem value={"eplanTags2"}>eplanTags2</MenuItem>
              <MenuItem value={"eplanTags3"}>eplanTags3</MenuItem>
            </Field>
          </FormControl>
          <Button type="submit" className={classes.submit} color="primary">
            Create
          </Button>
        </Form>
      </Formik>
    </Card>
  );
};

export default HomeForm;

import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Field, FieldArray, Form, Formik } from 'formik';
import { TextField as TextFieldFormik } from 'formik-material-ui';

import { HomeFormValues, FileItem, HomeFormProps } from 'types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',
  },
  formContainer: {
    margin: '0 auto',
    minWidth: '20rem',
    maxHeight: '30rem',
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  uploadButton: { width: '100%' },
  submit: {
    marginTop: '2rem',
  },
}));

const initialValues: HomeFormValues = {
  projectName: '',
  eplanTags: [],
  spsMatrix: [],
};

const isDisabled = (values: HomeFormValues) => {
  return values.eplanTags.length === 0 || values.projectName === '';
};

export const HomeForm: React.FC<HomeFormProps> = (props) => {
  const { handleSubmit } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const handleChange = (push: (element: FileItem) => void) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.persist();
    const file =
      (event.target.files && event.target.files[0]) || null;
    if (file != null) {
      const element: FileItem = { name: file.name, path: file.path };
      push(element);
    }
  };

  return (
    <Card className={classes.formContainer}>
      <Formik<HomeFormValues>
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className={classes.form} data-testid="homeForm">
            <FormControl className={classes.formControl}>
              <Field
                type="text"
                name="projectName"
                label={t('home.homeForm.projectName')}
                InputLabelProps={{ htmlFor: 'projectName' }}
                component={TextFieldFormik}
                inputProps={{
                  id: 'projectName',
                  required: true,
                }}
              />
            </FormControl>
            <FieldArray name="eplanTags">
              {({ push, remove }) => (
                <>
                  <FormControl className={classes.formControl}>
                    <label htmlFor="upload-eplanTags">
                      <input
                        style={{ display: 'none' }}
                        id="upload-eplanTags"
                        name="eplanTags"
                        type="file"
                        onChange={handleChange(push)}
                        required
                      />
                      <Button
                        color="secondary"
                        variant="contained"
                        component="span"
                        className={classes.uploadButton}
                      >
                        {t('home.homeForm.uploadEplanButton')}
                      </Button>
                    </label>
                  </FormControl>
                  <List dense={true}>
                    {formik.values.eplanTags.map((el, index) => (
                      <React.Fragment key={el.name}>
                        <ListItem disableGutters>
                          <ListItemText primary={el.name} />
                          <ListItemSecondaryAction>
                            <IconButton
                              edge="end"
                              aria-label={`file-eplan-${index}`}
                              onClick={() => remove(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </React.Fragment>
                    ))}
                  </List>
                </>
              )}
            </FieldArray>
            <FieldArray name="spsMatrix">
              {({ push, remove }) => (
                <>
                  <FormControl className={classes.formControl}>
                    <Typography gutterBottom color="textSecondary">
                      {t('home.homeForm.optional')}
                    </Typography>
                    <label htmlFor="upload-spsMatrix">
                      <input
                        style={{ display: 'none' }}
                        id="upload-spsMatrix"
                        name="spsMatrix"
                        type="file"
                        onChange={handleChange(push)}
                      />
                      <Button
                        color="secondary"
                        variant="contained"
                        component="span"
                        className={classes.uploadButton}
                      >
                        {t('home.homeForm.uploadSPSMatrixButton')}
                      </Button>
                    </label>
                  </FormControl>
                  <List dense={true}>
                    {formik.values.spsMatrix.map((el, index) => (
                      <React.Fragment key={el.name}>
                        <ListItem disableGutters>
                          <ListItemText primary={el.name} />
                          <ListItemSecondaryAction>
                            <IconButton
                              edge="end"
                              aria-label={`file-sps-${index}`}
                              onClick={() => remove(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </React.Fragment>
                    ))}
                  </List>
                </>
              )}
            </FieldArray>
            <Button
              type="submit"
              className={classes.submit}
              color="primary"
              variant="contained"
              disabled={isDisabled(formik.values)}
            >
              {t('home.homeForm.createButton')}
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

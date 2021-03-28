import React from 'react';
import {
  Field,
  FieldArray,
  Form,
  Formik,
  FormikHelpers,
} from 'formik';
import { TextField as TextFieldFormik } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

import { HomeFormValues, FileItem } from 'types';

type HomeFormProps = {
  handleSubmit: (
    values: HomeFormValues,
    formikHelpers: FormikHelpers<HomeFormValues>,
  ) => void;
};

const useStyles = makeStyles(() => ({
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',
  },
  formContainer: {
    margin: '0 auto',
    minWidth: '20rem',
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

const HomeForm: React.FC<HomeFormProps> = (props) => {
  const { handleSubmit } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const handleChange = (
    push: (element: FileItem) => void,
    values: FileItem[],
  ) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const file =
      (event.target.files && event.target.files[0]) || null;

    if (file != null) {
      const element: FileItem = { name: file.name, path: file.path };
      if (
        !values.some(
          (file) => JSON.stringify(file) === JSON.stringify(element),
        )
      ) {
        push(element);
      }
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    //@ts-ignore
    e.target.value = null;
  };

  return (
    <Card className={classes.formContainer}>
      <Formik<HomeFormValues>
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
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
                        accept=".sdf"
                        id="upload-eplanTags"
                        name="eplanTags"
                        type="file"
                        onChange={handleChange(
                          push,
                          values.eplanTags,
                        )}
                        onClick={handleClick}
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
                    {values.eplanTags.map((el, index) => (
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
                        accept=".xls,.xlsx,.xlsm"
                        id="upload-spsMatrix"
                        name="spsMatrix"
                        type="file"
                        onChange={handleChange(
                          push,
                          values.spsMatrix,
                        )}
                        onClick={handleClick}
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
                    {values.spsMatrix.map((el, index) => (
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
              disabled={isDisabled(values)}
            >
              {t('home.homeForm.createButton')}
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default HomeForm;

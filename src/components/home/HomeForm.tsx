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
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import HomeFileItemList from './HomeFileItemList';
import {
  handleFileAppend,
  handleRemoveItem,
  initialValues,
  isDisabled,
} from './utils';

import { HomeFormValues } from 'types';

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

const HomeForm: React.FC<HomeFormProps> = (props) => {
  const { handleSubmit } = props;
  const { t } = useTranslation();
  const classes = useStyles();

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
                        onChange={handleFileAppend(
                          push,
                          values.eplanTags,
                        )}
                        onClick={handleRemoveItem}
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
                    {values.eplanTags.map((eplan, index) => (
                      <HomeFileItemList
                        key={eplan.name}
                        value={eplan}
                        label={`file-eplan-${index}`}
                        onClick={() => remove(index)}
                      />
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
                        onChange={handleFileAppend(
                          push,
                          values.spsMatrix,
                        )}
                        onClick={handleRemoveItem}
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
                    {values.spsMatrix.map((spsMatrix, index) => (
                      <HomeFileItemList
                        key={spsMatrix.name}
                        value={spsMatrix}
                        label={`file-sps-${index}`}
                        onClick={() => remove(index)}
                      />
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

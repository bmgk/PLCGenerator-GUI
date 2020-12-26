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

import { HomeFormValues, EplanTag, HomeFormProps } from 'types';

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
  list: {
    marginTop: '1rem',
  },
  submit: {
    marginTop: '2rem',
  },
}));

const initialValues: HomeFormValues = {
  projectName: '',
  eplanTags: [],
};

const isDisabled = (values: HomeFormValues) => {
  return values.eplanTags.length === 0 || values.projectName === '';
};

const handleChange = (push: (element: EplanTag) => void) => (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  event.persist();
  const file = (event.target.files && event.target.files[0]) || null;
  if (file != null) {
    const element: EplanTag = { name: file.name, path: file.path };
    push(element);
  }
};

export const HomeForm: React.FC<HomeFormProps> = (props) => {
  const { handleSubmit } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Card className={classes.formContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                }}
              />
            </FormControl>
            <FieldArray name="eplanTags">
              {({ push, remove }) => (
                <>
                  <FormControl className={classes.formControl}>
                    <label htmlFor="upload-photo">
                      <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="eplanTags"
                        type="file"
                        onChange={handleChange(push)}
                      />
                      <Button
                        color="secondary"
                        variant="contained"
                        component="span"
                      >
                        {t('home.homeForm.uploadButton')}
                      </Button>
                    </label>
                  </FormControl>
                  <List dense={true} className={classes.list}>
                    {formik.values.eplanTags.map((el, index) => (
                      <ListItem disableGutters key={el.name}>
                        <ListItemText primary={el.name} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => remove(index)}
                          >
                            <DeleteIcon
                              data-testid={`file-${index}`}
                            />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
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

export default HomeForm;

import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { useStyles } from '../utils';
import { HomeResponseTreeAvailableValues } from 'types';

type DashboardInputProps = {
  testId?: string;
  values: any;
  avaliableValues: HomeResponseTreeAvailableValues;
  handleChange:
    | ((
        event: React.ChangeEvent<
          HTMLTextAreaElement | HTMLInputElement
        >,
      ) => void)
    | undefined;
};

const useStylesLabel = makeStyles(() => ({
  input: { margin: '0 0 0.5rem 0' },
}));

const DashboardInput: React.FC<DashboardInputProps> = (props) => {
  const {
    values,
    avaliableValues,
    handleChange,
    testId = avaliableValues.Name,
  } = props;
  const c = useStyles();
  const classes = useStylesLabel();
  const label = avaliableValues.Name;

  return (
    <FormControl className={c.formControl}>
      <TextField
        value={values[avaliableValues.Name]}
        name={avaliableValues.Name}
        onChange={handleChange}
        InputLabelProps={{ htmlFor: avaliableValues.Name }}
        label={label}
        className={classes.input}
        inputProps={{
          id: avaliableValues.Name,
          'data-testid': testId,
        }}
      />
    </FormControl>
  );
};

export default DashboardInput;

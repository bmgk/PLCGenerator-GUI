import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './utils';

type ProcessInputProps = {
  value: string;
  handleChange:
    | ((
        event: React.ChangeEvent<
          HTMLTextAreaElement | HTMLInputElement
        >,
      ) => void)
    | undefined;
  name: string;
  label: string;
};

const ProcessInput: React.FC<ProcessInputProps> = (props) => {
  const { value, handleChange, name, label } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <TextField
        value={value}
        name={name}
        onChange={handleChange}
        InputLabelProps={{ htmlFor: name }}
        label={label}
        className={classes.input}
        inputProps={{
          id: name,
        }}
      />
    </FormControl>
  );
};

export default ProcessInput;

import React, { useRef, useState } from 'react';
import TextField, {
  TextFieldProps,
} from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  input: {
    display: 'flex',
    width: '50%',
    padding: '0 0 0.4rem 0',
  },
}));

const count = (quantity: number) => {
  if (quantity === 0) return 0;
  if (quantity === 1) return 1;
  if (quantity >= 2 && quantity <= 4) return 2;
  return 3;
};

export const TreeSearch: React.FC<
  TextFieldProps & { quantity: number }
> = ({ onChange, quantity, ...props }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = useState('');
  const timer = useRef<number | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (timer.current !== null) clearTimeout(timer.current);

    event.persist();
    setValue(event.target.value);

    //@ts-ignore
    timer.current = setTimeout(() => {
      if (onChange) {
        onChange(event);
      }
    }, 500);
  };

  return (
    <Box
      padding="0.2rem 0 0 0"
      display="flex"
      flexDirection="row"
      alignItems="baseline"
      justifyContent="space-evenly"
    >
      <TextField
        value={value}
        onChange={handleChange}
        {...props}
        id="search-tree"
        label={t('dashboard.dashboardTree.search')}
        className={classes.input}
      />
      <Typography
        align="center"
        style={{ visibility: value === '' ? 'hidden' : 'visible' }}
      >
        {`${quantity} ${t(
          `dashboard.dashboardTree.results_${count(quantity)}`,
        )}`}
      </Typography>
    </Box>
  );
};

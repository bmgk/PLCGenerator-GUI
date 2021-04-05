import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  input: { margin: '0 0 0.5rem 0' },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    '& label': { width: '100%' },
  },
}));

import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch } from '../../../../bll/store';
import { useSelector } from 'react-redux';
import { selectError } from '../../../../bll/selectors/Selectors';
import { setServerError } from '../../../../bll/actions/appActions';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function ErrorSnackbar() {
  const dispatch = useAppDispatch();
  const error = useSelector(selectError);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setServerError(null));
  };

  return (
    <Snackbar
      open={error !== null}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
}

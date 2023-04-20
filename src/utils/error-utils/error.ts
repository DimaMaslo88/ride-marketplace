import { Dispatch } from 'redux';
import {
  setServerError,
  SetServerErrorType,
} from '../../bll/actions/appActions';

export const handleServerError = (
  error: any,
  dispatch: Dispatch<SetServerErrorType>
) => {
  dispatch(
    setServerError(
      error
        ? error.response.data.errors[0].message
        : 'Error,see details in console'
    )
  );
};

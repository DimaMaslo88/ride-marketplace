import {
  enterPhoneNumber,
  EnterPhoneType,
  isAuthUser,
  IsAuthUserType,
  isInitializeUser,
  IsInitializeUserType,
  SetEmailAddressType,
  setIdToken,
  SetIdTokenType,
  setPhoneNumber,
  SetPhoneType,
  setSMSData,
  SetSMSDataType,
} from '../actions/registrationActions';
import { AppThunkType } from '../store';
import { authApi } from '../../api/auth-api';
import { handleServerError } from '../../utils/error-utils/error';
import { isOpenSpinner } from '../actions/appActions';

const initialState = {
  isAuth: false,
  isInitialize: false,
  phoneNumber: '',
  email: '',
  setNumber: false,
  numberCode: '',
  idToken: '',
};
export type InitialStateType = {
  isAuth: boolean;
  isInitialize: boolean;
  phoneNumber: string;
  email: string;
  setNumber: boolean;
  numberCode: string;
  idToken: string;
};
export type actionRegisterType =
  | EnterPhoneType
  | SetPhoneType
  | SetSMSDataType
  | IsAuthUserType
  | SetEmailAddressType
  | IsInitializeUserType
  | SetIdTokenType;

export const registrationReducer = (
  state: InitialStateType = initialState,
  action: actionRegisterType
): InitialStateType => {
  switch (action.type) {
    case 'ENTER-PHONE-NUMBER': {
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    }
    case 'SET-PHONE-NUMBER': {
      return { ...state, setNumber: action.setNumber };
    }
    case 'SET-SMS-DATA': {
      return {
        ...state,
        numberCode: action.value,
      };
    }
    case 'SET-ID-TOKEN': {
      return {
        ...state,
        idToken: action.id,
      };
    }
    case 'IS-AUTH-USER': {
      return { ...state, isAuth: action.isAuth };
    }
    case 'SET-EMAIL-ADDRESS': {
      return { ...state, email: action.email };
    }
    case 'IS-INIT-USER': {
      return { ...state, isInitialize: action.isInitialize };
    }

    default: {
      return state;
    }
  }
};

export const LoginUser =
  (phoneNumber: string): AppThunkType =>
  async (dispatch) => {
    dispatch(isOpenSpinner(true));
    try {
      let res = await authApi.loginUser(phoneNumber);
      dispatch(setPhoneNumber(true));
      dispatch(enterPhoneNumber(phoneNumber));
      console.log(res.data.nextCodeDate);
    } catch (error) {
      handleServerError(error, dispatch);
    } finally {
      dispatch(isOpenSpinner(false));
    }
  };
export const AuthUser =
  (phoneNumber: string, code: string): AppThunkType =>
  async (dispatch) => {
    dispatch(isOpenSpinner(true));
    debugger;
    try {
      let res = await authApi.authorizationUser(phoneNumber, code);
      localStorage.setItem('accessToken', res.data.accessToken);
      dispatch(setIdToken(res.data.accessToken));
      dispatch(isAuthUser(true));
      dispatch(isInitializeUser(true));
      dispatch(setSMSData(code));
      console.log(res.data, 'Response');
    } catch (error) {
      handleServerError(error, dispatch);
    } finally {
      dispatch(isOpenSpinner(false));
    }
  };

export const checkAuthUser = (): AppThunkType => async (dispatch) => {
  dispatch(isOpenSpinner(true));
  try {
    let res = await authApi.authMe();
    localStorage.setItem('accessToken', res.data.accessToken);
    dispatch(setIdToken(res.data.accessToken));
    dispatch(isAuthUser(true));
    dispatch(isInitializeUser(true));
  } catch (error) {
    handleServerError(error, dispatch);
  } finally {
    dispatch(isOpenSpinner(false));
  }
};

export const logOutUsers = (): AppThunkType => async (dispatch) => {
  dispatch(isOpenSpinner(true));
  try {
    let res = await authApi.logOutUser();
    localStorage.removeItem('accessToken');
    dispatch(isAuthUser(false));
    console.log(res);
  } catch (error) {
    handleServerError(error, dispatch);
  } finally {
    dispatch(isOpenSpinner(false));
  }
};

import {
  SetLoginDataType,
  setRegisterIn,
  SetRegisterInType,
} from '../actions/registrationProviderActions';
import { AppThunkType } from '../store';
import { ProviderApi } from '../../api/providerAPI/provider-api';
import { LoginProviderType } from '../../api/providerAPI/ProviderTypes/ProviderTypes';
import { handleServerError } from '../../utils/error-utils/error';

const initialState = {
  isAuthProvider: false,
  accessToken: '',
};
export type InitialStateType = {
  isAuthProvider: boolean;
  accessToken: string;
};

export type RegistrationProviderReducerType =
  | SetRegisterInType
  | SetLoginDataType;
export const registrationProviderReducer = (
  state: InitialStateType = initialState,
  action: RegistrationProviderReducerType
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-REGISTER-IN': {
      return { ...state, isAuthProvider: action.isAuthProvider };
    }

    default: {
      return state;
    }
  }
};

export const ProviderLogin =
  (data: LoginProviderType): AppThunkType =>
  async (dispatch) => {
    try {
      let res = await ProviderApi.providerRegistration(data);
      localStorage.setItem('accessProviderToken', res.data.token);
      dispatch(setRegisterIn(true));
      window.location.href = 'https://vendor.rite-way.ru/';
    } catch (e) {
      handleServerError(e, dispatch);
    }
  };
export const ProviderLogOut = (): AppThunkType => async (dispatch) => {
  try {
    let res = await ProviderApi.providerLogOut();
    localStorage.removeItem('accessProviderToken');
    dispatch(setRegisterIn(false));
    console.log(res);
  } catch (error) {
    handleServerError(error, dispatch);
  }
};

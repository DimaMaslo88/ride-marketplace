import { IsOpenSpinnerType, SetServerErrorType } from '../actions/appActions';

const initialState = {
  isOpenSpinner: false,
  isError: null,
};
type InitialStateType = {
  isOpenSpinner: boolean;
  isError: null | string;
};

export type AppActionsType = IsOpenSpinnerType | SetServerErrorType;
export const appReducer = (
  state: InitialStateType = initialState,
  action: AppActionsType
): InitialStateType => {
  switch (action.type) {
    case 'IS-OPEN-SPINNER': {
      return { ...state, isOpenSpinner: action.isOpen };
    }
    case 'loginProvider/SET-SERVER-ERROR': {
      return { ...state, isError: action.error };
    }
    default: {
      return state;
    }
  }
};

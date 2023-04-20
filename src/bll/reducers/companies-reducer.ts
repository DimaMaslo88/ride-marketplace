import { AppThunkType } from '../store';
import { isOpenSpinner } from '../../bll/actions/appActions';
import { CompaniesApi } from '../../api/companies-api';
import { GetCompaniesResponseType } from '../../api/types/types';
import {
  setCompanies,
  SetCompaniesType,
} from '../../bll/actions/client-service-action';
import { handleServerError } from '../../utils/error-utils/error';

const initialCompaniesState: GetCompaniesResponseType = {
  totalDocs: 8,
  limit: 5,
  page: 1,
  totalPages: 1,
  pagingCounter: 1,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
  docs: [],
};
export type CompaniesReducerActionsType = SetCompaniesType;
export const CompaniesReducer = (
  state: GetCompaniesResponseType = initialCompaniesState,
  action: CompaniesReducerActionsType
): GetCompaniesResponseType => {
  switch (action.type) {
    case 'client/SET-COMPANIES-FOR-CLIENT': {
      return { ...state, ...action.params };
    }
    default: {
      return state;
    }
  }
};

export const GetCompanies = (): AppThunkType => async (dispatch) => {
  dispatch(isOpenSpinner(true));
  try {
    let res = await CompaniesApi.getCompanies();
    dispatch(setCompanies(res.data));
    console.log(res);
  } catch (error) {
    handleServerError(error, dispatch);
  } finally {
    dispatch(isOpenSpinner(false));
  }
};

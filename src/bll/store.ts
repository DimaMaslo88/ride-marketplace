import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  actionRegisterType,
  registrationReducer,
} from './reducers/registration-reducer';
import { AppActionsType, appReducer } from '../bll/reducers/app-reducer';
import {
  registrationProviderReducer,
  RegistrationProviderReducerType,
} from '../bll/reducers/registration-provider-reducer';
import { useDispatch } from 'react-redux';
import {
  ClientServiceActionsType,
  clientServiceReducer,
} from '../bll/reducers/client-service-reducer';
import {
  CompaniesReducer,
  CompaniesReducerActionsType,
} from '../bll/reducers/companies-reducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  registrationProvider: registrationProviderReducer,
  app: appReducer,
  clientService: clientServiceReducer,
  companies: CompaniesReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppStateType = ReturnType<typeof rootReducer>;
export type ActionStateType =
  | AppActionsType
  | actionRegisterType
  | RegistrationProviderReducerType
  | ClientServiceActionsType
  | CompaniesReducerActionsType;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export type AppDispatch = ThunkDispatch<
  AppStateType,
  undefined,
  ActionStateType
>;
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  undefined,
  ActionStateType
>;
// @ts-ignore
window.store = store;

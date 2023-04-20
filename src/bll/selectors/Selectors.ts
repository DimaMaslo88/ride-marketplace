import { AppStateType } from '../../bll/store';
import { BasicServiceType } from '../reducers/client-service-reducer';
import { docs } from '../../api/types/types';

export const selectPhoneNumber = (state: AppStateType): string =>
  state.registration.phoneNumber;
export const selectSetPhoneNumber = (state: AppStateType): boolean =>
  state.registration.setNumber;
export const selectIsOpenSpinner = (state: AppStateType): boolean =>
  state.app.isOpenSpinner;
export const selectIsAuthUser = (state: AppStateType): boolean =>
  state.registration.isAuth;
export const isInitializeUser = (state: AppStateType): boolean =>
  state.registration.isInitialize;
export const selectError = (state: AppStateType): null | string =>
  state.app.isError;
export const selectIsAuthProvider = (state: AppStateType): boolean =>
  state.registrationProvider.isAuthProvider;
export const selectBasicService = (state: AppStateType): BasicServiceType[] =>
  state.clientService.basicService;
export const selectCompanies = (state: AppStateType): docs[] =>
  state.companies.docs;
export const selectNameOfDeceased = (state: AppStateType): string =>
  state.clientService.clientInfo.name;
export const selectFuneralDate = (state: AppStateType): string =>
  state.clientService.clientInfo.funeralDate;
export const selectReligion = (state: AppStateType): string[] =>
  state.clientService.clientInfo.religion;
export const selectDeceasedAddress = (state: AppStateType): string =>
  state.clientService.clientInfo.deceasedAddress;
export const selectBurialPlace = (state: AppStateType): string[] =>
  state.clientService.clientInfo.burialPlace;

// export const selectIdTokenClient = (state: AppStateType): string =>
//   state.registration.idToken;

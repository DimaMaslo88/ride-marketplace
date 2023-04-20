import { GetCompaniesResponseType } from '../../api/types/types';

export type DeleteClientServiceItemType = ReturnType<
  typeof deleteClientServiceItem
>;
export const deleteClientServiceItem = (id: string) => {
  return {
    type: 'client/DELETE-CLIENT-SERVICE',
    id,
  } as const;
};
export type SetClientNameType = ReturnType<typeof setClientName>;
export const setClientName = (name: string) => {
  return {
    type: 'client/SET-CLIENT-NAME',
    name,
  } as const;
};
export type SetFuneralDateType = ReturnType<typeof setFuneralDate>;
export const setFuneralDate = (funeralDate: string) => {
  return {
    type: 'client/SET-FUNERAL-DATE',
    funeralDate,
  } as const;
};
//export type SetReligionType = ReturnType<typeof setReligion>;
// export const setReligion = (religion: string[]) => {
//   return {
//     type: 'client/SET-RELIGION',
//     religion,
//   } as const;
// };
export type SetDeceasedAddressType = ReturnType<typeof setDeceasedAddress>;
export const setDeceasedAddress = (address: string) => {
  return {
    type: 'client/SET-ADDRESS',
    address,
  } as const;
};
// export type SetBurialPlaceType = ReturnType<typeof setBurialPlace>;
// export const setBurialPlace = (place: string[]) => {
//   return {
//     type: 'client/SET-BURIAL-PLACE',
//     place,
//   } as const;
// };
export type SetCompaniesType = ReturnType<typeof setCompanies>;
export const setCompanies = (params: GetCompaniesResponseType) => {
  return {
    type: 'client/SET-COMPANIES-FOR-CLIENT',
    params,
  } as const;
};

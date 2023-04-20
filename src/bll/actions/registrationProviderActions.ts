import { LoginProviderType } from '../../api/providerAPI/ProviderTypes/ProviderTypes';

export type SetRegisterInType = ReturnType<typeof setRegisterIn>;
export const setRegisterIn = (isAuthProvider: boolean) => {
  return {
    type: 'login/SET-REGISTER-IN',
    isAuthProvider,
  } as const;
};
export type SetLoginDataType = ReturnType<typeof setLoginData>;
export const setLoginData = (params: LoginProviderType) => {
  return {
    type: 'login/SET-LOGIN-DATA',
    params,
  } as const;
};

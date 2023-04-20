export type IsAuthUserType = ReturnType<typeof isAuthUser>;
export const isAuthUser = (isAuth: boolean) => {
  return {
    type: 'IS-AUTH-USER',
    isAuth,
  } as const;
};
export type IsInitializeUserType = ReturnType<typeof isInitializeUser>;
export const isInitializeUser = (isInitialize: boolean) => {
  return {
    type: 'IS-INIT-USER',
    isInitialize,
  } as const;
};

export type EnterPhoneType = ReturnType<typeof enterPhoneNumber>;
export const enterPhoneNumber = (phoneNumber: string) =>
  ({
    type: 'ENTER-PHONE-NUMBER',
    phoneNumber,
  } as const);
export type SetEmailAddressType = ReturnType<typeof setEmailAddress>;
export const setEmailAddress = (email: string) =>
  ({
    type: 'SET-EMAIL-ADDRESS',
    email,
  } as const);
export type SetPhoneType = ReturnType<typeof setPhoneNumber>;
export const setPhoneNumber = (setNumber: boolean) =>
  ({
    type: 'SET-PHONE-NUMBER',
    setNumber,
  } as const);
export type SetSMSDataType = ReturnType<typeof setSMSData>;
export const setSMSData = (value: string) =>
  ({
    type: 'SET-SMS-DATA',
    value,
  } as const);

export type SetIdTokenType = ReturnType<typeof setIdToken>;
export const setIdToken = (id: string) =>
  ({
    type: 'SET-ID-TOKEN',
    id,
  } as const);

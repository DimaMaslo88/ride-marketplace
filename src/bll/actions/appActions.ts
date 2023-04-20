export type IsOpenSpinnerType = ReturnType<typeof isOpenSpinner>;
export const isOpenSpinner = (isOpen: boolean) => {
  return {
    type: 'IS-OPEN-SPINNER',
    isOpen,
  } as const;
};
export type SetServerErrorType = ReturnType<typeof setServerError>;
export const setServerError = (error: null | string) => {
  return {
    type: 'loginProvider/SET-SERVER-ERROR',
    error,
  } as const;
};

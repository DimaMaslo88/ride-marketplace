//AuthTypes
// export type ResponseAuthType = {
//   accessToken: string;
//   errorsMessages?: [
//     {
//       message: string;
//       field: string;
//     }
//   ];
// };
export type ResponseAuthUserType = {
  nextCodeDate: '2023-02-19T14:05:12.042Z';
};

export type ResponseUserDataType = {
  accessToken: string;
  errors: [
    {
      message: string;
      field: string;
    }
  ];
};

//UsersTypes
export type GetUserResponseType = {
  userId: string;
  phoneNumber: string;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  avatarUrl: string;
};
//OrdersRequestTypes
export type OrdersRequestType = {
  // временный тип
  clientName: string;
  clientId: string;
  status: string;
  burialType: 'burial';
  deceasedFullName: string;
  religion: string;
  dateFuneral: string;
  deceasedAddress: string;
  burialPlace: string;
  provider: string;
  services: string[];
};

// export type OrdersRequestType = { // правильный тип
//   burialType: 'burial';
//   deceasedFullName: string;
//   religion: string;
//   dateFuneral: string;
//   deceasedAddress: string;
//   burialPlace: string;
//   provider: string;
//   services: string[];
// };

// CompaniesResponseType
export type docs = {
  id: string;
  type: string;
  owner: string;
  title: string;
  _status: string;
  createdAt: string;
  updatedAt: string;
};
export type GetCompaniesResponseType = {
  totalDocs: number;
  limit: number;
  page: number;
  totalPages: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
  docs: docs[];
};

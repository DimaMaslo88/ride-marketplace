// ProviderLoginType
export type LoginProviderType = {
  email: string;
  password: string;
};
export type ResponseLoginProviderType = {
  user: {
    id: string;
    avatar: {
      id: string;
      blurhash: string;
      target: string;
      url: string;
      filename: string;
      mimeType: string;
      filesize: number;
      width: number;
      height: number;
      sizes: {
        thumbnail: {
          url: string;
          width: number;
          height: number;
          mimeType: string;
          filesize: number;
          filename: string;
        };
        card: {
          url: string;
          width: number;
          height: number;
          mimeType: string;
          filesize: number;
          filename: string;
        };
        tablet: {
          url: string;
          width: number;
          height: number;
          mimeType: string;
          filesize: number;
          filename: string;
        };
      };
      createdAt: string;
      updatedAt: string;
      deletedAt: null;
    };
    company: {
      id: string;
      type: string;
      logo: {
        id: string;
        blurhash: string;
        target: string;
        url: string;
        filename: string;
        mimeType: string;
        filesize: number;
        width: number;
        height: number;
        sizes: {
          thumbnail: {
            url: string;
            width: number;
            height: number;
            mimeType: string;
            filesize: number;
            filename: string;
          };
          card: {
            url: string;
            width: number;
            height: number;
            mimeType: string;
            filesize: number;
            filename: string;
          };
          tablet: {
            url: string;
            width: number;
            height: number;
            mimeType: string;
            filesize: number;
            filename: string;
          };
        };
        createdAt: string;
        updatedAt: string;
        deletedAt: null;
      };
      title: string;
      about: string;
      descriptionOfProducts: string;
      descriptionOfServices: string;
      _status: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: null;
    };
    name: string;
    role: string;
    phone: string;
    address: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
  token: string;
  exp: number;

  errors: [
    {
      message: string;
    }
  ];
};

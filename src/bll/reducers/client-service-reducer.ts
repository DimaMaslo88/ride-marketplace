import { v1 } from 'uuid';
import {
  DeleteClientServiceItemType,
  SetClientNameType,
  SetDeceasedAddressType,
  SetFuneralDateType,
} from '../../bll/actions/client-service-action';
import { AppStateType, AppThunkType } from '../store';
import { isOpenSpinner } from '../actions/appActions';
import { OrdersRequestType } from '../../api/types/types';
import { CompaniesApi } from '../../api/companies-api';
import { handleServerError } from '../../utils/error-utils/error';

export const initialClientState = {
  clientInfo: {
    name: '',
    funeralDate: '',
    religion: ['христианство', 'мусульманство', 'иудаизм'],
    deceasedAddress: '',
    burialPlace: ['Новосормовское кладбище', 'Великий погост', 'Кладбище'],
  },
  basicService: [
    {
      id: v1(),
      title: 'Гроб',
      pocketType: 'Стандарт',
      description: 'Минимальное описание',
      cost: '20000',
    },
    {
      id: v1(),
      title: 'Крест',
      pocketType: 'Не стандарт',
      description: 'Минимальное описание',
      cost: '9000',
    },
    {
      id: v1(),
      title: 'Похоронный комплект',
      pocketType: 'Дополнительно',
      description: 'Минимальное описание',
      cost: '15000',
    },
    {
      id: v1(),
      title: 'Венок',
      pocketType: 'Стандарт',
      description: 'Минимальное описание',
      cost: '5000',
    },
  ],
};
export type BasicServiceType = {
  id: string;
  title: string;
  pocketType: string;
  description: string;
  cost: string;
};
export type InitialClientStateType = {
  clientInfo: {
    name: string;
    funeralDate: string;
    religion: string[];
    deceasedAddress: string;
    burialPlace: string[];
  };
  basicService: BasicServiceType[];
};
export type ClientServiceActionsType =
  | DeleteClientServiceItemType
  | SetClientNameType
  | SetFuneralDateType
  | SetDeceasedAddressType;

export const clientServiceReducer = (
  state: InitialClientStateType = initialClientState,
  action: ClientServiceActionsType
): InitialClientStateType => {
  switch (action.type) {
    case 'client/DELETE-CLIENT-SERVICE': {
      return {
        ...state,
        basicService: state.basicService.filter((f) => f.id !== action.id),
      };
    }
    case 'client/SET-CLIENT-NAME': {
      return {
        ...state,
        clientInfo: { ...state.clientInfo, name: action.name },
      };
    }
    case 'client/SET-FUNERAL-DATE': {
      return {
        ...state,
        clientInfo: { ...state.clientInfo, funeralDate: action.funeralDate },
      };
    }
    // case 'client/SET-RELIGION': {
    //   return {
    //     ...state,
    //     clientInfo: { ...state.clientInfo, religion: action.religion },
    //   };
    // }
    case 'client/SET-ADDRESS': {
      return {
        ...state,
        clientInfo: { ...state.clientInfo, deceasedAddress: action.address },
      };
    }
    // case 'client/SET-BURIAL-PLACE': {
    //   return {
    //     ...state,
    //     clientInfo: { ...state.clientInfo, burialPlace: action.place },
    //   };
    // }
    default:
      return state;
  }
};

export const setClientOrdersToProvider =
  (): AppThunkType => async (dispatch, getState: () => AppStateType) => {
    dispatch(isOpenSpinner(true));
    let orderData = getState().clientService;
    if (orderData) {
      const params: OrdersRequestType = {
        clientName: 'Mystery', // потом убрать
        clientId: '643d85973cd3509ad444fbc5', // потом убрать
        status: 'new', // потом убрать
        burialType: 'burial',
        deceasedFullName: getState().clientService.clientInfo.name,
        religion: 'catholicism', // потом изменить
        dateFuneral: getState().clientService.clientInfo.funeralDate,
        deceasedAddress: getState().clientService.clientInfo.deceasedAddress,
        burialPlace: 'Новосормовское кладбище',
        provider: 'provider',
        services: getState().clientService.basicService.map((m) => m.title),
      };
      try {
        let res = await CompaniesApi.setOrdersToCompanies(params);
        console.log(res);
      } catch (error) {
        handleServerError(error, dispatch);
      } finally {
        dispatch(isOpenSpinner(false));
      }
    }
  };

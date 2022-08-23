import {
  SET_COMPANY,
  SET_SERVICES,
  SET_PRICES,
  SET_CONTACTS,
  SET_STAGES,
  SET_IS_DATA_LOAD,
} from "./Redux/Data/data_reducer";

// API RESPONSE
export interface IResponse {
  data: {
    company: ICompany;
    services: IServices;
    prices: IPrices;
    contacts: IContacts;
    stages: IStages;
  };
}
// GLOBAL STATE
export interface IState {
  data: IData;
}
// DATA STORE
export interface ICompany {
  name: string;
  title: string;
  description: string;
  production: string;
}
export interface IServiceItemPhotos {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}
export interface IServiceItem {
  id: number;
  title: string;
  description: string;
  photos: [IServiceItemPhotos];
}
export interface IServices extends Array<IServiceItem> {}

export interface IPriceItemList {
  id: number;
  name: string;
  price: string;
  color?: string;
  secondPrice?: string;
}
export interface IPriceItem {
  title: string;
  subTitle: string;
  description: string;
  note: [string];
  heads: [string];
  list: [IPriceItemList];
}
export interface IPrices extends Array<IPriceItem> {}

export interface IContacts {
  address: string;
  email: string;
  phones: [string];
  schedule: {
    days: string;
    time: string;
  };
}

export interface IStageItem {
  id: number;
  icon: string;
  title: string;
  text: string;
}
export interface IStages extends Array<IStageItem> {}

export interface IData {
  company: ICompany;
  services: IServices;
  prices: IPrices;
  contacts: IContacts;
  stages: IStages;
  isDataLoad: boolean | undefined;
}
export type DataStateTypes =
  | ICompany
  | IServices
  | IPrices
  | IContacts
  | IStages;

// DATA ACTIONS
interface ISetCompany {
  type: typeof SET_COMPANY;
  company: ICompany;
}
interface ISetServices {
  type: typeof SET_SERVICES;
  services: IServices;
}
interface ISetPrices {
  type: typeof SET_PRICES;
  prices: IPrices;
}
interface ISetContacts {
  type: typeof SET_CONTACTS;
  contacts: IContacts;
}
interface ISetStages {
  type: typeof SET_STAGES;
  stages: IStages;
}
interface ISetIsDataLoad {
  type: typeof SET_IS_DATA_LOAD;
  isDataLoad?: boolean;
}
export type DataActionTypes =
  | ISetCompany
  | ISetServices
  | ISetPrices
  | ISetContacts
  | ISetStages
  | ISetIsDataLoad;

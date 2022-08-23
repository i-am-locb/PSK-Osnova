import { AnyAction } from "redux";
import { dataAPI } from "../../API/API";
import {
  DataActionTypes,
  ICompany,
  IContacts,
  IData,
  IPrices,
  IResponse,
  IServices,
  IStages,
} from "../../types";

import { AppDispatch } from "../Store";

export const SET_COMPANY = "SET_COMPANY";
export const SET_SERVICES = "SET_SERVICES";
export const SET_PRICES = "SET_PRICES";
export const SET_CONTACTS = "SET_CONTACTS";
export const SET_STAGES = "SET_STAGES";
export const SET_IS_DATA_LOAD = "SET_IS_DATA_LOAD";

type stateData = IData;

let initialState: stateData = {
  company: {
    name: "",
    title: "",
    description: "",
    production: "",
  },
  services: [],
  prices: [],
  contacts: {
    address: "",
    email: "",
    phones: [""],
    schedule: { days: "", time: "" },
  },
  stages: [],
  isDataLoad: false,
};

const dataReducer = (
  state = initialState,
  action: DataActionTypes
): stateData => {
  switch (action.type) {
    case SET_COMPANY: {
      return {
        ...state,
        company: { ...action.company },
      };
    }
    case SET_SERVICES: {
      return {
        ...state,
        services: [...action.services],
      };
    }
    case SET_PRICES: {
      return {
        ...state,
        prices: [...action.prices],
      };
    }
    case SET_CONTACTS: {
      return {
        ...state,
        contacts: { ...action.contacts },
      };
    }
    case SET_STAGES: {
      return {
        ...state,
        stages: [...action.stages],
      };
    }
    case SET_IS_DATA_LOAD: {
      return {
        ...state,
        isDataLoad: action.isDataLoad,
      };
    }

    default: {
      return state;
    }
  }
};

export const setCompany = (company: ICompany): DataActionTypes => ({
  type: SET_COMPANY,
  company,
});
export const setServices = (services: IServices): DataActionTypes => ({
  type: SET_SERVICES,
  services,
});
export const setPrices = (prices: IPrices): DataActionTypes => ({
  type: SET_PRICES,
  prices,
});
export const setContacts = (contacts: IContacts): DataActionTypes => ({
  type: SET_CONTACTS,
  contacts,
});
export const setStages = (stages: IStages): DataActionTypes => ({
  type: SET_STAGES,
  stages,
});
export const setIsDataLoad = (isDataLoad: boolean): DataActionTypes => ({
  type: SET_IS_DATA_LOAD,
  isDataLoad,
});

export const getData = () => (dispatch: AppDispatch) => {
  dataAPI.getData().then((response: IResponse) => {
    dispatch(setCompany(response.data.company));
    dispatch(setServices(response.data.services));
    dispatch(setPrices(response.data.prices));
    dispatch(setContacts(response.data.contacts));
    dispatch(setStages(response.data.stages));
    dispatch(setIsDataLoad(true));
  });
};

export default dataReducer;

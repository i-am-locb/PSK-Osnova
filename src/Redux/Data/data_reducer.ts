import { dataAPI } from "../../API/API";
const SET_COMPANY = "SET_COMPANY";
const SET_SERVICES = "SET_SERVICES";
const SET_PRICES = "SET_PRICES";
const SET_CONTACTS = "SET_CONTACTS";
const SET_STAGES = "SET_STAGES";
const SET_IS_DATA_LOAD = "SET_IS_DATA_LOAD"



let initialState: any = {
  company: {},
  services: [],
  prices: [],
  contacts: {},
  stages: [],
  isDataLoad: true,
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_COMPANY: {
      return {
        ...state,
        company: {...action.company}
      }
    }
    case SET_SERVICES: {
      return {
        ...state,
        services: [...action.services]
      }
    }
    case SET_PRICES: {
      return {
        ...state,
        prices: [...action.prices]
      }
    }
    case SET_CONTACTS: {
      return {
        ...state,
        contacts: {...action.contacts}
      }
    }
    case SET_STAGES: {
      return {
        ...state,
        stages: [...action.stages]
      }
    }
    case SET_IS_DATA_LOAD: {
      return {
        ...state,
        isDataLoad: action.isDataLoad
      }
    }

    default: {
      return state;
    }
  }
};

export const setCompany = (company: any) => ({ type: SET_COMPANY, company });
export const setServices = (services: any) => ({ type: SET_SERVICES, services });
export const setPrices = (prices: any) => ({ type: SET_PRICES, prices });
export const setContacts = (contacts: any) => ({ type: SET_CONTACTS, contacts });
export const setStages = (stages: any) => ({ type: SET_STAGES, stages });
export const setIsDataLoad = (isDataLoad: boolean) => ({ type: SET_IS_DATA_LOAD, isDataLoad });

export const getData = () => (dispatch: any) => {
  dataAPI.getData().then((response: any) => {
    dispatch(setCompany(response.data.company));
    dispatch(setServices(response.data.services));
    dispatch(setPrices(response.data.prices));
    dispatch(setContacts(response.data.contacts));
    dispatch(setStages(response.data.stages));
    dispatch(setIsDataLoad(true));
  });
};

export default dataReducer;

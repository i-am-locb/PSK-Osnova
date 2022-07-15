import {
  setServices,
  setPrices,
  setContacts,
  setStages,
  setIsDataLoad,
} from "./data_reducer";
import { setCompany } from "./data_reducer";
import dataReducer from "./data_reducer";

let state = {
  company: {},
  services: [],
  prices: {},
  contacts: {},
  stages: {},
  isDataLoad: true,
};

it("company name should be added", () => {
  let action = setCompany({ name: "Название" });
  let newState = dataReducer(state, action);
  expect(newState.company.name).toBe("Название");
});

it("company title should be added", () => {
  let action = setCompany({ title: "Заголовок" });
  let newState = dataReducer(state, action);
  expect(newState.company.title).toBe("Заголовок");
});

it("services should be increment", () => {
  let action = setServices([
    {
      id: 1,
      title: "Заголовок",
      desription: "Описание",
      photos: [],
    },
  ]);
  let newState = dataReducer(state, action);
  expect(newState.services.length).toBe(1);
});

it("price title should be added", () => {
  let action = setPrices({
    glass: {
      title: "Стекло",
    },
  });
  let newState = dataReducer(state, action);
  expect(newState.prices.glass.title).toBe("Стекло");
});

it("contacts should be added", () => {
  let action = setContacts({phones: ["+7 (495) 211-03-57", "+7 (495) 723-84-98"]});
  let newState = dataReducer(state, action);
  expect(newState.contacts.phones.length).toBe(2);
});

it("stage should be added", () => {
  let action = setStages({ first: "Вы звоните нам и заказываете выезд замерщика на объект или присылаете к нам на почту имеющийся проект", });
  let newState = dataReducer(state, action);
  expect(newState.stages.first).toBe("Вы звоните нам и заказываете выезд замерщика на объект или присылаете к нам на почту имеющийся проект");
});

it("isDataLoad should be switched", () => {
  let action = setIsDataLoad(false);
  let newState = dataReducer(state, action);
  expect(newState.isDataLoad).toBe(false)
});

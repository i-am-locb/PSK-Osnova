import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import dataReducer from "./Data/data_reducer";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// let rootReducer = {
//   data: dataReducer,
// };

// const composeEnhancers =
//   (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

// // const store = configureStore(
// //   reducers,
// //   composeEnhancers(applyMiddleware(thunkMiddleware))
// // );

const store = configureStore({
  reducer: {
    data: dataReducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMiddleware),
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;
export type RootState = ReturnType<typeof store.getState>


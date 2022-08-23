import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import thunkMiddleware from "redux-thunk";
import dataReducer from "./Data/data_reducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;

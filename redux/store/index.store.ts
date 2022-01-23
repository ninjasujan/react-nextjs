import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { uiSlice } from "./ui.store";
import { REDUX_DEV_MODE } from "../../constant/app.constant";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
  devTools: REDUX_DEV_MODE,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index.store";

export interface IUIState {
  loading: boolean;
}

const initialState: IUIState = {
  loading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const uiState = (state: RootState) => state.ui;
export const { setLoader } = uiSlice.actions;
export default uiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameOfSymbol: "",
};

export const SymbolSlice = createSlice({
  name: "symbol",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.nameOfSymbol = action.payload;
    },
  },
});

export const { updateName } = SymbolSlice.actions;

export default SymbolSlice.reducer;

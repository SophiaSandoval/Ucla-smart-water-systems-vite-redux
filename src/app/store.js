import { configureStore } from "@reduxjs/toolkit";

import SymbolSlice from "../features/SymbolSlice";

export const store = configureStore({
  reducer: {
    symbol: SymbolSlice,
  },
});

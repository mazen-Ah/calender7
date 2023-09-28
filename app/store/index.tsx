"use client";
import { configureStore } from "@reduxjs/toolkit";
import calenderSlice from "./features/calenderSlice";
export const store = configureStore({
  reducer: {
    calenderSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

"use client";
import { Provider } from "react-redux";
import { store } from "./index";
import { ReactNode } from "react";

const provider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default provider;

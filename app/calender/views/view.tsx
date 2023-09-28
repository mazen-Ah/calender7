"use client";
import React from "react";
import MonthViews from "./MonthViews";
import { useAppSelector, useAppDispatch } from "@/app/hooks/hooks";
import { ChangeView } from "@/app/store/features/calenderSlice";
import WeakView from "./WeakView";
import DayView from "./DayView";
import dayjs from "dayjs";
type Props = {};

const View = (props: Props) => {
  const { view } = useAppSelector((state) => state.calenderSlice);
  // Define a function to render the appropriate view based on the "view" state
  const renderView = () => {
    switch (view) {
      case "month":
        return <MonthViews />;
      case "week":
        return <WeakView />;
      case "day":
        return <DayView />;
      default:
        return null; // You can provide a default case or handle it as per your requirements
    }
  };

  return <div>{renderView()}</div>;
};

export default View;

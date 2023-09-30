"use client";
import React from "react";
import CalendarHeader from "./components/CalendarHeader";
import { GetMonth } from "./util/GetMonth";
import dayjs from "dayjs";
import View from "./views/view";
import { useAppSelector, useAppDispatch } from "@/app/hooks/hooks";
import EventPopup from "./components/EventPopup";

type Props = {};

const Calender = (props: Props) => {
  const { ViewEventModal } = useAppSelector((state) => state.calenderSlice);

  return (
    <div className="md:p-2 rounded-lg h-screen">
      {ViewEventModal && <EventPopup />}
    </div>
  );
};

export default Calender;

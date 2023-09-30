"use client";
import React from "react";
import SideCalender from "../components/SideCalender";
import dayjs from "dayjs";
import TimeDay from "../components/TimeDay";

type Props = {};

const DayView = (props: Props) => {
  const currentDate = dayjs();
  const currentDayObject = {
    dayName: currentDate.format("dddd"), // Full day name (e.g., Monday)
    dayOfMonth: currentDate.date(),
    month: currentDate.month() + 1, // Adding 1 to get the month number (0-indexed)
    time: currentDate.format("HH:mm:ss"),
  };

  return (
    <div className="grid grid-cols-3 w-full">
      <div className="col-span-2 max-md:col-span-3">
        <header></header>
        <main>
          <TimeDay />
        </main>
      </div>
      <SideCalender />
    </div>
  );
};

export default DayView;

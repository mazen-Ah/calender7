"use client";
import React from "react";
import DayOfTheWeak from "../components/DayOfTheWeak";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { GetWeekDatesByYearWeek } from "../util/GetMonth";
var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

type Props = {};

const WeakView = (props: Props) => {
  const startOfWeek = dayjs().startOf("week").weekday();
  const dispatch = useAppDispatch();
  const { CurrentMonth, CurrentYear, CurrentWeek } = useAppSelector(
    (state) => state.calenderSlice
  );
  console.log(dayjs().week());

  console.log(GetWeekDatesByYearWeek(CurrentYear, CurrentWeek));

  return (
    <div>
      <header className="grid grid-cols-7">
        {GetWeekDatesByYearWeek().map(({ dayName, dayOfMonth }, index) => (
          <div
            key={index}
            className="text-center text-[] border-[0.1rem] p-4 py-3 text-base text-[#9FA3AC] shadow-sm"
          >
            <span className="mx-1">{dayName}</span>
            <span className="mx-1 text-black font-semibold">{dayOfMonth}</span>
          </div>
        ))}
      </header>
      <DayOfTheWeak />
    </div>
  );
};

export default WeakView;

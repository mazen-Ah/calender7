"use client";
import React from "react";
import DayOfTheWeak from "../components/DayOfTheWeak";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { GetWeekDatesByYearWeek } from "../util/GetMonth";
import TimeDay from "../components/TimeDay";
import TimeWeak from "../components/TimeWeak";
var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

type Props = {};

const WeakView = (props: Props) => {
  return (
    <div className="relative">
      <header className="grid grid-cols-7 ml-28 ">
        {GetWeekDatesByYearWeek().map(({ dayName, dayOfMonth }, index) => (
          <>
            <div
              key={index}
              className="grid text-center border-x-[0.1rem]  text-base text-[#9FA3AC] shadow-sm h-fit "
            >
              <div className="flex gap-3 py-3 justify-center items-center text-center border-b-[1px]">
                <span className="">{dayName}</span>
                <span
                  className={`${
                    dayjs().date() === dayOfMonth && "bg-[#4F45E4] text-white "
                  } text-black font-semibold p-2 rounded-full`}
                >
                  {dayOfMonth}
                </span>
              </div>
              <TimeWeak />
            </div>
          </>
        ))}
      </header>
    </div>
  );
};

export default WeakView;

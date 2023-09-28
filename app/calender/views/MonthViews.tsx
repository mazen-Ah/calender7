"use client";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { GetMonth } from "../util/GetMonth";
import DayOfTheMonth from "../components/DayOfTheMonth";
import { useAppSelector, useAppDispatch } from "@/app/hooks/hooks";
import { PrevMonth, NextMonth } from "@/app/store/features/calenderSlice"; // Import the actions
import { useState } from "react";

dayjs.extend(weekday);
dayjs.extend(localizedFormat);

const MonthViews = () => {
  interface Event {
    date: string | number;
    description: string;
    id: string;
    time: string;
    title: string;
  }
  const startOfWeek = dayjs().startOf("week").weekday();
  const dispatch = useAppDispatch();
  const { CurrentMonth, CurrentYear, events } = useAppSelector(
    (state) => state.calenderSlice
  );
  const dayNames = Array.from({ length: 7 }, (_, index) =>
    dayjs()
      .startOf("week")
      .weekday((startOfWeek + index) % 7)
      .format("ddd")
  );

  const days = (): React.JSX.Element[] => {
    return GetMonth(CurrentYear, CurrentMonth).map((el: any) => {
      const arr = [];
      const { $y: year, $M: month, $D: day } = el;
      const tasks = events
        .filter((e: any) => {
          const [y, m, d] = e.date.split("-");
          return (
            parseInt(y, 10) === year &&
            parseInt(m - 1, 10) === month &&
            parseInt(d, 10) === day
          );
        })
        .map((e: any, i) => e)
        .flat();
      arr.push(...tasks);
      return <DayOfTheMonth date={el} events={arr} />;
    });
  };
  console.log(events);

  return (
    <div className="">
      <header className="grid grid-cols-7">
        {dayNames.map((dayName, index) => (
          <div
            key={index}
            className="text-center border-[0.1rem] border-[#E5E7EB] p-4 py-3 text-sm font-semibold"
          >
            {dayName}
          </div>
        ))}
      </header>
      <main className="grid grid-cols-7">{days()}</main>
      <div className="bg-slate-100 w-full h-[35vh] p-2 text-xl grid items-start md:hidden">
        <div className="bg-white space-y-3 divide-y-[1px] rounded-xl  max-h-60 h-fit overflow-auto border-[1px]">
          {events.map(({ title, date, time }, i) => {
            return (
              <div className="flex justify-between items-center w-full bg-white rounded-lg p-4 shadow-md">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-blue-500">
                    {title}
                  </h2>
                  <div className="flex items-center mt-2 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base">{date}</span>
                  </div>
                </div>
                <button className="p-2 rounded-lg px-4 text-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthViews;

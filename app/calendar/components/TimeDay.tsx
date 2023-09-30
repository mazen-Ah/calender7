"use client";
import React from "react";
import { useAppSelector } from "@/app/hooks/hooks";
import dayjs from "dayjs";
import { title } from "process";
type Props = {};

const TimeDay = (props: Props) => {
  const { events } = useAppSelector((state) => state.calenderSlice);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const task = {
    date: "2023-09-23",
    description: "Technical-Interview",
    id: "3a17ed97-73f8-4f97-841d-6f3f8b5f2db6",
    fromTime: "14:00",
    title: "Technical-Interview",
    toTime: "16:00",
  };

  const HandleTaskTime = (task: any): any => {
    const from = dayjs(task.date + task.fromTime);
    const to = dayjs(task.date + task.toTime);
    const result = to.diff(from, "minute") / 60;
    return result * 6;
  };

  const HandleStartedTask = (task: any): any => {
    const z = task.fromTime.slice(0, 2);
    const q = task.fromTime.slice(-2);
    const result = (+z + q / 60) * 6;
    return result;
  };

  const StartedTask = HandleStartedTask(task);
  const TaskTime = HandleTaskTime(task);
  return (
    <div className="w-full h-[90vh] border-x-[1px] overflow-y-auto overflow-x-hidden">
      <ul className="relative">
        {hours.map((e, i) => (
          <div className="relative">
            <div className="absolute left-[4rem] text-gray-400 w-14">
              {i + 1 <= 12 ? ` ${i + 1} AM ` : `${i - 11} PM`}
            </div>
            <li
              key={i}
              className="h-[6rem] border-b-[1px] border-l-[1px] p-2 ml-28"
            ></li>
          </div>
        ))}
        {events.map((e) => {
          const StartedTask = HandleStartedTask(e);
          const TaskTime = HandleTaskTime(e);
          return (
            <div
              style={{
                height: `${TaskTime}rem`,
                top: `${StartedTask}rem`,
              }}
              className={`absolute bg-[#FDF2F8] w-full text-sm left-[7rem] opacity-80 flex flex-col p-4 rounded-lg font-semibold`}
            >
              <span className="text-[#EC4899] font-normal">{e.fromTime}</span>
              <span className="text-[#BE185D]">{e.title}</span>
              <span className="text-[#EC4899] font-normal">
                {e.description}
              </span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TimeDay;

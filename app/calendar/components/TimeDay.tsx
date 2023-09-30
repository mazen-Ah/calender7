import React, { useState } from "react";
import { useAppSelector } from "@/app/hooks/hooks";
import dayjs from "dayjs";
import { useDisclosure } from "@mantine/hooks";
import EventEditPopup from "./EventEditPopup";

type Props = {};

const TimeDay = (props: Props) => {
  const { events, CurrentDay, CurrentMonth, CurrentYear } = useAppSelector(
    (state) => state.calenderSlice
  );
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const [opened, { open, close }] = useDisclosure(false);
  const [e, setE] = useState();
  const HandleTaskTime = (task: any): any => {
    const from = dayjs(task.date + "T" + task.fromTime); // Added "T" for proper ISO format
    const to = dayjs(task.date + "T" + task.toTime); // Added "T" for proper ISO format
    const result = to.diff(from, "minute") / 60;
    return result * 6;
  };

  const HandleStartedTask = (task: any): any => {
    const z = task.fromTime.slice(0, 2);
    const q = task.fromTime.slice(-2);
    const result = (+z + q / 60) * 6;
    return result;
  };
  const ShowPopup = (e: any) => {
    setE(e);
    open();
  };
  return (
    <>
      {opened && <EventEditPopup isOpened={opened} isClose={close} event={e} />}
      <div className="w-full h-[90vh] border-x-[1px] overflow-y-auto overflow-x-hidden">
        <ul className="relative">
          {hours.map((e, i) => (
            <div key={i} className="relative">
              <div className="absolute left-[4rem] text-gray-400 w-14">
                {i + 1 <= 12 ? ` ${i + 1} AM ` : `${i - 11} PM`}
              </div>
              <li
                key={i}
                className="h-[6rem] border-b-[1px] border-l-[1px] p-2 ml-28"
              ></li>
            </div>
          ))}
          {events.map((e, i) => {
            console.log(e);
            if (+e.date.slice(-2) === CurrentDay) {
              const StartedTask = HandleStartedTask(e);
              const TaskTime = HandleTaskTime(e);
              console.log(+e.date.slice(-2), CurrentDay);
              return (
                <div
                  key={i}
                  style={{
                    height: `${TaskTime}rem`,
                    top: `${StartedTask}rem`,
                  }}
                  onClick={() => ShowPopup(e)}
                  className={`absolute cursor-pointer hover:bg-red-100 bg-[#FDF2F8] w-full text-sm left-[7rem] opacity-80 flex flex-col p-4 rounded-lg font-semibold`}
                >
                  <span className="text-[#EC4899] font-normal">
                    {e.fromTime}
                  </span>
                  <span className="text-[#BE185D]">{e.title}</span>
                  <span className="text-[#EC4899] font-normal">
                    {e.description}
                  </span>
                </div>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default TimeDay;

import React from "react";
import {
  PrevMonth,
  NextMonth,
  PrevDay,
  NextDay,
} from "../store/features/calenderSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { usePathname } from "next/navigation";

const SelectDay = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const handlePrev = () => {
    if (pathname === "/calendar/day") {
      // Execute day-specific action
      dispatch(PrevDay());
    } else if (pathname === "/calendar/month") {
      // Execute month-specific action
      dispatch(PrevMonth());
    }
  };

  const handleNext = () => {
    if (pathname === "/calendar/day") {
      // Execute day-specific action
      dispatch(NextDay());
    } else if (pathname === "/calendar/month") {
      // Execute month-specific action
      dispatch(NextMonth());
    }
  };
  return (
    <div className="flex justify-between items-center bg-white border-[1px] rounded-lg w-48 max-md:h-[3rem] max-md:my-auto max-md:w-fit">
      <button className="px-2" onClick={() => handlePrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="px-2" onClick={() => handleNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SelectDay;

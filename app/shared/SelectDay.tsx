import React from "react";
import { PrevMonth, NextMonth } from "../store/features/calenderSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
const SelectDay = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center bg-white border-[1px] rounded-lg w-48 max-md:h-[3rem] max-md:my-auto max-md:w-fit">
      <button className="px-2" onClick={() => dispatch(PrevMonth())}>
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
      <button className="px-2" onClick={() => dispatch(NextMonth())}>
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

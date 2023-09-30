"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import SelectView from "@/app/shared/SelectView";
import SelectDay from "@/app/shared/SelectDay";
import { useAppSelector, useAppDispatch } from "@/app/hooks/hooks";
import { ChangeView, EventModal } from "@/app/store/features/calenderSlice";
import Link from "next/link";

type ViewType = "day" | "month" | "week";

const Header = () => {
  const { CurrentMonth, CurrentYear } = useAppSelector(
    (state) => state.calenderSlice
  );
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ViewType>("month");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const currentMonthIndex = dayjs().month();
  const currentDayIndex = dayjs().date();
  const options: ViewType[] = ["day", "week", "month"];

  const handleOptionClick = (option: ViewType) => {
    dispatch(ChangeView(option));
    setSelectedOption(option);
    closeDropdown();
  };

  const handleAddEventClick = () => {
    dispatch(EventModal(true));
    closeDropdown();
  };

  return (
    <header className="py-4 px-6 bg-[#F9FAFB] flex justify-between items-center border-[#E7E7E9] border-[1px] rounded-t-lg">
      <h2 className="font-semibold grid">
        <span>
          {dayjs(new Date(CurrentYear, CurrentMonth, currentDayIndex)).format(
            "MMMM YYYY"
          )}
        </span>
      </h2>
      <div className="flex gap-4">
        <div className="border-r-2 px-4 flex gap-5 ">
          <SelectDay />
          <SelectView />
        </div>
        <button
          onClick={handleAddEventClick} // Use the new click handler
          className="bg-[#4F45E4] px-3 py-2 text-white rounded-lg font-medium max-md:hidden"
        >
          add event
        </button>
        <div className="text-gray-600 text-center flex items-center md:hidden relative group">
          <span
            onClick={toggleDropdown}
            className="cursor-pointer hover:text-gray-800 transition-colors"
          >
            ...
          </span>
          <div
            className={`${
              isDropdownVisible
                ? "block transform scale-100 opacity-100"
                : "hidden transform scale-95 opacity-0"
            } absolute bg-white top-10 right-0 mt-2 w-32 py-2 rounded-lg shadow-lg border border-gray-300 text-left`}
          >
            <div
              onClick={handleAddEventClick} // Use the new click handler
              className=" p-3 font-medium border-b-2 text-center"
            >
              add event
            </div>
            {options.map((option) => (
              <Link
                href={option.charAt(0).toUpperCase() + option.slice(1)}
                key={option}
                className={`px-4 py-2 cursor-pointer text-sm mt-1`}
                onClick={() => handleOptionClick(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)} view
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/app/hooks/hooks";
import { ChangeView } from "@/app/store/features/calenderSlice";
type ViewType = "day" | "month" | "week";

const SelectView = () => {
  const { view } = useAppSelector((state) => state.calenderSlice);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ViewType>("month");
  const options: ViewType[] = ["day", "week", "month"];

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: ViewType) => {
    dispatch(ChangeView(option));
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block max-md:hidden">
      <button
        className="border p-2 rounded-lg focus:outline-none flex justify-between items-center w-36 bg-white" // Set a fixed width
        onClick={toggleSelect}
      >
        {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)} view
        <span className="mx-1 ml-2 transition-all">
          {isOpen ? (
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
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
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
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </span>
      </button>
      <ul
        className={`absolute z-20 bg-white border border-gray-300 mt-2 py-2 rounded shadow-lg w-36  ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } transform origin-top transition-transform ease-in-out duration-300`}
      >
        {options.map((option) => (
          <li
            key={option}
            className={`px-4 py-2 cursor-pointer ${
              selectedOption === option ? "bg-gray-100" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)} view
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectView;

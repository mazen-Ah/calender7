"use client";
import React, { useState } from "react";
import { Calendar } from "@mantine/dates";
import { useAppSelector, useAppDispatch } from "@/app/hooks/hooks";
import { ChangeView, EventModal } from "@/app/store/features/calenderSlice";

type Props = {};

const SideCalender = (props: Props) => {
  const [value, setValue] = useState<Date | null>(null);
  const dispatch = useAppDispatch();

  const handleAddEventClick = () => {
    dispatch(EventModal(true));
  };
  return (
    <div className="grid justify-center items-center bg-slate-50 h-[90vh] max-md-hidden">
      {/* <Calendar size="md" /> */}
      {/* <button
        onClick={handleAddEventClick} // Use the new click handler
        className="bg-[#4F46E5] px-2 py-1 w-full my-6 text-white rounded-md font-medium max-md:hidden"
      >
        add event
      </button> */}
    </div>
  );
};
export default SideCalender;

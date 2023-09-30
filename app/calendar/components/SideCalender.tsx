"use client";
import React, { useEffect, useState } from "react";
import { DatePicker } from "@mantine/dates";
import { useAppSelector, useAppDispatch } from "@/app/hooks/hooks";
import { ChangeView, EventModal } from "@/app/store/features/calenderSlice";

const SideCalender = () => {
  const [value, setValue] = useState<Date | null>(null);
  const dispatch = useAppDispatch();
  const { CurrentDay } = useAppSelector((state) => state.calenderSlice);
  const handleAddEventClick = () => {
    dispatch(EventModal(true));
  };
  return (
    <div className=" grid justify-center bg-slate-50 h-[90vh] py-10">
      <DatePicker size="md" />
    </div>
  );
};
export default SideCalender;

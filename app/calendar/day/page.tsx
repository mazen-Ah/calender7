"use client";
import React from "react";
import SideCalender from "../components/SideCalender";
import dayjs from "dayjs";
import TimeDay from "../components/TimeDay";

const day = () => {
  return (
    <div className="grid grid-cols-3 w-full">
      <div className="col-span-2 max-md:col-span-3">
        <header></header>
        <main>
          <TimeDay />
        </main>
      </div>
      <SideCalender />
    </div>
  );
};

export default day;

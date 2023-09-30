"use client";
import Link from "next/link";
import { Calendar } from "@mantine/dates";
import "@mantine/core/styles.css";
import dayjs from "dayjs";
import { useState } from "react";

export default function Home() {
  return (
    <main className="lg:px-16 lg:py-4 flex items-center justify-center text-center">
      <Link
        className="p-10 bg-[#4F45E4] text-white font-semibold rounded-lg"
        href={"/calendar/month"}
      >
        Calendar
      </Link>
    </main>
  );
}

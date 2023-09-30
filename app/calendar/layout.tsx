"use client";
import Header from "./components/CalendarHeader";

export default function CalenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
}

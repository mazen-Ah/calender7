"use client";
import dayjs from "dayjs";
import { useAppSelector } from "@/app/hooks/hooks";
type Props = {
  date: any;
  events?: any;
};

const DayOfTheMonth = ({ date, events }: Props) => {
  const { CurrentMonth } = useAppSelector((state) => state.calenderSlice);
  const dateMontht = dayjs().month();
  const dateMonth = date.month();
  const ToDayt = date.date();
  const ToDay = dayjs().date();
  const isNotInCurrentMonth = dateMonth !== CurrentMonth;
  const formatTime = (time: string) => {
    const hour = parseInt(time.split(":")[0], 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for noon/midnight
    return `${formattedHour} ${ampm}`;
  };

  return (
    <div
      className={`border-[1px] p-3 text-gray-600 overflow-hidden  ${
        isNotInCurrentMonth ? "bg-[#F9FAFB]" : "hover:bg-gray-50"
      } xl:h-[14.5vh] lg:h-[13.5vh]`}
      style={{ flex: 1 }}
    >
      <span
        className={` ${
          ToDay === ToDayt &&
          dateMonth === dateMontht &&
          "bg-[#4F45E4] text-white font-semibold "
        }  rounded-full  p-1 px-2 text-center my-6 text-sm`}
      >
        {date.$D}
      </span>
      <ul className="text-black overflow-auto max-md:hidden space-y-[1px] grid items-center h-2/3">
        {events?.map((e: any) => (
          <li
            onClick={() => console.log(e)}
            className="text-sm px-2 rounded-lg flex group hover:text-[#4F46E5] transition-all duration-300 justify-between cursor-pointer "
            key={e.id}
          >
            <span
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "50%",
              }}
            >
              {e.title}
            </span>
            <span className="text-gray-400 group-hover:text-[#4F46E5] transition-all  duration-300">
              {formatTime(e.fromTime)}
            </span>
          </li>
        ))}
      </ul>
      <ul className="my-1 md:hidden flex h-full">
        {events?.map((e: any) => (
          <li
            className="bg-slate-400 w-2 h-2 rounded-full mx-1"
            key={e.id}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default DayOfTheMonth;

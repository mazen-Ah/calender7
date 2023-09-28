import dayjs from "dayjs";
export function GetMonth(year = dayjs().year(), month = dayjs().month()) {
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(42).fill(null).map(() => {
    currentMonthCount++;
    return dayjs(new Date(year, month, currentMonthCount));
  });
  return daysMatrix;
}

export function GetWeekDatesByYearWeek(
  year = dayjs().year(),
  weekOfYear = dayjs().week()
) {
  const firstDayOfYear = dayjs(new Date(year, 0, 1));

  // Calculate the start date of the specified week
  const startDateOfWeek = firstDayOfYear.add(weekOfYear - 1, "week");

  // Create an array to store objects for each day
  const daysInWeek = [];

  // Iterate through the 7 days of the week
  for (let i = 0; i < 7; i++) {
    const currentDate = startDateOfWeek.add(i, "day");
    const dayObject = {
      dayName: currentDate.format("ddd"), // Full day name (e.g., Monday)
      dayOfMonth: currentDate.date(),
      month: currentDate.month() + 1, // Adding 1 to get the month number (0-indexed)
      time: currentDate.format("HH:mm:ss"),
    };
    daysInWeek.push(dayObject);
  }

  return daysInWeek;
}

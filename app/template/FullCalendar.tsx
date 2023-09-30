import CalendarSmall from "../calender/components/SideCalender";
import Header from "../calender/components/CalendarHeader";

type Props = {};

const FullCalendar = (props: Props) => {
  return (
    <div>
      <Header />
      <CalendarSmall />
    </div>
  );
};

export default FullCalendar;

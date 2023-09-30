import React from "react";

type Props = {};

const TimeWeak = (props: Props) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <ul className="">
      {hours.map((e, i) => (
        <div className="">
          <div className="absolute left-[4rem] font-extralight">
            {i + 1 <= 12 ? ` ${i + 1} AM ` : `${i - 11} PM`}
          </div>
          <div className="">
            <li key={i} className="h-[5rem] border-b-[1px] p-2"></li>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default TimeWeak;

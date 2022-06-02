import React, { useContext } from "react";
import dayjs from "dayjs";

import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handleReset = () => {
    setMonthIndex(
      //useEfect doesnt work if the prev value & the current value is the same. so we will change it using Math.random in a way that dosent change the result
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  return (
    <header className="px-4 py-2 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        viewBox="0 0 20 20"
        fill="none"
        stroke="#14b8a6"
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
      <h1 className="mr-10 text-xl text-gray-500 font-bold px-2">
        MediCalendar
      </h1>
      <button
        className="bg-gray-50 hover:bg-gray-50 active:bg-teal-500 focus:outline-none focus:ring-teal-300 border border-teal-500 rounded py-2 px-4 mr-5 text-teal-500 hover:shadow-xl"
        onClick={handleReset}
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined curser-pointer text-gray-500 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined curser-pointer text-gray-500 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

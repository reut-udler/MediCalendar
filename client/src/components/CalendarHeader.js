import React, { useContext } from "react";

import GlobalContext from "../context/GlobalContext";
import MonthTitle from "./MonthTitle";
import logo from "../assets/madiCalendarLogo.svg";
import {
  ResetButton,
  PrevMonthButton,
  NextMonthButton,
} from "./CalendarButtons";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="mediCalendar_logo" className="w-8 h-8" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold px-2">
        MediCalendar
      </h1>
      <ResetButton />
      <PrevMonthButton index={monthIndex} setIndex={setMonthIndex} />
      <NextMonthButton index={monthIndex} setIndex={setMonthIndex} />
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        <MonthTitle month={monthIndex} />
      </h2>
    </header>
  );
}

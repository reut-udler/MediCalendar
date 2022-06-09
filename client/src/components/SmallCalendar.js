import React, { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";

import { getMonth } from "./../utils";
import GlobalContext from "./../context/GlobalContext";
import MonthTitle from "./MonthTitle";
import { PrevMonthButton, NextMonthButton } from "./CalendarButtons";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());

  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-teal-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-teal-100 rounded-full text-teal-600 font-bold";
    } else {
      return " ";
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          <MonthTitle month={currentMonthIdx} />
        </p>
        <div>
          <PrevMonthButton
            index={currentMonthIdx}
            setIndex={setCurrentMonthIdx}
          />
          <NextMonthButton
            index={currentMonthIdx}
            setIndex={setCurrentMonthIdx}
          />
        </div>
      </header>

      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

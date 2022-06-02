import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import GlobalContext from "./GlobalContext";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMounth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => {
    if (smallCalendarMounth !== null) {
      setMonthIndex(smallCalendarMounth);
    }
  }, [smallCalendarMounth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMounth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

import React, { useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "./GlobalContext";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMounth, setSmallCalendarMounth] = useState(null);

  useEffect(() => {
    if (smallCalendarMounth !== null) {
      setMonthIndex();
    }
  }, [smallCalendarMounth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMounth,
        setSmallCalendarMounth,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

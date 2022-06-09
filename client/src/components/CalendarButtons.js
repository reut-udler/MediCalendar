import React, { useContext } from "react";
import dayjs from "dayjs";

import GlobalContext from "../context/GlobalContext";

export const ResetButton = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handleReset = () => {
    setMonthIndex(
      //useEfect doesnt work if the prev value & the current value is the same. so we will change it using Math.random in a way that dosent change the result
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <button
      className="bg-gray-50 hover:bg-gray-50 active:bg-teal-500 focus:outline-none focus:ring-teal-300 border border-teal-500 rounded py-2 px-4 mr-5 text-teal-500 hover:shadow-xl"
      onClick={handleReset}
    >
      Today
    </button>
  );
};

export const PrevMonthButton = (props) => {
  const { index, setIndex } = props;

  const handlePrevMonth = () => {
    setIndex(index - 1);
  };

  return (
    <button onClick={handlePrevMonth}>
      <span className="material-icons-outlined curser-pointer text-gray-500 mx-2">
        chevron_left
      </span>
    </button>
  );
};

export const NextMonthButton = (props) => {
  const { index, setIndex } = props;

  const handleNextMonth = () => {
    setIndex(index + 1);
  };

  return (
    <button onClick={handleNextMonth}>
      <span className="material-icons-outlined curser-pointer text-gray-500 mx-2">
        chevron_right
      </span>
    </button>
  );
};

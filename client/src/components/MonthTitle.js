import React from "react";
import dayjs from "dayjs";

export default function MonthTitle(props) {
  return (
    <React.Fragment>
      {dayjs(new Date(dayjs().year(), props.month)).format("MMMM YYYY")}
    </React.Fragment>
  );
}

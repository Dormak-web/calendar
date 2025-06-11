import React from "react";
import {StyledCalendarBodyCellTitle} from "@/styles/comonents/calendar/MonthCalendar";

const CalendarBodyCellTitle = ({day, length = 0}: {day: string | number, length?: number}) => {
  return (
    <StyledCalendarBodyCellTitle>
      <b>{day}</b>
      <i>{length > 0 ? `  |   ${length} card` : ''}</i>
    </StyledCalendarBodyCellTitle>
  )
}

export default CalendarBodyCellTitle
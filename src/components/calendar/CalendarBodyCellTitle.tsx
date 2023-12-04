import React from "react";
import {StyledCalendarBodyCellTitle} from "styles/components/calendar/MonthCalendar";

const CalendarBodyCellTitle = ({day, length = 0}: {day: string | number, length?: string | number}) => {
  return (
    <StyledCalendarBodyCellTitle>
      <b>{day}</b>
      <i>{length > 0 ? `  |   ${length} card` : ''}</i>
    </StyledCalendarBodyCellTitle>
  )
}

export default CalendarBodyCellTitle
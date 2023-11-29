import React from "react";
import {StyledMonthCalendarBodyCell} from "styles/components/calendar/MonthCalendar";

const MonthCalendarBodyCell = ({children}: any) => {
  return (
    <StyledMonthCalendarBodyCell>
      {children}
    </StyledMonthCalendarBodyCell>
  )
}

export default MonthCalendarBodyCell
import React from "react";
import {StyledMonthCalendarBodyCell} from "styles/components/calendar/MonthCalendar";

const MonthCalendarBodyCell = ({children, isCurrentM}: any) => {
  return (
    <StyledMonthCalendarBodyCell isCurrentM={isCurrentM}>
      {children}
    </StyledMonthCalendarBodyCell>
  )
}

export default MonthCalendarBodyCell
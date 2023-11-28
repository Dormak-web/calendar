import React, {useEffect, useState} from "react";
import {getCalendarMonth} from "utils/calendar";
import {
  MonthCalendarBody, MonthCalendarBodyCell,
  MonthCalendarBodyRow,
  MonthCalendarContainer,
  MonthCalendarHead
} from "styles/components/calendar/MonthCalendar";
import DayCalendar from "components/calendar/DayCalendar";
import {week} from "constants/calendar";

const MonthCalendar = () => {
  // @todo refactoring

  const [dates, setDates] = useState<number[][]>([])
  const date = new Date()
  date.setDate(1);

  useEffect(() => {
    setDates(getCalendarMonth(date))

  }, [])

  return (
    <MonthCalendarContainer>
      <MonthCalendarHead>
        {week.map(day => <span>{day}</span>)}
        {/*<MonthCalendarHeadRow>*/}
        {/*  <MonthCalendarHeadCell>*/}

        {/*  </MonthCalendarHeadCell>*/}
        {/*</MonthCalendarHeadRow>*/}
      </MonthCalendarHead>

      <MonthCalendarBody>
        {dates.map(row =>
          <MonthCalendarBodyRow>
            {row.map((item) =>
              <MonthCalendarBodyCell>
                <DayCalendar day={item}/>
              </MonthCalendarBodyCell>
            )}
          </MonthCalendarBodyRow>
        )}
      </MonthCalendarBody>
    </MonthCalendarContainer>
  )
}

export default MonthCalendar
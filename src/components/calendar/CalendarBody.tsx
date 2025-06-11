'use client'

import {useRef} from "react";
import {Day} from "@/interfaces/calendar";
import {StyledCalendarBody} from "@/styles/comonents/calendar/StyledCalendarBody";
import {
  StyledMonthCalendarBody,
  StyledMonthCalendarBodyRow,
  StyledMonthCalendarHeadCell,
  StyledMonthCalendarHeadRow
} from "@/styles/comonents/calendar/MonthCalendar";
import {Week} from "@/constants/calendar";
import MonthCalendarBodyCell from "@/components/calendar/MonthCalendarBodyCell";
import CalendarDay from "@/components/calendar/CalendarDay";

type CalendarBodyProps = {
  calendar: Day[][],
  date: Date,
}

const CalendarBody = ({
                        calendar,
                        date,
                      }: CalendarBodyProps) => {
  const printRef = useRef<any>(undefined);

  return (
    <StyledCalendarBody ref={printRef}>
      <StyledMonthCalendarHeadRow>
        {Week.map((day, index) =>
          <StyledMonthCalendarHeadCell key={`${day}-${index}`}>
            {day}
          </StyledMonthCalendarHeadCell>
        )}
      </StyledMonthCalendarHeadRow>

      <StyledMonthCalendarBody>
        {calendar.map((row, index) =>
          <StyledMonthCalendarBodyRow key={index}>
            {row.map((item: Day) =>
              <MonthCalendarBodyCell key={item.id} isCurrentM={item.date.getMonth() === date.getMonth()}>
                <CalendarDay
                  item={item}
                />
              </MonthCalendarBodyCell>
            )}
          </StyledMonthCalendarBodyRow>
        )}
      </StyledMonthCalendarBody>
    </StyledCalendarBody>
  )
}

export default CalendarBody
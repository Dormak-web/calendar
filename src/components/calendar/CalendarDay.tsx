import React from "react";
import {Day} from "@/interfaces/calendar";
import {StyledCalendarDay, StyledCalendarDayHeader} from "@/styles/comonents/calendar/StyledCalendarDay";
import CalendarBodyCellTitle from "@/components/calendar/CalendarBodyCellTitle";
import Button from "@/components/Button";
import {IconArrowPlus} from "@/components/icons/IconPlus";

interface CalendarDayProps {
  item: Day,
}

const CalendarDay = ({item}: CalendarDayProps) => {
  return (
    <StyledCalendarDay>
      <StyledCalendarDayHeader>
        <CalendarBodyCellTitle day={item.dayMonth} length={item.tasks.length}/>
        <Button className="btn-create-task" size='small'><IconArrowPlus/></Button>
      </StyledCalendarDayHeader>
    </StyledCalendarDay>
  )
}

export default CalendarDay
import React from "react";
import {Day} from "@/interfaces/calendar";
import {StyledCalendarDay, StyledCalendarDayHeader} from "@/styles/comonents/calendar/StyledCalendarDay";
import CalendarBodyCellTitle from "@/components/calendar/CalendarBodyCellTitle";
import Button from "@/components/Button";
import {IconArrowPlus} from "@/components/icons/IconPlus";
import HolidayList from "@/components/calendar/HolidayList";
import Divider from "@/components/Divider";
import TaskList from "@/components/calendar/TaskList";

interface CalendarDayProps {
  item: Day,
}

const CalendarDay = ({item}: CalendarDayProps) => {
  const handleCreate = async () => {
    console.log('Create task')
  }

  return (
    <StyledCalendarDay>
      <StyledCalendarDayHeader>
        <CalendarBodyCellTitle day={item.dayMonth} length={item.tasks.length}/>
        <Button className="btn-create-task" size='small' onClick={handleCreate}><IconArrowPlus/></Button>
      </StyledCalendarDayHeader>

      <HolidayList holidays={item.holidays}/>
      {!!item.holidays.length && !!item.tasks.length && <Divider/>}
      <TaskList tasks={item.tasks}/>

    </StyledCalendarDay>
  )
}

export default CalendarDay
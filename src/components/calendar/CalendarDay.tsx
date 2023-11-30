import React from "react";
import CalendarBodyCellTitle from "components/calendar/CalendarBodyCellTitle";
import TaskList from "components/calendar/TaskList";
import {StyledCalendarDay, StyledCalendarDayHeader} from "styles/components/calendar/StyledCalendarDay";
import Button from "components/Button";
import {Day} from "interfaces/calendar";

interface CalendarDayProps {
  item: Day,
  onCreate: Function,
  onRemove: Function,
  onSave: Function,
}

const CalendarDay = ({item, onCreate, onRemove, onSave}: CalendarDayProps) => {
  return (
    <StyledCalendarDay>
      <StyledCalendarDayHeader>
        <CalendarBodyCellTitle day={item.dayMonth} length={item.tasks.length}/>
        <Button size='small' onClick={() => onCreate(item.date)}>+</Button>
      </StyledCalendarDayHeader>


      <TaskList tasks={item.tasks} onRemove={onRemove} onSave={onSave}/>
    </StyledCalendarDay>
  )
}

export default CalendarDay
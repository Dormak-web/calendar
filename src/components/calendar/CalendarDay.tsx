import React from "react";
import CalendarBodyCellTitle from "components/calendar/CalendarBodyCellTitle";
import TaskList from "components/calendar/TaskList";
import {StyledCalendarDay, StyledCalendarDayHeader} from "styles/components/calendar/StyledCalendarDay";
import Button from "components/Button";
import {Day} from "interfaces/calendar";
import {IconArrowPlus} from "components/icons";
import HolidayList from "components/calendar/HolidayList";
import Divider from "components/Divider";

interface CalendarDayProps {
  item: Day,
  onCreate: Function,
  onRemove: Function,
  onSave: Function,
  onClick: Function
}

const CalendarDay = ({item, onCreate, onRemove, onSave, onClick}: CalendarDayProps) => {
  return (
    <StyledCalendarDay>
      <StyledCalendarDayHeader>
        <CalendarBodyCellTitle day={item.dayMonth} length={item.tasks.length}/>
        <Button className="btn-create-task" size='small' onClick={() => onCreate(item.date)}><IconArrowPlus/></Button>
      </StyledCalendarDayHeader>

      {!!item.holidays.length && <HolidayList holidays={item.holidays}/>}
      {!!item.holidays.length && !!item.tasks.length && <Divider />}
      {!!item.tasks.length && <TaskList tasks={item.tasks} onRemove={onRemove} onSave={onSave} onClick={onClick}/>}

    </StyledCalendarDay>
  )
}

export default CalendarDay
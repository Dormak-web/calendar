import React, {useContext} from "react";
import {Day} from "@/interfaces/calendar";
import {StyledCalendarDay, StyledCalendarDayHeader} from "@/styles/comonents/calendar/StyledCalendarDay";
import CalendarBodyCellTitle from "@/components/calendar/CalendarBodyCellTitle";
import Button from "@/components/Button";
import {IconArrowPlus} from "@/components/icons/IconPlus";
import HolidayList from "@/components/calendar/HolidayList";
import Divider from "@/components/Divider";
import TaskList from "@/components/calendar/TaskList";
import {createTask} from "@/api/task";
import {TasksContext} from "@/components/Layout";
import {useDroppable} from "@dnd-kit/core";

interface CalendarDayProps {
  day: Day,
}

const CalendarDay = ({day}: CalendarDayProps) => {
  const {tasks, setTasks} = useContext(TasksContext)
  const {setNodeRef} = useDroppable({
    id: day.id,
    data: {
      type: 'Day',
      date: day.date
    },
  });

  const handleCreate = async () => {
    const res = await createTask({title: "", date: day.date, order: 0});
    if (res.success) {
      const newTasks = [...tasks]
      const ids = day.tasks.map((item) => item.id)
      newTasks.push(res.data)
      ids.unshift(res.data.id)

      ids.map((id, index) => {
        const taskIndex = newTasks.findIndex(ct => ct.id === id)
        newTasks[taskIndex].order = index
      })

      setTasks(newTasks.sort((a, b) => a.order - b.order))
    }
  }

  return (
    <StyledCalendarDay ref={setNodeRef}>
      <StyledCalendarDayHeader>
        <CalendarBodyCellTitle day={day.dayMonth} length={day.tasks.length}/>
        <Button className="btn-create-task" size='small' onClick={handleCreate}><IconArrowPlus/></Button>
      </StyledCalendarDayHeader>

      <div style={{overflowY: "scroll"}}>
        <HolidayList holidays={day.holidays}/>
        {!!day.holidays.length && !!day.tasks.length && <Divider/>}
        <TaskList tasks={day.tasks}/>
      </div>
    </StyledCalendarDay>
  )
}

export default CalendarDay
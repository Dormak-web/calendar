'use client'

import {useContext, useRef, useState} from "react";
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
import {Task} from "@/interfaces/task";
import {TasksContext} from "@/components/Layout";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  rectIntersection,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {arrayMove} from "@dnd-kit/sortable";
import {createPortal} from "react-dom";
import TaskItem from "@/components/calendar/TaskItem";
import {orderTask, updateTask} from "@/api/task";

type CalendarBodyProps = {
  calendar: Day[][],
  date: Date,
}

const CalendarBody = ({
                        calendar,
                        date,
                      }: CalendarBodyProps) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const printRef = useRef<any>(undefined);
  const {tasks, setTasks} = useContext(TasksContext)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current) {
      setActiveTask(event.active.data.current.task);
    }
  }

  const onDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);

    const {active, over} = event;

    if (!over) return;
    const isOverADay = over.data.current?.type === "Day";
    const isOverATask = over.data.current?.type === "Task"
    if (!isOverADay && !isOverATask) return;

    const activeId = active.id;
    const overId = over.id;

    let day: Day | any = null

    const {id, title, date, order} = active?.data?.current?.task

    const overDate = isOverATask ? over.data.current?.task?.date : new Date(over.data.current?.date).toISOString()
    const updatedTask = {
      id,
      title,
      order,
      date: overDate
    }

    const newTasks = [...tasks]

    if (date !== overDate) {
      newTasks[tasks.findIndex((item) => item.id === updatedTask.id)] = updatedTask;
      updateTask(updatedTask)
    }

    calendar.forEach(arr => {
      if (!day) {
        day = arr.find(d => d.id === over.id) || null
      }
    })

    let ids: number[]
    if (isOverADay && day) {
      ids = day?.tasks.map((task: Task) => task.id) || []
    } else {
      ids = over?.data?.current?.sortable.items || []
    }

    const activeIndex = ids.findIndex(id => id === activeId);
    let sortedIds: number[]

    if (isOverADay || !ids.includes(+activeId)) {
      ids.unshift(+activeId)
      sortedIds = [...ids]
    } else {
      const overIndex = ids.findIndex(id => id === overId);
      sortedIds = arrayMove(ids, activeIndex, overIndex)
    }

    orderTask(sortedIds)

    sortedIds.map((id, index) => {
      const taskIndex = newTasks.findIndex(ct => ct.id === id)
      newTasks[taskIndex].order = index
    })
    setTasks(newTasks.sort((a, b) => a.order - b.order))
  }

  const onDragCancel = () => {
    setActiveTask(null);
  };

  return (
    <StyledCalendarBody ref={printRef}>
      <DndContext
        sensors={sensors}
        collisionDetection={rectIntersection}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragCancel={onDragCancel}
      >
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
                    day={item}
                  />
                </MonthCalendarBodyCell>
              )}
            </StyledMonthCalendarBodyRow>
          )}
        </StyledMonthCalendarBody>

        {createPortal(
          <DragOverlay>
            {activeTask && (
              <TaskItem task={activeTask}/>
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </StyledCalendarBody>
  )
}

export default CalendarBody
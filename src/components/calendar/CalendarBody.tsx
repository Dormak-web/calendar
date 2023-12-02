import React, {useState} from "react";
import {
  StyledMonthCalendarBody,
  StyledMonthCalendarBodyRow,
  StyledMonthCalendarHeadCell,
  StyledMonthCalendarHeadRow
} from "styles/components/calendar/MonthCalendar";
import {Week} from "constants/calendar";
import {Day} from "interfaces/calendar";
import MonthCalendarBodyCell from "components/calendar/MonthCalendarBodyCell";
import CalendarDay from "components/calendar/CalendarDay";
import {createPortal} from "react-dom";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import TaskItem from "components/calendar/TaskItem";
import {Task} from "interfaces/task";
import {arrayMove} from "@dnd-kit/sortable";
import {StyledCalendarBody} from "styles/components/calendar/StyledCalendarBody";

type CalendarBodyProps = {
  calendar: Day[][],
  date: Date,
  onCreate: Function,
  onRemove: Function,
  onSave: Function,
  onClickTask: Function,
}

const CalendarBody = ({calendar, date, onCreate, onRemove, onSave, onClickTask}: CalendarBodyProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  function onDragStart(event: DragStartEvent) {
    console.log('onDragStart', event, event.active)

    if (event.active.data.current) {
      setActiveTask(event.active.data.current.task);
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveTask(null);

    const {active, over} = event;

    console.log('C! onDragEnd:', active, over)

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
  }

  function onDragOver(event: DragOverEvent) {
    const {active, over} = event;
    console.log('C!1 onDragOver:', active, over)

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";


    if (!isActiveATask) return;

    if (isActiveATask && isOverATask) {

      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        console.log('C!3 onDragOver:', tasks, activeId, overId)

        if (tasks[activeIndex].dayId != tasks[overIndex].dayId) {
          // Fix introduced after video recording
          tasks[activeIndex].dayId = tasks[overIndex].dayId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    // Im dropping a Task over a column
    // @todo
    // if (isActiveATask && isOverAColumn) {
    //   setTasks((tasks) => {
    //     const activeIndex = tasks.findIndex((t) => t.id === activeId);
    //
    //     tasks[activeIndex].dayId = overId;
    //     console.log("DROPPING TASK OVER COLUMN", {activeIndex});
    //     return arrayMove(tasks, activeIndex, activeIndex);
    //   });
    // }
  }

  return (
    <StyledCalendarBody>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >

        {/**/}
        <StyledMonthCalendarHeadRow>
          {Week.map(day =>
            <StyledMonthCalendarHeadCell>
              {day}
            </StyledMonthCalendarHeadCell>
          )}
        </StyledMonthCalendarHeadRow>

        <StyledMonthCalendarBody>
          {calendar.map(row =>
            <StyledMonthCalendarBodyRow>
              {row.map((item: Day) =>
                <MonthCalendarBodyCell isCurrentM={item.date.getMonth() === date.getMonth()}>
                  <CalendarDay
                    item={item}
                    onCreate={onCreate}
                    onRemove={onRemove}
                    onSave={onSave}
                    onClick={onClickTask}
                  />
                </MonthCalendarBodyCell>
              )}
            </StyledMonthCalendarBodyRow>
          )}
        </StyledMonthCalendarBody>

        {createPortal(
          <DragOverlay>
            {activeTask && (
              <TaskItem task={activeTask} onRemove={onRemove} onSave={onSave} onClick={onClickTask}/>
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </StyledCalendarBody>
  )
}

export default CalendarBody
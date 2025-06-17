import React, {useMemo} from "react";
import {Task} from "@/interfaces/task";
import {StyledTaskList} from "@/styles/comonents/calendar/StyledTaskList";
import TaskItem from "@/components/calendar/TaskItem";
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";

type TaskListProps = {
  tasks: Task[],
}

const TaskList = ({tasks = []}: TaskListProps) => {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  return (
    <StyledTaskList>
      <SortableContext
        items={tasksIds}
        strategy={verticalListSortingStrategy}
      >
        {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
      </SortableContext>
    </StyledTaskList>
  )
}

export default TaskList
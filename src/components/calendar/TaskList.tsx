import React, {useMemo} from "react";
import {SortableContext} from "@dnd-kit/sortable";
import {Task} from "@/interfaces/task";
import {StyledTaskList} from "@/styles/comonents/calendar/StyledTaskList";
import TaskItem from "@/components/calendar/TaskItem";

type TaskListProps = {
  tasks: Task[],
}

const TaskList = ({tasks = []}: TaskListProps) => {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);


  return (
    <StyledTaskList>
      <SortableContext items={tasksIds}>
        {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
      </SortableContext>
    </StyledTaskList>
  )
}

export default TaskList
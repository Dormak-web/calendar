import React, {useMemo} from "react";
import {StyledTaskList} from "styles/components/calendar/StyledTaskList";
import TaskItem from "components/calendar/TaskItem";
import {Task} from "interfaces/task";
import {SortableContext} from "@dnd-kit/sortable";

type TaskListProps = {
  tasks: Task[],
  onRemove: Function,
  onSave: Function,
  onClick: Function
}

const TaskList = ({tasks = [], onRemove, onSave, onClick}: TaskListProps) => {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);


  return (
    <StyledTaskList>
      <SortableContext items={tasksIds}>
        {tasks.map(task => <TaskItem key={task.id} task={task} onRemove={onRemove} onSave={onSave} onClick={onClick}/>)}
      </SortableContext>
    </StyledTaskList>
  )
}

export default TaskList
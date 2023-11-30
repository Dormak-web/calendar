import React from "react";
import {StyledTaskList} from "styles/components/calendar/StyledTaskList";
import TaskItem from "components/calendar/TaskItem";
import {Task} from "interfaces/task";

interface TaskListProps {
  tasks: Task[],
  onRemove: Function,
  onSave: Function,
}

const TaskList = ({tasks = [], onRemove, onSave}: TaskListProps) => {
  return (
    <StyledTaskList>
      <div>
        {tasks.map(task => <TaskItem task={task} onRemove={onRemove} onSave={onSave}/>)}
      </div>
    </StyledTaskList>
  )
}

export default TaskList
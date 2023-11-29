import React from "react";
import {StyledTaskList} from "styles/components/calendar/StyledTaskList";
import TaskItem from "components/calendar/TaskItem";
import {Task} from "interfaces/task";

const TaskList = ({tasks = []}: {tasks: Task[]}) => {
  return (
    <StyledTaskList>
      {tasks.map(task => <TaskItem task={task}/>)}
    </StyledTaskList>
  )
}

export default TaskList
import React from "react";
import {StyledTaskItem} from "styles/components/calendar/StyledTaskItem";
import {Task} from "interfaces/task";

const TaskItem = ({task}: { task: Task }) => {

  return (
    <StyledTaskItem>
      <i>{task.title}</i>
    </StyledTaskItem>
  )
}

export default TaskItem
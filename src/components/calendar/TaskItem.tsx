import React, {useState} from "react";
import {StyledTaskItem} from "styles/components/calendar/StyledTaskItem";
import {Task} from "interfaces/task";
import TextFieldClean from "components/TextFieldClean";
import Button from "components/Button";

interface TaskItemProps {
  task: Task,
  onRemove: Function,
  onSave: Function,
}

const TaskItem = ({task, onRemove, onSave}: TaskItemProps) => {
  const [isChange, setIsChange] = useState(false);
  const [value, setValue] = useState(task.title || '');

  const handleChange = (e: any) => {
    setValue(e.target.value);
    setIsChange(true);
  }

  const handleSave = () => {
    onSave({
      ...task,
      title: value
    })
    setIsChange(false);
  }

  return (
    <StyledTaskItem>
      <TextFieldClean
        name={task.id}
        value={value}
        onChange={handleChange}
      />

      {isChange ?
        <Button
          onClick={handleSave}
          size='small'
        >
          s
        </Button>
        :
        <Button
          onClick={() => onRemove(task)}
          size='small'
        >
          r
        </Button>
      }
    </StyledTaskItem>
  )
}

export default TaskItem
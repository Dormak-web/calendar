import React, {useEffect, useState} from "react";
import {Task} from "@/interfaces/task";
import {StyledTaskItem} from "@/styles/comonents/calendar/StyledTaskItem";
import TextFieldClean from "@/components/inputs/TextFieldClean";
import Button from "@/components/Button";
import {IconSave} from "@/components/icons/IconSave";
import {IconTrash} from "@/components/icons/IconTrash";

type TaskItemProps = {
  task: Task,
}

const TaskItem = ({task}: TaskItemProps) => {
  const [isChange, setIsChange] = useState(false);
  const [value, setValue] = useState(task.title);

  useEffect(() => {
    setValue(task.title);
  }, [task]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    setIsChange(true);
  }

  const handleSave = async (e: any) => {
    e.stopPropagation();

    console.log('update task')
    setIsChange(false);
  }

  const handleRemove = async (e: any) => {
    console.log('Remove task')
    e.stopPropagation();
  }

  return (
    <div>
      <StyledTaskItem>
        <div className='actions'>
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
              <IconSave color='red'/>
            </Button>
            :
            <Button
              onClick={handleRemove}
              className='btn-remove'
              size='small'
            >
              <IconTrash/>
            </Button>
          }
        </div>
      </StyledTaskItem>
    </div>
  )
}

export default TaskItem
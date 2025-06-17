import React, {useContext, useEffect, useState} from "react";
import {Task} from "@/interfaces/task";
import {StyledTaskItem} from "@/styles/comonents/calendar/StyledTaskItem";
import TextFieldClean from "@/components/inputs/TextFieldClean";
import Button from "@/components/Button";
import {IconSave} from "@/components/icons/IconSave";
import {IconTrash} from "@/components/icons/IconTrash";
import {deleteTask, updateTask} from "@/api/task";
import {TasksContext} from "@/components/Layout";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

type TaskItemProps = {
  task: Task,
}

const TaskItem = ({task}: TaskItemProps) => {
  const [isChange, setIsChange] = useState(false);
  const [value, setValue] = useState(task.title);
  const {tasks, setTasks} = useContext(TasksContext)
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  useEffect(() => {
    setValue(task.title);
  }, [task]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    setIsChange(true);
  }

  const handleSave = async (e: any) => {
    e.stopPropagation();

    const newTasks = [...tasks]
    newTasks[tasks.findIndex((item) => item.id === task.id)] = {...task, title: value};

    await updateTask({...task, title: value});
    setTasks(newTasks)
    setIsChange(false);
  }

  const handleRemove = async (e: any) => {
    e.stopPropagation();

    const newTasks = [...tasks]
    newTasks.splice(tasks.findIndex((item) => item.id === task.id), 1);
    setTasks(newTasks)
    await deleteTask(task.id)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <StyledTaskItem style={isDragging ? {opacity: .5} : {}}>
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
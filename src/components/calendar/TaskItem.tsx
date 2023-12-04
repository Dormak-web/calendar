import React, {useEffect, useState} from "react";
import {StyledTaskItem} from "styles/components/calendar/StyledTaskItem";
import {Task} from "interfaces/task";
import TextFieldClean from "components/inputs/TextFieldClean";
import Button from "components/Button";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {IconSave, IconTrash} from "components/icons";
import TaskItemTags from "components/calendar/TaskItemTags";


type TaskItemProps = {
  task: Task,
  onRemove: Function,
  onSave: Function,
  onClick: Function
}

const TaskItem = ({task, onRemove, onSave, onClick}: TaskItemProps) => {
  const [isChange, setIsChange] = useState(false);
  const [value, setValue] = useState(task.title);

  useEffect(() => {
    setValue(task.title);
  }, [task]);


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

  const handleChange = (e: any) => {
    setValue(e.target.value);
    setIsChange(true);
  }

  const handleSave = (e: any) => {
    e.stopPropagation();

    onSave({
      ...task,
      title: value
    })
    setIsChange(false);
  }

  const handleRemove = (e: any) => {
    e.stopPropagation();
    onRemove(task)
  }


  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative
      "
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"

    >
      <StyledTaskItem onClick={() => onClick(task)}>
        <TaskItemTags tags={task.tags}/>

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
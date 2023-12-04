import React, {useState} from "react";
import TextField from "components/inputs/TextField";
import {StyledTaskForm} from "styles/forms/StyledTaskForm";
import InputLabel from "components/InputLabel";
import TextMultiSelect from "components/inputs/TextMultiSelect";
import {Task} from "interfaces/task";
import {Tag} from "interfaces/tag";
import Button from "components/Button";

type TaskFormProps = {
  task: Task,
  tags: Tag[],
  onSave: (task: Task) => void,
}

const TaskForm = ({task, tags, onSave}: TaskFormProps) => {
  const [title, setTitle] = useState(task?.title || '')
  const [taskTags, setTaskTags] = useState(task.tags || []);

  const handleSave = () => {
    onSave({
      id: task.id,
      date: task.date,
      title: title,
      tags: taskTags,
    })
  }

  return (
    <StyledTaskForm>
      <TextField label='Title' value={title} onChange={setTitle}/>
      <InputLabel label='Tags'>
        <TextMultiSelect value={taskTags} onChange={setTaskTags} options={tags}/>
      </InputLabel>
      <Button onClick={handleSave}>Save</Button>
    </StyledTaskForm>
  )
}

export default TaskForm
import React, {useEffect, useState} from "react";
import Layout from "components/Layout";
import CalendarHead from "components/calendar/CalendarHead";
import {Day} from "interfaces/calendar";
import {Task} from "interfaces/task";
import {addTask, editTask, getCalendarMonth, getNewDayId, getNewTaskId, removeTask} from "utils/calendar";
import {Months} from "constants/calendar";
import CalendarBody from "components/calendar/CalendarBody";
import Sidebar from "components/sidebar/Sidebar";
import TaskForm from "components/forms/TaskForm";
import {SidebarType} from "constants/sidebar";
import TagForm from "components/forms/TagForm";
import {Tag} from "interfaces/tag";

const CalendarPage = () => {

  const [calendar, setCalendar] = useState<Day[][]>([])
  const [month, setMonth] = useState('');
  const [date, setDate] = useState(new Date());
  const [openSidebar, setOpenSidebar] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);

  const [openTask, setOpenTask] = useState<Task>();



  useEffect(() => {
    setCalendar(getCalendarMonth(date))
    setMonth(`${Months[date.getMonth()]} ${date.getFullYear()}`)

  }, [date])

  const onToday = () => {
    setDate(new Date())
  }

  const onChangeMonth = (n: number) => {
    let newDate = date;
    newDate.setMonth(newDate.getMonth() + n)
    setDate(new Date(newDate));
  }

  const onCreate = (date: Date) => {
    const newTask: Task = {
      id: getNewTaskId(),
      dayId: getNewDayId(),
      title: '',
      tags: [],
      date
    };
    const newState = addTask(newTask, calendar);
    setCalendar([...newState])
  }

  const onRemove = (task: Task) => {
    const newState = removeTask(task, calendar);
    setCalendar([...newState])
  }

  const onSave = (task: Task) => {
    console.log('C! task', task)
    const newState = editTask(task, calendar)
    setCalendar([...newState])
  }

  const onClickTask = (task: Task) => {
    setOpenTask(task);
    setOpenSidebar(SidebarType.Task);
  }

  const onAddTag = (newTag: Tag) => {
    const arr = [...tags];
    arr.push(newTag)

    setTags([...arr])
  }

  const onSaveTag = (tag: Tag) => {
    const arr = [...tags];
    const index = tags.findIndex((t) => t.id === tag.id)
    arr[index] = tag;

    setTags([...arr])
  }

  const onRemoveTag = (id: String) => {
    const arr = [...tags];
    const index = tags.findIndex((t) => t.id === id);
    arr.splice(index, 1);

    setTags([...arr])
  }


  return (
    <>
      <Layout
        head={
          <CalendarHead
            month={month}
            onChangeMonth={onChangeMonth}
            onToday={onToday}
            onOpenTagSidebar={setOpenSidebar}
          />
        }
        body={
          <CalendarBody
            calendar={calendar}
            date={date}
            onCreate={onCreate}
            onRemove={onRemove}
            onSave={onSave}
            onClickTask={onClickTask}
          />
        }
        sidebar={
          <Sidebar
            open={!!openSidebar}
            onClose={() => setOpenSidebar('')}
            title={openSidebar}
          >
            {openSidebar === SidebarType.Task && openTask && <TaskForm task={openTask} tags={tags} onSave={onSave}/>}
            {openSidebar === SidebarType.Tag && <TagForm tags={tags} onAddTag={onAddTag} onSave={onSaveTag} onRemove={onRemoveTag}/>}

          </Sidebar>
        }
      />
    </>
  )
}

export default CalendarPage
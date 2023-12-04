import React, {useEffect, useState} from "react";
import Layout from "components/Layout";
import CalendarHead from "components/calendar/CalendarHead";
import {Day, FilterOptions} from "interfaces/calendar";
import {Task} from "interfaces/task";
import {
  addTask,
  editTask,
  exportJSON,
  fetchTasks,
  filter,
  getCalendarMonth,
  getNewTaskId,
  importJSON,
  removeTask
} from "utils/calendar";
import {Months} from "constants/calendar";
import CalendarBody from "components/calendar/CalendarBody";
import Sidebar from "components/sidebar/Sidebar";
import TaskForm from "components/forms/TaskForm";
import {SidebarType} from "constants/sidebar";
import TagForm from "components/forms/TagForm";
import {Tag} from "interfaces/tag";
import FilterForm from "components/forms/FilterForm";
import ImportExportForm from "components/forms/ImportExportForm";
import html2canvas from "html2canvas";
import {Holiday} from "interfaces/holiday";

const CalendarPage = () => {
  const [calendar, setCalendar] = useState<Day[][]>([])
  const [month, setMonth] = useState('');
  const [date, setDate] = useState(new Date());
  const [openSidebar, setOpenSidebar] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [printRef, setPrintRef] = useState<any>();
  const [openTask, setOpenTask] = useState<Task>();

  useEffect(()  => {
    fetch(`https://date.nager.at/api/v3/PublicHolidays/${date.getFullYear()}/UA`)
      .then(res => res.json())
      .then(
        (result) => {
          setHolidays(result.map((day: any) => ({date: new Date(day.date), title: day.localName})));
        },
        (error) => {
          console.error(error);
        }
      )
  }, [date]);

  useEffect(() => {
    setCalendar(fetchTasks(tasks, holidays, getCalendarMonth(date)))

    setMonth(`${Months[date.getMonth()]} ${date.getFullYear()}`)
  }, [date, tasks, holidays])

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
      title: '',
      tags: [],
      date
    };
    const [newTasks, newCalendar]: any = addTask(newTask, tasks, calendar);

    setTasks([...newTasks]);
    setCalendar([...newCalendar]);
  }

  const onRemove = (task: Task) => {
    const [newTasks, newCalendar]: any = removeTask(task, tasks, calendar);

    setTasks([...newTasks]);
    setCalendar([...newCalendar]);
  }

  const onSave = (task: Task) => {
    const [newTasks, newCalendar]: any = editTask(task, tasks, calendar);

    setTasks([...newTasks]);
    setCalendar([...newCalendar]);
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

  const onFilter = (options: FilterOptions) => {
    const newCalendar = filter(options, tasks, holidays, date);
    setCalendar([...newCalendar])
  }

  const onExport = () => {
    exportJSON(tasks, tags);
  }

  const onExportToPNG = async () => {
    const element = printRef.current;

    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const getRef = (ref: any) => {
    setPrintRef(ref)
  }


  const onImport = (fileJSON: any) => {
    const [newTasks, newTags, newCalendar] = importJSON(fileJSON, holidays, date);

    setTasks([...newTasks]);
    setTags([...newTags]);
    setCalendar([...newCalendar]);
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
            tasks={tasks}
            setTasks={setTasks}
            calendar={calendar}
            date={date}
            onCreate={onCreate}
            onRemove={onRemove}
            onSave={onSave}
            onClickTask={onClickTask}
            getRef={getRef}
          />
        }
        sidebar={
          <Sidebar
            open={!!openSidebar}
            onClose={() => setOpenSidebar('')}
            title={openSidebar}
          >
            {openSidebar === SidebarType.Task && openTask && <TaskForm task={openTask} tags={tags} onSave={onSave}/>}
            {openSidebar === SidebarType.Tag &&
              <TagForm tags={tags} onAddTag={onAddTag} onSave={onSaveTag} onRemove={onRemoveTag}/>}
            {openSidebar === SidebarType.Filter && <FilterForm tags={tags} onFilter={onFilter}/>}
            {openSidebar === SidebarType.ImportExport &&
              <ImportExportForm onExport={onExport} onExportToPNG={onExportToPNG} onImport={onImport}/>}


          </Sidebar>
        }
      />
    </>
  )
}

export default CalendarPage
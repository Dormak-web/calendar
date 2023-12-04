import {Task} from "interfaces/task";
import {Day, FilterOptions} from "interfaces/calendar";
import {Tag} from "interfaces/tag";
import {Holiday} from "interfaces/holiday";

let taskId = 0;
let tagId = 0;

export function getCalendarMonth(date: Date) {

  date.setDate(1); // C?
  let allMonth: Day[][] = [[], [], [], [], []]
  const day = date.getDay()

  let count = (day - 1) * -1;
  let countDate: Date = new Date();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      countDate = new Date(date.getFullYear(), date.getMonth(), count);

      allMonth[i].push({
        id: `day-${countDate.getDate()}-${countDate.getMonth()}`,
        date: countDate,
        dayMonth: countDate.getDate(),
        tasks: [],
        holidays: []
      })
      count++;
    }

  }

  return allMonth;
}

export function addTask(newTask: Task, tasks: Task[], calendar: Day[][]) {
  const j = newTask.date?.getDay();
  if (j === undefined) {
    console.error('Not found j')
    return [tasks, calendar]
  }

  calendar.map((row) => {
    if (compareTwoDate(row[j].date, newTask.date)) {
      row[j].tasks.unshift(newTask)
      tasks.push(newTask)
    }
  })

  return [tasks, calendar]
}

function compareTwoDate(d1: Date, d2: Date) {
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth()
}

export function fetchTasks(tasks: Task[], holidays: Holiday[], calendar: Day[][]) {
  tasks.forEach((task) => {
    const j = task.date.getDay()
    const row = calendar.find((day) => compareTwoDate(day[j].date, task.date));
    if (row) row[j].tasks.push(task);
  })

  holidays.forEach((holiday: Holiday) => {
    const j = holiday.date.getDay()
    const row = calendar.find((day) => compareTwoDate(day[j].date, holiday.date));
    if (row) row[j].holidays.push(holiday);
  })

  return calendar
}

export function filter(options: FilterOptions, tasks: Task[], holidays: Holiday[], date: Date): Day[][] {
  let newTasks = [...tasks]

  if (options.search) {
    newTasks = newTasks.filter(task => task.title?.toLowerCase().match(options.search.toLowerCase()))
  }

  newTasks = newTasks.filter(task => {
    for (let k = 0; k < options.tags.length; k++) {
      const index = task.tags.findIndex(tag => tag.id === options.tags[k].id);

      if (index === -1) return false;
    }

    return true
  })


  return fetchTasks(newTasks, holidays, getCalendarMonth(date))
}

export function removeTask(task: Task, tasks: Task[], calendar: Day[][]) {
  const j = task.date?.getDay();

  if (j === undefined) {
    console.error('Not found j')
    return [tasks, calendar]
  }

  const i = calendar.findIndex(row => compareTwoDate(row[j].date, task.date));
  const arr = calendar[i][j].tasks;

  arr.splice(arr.findIndex((fTask) => fTask.id === task.id), 1);

  tasks.splice(tasks.findIndex((fTask) => fTask.id === task.id), 1);
  return [tasks, calendar]
}


export function editTask(task: Task, tasks: Task[], calendar: Day[][]) {
  const j = task.date?.getDay();

  if (j === undefined) {
    console.error('Not found j')
    return [tasks, calendar]
  }

  const i = calendar.findIndex(row => row[j].dayMonth === task.date?.getDate());
  const arr = calendar[i][j].tasks;

  const taskIndex = arr.findIndex((fTask) => fTask.id === task.id)
  arr[taskIndex] = task;

  const allTasksIndex = tasks.findIndex(fTask => fTask.id === task.id)
  tasks[allTasksIndex] = task;

  return [tasks, calendar]
}

export function exportJSON(tasks: Task[], tags: Tag[]) {
  const data = JSON.stringify({
    tasks: JSON.stringify(tasks),
    tags: JSON.stringify(tags)
  })

  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(data)}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "data.json";

  link.click();
}

export function importJSON(data: any, holidays: Holiday[], date: Date) {
  const parseDate = JSON.parse(data)
  let tasks = JSON.parse(parseDate.tasks);
  let tags = JSON.parse(parseDate.tags);

  console.log(data.tasks, data.tags)

  tasks = tasks.map((task: Task) => ({...task, date: new Date(task.date)}))

  return [tasks, tags, fetchTasks(tasks, holidays, getCalendarMonth(date))]
}

export function getNewTaskId(): string {
  taskId++
  return 'task-' + taskId;
}

export function getNewTagId(): string {
  tagId++
  return 'tag-' + tagId;
}
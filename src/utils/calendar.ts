import {Task} from "interfaces/task";
import {Day} from "interfaces/calendar";

let taskId = 0;
let dayId = 0;
let tagId = 0;


const allTasks: Task[] = [] // @todo useState

export function getCalendarMonth(date: Date): Day[][] {
  // @todo add interfaces and refactoring

  date.setDate(1); // C?
  let allMonth: Day[][] = [[], [], [], [], []]
  const day = date.getDay()

  let count = (day - 1) * -1;
  let countDate: Date = new Date();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      countDate = new Date(date.getFullYear(), date.getMonth(), count);

      allMonth[i].push({
        date: countDate,
        dayMonth: countDate.getDate(),
        tasks: []
      })
      count++;
    }
  }
  allMonth = fetch(allTasks, allMonth)

  return allMonth;
}

export function addTask(newTask: Task, state: Day[][]) {
  const j = newTask.date?.getDay();
  if (j === undefined) {
    console.error('Not found j')
    return state
  }

  state.map((row) => {
    if (compareTwoDate(row[j].date, newTask.date)) {
      row[j].tasks.unshift(newTask)
      allTasks.push(newTask)
    }
  })

  return state
}

function compareTwoDate(d1: Date, d2: Date) {
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth()
}

function fetch(tasks: Task[], state: Day[][]) {
  tasks.forEach((task) => {
    const j = task.date.getDay()
    const row = state.find((day) => compareTwoDate(day[j].date, task.date));
    if (row) row[j].tasks.push(task);
  })

  return state
}

export function removeTask(task: Task, state: Day[][]) {
  const j = task.date?.getDay();

  if (j === undefined) {
    console.error('Not found j')
    return state
  }

  const i = state.findIndex(row => compareTwoDate(row[j].date, task.date));
  const tasks = state[i][j].tasks;

  tasks.splice(tasks.findIndex((fTask) => fTask.id === task.id), 1);

  allTasks.splice(allTasks.findIndex((fTask) => fTask.id === task.id), 1);
  return state
}


export function editTask(task: Task, state: Day[][]) {
  const j = task.date?.getDay();

  if (j === undefined) {
    console.error('Not found j')
    return state
  }

  const i = state.findIndex(row => row[j].dayMonth === task.date?.getDate());
  const tasks = state[i][j].tasks;

  const taskIndex = tasks.findIndex((fTask) => fTask.id === task.id)
  tasks[taskIndex] = task;

  const allTasksIndex = allTasks.findIndex(fTask => fTask.id === task.id)
  allTasks[allTasksIndex] = task;

  return state

}

export function showAllTasks() {
  console.log('C! allTas', allTasks)
}

export function getNewTaskId(): string {
  taskId++
  return 'task-' + taskId;
}
export function getNewDayId(): string {
  dayId++
  return 'day-' + dayId;
}

export function getNewTagId(): string {
  tagId++
  return 'tag-' + tagId;
}
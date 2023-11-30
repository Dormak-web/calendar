import {Task} from "interfaces/task";
import {Day} from "interfaces/calendar";

let taskId = 0;

const allTasks: Task[] = []

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

  return allMonth;
}

export function addTask(newTask: Task, state: Day[][]) {
  const j = newTask.date?.getDay();
  if (j === undefined) {
    console.error('Not found j')
    return state
  }

  state.map((row) => {
    if (row[j].dayMonth === newTask.date?.getDate()) {
      row[j].tasks.unshift(newTask)
      allTasks.push(newTask)
    }
  })

  return state
}

export function removeTask(task: Task, state: Day[][]) {
  const j = task.date?.getDay();

  if (j === undefined) {
    console.error('Not found j')
    return state
  }

  const i = state.findIndex(row => row[j].dayMonth === task.date?.getDate());
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

function getTasks(day: number): Task[] {
  // @todo remove
  switch (day) {
    case 1:
      return [{id: 'cons-1', title: 'task 1', tags: ['tag1']}]
    case 12:
      return [{id: 'cons-2', title: 'task 2'}, {id: 'cons-3', title: 'task 3'}, {id: 'cons-4', title: 'task 4'}]
    case 26:
      return [{id: 'cons-5', title: 'task 5'}, {id: 'cons-6', title: 'task 6'}]
    default:
      return []
  }
}

export function getNewId(): string {
  taskId++
  return 'task-' + taskId;
}
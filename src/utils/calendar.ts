import {Task} from "interfaces/task";
import {Day} from "interfaces/calendar";

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
        tasks: getTasks(countDate.getDate())
      })

      count++;
    }
  }

  return allMonth;
}


function getTasks(day: number): Task[] {
  switch (day) {
    case 1:
      return [{title: 'task 1', tags: ['tag1']}]
    case 12:
      return [{title: 'task 2'}, {title: 'task 3'}, {title: 'task 4'}]
    case 26:
      return [{title: 'task 5'}, {title: 'task 6'}]
    default:
      return []
  }
}
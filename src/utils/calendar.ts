import {Day} from "@/interfaces/calendar";
import {Task} from "@/interfaces/task";
import {Holiday} from "@/interfaces/holiday";

export function getCalendarMonth(date: Date) {

  date.setDate(1); // C?
  let allMonth: Day[][] = [];
  const day = date.getDay()

  let count = (day - 1) * -1;
  const a = new Date(date)
  a.setMonth(a.getMonth() + 1)
  a.setDate(0)

  let rowsLength = Math.ceil((day + a.getDate()) / 7)

  let countDate: Date = new Date();

  for (let i = 0; i < rowsLength; i++) {
    allMonth.push([])
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


function compareTwoDate(d1: Date | string, d2: Date | string) {
  if (typeof d1 === "string") d1 = new Date(d1);
  if (typeof d2 === "string") d2 = new Date(d2);

  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth()
}

export function mergeTasksAndHolidays(tasks: Task[], holidays: Holiday[], calendar: Day[][]) {
  tasks.forEach((task) => {
    const j = new Date(task.date).getDay()
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
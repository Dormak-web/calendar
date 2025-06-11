import {Day} from "@/interfaces/calendar";

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
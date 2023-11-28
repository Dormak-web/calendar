export function getCalendarMonth(date: Date) {
  // @todo add types and refactoring

  let arr: any[][] = [[], [], [], [], []]
  const day = date.getDay()

  let count = (day - 1) * -1;
  let countDate: Date = new Date();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      countDate = new Date(date.getFullYear(), date.getMonth(), count);

      arr[i].push({
        date: countDate,
        monthDay: countDate.getDate()
      })

      count++;
    }
  }

  return arr
}

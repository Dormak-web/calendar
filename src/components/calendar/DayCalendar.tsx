import React from "react";

const DayCalendar = ({day}: {day: any}) => {
  return (
    <div>
      {day.monthDay}
      {day.monthDay === 1 && <b> {day.date?.getMonth()} </b>}
    </div>
  )
}

export default DayCalendar
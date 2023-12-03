import React from "react";
import {Holiday} from "interfaces/holiday";
import HolidayItem from "components/calendar/HolidayItem";

type HolidayListProps = {
  holidays: Holiday[]
}

const HolidayList = ({holidays}: HolidayListProps) => {
  return (
    <div>
      {holidays.map(holiday => <HolidayItem holiday={holiday}/>)}
    </div>
  )
}

export default HolidayList
import React from "react";
import {Holiday} from "@/interfaces/holiday";
import {StyledTaskItem} from "@/styles/comonents/calendar/StyledTaskItem";


type HolidayItemProps = {
  holiday: Holiday,
}

const HolidayItem = ({holiday}: HolidayItemProps) => {
  return (
    <StyledTaskItem>
      {holiday.title}
    </StyledTaskItem>
  )
}

export default HolidayItem
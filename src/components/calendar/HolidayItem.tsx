import React from "react";
import {StyledTaskItem} from "styles/components/calendar/StyledTaskItem";
import {Holiday} from "interfaces/holiday";


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
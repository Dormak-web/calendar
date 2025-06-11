import React from "react";
import {
  StyledChangeMonthActions,
  StyledMonthCalendarHead,
  StyledMonthCalendarHeadTop
} from "@/styles/comonents/calendar/MonthCalendar";
import Button from "@/components/Button";
import {IconArrowUp} from "@/components/icons/IconArrowUp";
import {IconArrowDown} from "@/components/icons/IconArrowDown";

type CalendarHeadProps = {
  onToday: Function,
  onChangeMonth: Function,
  month: string
}

const CalendarHead = ({month, onToday, onChangeMonth}: CalendarHeadProps) => {

  return (
    <StyledMonthCalendarHead>
      <StyledMonthCalendarHeadTop>
        <div style={{display: "flex", alignItems: 'center'}}>
          <Button
            onClick={onToday}
          >
            today
          </Button>
          <StyledChangeMonthActions>
            <Button size='small' onClick={() => onChangeMonth(-1)}>
              <IconArrowUp/>
            </Button>

            <Button size='small' onClick={() => onChangeMonth(1)}>
              <IconArrowDown/>
            </Button>
          </StyledChangeMonthActions>
        </div>
        <b>{month}</b>
        <div className='actions'>

        </div>
      </StyledMonthCalendarHeadTop>
    </StyledMonthCalendarHead>
  )
}

export default CalendarHead

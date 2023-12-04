import React from "react";
import {
  StyledChangeMonthActions,
  StyledMonthCalendarHead,
  StyledMonthCalendarHeadTop
} from "styles/components/calendar/MonthCalendar";
import Button from "components/Button";
import {IconArrowDown, IconArrowUp} from "components/icons";
import {SidebarType} from "constants/sidebar";

type CalendarHeadProps = {
  onToday: Function,
  onChangeMonth: Function,
  onOpenTagSidebar: Function,
  month: string
}

const CalendarHead = ({month, onToday, onChangeMonth, onOpenTagSidebar}: CalendarHeadProps) => {

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
          <Button onClick={() => onOpenTagSidebar(SidebarType.ImportExport)}>Import\Export</Button>
          <Button onClick={() => onOpenTagSidebar(SidebarType.Tag)}>Tags</Button>
          <Button onClick={() => onOpenTagSidebar(SidebarType.Filter)}>Filter</Button>
        </div>
      </StyledMonthCalendarHeadTop>
    </StyledMonthCalendarHead>
  )
}

export default CalendarHead

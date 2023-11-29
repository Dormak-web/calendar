import React, {useEffect, useState} from "react";
import {getCalendarMonth} from "utils/calendar";
import {
  StyledChangeMonthActions,
  StyledMonthCalendarBody,
  StyledMonthCalendarBodyRow,
  StyledMonthCalendarContainer,
  StyledMonthCalendarHead,
  StyledMonthCalendarHeadCell,
  StyledMonthCalendarHeadRow,
  StyledMonthCalendarHeadTop
} from "styles/components/calendar/MonthCalendar";
import {Months, Week} from "constants/calendar";
import CalendarBodyCellTitle from "components/calendar/CalendarBodyCellTitle";
import TaskList from "components/calendar/TaskList";
import {Day} from "interfaces/calendar";
import Button from "components/Button";
import MonthCalendarBodyCell from "components/calendar/MonthCalendarBodyCell";

const MonthCalendar = () => {
  // @todo refactoring

  const [dates, setDates] = useState<Day[][]>([])
  const [month, setMonth] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDates(getCalendarMonth(date))
    setMonth(`${Months[date.getMonth()]} ${date.getFullYear()}`)

  }, [date])

  const handleToday = () => {
    setDate(new Date())
  }

  const handleChangeMonth = (n: number) => {
    let newDate = date;
    newDate.setMonth(newDate.getMonth() + n)
    setDate(new Date(newDate));
  }

  return (
    <StyledMonthCalendarContainer>
      <StyledMonthCalendarHead>
        <StyledMonthCalendarHeadTop>
          <div style={{display: "flex"}}>
            <Button
              onClick={handleToday}
            >
              today
            </Button>
            <StyledChangeMonthActions>
              <Button onClick={() => handleChangeMonth(1)}>
                +
              </Button>

              <Button onClick={() => handleChangeMonth(-1)}>
                -
              </Button>
            </StyledChangeMonthActions>
          </div>
          <b>{month}</b>
          <div>
            <Button css={{marginRight: '$1'}}>week</Button>
            <Button>month</Button>
          </div>
        </StyledMonthCalendarHeadTop>
        <StyledMonthCalendarHeadRow>
          {Week.map(day =>
            <StyledMonthCalendarHeadCell>
              {day}
            </StyledMonthCalendarHeadCell>
          )}
        </StyledMonthCalendarHeadRow>
      </StyledMonthCalendarHead>

      <StyledMonthCalendarBody>
        {dates.map(row =>
          <StyledMonthCalendarBodyRow>
            {row.map((item: any) =>
              <MonthCalendarBodyCell>
                <CalendarBodyCellTitle day={item.dayMonth} length={item.tasks.length}/>

                <TaskList tasks={item.tasks}/>
              </MonthCalendarBodyCell>
            )}
          </StyledMonthCalendarBodyRow>
        )}
      </StyledMonthCalendarBody>

    </StyledMonthCalendarContainer>
  )
}

export default MonthCalendar
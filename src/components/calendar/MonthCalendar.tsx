import React, {useEffect, useState} from "react";
import {addTask, editTask, getCalendarMonth, getNewId, removeTask} from "utils/calendar";
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
import {Day} from "interfaces/calendar";
import Button from "components/Button";
import MonthCalendarBodyCell from "components/calendar/MonthCalendarBodyCell";
import CalendarDay from "components/calendar/CalendarDay";
import {Task} from "interfaces/task";

const MonthCalendar = () => {
  // @todo refactoring

  const [calendar, setCalendar] = useState<Day[][]>([])
  const [month, setMonth] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setCalendar(getCalendarMonth(date))
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

  const onCreate = (date: Date) => {
    const newTask: Task = {
      id: getNewId(),
      title: '',
      tags: [],
      date
    };
    const newState = addTask(newTask, calendar);
    setCalendar([...newState])
  }

  const onRemove = (task: Task) => {
    const newState = removeTask(task, calendar);
    setCalendar([...newState])
  }

  const onSave = (task: Task) => {
    const newState = editTask(task, calendar)
    setCalendar([...newState])
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
        {calendar.map(row =>
          <StyledMonthCalendarBodyRow>
            {row.map((item: Day) =>
              <MonthCalendarBodyCell>
                <CalendarDay
                  item={item}
                  onCreate={onCreate}
                  onRemove={onRemove}
                  onSave={onSave}
                />
              </MonthCalendarBodyCell>
            )}
          </StyledMonthCalendarBodyRow>
        )}
      </StyledMonthCalendarBody>

    </StyledMonthCalendarContainer>
  )
}

export default MonthCalendar
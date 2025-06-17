import React, {useContext, useState} from "react";
import {
  StyledChangeMonthActions,
  StyledMonthCalendarHead,
  StyledMonthCalendarHeadActions,
  StyledMonthCalendarHeadTop
} from "@/styles/comonents/calendar/MonthCalendar";
import Button from "@/components/Button";
import {IconArrowUp} from "@/components/icons/IconArrowUp";
import {IconArrowDown} from "@/components/icons/IconArrowDown";
import TextField from "@/components/inputs/TextField";
import {IconClose, IconSearch} from "@/components/icons";
import {searchTask} from "@/api/task";
import {TasksContext} from "@/components/Layout";

type CalendarHeadProps = {
  onToday: Function,
  onChangeMonth: Function,
  month: string
}

const CalendarHead = ({month, onToday, onChangeMonth}: CalendarHeadProps) => {
  const {setTasks} = useContext(TasksContext)
  const [search, setSearch] = useState("");

  const handleSearch = async (e: any) => {
    e.stopPropagation();

    const res = await searchTask(search)
    setTasks(res.data)
  }

  const handleClear = async (e: any) => {
    e.stopPropagation();
    setSearch("")
    const res = await searchTask("")
    setTasks(res.data)
  }

  return (
    <StyledMonthCalendarHead>
      <StyledMonthCalendarHeadTop>
        <StyledMonthCalendarHeadActions>
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
        </StyledMonthCalendarHeadActions>
        <b>{month}</b>
        <StyledMonthCalendarHeadActions>
          <TextField label="Search" value={search} onChange={setSearch}/>
          <Button onClick={handleSearch}>
            <IconSearch/>
          </Button>
          <Button onClick={handleClear}>
            <IconClose/>
          </Button>
        </StyledMonthCalendarHeadActions>
      </StyledMonthCalendarHeadTop>
    </StyledMonthCalendarHead>
  )
}

export default CalendarHead

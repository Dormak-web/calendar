'use client'

import React, {createContext, useEffect, useState} from "react";
import {Day} from "@/interfaces/calendar";
import {Task} from "@/interfaces/task";
import {Holiday} from "@/interfaces/holiday";
import {getCalendarMonth, mergeTasksAndHolidays} from "@/utils/calendar";
import {Months} from "@/constants/calendar";
import CalendarHead from "@/components/CalendarHead";
import CalendarBody from "@/components/calendar/CalendarBody";
import {StyledLayout, StyledLayoutBody, StyledLayoutHead} from "@/styles/comonents/StyledLayout";
import {fetchHolidays} from "@/api/holidays";
import {fetchTask} from "@/api/task";

export const TasksContext = createContext<{ tasks: Task[], setTasks: (tasks: Task[]) => any }>({
  tasks: [],
  setTasks: () => {
  }
})

export default function Layout() {
  const [calendar, setCalendar] = useState<Day[][]>([])
  const [month, setMonth] = useState('');
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [holidays, setHolidays] = useState<Holiday[]>([]);


  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const resHolidays = await fetchHolidays(date.getFullYear())
      setHolidays(resHolidays.map((day: any) => ({date: new Date(day.date), title: day.localName})));
    }

    fetchData()
    return () => controller.abort();
  }, [date]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const resTasks = await fetchTask()
      if (Array.isArray(resTasks?.data)) {
        setTasks(resTasks.data)
      } else {
        setTasks([])
      }
    }

    fetchData()
    return () => controller.abort();
  }, [])

  useEffect(() => {
    setCalendar(mergeTasksAndHolidays(tasks, holidays, getCalendarMonth(date)))
    setMonth(`${Months[date.getMonth()]} ${date.getFullYear()}`)
  }, [tasks, holidays])

  const onToday = () => {
    setDate(new Date())
  }

  const onChangeMonth = (n: number) => {
    let newDate = date;
    newDate.setMonth(newDate.getMonth() + n)
    setDate(new Date(newDate));
  }

  return (
    <TasksContext.Provider value={{tasks, setTasks}}>
      <StyledLayout>
        <StyledLayoutHead>
          <CalendarHead
            month={month}
            onChangeMonth={onChangeMonth}
            onToday={onToday}
          />
        </StyledLayoutHead>
        <StyledLayoutBody>
          <CalendarBody
            calendar={calendar}
            date={date}
          />
        </StyledLayoutBody>
      </StyledLayout>
    </TasksContext.Provider>
  )
}

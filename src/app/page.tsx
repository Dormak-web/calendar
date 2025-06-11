'use client'

import React, {useEffect, useState} from "react";
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

export default function Home() {
  const [calendar, setCalendar] = useState<Day[][]>([])
  const [month, setMonth] = useState('');
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    // TODO optimize fetch holidays and tasks
    // - need loading all holidays on year?
    // - need loading all tasks?
    // - add filter by month or load all items but one time
    const controller = new AbortController();

    const fetchData = async () => {
      const resHolidays = await fetchHolidays(date.getFullYear())
      setHolidays(resHolidays.map((day: any) => ({date: new Date(day.date), title: day.localName})));

      // C!
      const resTasks = await fetchTask()
      setTasks(resTasks.data)
      console.log('C! tasks', resTasks, resHolidays)
    }

    fetchData()
    return () => controller.abort();
  }, [date]);

  useEffect(() => {
  }, []);

  useEffect(() => {
    console.log('C! useEffect #1')
    setCalendar(mergeTasksAndHolidays(tasks, holidays, getCalendarMonth(date)))
    setMonth(`${Months[date.getMonth()]} ${date.getFullYear()}`)
  }, [date, tasks, holidays])

  const onToday = () => {
    setDate(new Date())
  }

  const onChangeMonth = (n: number) => {
    let newDate = date;
    newDate.setMonth(newDate.getMonth() + n)
    setDate(new Date(newDate));
  }

  return (
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
  )
}

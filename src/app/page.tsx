'use client'

import React, {useEffect, useState} from "react";
import {Day} from "@/interfaces/calendar";
import {getCalendarMonth} from "@/utils/calendar";
import {Months} from "@/constants/calendar";
import CalendarHead from "@/components/CalendarHead";
import CalendarBody from "@/components/calendar/CalendarBody";
import {StyledLayout, StyledLayoutBody, StyledLayoutHead} from "@/styles/comonents/StyledLayout";

export default function Home() {
  const [calendar, setCalendar] = useState<Day[][]>([])
  const [month, setMonth] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
  }, []);

  useEffect(() => {
    setCalendar(getCalendarMonth(date))
    setMonth(`${Months[date.getMonth()]} ${date.getFullYear()}`)
  }, [date])

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

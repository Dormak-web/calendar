import {Task} from "interfaces/task";

export interface Day {
  date: Date,
  dayMonth: number,
  tasks: Task[],
}
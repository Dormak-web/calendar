import {Task} from "@/interfaces/task";
import {Holiday} from "@/interfaces/holiday";

export interface Day {
  id: string,
  date: Date,
  dayMonth: number,
  tasks: Task[],
  holidays: Holiday[],
}

export type FilterOptions = {
  search: string,
}
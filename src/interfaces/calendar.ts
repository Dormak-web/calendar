import {Task} from "interfaces/task";
import {Tag} from "interfaces/tag";
import {Holiday} from "interfaces/holiday";

export interface Day {
  date: Date,
  dayMonth: number,
  tasks: Task[],
  holidays: Holiday[],
}

export type FilterOptions = {
  search: string,
  tags: Tag[]
}
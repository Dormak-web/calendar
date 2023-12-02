import {Tag} from "interfaces/tag";

export type Task = {
  id: string,
  dayId: string,
  title?: string,
  tags: Tag[],
  date: Date,
}


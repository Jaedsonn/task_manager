import { Status } from "../types/types";

export interface ITask {
  taskId: string;
  task_description: string;
  user: string;
  status: Status;
}

export class Task implements ITask {
  taskId: string;
  task_description: string;
  user: string;
  status: Status;

  constructor(
    taskId: string,
    task_description: string,
    user: string,
    status: Status
  ) {
    this.taskId = taskId;
    this.task_description = task_description;
    this.user = user;
    this.status = status;
  }
}

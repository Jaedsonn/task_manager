import { Task } from "./TaskModel";

export interface IUser {
  username: string;
  email: string;
  password: string;
  tasks: Task[];
}

export class User implements IUser {
  username: string;
  email: string;
  password: string;
  tasks: Task[];

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.tasks = [];
  }

  async register(req: Request, Request: unknown, res: Response) {
    const username = this.username;
    const email = this.email;
    const password = this.password;
    const tasks = this.tasks;
    const user = { username, email, password, tasks };
    return user
  }
}

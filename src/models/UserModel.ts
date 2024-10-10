import { Task } from "./TaskModel";
import { Response, Request } from "express";

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

  constructor() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.tasks = [];
  }

  async register(req: Request, res: Response): Promise<User | void> {
    const { username, email, password } = req.body;
    res.status(200).json({ username, email, password });
  }
}

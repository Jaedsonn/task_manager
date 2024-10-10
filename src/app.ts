import express from "express";
import { config } from "dotenv";
import { User } from "./models/UserModel";

config();

const app = express();
const port = process?.env.PORT;

app.use(express.json());

const user = new User("jaedson", "jaedson@gmail.com", "admin123");

app.get("/user", user.register(req:Request, res:Response));

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});

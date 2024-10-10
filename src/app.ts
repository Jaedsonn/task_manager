import express from "express";
import { config } from "dotenv";
import { User } from "./models/UserModel";
import { Response, Request } from "express";

config();

const app = express();
const port = process?.env.PORT;

app.use(express.json());

app.get("/user", (req: Request, res: Response) => {
  const user = new User().register(req, res);
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});

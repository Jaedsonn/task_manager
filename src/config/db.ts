import myslq from "mysql2";
import { config } from "dotenv";
config();

export const connection = myslq.createConnection({
  host: process?.env?.DATABASE_HOST,
  database: process?.env?.DATABASE,
  user: process?.env.DATABASE_USER,
  password: process?.env.DATABASE_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL: ", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

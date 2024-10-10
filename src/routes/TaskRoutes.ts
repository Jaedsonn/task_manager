import { Router } from "express";

const router = Router();

router.post("/task/create");
router.put("/task/update/:id");
router.delete("/task/delete/:id");
router.get("/tasks");
// Não precisa criar uma rota para trazer uma task individual
// O tratamento disto será feito no frontend

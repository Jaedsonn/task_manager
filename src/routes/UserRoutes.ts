import { Router } from "express";

const router = Router();

router.post("/singup");
router.post("/login");
router.get("/tasks");
router.delete("/task/:id");

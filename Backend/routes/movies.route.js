import { Router } from "express";
import { createController, deleteController, getMeAllController, getMeController, updateController } from "../controllers/movies.controller.js";

const movieRoute = Router();

movieRoute.post("/", createController);
movieRoute.put("/:id", updateController);
movieRoute.delete("/:id", deleteController);
movieRoute.get("/:id", getMeController);
movieRoute.get("/getAll", getMeAllController);

export default movieRoute;
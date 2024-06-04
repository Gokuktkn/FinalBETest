import { Router } from "express";
import { createController, deleteController, getMeAllController, getMeController, updateController, uploadImgController } from "../controllers/movies.controller.js";
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { config } from "dotenv";

config();

cloudinary.config({
    cloud_name: `${process.env.CLOUD_NAME}`,
    api_key: `${process.env.CLOUD_KEY}`,
    api_secret: `${process.env.CLOUD_SECRET}`
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const movieRoute = Router();

movieRoute.post("/", createController);
movieRoute.put("/:id", updateController);
movieRoute.delete("/:id", deleteController);
movieRoute.get("/getMe/:id", getMeController);
movieRoute.get("/getAll", getMeAllController);
movieRoute.post("/upload", upload.single('file'), uploadImgController);

export default movieRoute;
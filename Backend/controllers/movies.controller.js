import MoviesModel from "../models/movies.model.js";
import movieService from "../services/movie.service.js";
import { v2 as cloudinary } from 'cloudinary';
import { config } from "dotenv";

config();

cloudinary.config({
    cloud_name: `${process.env.CLOUD_NAME}`,
    api_key: `${process.env.CLOUD_KEY}`,
    api_secret: `${process.env.CLOUD_SECRET}`
});

export const createController = async (req, res, next) => {
    const { ID, name, time, year, image, introduce } = req.body;
    const existingData = await MoviesModel.findOne({ ID });
    console.log(existingData)
    if (existingData) {
        return res.json({
            message: "ID movies already exist",
        });
    } else {
        await movieService.createData({ ID, name, time, year, image, introduce });
        return res.json({
            message: "Create Successfully",
        });
    }
};

export const updateController = async (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body;
    await movieService.updateData(id, updateData);
    return res.json({
        message: "Update Successfully",
    });
};

export const deleteController = async (req, res, next) => {
    const { id } = req.params;
    await movieService.deleteData(id);
    return res.json({
        message: "Delete Successfully",
    });
};

export const getMeController = async (req, res, next) => {
    const { id } = req.params;
    const result = await movieService.getData(id);
    return res.json({
        message: "Get me successfully",
        result,
    });
};

export const getMeAllController = async (req, res, next) => {
    const result = await movieService.getAllData();
    return res.json({
        message: "Get me all successfully",
        result,
    });
};

export const uploadImgController = async (req, res, next) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'Không có tệp được tải lên.' });
    }
    const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
    const fileName = file.originalname.split('.')[0];

    cloudinary.uploader.upload(dataUrl, {
        public_id: fileName,
        resource_type: 'auto',
    }, (err, result) => {
        if (result) {
            res.json({
                message: 'Tệp được tải lên thành công.', data: {
                    url: result.secure_url
                }
            });
            return;
        } else {
            res.json({
                message: err,
                data: null
            })
        }
    });
};
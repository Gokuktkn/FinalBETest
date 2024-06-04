import MoviesModel from "../models/movies.model.js";
import movieService from "../services/movie.service.js";

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
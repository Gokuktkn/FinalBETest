import MoviesModel from "../models/movies.model.js";

class MovieService {
    async getData(id) {
        const movie = await MoviesModel.findOne({ ID: id });
        return movie;
    }
    async getAllData() {
        const movie =  MoviesModel.find();
        return movie;
    }
    async createData(data) {
        await MoviesModel.create(data);
    }
    async updateData(id, updateData) {
        await MoviesModel.findByIdAndUpdate({ID : id}, { $set: updateData });
    }
    async deleteData(id) {
        await MoviesModel.findByIdAndDelete(id);
    }
}

const movieService = new MovieService();

export default movieService;
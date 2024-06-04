import MoviesModel from "../models/movies.model.js";

class MovieService {
    async getData(id) {
        const movie = await MoviesModel.findOne({ ID: id });
        return movie;
    }

    async getAllData() {
        const movies = await MoviesModel.find();
        return movies;
    }

    async createData(data) {
        await MoviesModel.create(data);
    }

    async updateData(id, updateData) {
        await MoviesModel.findOneAndUpdate({ ID: id }, { $set: updateData });
    }

    async deleteData(id) {
        await MoviesModel.findOneAndDelete({ ID: id });
    }

}

const movieService = new MovieService();

export default movieService;
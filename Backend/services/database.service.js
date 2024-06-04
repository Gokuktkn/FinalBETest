import mongoose from "mongoose";
import { config } from "dotenv";

config();

class DatabaseService {
  constructor() {
    this.uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@finalbetest.mdgsgo6.mongodb.net/?retryWrites=true&w=majority&appName=FinalBETest`;
  }
  async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log(`MongoDB connect successfully`);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;

import dotenv from 'dotenv';
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecoTasks';
export const PORT = process.env.PORT || 4000;

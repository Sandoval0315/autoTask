import express from 'express';
import taskRoutes from './src/routes/taskRoutes.js';
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const app = express();

const swaggerDocument = JSON.parse(
    fs.readFileSync(path.resolve("./sandoval-4e3-autoevaluacion-1.0.0-resolved.json"), "utf-8")
  );

app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;

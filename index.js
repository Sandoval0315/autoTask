import app from './app.js';
import connectDB from './database.js';
import { PORT } from './src/config.js';

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

startServer();

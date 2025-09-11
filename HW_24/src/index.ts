import express, { Request, Response, Application } from 'express';
import router from './routes/myRoutes.js';

process.loadEnvFile();

const PORT: string | number = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());

app.use(router);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
import express from 'express';
import router from './routes/myRoutes.js';
process.loadEnvFile();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import categoryRouter from "./routes/categories.js";
import productRouter from "./routes/products.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/categories", categoryRouter);
app.use("/products", productRouter);


app.listen(PORT, async () => {
try{
    await connectDB();
    console.log(`Server running http://localhost:${PORT}`);
} catch (error) {
    console.log('Database connection failed', error);
}   
});
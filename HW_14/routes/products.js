import { Router } from "express";
import Product from "../models/product.js";

const router = Router();

router.post("/", async (req, res) => {
    const {name, price, category} = req.body;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({message: "Category not found"});
        }
        const product = await Product.create({name, price, category});
        res.status(201).json({message: "Product created",product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await Product.find().populate("category").exec();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;
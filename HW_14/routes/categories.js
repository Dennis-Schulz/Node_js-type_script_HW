import express from "express";
import { Router } from "express";
import Category from "../models/category.js";

const router = Router();

router.post("/", async (req, res) => {
 const {name} = req.body;
 try {
    const category = await Category.create({name});
    res.status(201).json({message: "Category created",category});
 } catch (error) {
    res.status(500).json({message: error.message});
 }
});

router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;      

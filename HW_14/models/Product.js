import mongoose from "mongoose";

const productSchemsa = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
});

const Product = mongoose.model("Product", productSchemsa);

export default Product;
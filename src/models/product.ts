import mongoose from "mongoose";

export default mongoose.model(
    "Product",
    new mongoose.Schema({
        name: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        stock: { type: String, required: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    })
);

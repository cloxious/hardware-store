import mongoose from "mongoose";

export default mongoose.model(
    "Product",
    new mongoose.Schema({
        name: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        price: { type: Number, required: true, trim: true },
        stock: { type: Number, required: true, trim: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    })
);

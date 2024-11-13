import mongoose from "mongoose";

export default mongoose.model(
    "Review",
    new mongoose.Schema({
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, required: true, trim: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    })
);
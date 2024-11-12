import mongoose from "mongoose";

export default mongoose.model(
    "Order",
    new mongoose.Schema({
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }],
        total: { type: Number, required: true },
        status: { type: String, required: true, enum: ["pending", "completed"], default: "pending" },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    })
);

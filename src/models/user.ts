import mongoose from "mongoose";

export default mongoose.model(
    "User",
    new mongoose.Schema({
        name: { type: String, required: true, trim: true },
        surname: { type: String, required: true, trim: true },
        birthdate: { type: Date, required: true },
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true },
        role: {
            type: String,
            required: true,
            enum: ["admin", "employee", "customer"],
            default: "customer",
            trim: true,
        },
        status: { type: String, required: true, enum: ["active", "inactive"], default: "active", trim: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    })
);

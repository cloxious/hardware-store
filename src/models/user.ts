import mongoose from "mongoose";

export default mongoose.model(
    "User",
    new mongoose.Schema({
        name: { type: String, required: true },
        surname: { type: String, required: true },
        birthdate: { type: Date, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true, enum: ["admin", "employee", "customer"], default: "customer" },
        status: { type: String, required: true, enum: ["active", "inactive"], default: "active" },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    })
);

import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, lowercase: true},
    message: {type: String, required: true},
    subscribe: {type: Boolean, default: true},
    createdAt: {type: Date, dafault: Date.now}
});

export default mongoose.model("Contact", ContactSchema);
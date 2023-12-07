import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  email: { type: String, required: true },
  telephone: { type: String },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other", "N/A"],
    default: "N/A",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
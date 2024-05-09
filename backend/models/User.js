// User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Store base64 encoded image data
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "driver", "guide"], // Ensure role is one of these values
    },
    // Additional fields based on role
    aadharNumber: String,
    certificationAddress: String,
    licenceNumber: String,
    aadharFile: String,
    certificationFile: String,
    licenceFile: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

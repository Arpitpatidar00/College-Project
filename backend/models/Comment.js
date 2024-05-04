// backend/models/Comment.js
import mongoose from "mongoose";

// Comment model

const commentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

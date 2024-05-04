// backend/routes/comments.js
import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { userId, username, image, text } = req.body;

  try {
    // Create a new Comment document
    const comment = new Comment({
      userId,
      username,
      image,
      text,
    });

    // Save the comment to the database
    const newComment = await comment.save();

    // Respond with the newly created comment
    res.status(201).json(newComment);
  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message });
  }
});

export default router;


// routes/videos.js

import express from "express";
import { uploadVideo } from "../controllers/VideosController.js"; // Import the controller function

const router = express.Router();

// POST route to upload videos
router.post("/upload", uploadVideo);

export default router;

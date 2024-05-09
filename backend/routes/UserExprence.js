import express from "express";
import Image from "../models/UserExprence.js";

const router = express.Router();

// POST route to upload an image
router.post("/", async (req, res) => {
  try {
    const imageString = req.body.image; // Make sure it matches with the frontend

    // Create a new Image document
    const image = new Image({
      imageString: imageString,
    });

    // Save the image string to the database
    await image.save();

    res.status(200).json({ message: "Image string uploaded successfully" });
  } catch (error) {
    console.error("Error uploading image string:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to fetch all images
router.get("/uploadedImages", async (req, res) => {
  try {
    // Fetch all images from the database
    const images = await Image.find();

    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

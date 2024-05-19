// controllers/videos.js

import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";
import { Readable } from "stream";
import multer from "multer";
import Video from "../models/Videosmodels.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const conn = mongoose.connection;

let gfs;

conn.once("open", () => {
  // Init GridFS stream
  gfs = new GridFSBucket(conn.db, {
    bucketName: "videos",
  });
});

// Controller to upload videos
export const uploadVideo = async (req, res) => {
  try {
    const files = req.files;
    if (!files) {
      return res
        .status(400)
        .json({ success: false, message: "No files uploaded" });
    }

    const uploadPromises = files.map((file) => {
      const { title, description, buffer, mimetype } = file;

      const readableStream = new Readable();
      readableStream.push(buffer);
      readableStream.push(null);

      const writeStream = gfs.openUploadStream(title, {
        metadata: { description },
        contentType: mimetype,
      });

      return new Promise((resolve, reject) => {
        readableStream
          .pipe(writeStream)
          .on("error", reject)
          .on("finish", resolve);
      });
    });

    await Promise.all(uploadPromises);

    res
      .status(200)
      .json({ success: true, message: "Videos uploaded successfully" });
  } catch (error) {
    console.error("Error uploading videos:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to upload videos" });
  }
};

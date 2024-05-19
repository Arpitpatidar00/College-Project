// models/Video.js

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date, 
    default: Date.now,
  },
  length: {
    type: Number,
  },
  filename: {
    type: String,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
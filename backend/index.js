import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors' ;
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth.js';
import UserRoutes from './routes/users.js';
import reviewRoutes from './routes/Rating.js'; 
import Search from './routes/SearchImage.js';
import commentsRouter from './routes/CommentRoute.js'
import UserExprence from './routes/UserExprence.js'
import Guide from './routes/Guideresponse.js'

dotenv.config();
const app=express()
const PORT=process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB database connected');
  }) 
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors()); 
app.use(bodyParser())
app.use(cookieParser());

// Routes
app.use("/api/v1/users", UserRoutes);
app.use("/auth", authRoutes);
app.use("/api", reviewRoutes);
app.use("/add", Search);
app.use("/comments", commentsRouter);
app.use("/upload", UserExprence);
app.use("/submit", Guide);

// Error handler for PayloadTooLargeError
app.use((err, req, res, next) => {
  if (err instanceof express.PayloadTooLargeError) {
    res.status(413).send('Payload Too Large');
  } else {
    next(err);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log('Server listening on PORT ', PORT);
});

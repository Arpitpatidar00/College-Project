// models/Feedback.js

import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
    feedback: { type: String, required: true },
    userData: { type: Object, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;

import React, { useState } from 'react';
import './Feedback.css';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify'; // Importing toast from React Toastify

const Feedback = ({ isOpen, toggleModal }) => {
    const { userData } = useSelector((state) => state.auth);

    const [feedbackText, setFeedbackText] = useState('');

    const handleFeedbackChange = (event) => {
        setFeedbackText(event.target.value);
    };

    const handleSubmitFeedback = async () => {
        try {
            const response = await fetch('http://localhost:4000/Feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedback: feedbackText, userData: userData }),
            });

            if (response.ok) {
                // Feedback sent successfully, trigger success toast
                navigator('/home')
                toast.success('Feedback sent successfully');
            } else {
                // Handle errors or display error messages
                console.error('Failed to send feedback');
            }
        } catch (error) {
            console.error('Error sending feedback:', error);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="modal-bg">
                    <div className="modal-content">
                        <button className="close-btn" onClick={toggleModal}>X</button>
                        <h1 className="text-center text-xl font-bold ">Send Feedback</h1>
                        <textarea
                            placeholder="Your feedback..."
                            className="feedback-textarea"
                            value={feedbackText}
                            onChange={handleFeedbackChange}
                        ></textarea>
                        <button className="send-btn" onClick={handleSubmitFeedback}>Send Feedback</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Feedback;

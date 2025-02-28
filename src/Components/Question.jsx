import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../Data/Questions';
import { Modal, Button } from 'react-bootstrap';

const Question = () => {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState(""); // For validation error message

    const navigate = useNavigate(); // Hook to handle navigation

    const handleSelection = (index, option) => {
        setAnswers(prev => ({ ...prev, [index]: option }));
        setError(""); // Clear error message when a user selects an option
    };

    const handleFinalSubmission = () => {
        if (Object.keys(answers).length < quizData.length) {
            setError("⚠️ Please answer all questions before submitting!");
            return;
        }

        let totalScore = 0;
        quizData.forEach((question, index) => {
            if (answers[index] === question.answer) {
                totalScore += 1;
            }
        });

        setScore(totalScore);
        setShowPopup(true);
    };

    const handleRestart = () => {
        setShowPopup(false); // Close modal
        navigate('/'); // Redirect to login page
    };

    return (
        <>
            <div className="container p-4">
                {quizData.map((questionObj, index) => (
                    <div key={index} className="mb-4 p-3 border rounded">
                        <p className="fw-bold">{index + 1}. {questionObj.question}</p>
                        {questionObj.options.map((option, optIndex) => (
                            <div key={optIndex} className="form-check">
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    id={`q${index}-option${optIndex}`}
                                    className="form-check-input"
                                    onChange={() => handleSelection(index, option)}
                                />
                                <label htmlFor={`q${index}-option${optIndex}`} className="form-check-label">
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Error message for unanswered questions */}
                {error && <p className="text-danger text-center mt-3">{error}</p>}

                <div className="text-center mt-4">
                    <button 
                        className="btn btn-success"
                        onClick={handleFinalSubmission}
                    >
                        Submit All
                    </button>
                </div>
            </div>

            {/* Smart Score Popup with Restart Button */}
            <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Quiz Completed!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h4>Your Score: <strong>{score} / {quizData.length}</strong></h4>
                    <p>
                        {score === quizData.length ? "🎉 Perfect Score! You're a genius!" :
                         score >= quizData.length / 2 ? "😊 Well done! Keep practicing!" :
                         "😕 Keep learning! You'll do better next time!"}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowPopup(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleRestart}>
                        Restart Quiz
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Question;
import React, { useState, useEffect } from 'react';
import './Quiz.css';

import { questions } from '../../data.js';

function Quiz({ topic, onShowResult, onTimeUpdate }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      onTimeUpdate((prevTime) => {
        if (prevTime === 1) {
          onShowResult(score);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [score, onShowResult, onTimeUpdate]);

  const handleAnswer = (answer) => {
    if (answer === questions[topic][currentQuestion].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions[topic].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onShowResult(score);
    }
  };

  return (
    <div className="quiz">
      <h2>{topic.toUpperCase()} Quiz</h2>
      <div className="question-container">
        <h3>{questions[topic][currentQuestion].question}</h3>
        <div className="options">
          {questions[topic][currentQuestion].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
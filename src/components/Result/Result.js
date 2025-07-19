import React from 'react';
import './Result.css';

function Result({ score, onRestart }) {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <div className="score-card">
        <p>Your Score: {score}</p>
      </div>
      <button onClick={onRestart}>Retry Quiz</button>
    </div>
  );
}

export default Result;
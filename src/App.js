import React, { useState } from "react";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import "./App.css";
import Header from "./components/Header/Header.jsx";

import Toast from './components/Toast/Toast';
import { questions } from './data.js'; // Import questions to calculate initial time

function App() {
  const [screen, setScreen] = useState("home");
  const [topic, setTopic] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const clearToast = () => {
    setToast(null);
  };

  const startQuiz = (selectedTopic) => {
    setTopic(selectedTopic);
    setScreen("quiz");
    setTimeLeft(questions[selectedTopic].length * 10); // Initialize timer based on topic
  };

  const showResult = (finalScore) => {
    setScore(finalScore);
    setScreen("result");
    setTimeLeft(0); // Reset timer when quiz ends
  };

  const restartQuiz = () => {
    setScreen("home");
    setTopic("");
    setScore(0);
    setTimeLeft(0); // Reset timer on restart
  };

  return (
    <div className="App">
      <Header onLogoClick={restartQuiz} />
      {toast && <Toast message={toast.message} type={toast.type} onClose={clearToast} />}
      {screen === "quiz" && (
        <div className={`timer-display ${timeLeft <= 10 ? 'warning' : ''}`}>
          Time Left: {timeLeft}s
        </div>
      )}
      {screen === "home" && <Home onStart={startQuiz} showToast={showToast} />}
      {screen === "quiz" && <Quiz topic={topic} onShowResult={showResult} onTimeUpdate={setTimeLeft} />}
      {screen === "result" && <Result score={score} onRestart={restartQuiz} />}
    </div>
  );
}

export default App;
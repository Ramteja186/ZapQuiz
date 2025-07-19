import React, { useState } from "react";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import "./App.css";
import Header from "./components/Header/Header.jsx";

function App() {
  const [screen, setScreen] = useState("home");
  const [topic, setTopic] = useState("");
  const [score, setScore] = useState(0);

  const startQuiz = (selectedTopic) => {
    setTopic(selectedTopic);
    setScreen("quiz");
  };

  const showResult = (finalScore) => {
    setScore(finalScore);
    setScreen("result");
  };

  const restartQuiz = () => {
    setScreen("home");
  };

  return (
    <div className="App">
      <Header />
      {screen === "home" && <Home onStart={startQuiz} />}
      {screen === "quiz" && <Quiz topic={topic} onShowResult={showResult} />}
      {screen === "result" && <Result score={score} onRestart={restartQuiz} />}
    </div>
  );
}

export default App;

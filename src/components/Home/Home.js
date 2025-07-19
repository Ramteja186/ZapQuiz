import React, { useState } from 'react';
import './Home.css';

function Home({ onStart, showToast }) {
  const [topic, setTopic] = useState('');

  const handleStart = () => {
    if (topic) {
      onStart(topic);
      showToast('Quiz started successfully!', 'success');
    } else {
      showToast('Please select a topic to start the quiz.', 'error');
    }
  };

  return (
    <div className="home">
      <h1>AI Quiz App</h1>
      <select onChange={(e) => setTopic(e.target.value)} value={topic}>
        <option value="">Select a Topic</option>
        <option value="javascript">JavaScript</option>
        <option value="html">HTML</option>
        <option value="general">General Knowledge</option>
      </select>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default Home;
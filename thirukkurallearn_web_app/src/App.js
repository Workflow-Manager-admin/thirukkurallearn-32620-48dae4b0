import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

// PUBLIC_INTERFACE
function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="subtitle">Welcome to ThirukkuralLearn</div>
        <h1 className="title">Learn Thirukkural</h1>
        <div className="description">
          Start exploring Athigaarams, Kurals, and take quizzes to test your knowledge!
        </div>
        <button className="btn btn-large">Get Started</button>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function About() {
  return (
    <div className="container" style={{ paddingTop: 120 }}>
      <h1 className="title">About Thirukkural</h1>
      <div className="description">
        Thirukkural is one of the most important works in the Tamil language. Written by Thiruvalluvar, it consists of short couplets covering ethics, wealth, and love.
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function Quiz() {
  return (
    <div className="container" style={{ paddingTop: 120 }}>
      <h1 className="title">Quiz</h1>
      <div className="description">
        Test your knowledge of Thirukkural! (Quiz interface coming soon)
      </div>
    </div>
  );
}

/**
 * App root component
 * Renders the persistent NavBar and app routes.
 */
function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
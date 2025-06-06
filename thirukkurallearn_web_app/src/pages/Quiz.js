import React, { useState } from "react";
import quizQuestions from "../data/quiz";
import QuizQuestion from "../components/QuizQuestion";
import "../App.css";

// Shuffle helper (non-mutating)
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// PUBLIC_INTERFACE
/**
 * Quiz Page
 * Interactive, self-contained quiz with multiple choice questions.
 * Immediate feedback; scores not persisted. Responsive layout.
 */
function Quiz() {
  // Shuffle questions and shuffle each options array
  function generateQuizSet() {
    const shuffledQuestions = shuffle(quizQuestions).map((q) => ({
      ...q,
      options: shuffle(q.options), // shuffle options per question for fairness
      correctOptionIndex: q.options
        ? shuffle(q.options).findIndex((opt) => opt === q.options[q.correctOptionIndex])
        : q.correctOptionIndex,
    }));
    // However, above will not work for correctly mapping answer index; need to map carefully:
    // So, instead, shuffle and recompute correct indexes:
    return quizQuestions.map((q) => {
      const shuffledOpts = shuffle(q.options);
      return {
        ...q,
        options: shuffledOpts,
        correctOptionIndex: shuffledOpts.findIndex(
          (opt) => opt === q.options[q.correctOptionIndex]
        ),
      };
    });
  }

  const [quizSet, setQuizSet] = useState(generateQuizSet());
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(quizSet.length).fill(null)
  );
  const [answered, setAnswered] = useState(Array(quizSet.length).fill(false));
  const [showSummary, setShowSummary] = useState(false);

  function handleOptionSelect(selectedIdx) {
    if (answered[currentIdx]) return; // Prevent double answer
    const n = quizSet.length;
    const newSelected = [...selectedOptions];
    newSelected[currentIdx] = selectedIdx;
    setSelectedOptions(newSelected);

    const newAnswered = [...answered];
    newAnswered[currentIdx] = true;
    setAnswered(newAnswered);

    // If last question, after answer show summary
    if (currentIdx === n - 1) {
      setTimeout(() => setShowSummary(true), 800);
    }
  }

  function handleNext() {
    if (currentIdx < quizSet.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  }

  function handlePrev() {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  }

  function handleReset() {
    const newQuiz = generateQuizSet();
    setQuizSet(newQuiz);
    setCurrentIdx(0);
    setSelectedOptions(Array(newQuiz.length).fill(null));
    setAnswered(Array(newQuiz.length).fill(false));
    setShowSummary(false);
  }

  const correctCount = selectedOptions.reduce(
    (sum, opt, idx) =>
      opt != null && quizSet[idx].correctOptionIndex === opt ? sum + 1 : sum,
    0
  );

  // Rendering summary after all questions
  if (showSummary || (currentIdx === quizSet.length - 1 && answered[currentIdx])) {
    return (
      <div className="container" style={{ paddingTop: "calc(var(--navbar-height) + 22px)", minHeight: 400 }}>
        <h1 className="title" style={{ fontSize: "2.2rem" }}>Quiz Complete</h1>
        <div className="description" style={{ margin: "13px 0 26px 0" }}>
          Your score:{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: "1.25em" }}>
            {correctCount} / {quizSet.length}
          </span>
        </div>
        <div style={{ margin: "0 auto 24px auto", maxWidth: 520, background: "#fff8ef", borderRadius: 9, padding: "23px 18px", boxShadow: "0 2px 8px #ebd7c490" }}>
          {quizSet.map((q, idx) => (
            <div key={q.id} style={{ marginBottom: 14, fontSize: "1.05rem" }}>
              <span style={{ color: "var(--accent)" }}>
                Q{idx + 1}.
              </span>{" "}
              <span>{q.question}</span>
              {q.kural && (
                <div style={{ fontStyle: "italic", color: "#5e3d13", fontSize: "0.97em", margin: "2px 0" }}>
                  {q.kural.tamil}
                </div>
              )}
              <div>
                <span
                  style={{
                    color:
                      selectedOptions[idx] === q.correctOptionIndex
                        ? "#24673b"
                        : "#AE2A2A",
                    fontWeight: 500,
                  }}
                >
                  Your answer: {q.options[selectedOptions[idx]] || "No answer"}
                </span>
                {"  "}
                {selectedOptions[idx] === q.correctOptionIndex ? (
                  <span role="img" aria-label="Correct" style={{ marginLeft: 3 }}>
                    ✓
                  </span>
                ) : (
                  <span role="img" aria-label="Incorrect" style={{ marginLeft: 3 }}>
                    ✗ (Correct: {q.options[q.correctOptionIndex]})
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-large" style={{ marginTop: 16 }} onClick={handleReset}>
          Retake Quiz
        </button>
      </div>
    );
  }

  // Main quiz render
  const question = quizSet[currentIdx];
  return (
    <div
      className="container"
      style={{ paddingTop: "calc(var(--navbar-height) + 25px)", minHeight: 400, maxWidth: 780 }}
    >
      <div
        style={{
          marginBottom: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <h1 className="title" style={{ fontSize: "2rem", margin: 0 }}>
          Thirukkural Quiz
        </h1>
        <button className="btn" style={{ background: "#faf8f3", color: "var(--primary)", fontWeight: 500, border: "1.4px solid var(--accent)" }} onClick={handleReset}>
          Reset Quiz
        </button>
      </div>
      <div style={{ margin: "4px 0 20px 0", fontSize: "1.1rem", color: "var(--accent)" }}>
        Question {currentIdx + 1} of {quizSet.length}
      </div>
      <QuizQuestion
        question={question}
        selectedOption={selectedOptions[currentIdx]}
        answered={answered[currentIdx]}
        onSelect={handleOptionSelect}
      />
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 18,
          gap: 12,
        }}
        aria-label="Quiz navigation"
      >
        <button
          className="btn"
          disabled={currentIdx === 0}
          style={{
            background: currentIdx === 0 ? "#ecebeb" : "var(--accent)",
            color: currentIdx === 0 ? "#aaa" : "var(--primary)",
            opacity: currentIdx === 0 ? 0.8 : 1,
          }}
          onClick={handlePrev}
          aria-label="Previous question"
        >
          Previous
        </button>
        <button
          className="btn"
          disabled={!answered[currentIdx]}
          style={{
            background: !answered[currentIdx] ? "#ecebeb" : "var(--accent)",
            color: !answered[currentIdx] ? "#aaa" : "var(--primary)",
            opacity: !answered[currentIdx] ? 0.8 : 1,
            minWidth: 100,
          }}
          onClick={handleNext}
          aria-label={
            currentIdx === quizSet.length - 1
              ? "Finish Quiz"
              : "Next question"
          }
        >
          {currentIdx === quizSet.length - 1 ? "Finish" : "Next"}
        </button>
      </nav>
    </div>
  );
}

export default Quiz;

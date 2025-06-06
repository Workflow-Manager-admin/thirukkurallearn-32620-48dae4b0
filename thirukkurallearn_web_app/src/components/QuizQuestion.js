import React from "react";
import PropTypes from "prop-types";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * QuizQuestion
 * Renders a single quiz question, its options, and immediate feedback after selection.
 * @param {object} props
 * @param {object} props.question - The question object (see quiz.js)
 * @param {number|null} props.selectedOption - The index of user's selected option, or null
 * @param {boolean} props.answered - Whether the question has been answered
 * @param {function} props.onSelect - Called with option index when an option is selected
 */
function QuizQuestion({ question, selectedOption, answered, onSelect }) {
  return (
    <div
      className="quiz-question-box"
      style={{
        background: "rgba(255,255,255,0.97)",
        borderRadius: 10,
        boxShadow: "0 2px 8px rgba(45,58,74,0.07)",
        padding: "24px 14px 18px 14px",
        marginBottom: 22,
        marginTop: 0,
        maxWidth: 650,
        width: "100%",
      }}
      tabIndex={0}
      aria-labelledby={`quiz-q-title-${question.id}`}
    >
      <div
        id={`quiz-q-title-${question.id}`}
        style={{
          fontWeight: 600,
          fontSize: "1.18rem",
          marginBottom: 8,
          color: "var(--primary)",
        }}
      >
        <span style={{ color: "var(--accent)" }}>Q:</span> {question.question}
      </div>
      {question.kural && (
        <div
          className="quiz-kural"
          style={{
            fontWeight: 400,
            fontSize: "1.08rem",
            padding: "9px 0 3px 0",
            color: "#5e3d13",
            fontStyle: "italic",
            lineHeight: 1.45,
          }}
        >
          <span>
            <span style={{ color: "var(--accent)", marginRight: 6 }}>
              {question.kural.number ? `#${question.kural.number}` : ""}
            </span>
            {question.kural.tamil}
          </span>
          {question.kural.english && (
            <div style={{ color: "#7c4b12", marginTop: 4 }}>{question.kural.english}</div>
          )}
        </div>
      )}
      <div className="quiz-options-list" style={{ marginTop: 13, display: "flex", flexDirection: "column", gap: 10 }}>
        {question.options.map((opt, idx) => {
          const isCorrect = answered && idx === question.correctOptionIndex;
          const isSelected = selectedOption === idx;
          let optionStyle = {
            display: "flex",
            alignItems: "center",
            cursor: answered ? "default" : "pointer",
            background: isSelected
              ? isCorrect
                ? "rgba(193,154,107,0.21)"
                : "rgba(219,70,70,0.08)"
              : "#f8f7f6",
            border: isSelected
              ? `2px solid ${isCorrect ? "var(--accent)" : "#DF7363"}`
              : "1.3px solid #e5e5e5",
            color: isCorrect ? "var(--primary)" : "#3b3333",
            borderRadius: 7,
            padding: "11px 15px",
            minHeight: 45,
            fontWeight: 500,
            fontSize: "1.05rem",
            transition: "background 0.12s, border 0.13s",
          };
          return (
            <button
              key={idx}
              className={`quiz-option-btn${isSelected ? " selected" : ""}`}
              style={optionStyle}
              disabled={answered}
              aria-pressed={isSelected}
              tabIndex={0}
              onClick={() => !answered && onSelect(idx)}
              onKeyDown={e => {
                if (!answered && (e.key === " " || e.key === "Enter")) onSelect(idx);
              }}
              data-testid={`quiz-option-${idx}`}
            >
              <span style={{ flex: 1, textAlign: "left" }}>{opt}</span>
              {answered && isCorrect && (
                <span style={{ color: "var(--accent)", marginLeft: 10, fontWeight: 600 }}>✓</span>
              )}
              {answered && isSelected && !isCorrect && (
                <span style={{ color: "#DF7363", marginLeft: 10, fontWeight: 600 }}>✗</span>
              )}
            </button>
          );
        })}
      </div>
      {answered && (
        <div
          className="quiz-feedback"
          style={{
            marginTop: 15,
            background: "#f7f3ed",
            borderRadius: 6,
            padding: "12px 10px",
            color: answered && selectedOption === question.correctOptionIndex ? "#377932" : "#AE2A2A",
            fontWeight: answered && selectedOption === question.correctOptionIndex ? 500 : 450,
            border: `1.6px solid ${
              selectedOption === question.correctOptionIndex ? "var(--accent)" : "#f56565"
            }`,
            fontSize: "1.01rem",
          }}
          aria-live="polite"
        >
          {selectedOption === question.correctOptionIndex ? (
            <>
              Correct! <span role="img" aria-label="Celebration">🎉</span>
            </>
          ) : (
            <>
              Not quite. <span role="img" aria-label="Incorrect">❌</span>
            </>
          )}
          <span style={{ marginLeft: 8, fontWeight: 400 }}>
            {question.explanation}
          </span>
        </div>
      )}
    </div>
  );
}

QuizQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  selectedOption: PropTypes.number,
  answered: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default QuizQuestion;

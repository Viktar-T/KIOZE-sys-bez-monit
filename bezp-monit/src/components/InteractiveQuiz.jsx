import React, { useId, useState } from 'react';
import clsx from 'clsx';

/**
 * Multiple Choice Quiz Component
 *
 * Interactive quiz with single correct answer.
 * Shows feedback and explanation after submission.
 *
 * @param {string} question - Question text
 * @param {array} options - Array of answer options (strings)
 * @param {number} correctAnswer - Index of correct answer (0-based)
 * @param {number} correct - Alias of `correctAnswer`
 * @param {string} explanation - Explanation shown after answering
 * @param {function} onAnswer - Called with true/false after checking, null after reset
 *
 * @example
 * <MultipleChoiceQuiz
 *   question="Jaki protokół jest najlepszy dla IoT?"
 *   options={["HTTP", "MQTT", "FTP", "SMTP"]}
 *   correctAnswer={1}
 *   explanation="MQTT jest lekkim protokołem pub-sub zaprojektowanym dla IoT."
 * />
 */
export function MultipleChoiceQuiz({
  question,
  options,
  correctAnswer,
  correct,
  explanation,
  onAnswer,
}) {
  // Unique radio group per quiz, even when questions start with the same words
  const groupName = useId();
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const answerIndex = correctAnswer ?? correct;
  const isCorrect = selected === answerIndex;

  const handleSubmit = () => {
    setShowResult(true);
    onAnswer?.(isCorrect);
  };

  const handleReset = () => {
    setSelected(null);
    setShowResult(false);
    onAnswer?.(null);
  };

  return (
    <div className="quiz-container">
      <fieldset className="quiz-fieldset">
        <legend className="quiz-question">❓ {question}</legend>

        <div className="quiz-options">
          {options.map((option, index) => (
            <label
              key={index}
              className={clsx('quiz-option', {
                'quiz-option-selected': selected === index,
                'quiz-option-correct': showResult && index === answerIndex,
                'quiz-option-wrong': showResult && index === selected && !isCorrect,
              })}
            >
              <input
                type="radio"
                name={groupName}
                value={index}
                checked={selected === index}
                onChange={() => setSelected(index)}
                disabled={showResult}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Announced by screen readers when the result appears */}
      <div role="status">
        {showResult && (
          <>
            <div className={isCorrect ? 'quiz-result-correct' : 'quiz-result-incorrect'}>
              {isCorrect ? '✅ Prawidłowo!' : '❌ Nieprawidłowo'}
            </div>
            {explanation && (
              <div className="quiz-explanation">
                <strong>Wyjaśnienie:</strong> {explanation}
              </div>
            )}
          </>
        )}
      </div>

      {showResult ? (
        <button type="button" onClick={handleReset} className="quiz-reset-button">
          Spróbuj ponownie
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selected === null}
          className="quiz-submit-button"
        >
          Sprawdź odpowiedź
        </button>
      )}
    </div>
  );
}

/**
 * InteractiveQuiz Component
 *
 * Displays multiple quiz questions in sequence and sums up the score
 *
 * @param {array} questions - Array of question objects with {question, options, correctAnswer, explanation}
 */
export function InteractiveQuiz({ questions }) {
  // Result per question index: true/false, missing = not answered yet
  const [results, setResults] = useState({});
  // Changing the key remounts all questions, which resets them
  const [round, setRound] = useState(0);

  if (!questions || !Array.isArray(questions)) {
    return <div>Error: questions prop must be an array</div>;
  }

  const answered = Object.keys(results).length;
  const correctCount = Object.values(results).filter(Boolean).length;

  const handleAnswer = (index) => (result) => {
    setResults((prev) => {
      const next = { ...prev };
      if (result === null) {
        delete next[index];
      } else {
        next[index] = result;
      }
      return next;
    });
  };

  const handleRestart = () => {
    setResults({});
    setRound((r) => r + 1);
  };

  return (
    <div className="interactive-quiz-container">
      {questions.map((q, index) => (
        <div key={`${round}-${index}`} style={{ marginBottom: '2rem' }}>
          <p className="quiz-counter">Pytanie {index + 1}/{questions.length}</p>
          <MultipleChoiceQuiz {...q} onAnswer={handleAnswer(index)} />
        </div>
      ))}

      {answered > 0 && (
        <div className="quiz-score">
          <span>
            Wynik: <strong>{correctCount}/{questions.length}</strong>
            {answered < questions.length &&
              ` (odpowiedziano na ${answered} z ${questions.length} pytań)`}
          </span>
          {answered === questions.length && (
            <button type="button" onClick={handleRestart} className="quiz-reset-button">
              Zacznij od nowa
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// Default export for backwards compatibility
export default MultipleChoiceQuiz;

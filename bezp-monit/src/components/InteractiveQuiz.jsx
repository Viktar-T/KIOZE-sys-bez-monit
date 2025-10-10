import React, { useState } from 'react';

/**
 * Multiple Choice Quiz Component
 * 
 * Interactive quiz with single correct answer.
 * Shows feedback and explanation after submission.
 * 
 * @param {string} question - Question text
 * @param {array} options - Array of answer options (strings)
 * @param {number} correctAnswer - Index of correct answer (0-based)
 * @param {string} explanation - Explanation shown after answering
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
  explanation 
}) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setSelected(null);
    setShowResult(false);
  };

  const isCorrect = selected === correctAnswer;

  return (
    <div className="quiz-container">
      <h4 className="quiz-question">❓ {question}</h4>
      
      <div className="quiz-options">
        {options.map((option, index) => (
          <label 
            key={index} 
            className={`quiz-option ${
              showResult && index === correctAnswer ? 'quiz-option-correct' : ''
            } ${
              showResult && index === selected && !isCorrect ? 'quiz-option-wrong' : ''
            } ${
              selected === index ? 'quiz-option-selected' : ''
            }`}
          >
            <input
              type="radio"
              name={`quiz-${question.slice(0, 10)}`}
              value={index}
              checked={selected === index}
              onChange={() => setSelected(index)}
              disabled={showResult}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {!showResult ? (
        <button 
          onClick={handleSubmit} 
          disabled={selected === null}
          className="quiz-submit-button"
        >
          Sprawdź odpowiedź
        </button>
      ) : (
        <div>
          <div className={isCorrect ? 'quiz-result-correct' : 'quiz-result-incorrect'}>
            {isCorrect ? '✅ Prawidłowo!' : '❌ Nieprawidłowo'}
          </div>
          {explanation && (
            <div className="quiz-explanation">
              <strong>Wyjaśnienie:</strong> {explanation}
            </div>
          )}
          <button onClick={handleReset} className="quiz-reset-button">
            Spróbuj ponownie
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Tabbed Content Component
 * 
 * Displays content in tabs for better organization.
 * 
 * @param {array} tabs - Array of tab objects with {label, content}
 * 
 * @example
 * <TabbedContent 
 *   tabs={[
 *     { label: "Teoria", content: <>Theory content</> },
 *     { label: "Praktyka", content: <>Practice content</> }
 *   ]}
 * />
 */
export function TabbedContent({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabbed-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab-button ${
              activeTab === index ? 'tab-button-active' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

/**
 * InteractiveQuiz Component
 * 
 * Displays multiple quiz questions in sequence
 * 
 * @param {array} questions - Array of question objects with {question, options, correctAnswer, explanation}
 */
export function InteractiveQuiz({ questions }) {
  if (!questions || !Array.isArray(questions)) {
    return <div>Error: questions prop must be an array</div>;
  }

  return (
    <div className="interactive-quiz-container">
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h5>Pytanie {index + 1}/{questions.length}</h5>
          <MultipleChoiceQuiz
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer}
            explanation={q.explanation}
          />
        </div>
      ))}
    </div>
  );
}

// Default export for backwards compatibility
export default MultipleChoiceQuiz;
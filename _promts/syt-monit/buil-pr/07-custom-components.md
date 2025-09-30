# Prompt 07: Custom React Components

## Context
Enhance the educational platform with reusable custom React components that provide interactive features, better content organization, and improved user experience.

## Task
Create custom React/JSX components in `src/components/` for common educational content patterns such as slide layouts, literature lists, learning objectives, and interactive elements.

## Component Directory Structure

```
src/components/
├── SlideComponents.jsx         # Slide-specific layouts
├── LiteratureList.jsx         # Bibliography display
├── LearningObjectives.jsx     # Objectives display
├── InteractiveElements.jsx    # Quizzes, exercises
├── DownloadCard.jsx           # File downloads
└── HomepageFeatures/
    └── index.js               # Homepage features (already exists)
```

## Component 1: Slide Components

### File: `src/components/SlideComponents.jsx`

**ACTUAL IMPLEMENTATION** (tested and working):

```jsx
import React from 'react';
import clsx from 'clsx';

// Main slide container component
export const SlideContainer = ({ children, className, ...props }) => (
  <div className={clsx('slide-container', className)} {...props}>
    {children}
  </div>
);

// Individual slide card component
export const Slide = ({ 
  title, 
  children, 
  type = 'default',
  className,
  ...props 
}) => (
  <div className={clsx('slide-card', `slide-${type}`, className)} {...props}>
    {title && <h1 className="slide-title">{title}</h1>}
    <div className="slide-content">
      {children}
    </div>
  </div>
);

// Key points section component
export const KeyPoints = ({ children, title = "📋 Key Points", className, ...props }) => (
  <div className={clsx('key-points-box', className)} {...props}>
    <h3 className="key-points-title">{title}</h3>
    <div className="key-points-content">
      {children}
    </div>
  </div>
);

// Supporting details section component
export const SupportingDetails = ({ children, title = "🔧 Supporting Details", className, ...props }) => (
  <div className={clsx('supporting-details-box', className)} {...props}>
    <h3 className="supporting-details-title">{title}</h3>
    <div className="supporting-details-content">
      {children}
    </div>
  </div>
);

// Warning/important information component
export const WarningBox = ({ children, title = "⚠️ Important", className, ...props }) => (
  <div className={clsx('warning-box', className)} {...props}>
    <h3 className="warning-title">{title}</h3>
    <div className="warning-content">
      {children}
    </div>
  </div>
);

// Success/achievement component
export const SuccessBox = ({ children, title = "✅ Success", className, ...props }) => (
  <div className={clsx('success-box', className)} {...props}>
    <h3 className="success-title">{title}</h3>
    <div className="success-content">
      {children}
    </div>
  </div>
);

// Info/note component
export const InfoBox = ({ children, title = "ℹ️ Information", className, ...props }) => (
  <div className={clsx('info-box', className)} {...props}>
    <h3 className="info-title">{title}</h3>
    <div className="info-content">
      {children}
    </div>
  </div>
);

// Instructor notes component - CRITICAL FOR EDUCATIONAL CONTENT
export const InstructorNotes = ({ children, title = "🎓 Wykładowca: Szczegółowe notatki (Kliknij aby rozwinąć)" }) => (
  <details className="instructor-notes">
    <summary className="instructor-notes-summary">{title}</summary>
    <div className="instructor-notes-content">
      {children}
    </div>
  </details>
);

// Slide separator component
export const SlideSeparator = ({ emoji = "🎯", text = "➡️" }) => (
  <div className="slide-separator">
    <span className="slide-separator-emoji">{emoji}</span>
    <span className="slide-separator-text">{text}</span>
    <span className="slide-separator-emoji">{emoji}</span>
  </div>
);

// Visual separator for different content types
export const VisualSeparator = ({ type = "default" }) => {
  const separators = {
    default: "🎯 ➡️ 🎯",
    data: "📊 📈 📊", 
    technical: "💻 🔧 💻",
    energy: "⚡ 🌱 ⚡"
  };
  
  return (
    <div className="visual-separator">
      {separators[type] || separators.default}
    </div>
  );
};

// Progress indicator component
export const SlideProgress = ({ current, total, className, ...props }) => (
  <div className={clsx('slide-progress', className)} {...props}>
    <div className="slide-progress-bar">
      <div 
        className="slide-progress-fill" 
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
    <span className="slide-progress-text">
      {current} / {total}
    </span>
  </div>
);

// Navigation component for slides
export const SlideNavigation = ({ onPrevious, onNext, hasPrevious, hasNext, className, ...props }) => (
  <div className={clsx('slide-navigation', className)} {...props}>
    <button 
      className="slide-nav-button slide-nav-prev"
      onClick={onPrevious}
      disabled={!hasPrevious}
    >
      ← Poprzedni
    </button>
    <button 
      className="slide-nav-button slide-nav-next"
      onClick={onNext}
      disabled={!hasNext}
    >
      Następny →
    </button>
  </div>
);
```

**IMPORTANT**: The actual implementation uses **global CSS classes** defined in `src/css/custom.css` instead of CSS modules. This approach is simpler and works better with Docusaurus. The styling is covered in detail in Prompt 08-styling-customization.md.

**Key CSS classes used** (defined globally):
- `.slide-container` - Main container for slides
- `.slide-card`, `.slide-info`, `.slide-tip`, `.slide-warning` - Slide types
- `.slide-title`, `.slide-content` - Slide structure
- `.key-points-box`, `.supporting-details-box` - Content boxes
- `.warning-box`, `.success-box`, `.info-box` - Alert boxes
- `.instructor-notes`, `.instructor-notes-summary` - Collapsible instructor notes
- `.visual-separator`, `.slide-separator` - Section separators
- `.slide-progress`, `.slide-navigation` - Navigation elements

All styling is comprehensive with dark mode support and responsive design. See Prompt 08 for complete CSS.

## Component 2: Literature List

### File: `src/components/LiteratureList.tsx` (or .jsx)

**ACTUAL IMPLEMENTATION** (simpler, data-driven approach):

```jsx
import React from 'react';
import literature from '@site/src/data/literature.json';

export default function LiteratureList({
  topic,
  title = 'Literatura',
  sortBy = 'year',
  order = 'desc',
}) {
  const items = literature[String(topic)] || [];
  if (!items.length) return null;

  const sorted = [...items].sort((a, b) => {
    const dir = order === 'asc' ? 1 : -1;
    if (sortBy === 'year') {
      const ay = Number(a.year) || 0;
      const by = Number(b.year) || 0;
      return (ay - by) * dir;
    }
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title) * dir;
    }
    return a.authors.localeCompare(b.authors) * dir;
  });

  return (
    <section>
      <h2>{title}</h2>
      <ol>
        {sorted.map((it, i) => (
          <li key={i}>
            <span>
              {it.authors} ({it.year}). <strong>{it.title}</strong>
              {it.source ? `. ${it.source}` : ''}
            </span>
            {it.link ? (
              <>
                {' '}
                — <a href={it.link} target="_blank" rel="noreferrer">link</a>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
```

### File: `src/data/literature.json`

**Store literature data in structured JSON**:

```json
{
  "software": [
    {
      "authors": "Valentin Software",
      "year": "2024",
      "title": "PV*SOL Basic Manual",
      "source": "Complete 82-page user manual covering system requirements, registration, project workflow, and technical calculations",
      "link": "https://www.valentin-software.com/..."
    },
    {
      "authors": "Valentin Software",
      "year": "2024",
      "title": "T*SOL Basic Manual",
      "source": "104-page manual covering solar thermal system design, simulation, and economic analysis",
      "link": "https://www.valentin-software.com/..."
    }
  ],
  "photovoltaic": [
    {
      "authors": "Smith, J. & Johnson, A.",
      "year": "2023",
      "title": "Modern Photovoltaic Systems Design",
      "source": "Journal of Renewable Energy, Vol. 45",
      "link": "https://example.com/article"
    }
  ]
}
```

**Usage in MDX**:

```mdx
import LiteratureList from '@site/src/components/LiteratureList';

## Literature and Resources

<LiteratureList 
  topic="software" 
  title="Software Documentation"
  sortBy="year"
  order="desc"
/>
```
```

## Component 3: Interactive Quiz

### File: `src/components/InteractiveElements.jsx`

```jsx
import React, { useState } from 'react';
import styles from './InteractiveElements.module.css';

/**
 * Multiple Choice Quiz Component
 */
export function MultipleChoiceQuiz({ question, options, correctAnswer, explanation }) {
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
    <div className={styles.quizContainer}>
      <h4 className={styles.quizQuestion}>❓ {question}</h4>
      
      <div className={styles.options}>
        {options.map((option, index) => (
          <label 
            key={index} 
            className={`${styles.option} ${
              showResult && index === correctAnswer ? styles.correctOption : ''
            } ${
              showResult && index === selected && !isCorrect ? styles.wrongOption : ''
            }`}
          >
            <input
              type="radio"
              name="quiz-option"
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
          className={styles.submitButton}
        >
          Check Answer
        </button>
      ) : (
        <div>
          <div className={isCorrect ? styles.correct : styles.incorrect}>
            {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
          </div>
          {explanation && (
            <div className={styles.explanation}>
              <strong>Explanation:</strong> {explanation}
            </div>
          )}
          <button onClick={handleReset} className={styles.resetButton}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Tabbed Content Component
 */
export function TabbedContent({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabbedContainer}>
      <div className={styles.tabButtons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${styles.tabButton} ${
              activeTab === index ? styles.activeTab : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
```

## Usage Examples

### In MDX Files

```mdx
import { SlideTitle, LearningObjective, KeyConcept, Example } from '@site/src/components/SlideComponents';
import { MultipleChoiceQuiz } from '@site/src/components/InteractiveElements';

<SlideTitle slideNumber={1}>Introduction to the Topic</SlideTitle>

<LearningObjective>
Understand the fundamental principles of [topic] and their practical applications.
</LearningObjective>

<KeyConcept title="Core Principle">
This is the most important concept to remember from this lecture.
</KeyConcept>

<Example title="Real-World Application">
Here's how this concept applies in practice...
</Example>

<MultipleChoiceQuiz
  question="What is the correct answer?"
  options={[
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ]}
  correctAnswer={1}
  explanation="Option B is correct because..."
/>
```

## Implementation Checklist

- [ ] Create SlideComponents.jsx with styled components
- [ ] Create corresponding CSS modules
- [ ] Create LiteratureList.jsx for bibliography
- [ ] Create InteractiveElements.jsx for quizzes
- [ ] Test all components render correctly
- [ ] Verify responsive design
- [ ] Add JSDoc comments
- [ ] Create usage examples

## Next Steps
Proceed to Prompt 08 for custom CSS styling and theme customization.

# Prompt 07: Custom React Components

---

## 📋 Metadata
- **Prompt ID**: 07
- **Title**: Custom React Components
- **Prerequisites**: Completed Prompt 06 (visual assets setup)
- **Estimated Time**: 2-3 hours
- **Difficulty**: Advanced
- **Dependencies**: Prompt 06, React/JavaScript knowledge
- **Output**: Reusable React components for educational content

---

## 🤖 AI Assistant Instructions

You are an expert React developer and component architect creating reusable UI components for an educational platform. Your role is to build interactive, accessible, and well-documented components.

**Your Approach:**
1. Analyze content needs to identify component requirements
2. Create component files in `src/components/`
3. Implement components with props for flexibility
4. Add proper TypeScript types (if using TS) or PropTypes
5. Create matching CSS styling (global or module-based)
6. Document component usage with examples
7. Test components render correctly
8. Ensure accessibility (ARIA labels, keyboard navigation)

**Communication Style:**
- Explain component architecture decisions
- Provide clear usage examples
- Document all props and their types
- Show both basic and advanced usage patterns
- Emphasize reusability and maintainability

**Code Quality Standards:**
- Clean, readable code with comments
- Consistent naming conventions
- Proper error handling
- Accessible markup (semantic HTML, ARIA)
- Performance considerations

---

## 📝 Context

Enhance the educational platform with reusable custom React components that provide interactive features, better content organization, and improved user experience beyond default Docusaurus capabilities.

**What You're Creating:**
- Slide presentation components
- Literature list component
- Interactive quiz components
- Tabbed content containers
- Custom info boxes and callouts

**Why Custom Components:**
- Consistent design across all content
- Reusable patterns save time
- Interactive features engage students
- Better organization of complex content
- Easier maintenance and updates

---

## 🎯 Task Overview

Create custom React/JSX components in `src/components/` for common educational content patterns such as slide layouts, literature lists, learning objectives, and interactive elements.

**End Goal:** Library of reusable, well-documented components that enhance educational content delivery.

---

## 📥 Required Information from User

Before creating components, identify needs:

**Essential:**
1. **Content Patterns**: What repeated elements appear in lectures?
2. **Interaction Needs**: What interactive features are needed?
3. **Styling Preference**: Global CSS or CSS modules?
4. **Language**: Will components have default text (Polish/English)?

**Component-Specific:**
5. **Slide Components**: Needed for presentations? Yes/No
6. **Literature Component**: Needed for bibliography? Yes/No
7. **Quiz Components**: Needed for assessments? Yes/No
8. **Other Components**: Tabs, accordions, cards, etc.?

---

## 📝 Step-by-Step Instructions

### Step 1: Create Slide Components

#### File: `src/components/SlideComponents.jsx`

**TESTED AND WORKING IMPLEMENTATION:**

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
export const KeyPoints = ({ children, title = "📋 Kluczowe punkty", className, ...props }) => (
  <div className={clsx('key-points-box', className)} {...props}>
    <h3 className="key-points-title">{title}</h3>
    <div className="key-points-content">
      {children}
    </div>
  </div>
);

// Supporting details section component
export const SupportingDetails = ({ children, title = "🔧 Szczegóły", className, ...props }) => (
  <div className={clsx('supporting-details-box', className)} {...props}>
    <h3 className="supporting-details-title">{title}</h3>
    <div className="supporting-details-content">
      {children}
    </div>
  </div>
);

// Warning/important information component
export const WarningBox = ({ children, title = "⚠️ Ważne", className, ...props }) => (
  <div className={clsx('warning-box', className)} {...props}>
    <h3 className="warning-title">{title}</h3>
    <div className="warning-content">
      {children}
    </div>
  </div>
);

// Success/achievement component
export const SuccessBox = ({ children, title = "✅ Sukces", className, ...props }) => (
  <div className={clsx('success-box', className)} {...props}>
    <h3 className="success-title">{title}</h3>
    <div className="success-content">
      {children}
    </div>
  </div>
);

// Info/note component
export const InfoBox = ({ children, title = "ℹ️ Informacja", className, ...props }) => (
  <div className={clsx('info-box', className)} {...props}>
    <h3 className="info-title">{title}</h3>
    <div className="info-content">
      {children}
    </div>
  </div>
);

// Instructor notes component - CRITICAL FOR EDUCATIONAL CONTENT
export const InstructorNotes = ({ children, title = "🎓 Notatki wykładowcy (Kliknij aby rozwinąć)" }) => (
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

**IMPORTANT NOTE:** This implementation uses **global CSS classes** (defined in `src/css/custom.css`, covered in Prompt 08). This is the recommended approach for Docusaurus projects as it's simpler than CSS modules and ensures consistent styling.

### Step 2: Create Literature List Component

#### File: `src/components/LiteratureList.jsx`

**TESTED IMPLEMENTATION:**

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
    <section className="literature-section">
      <h2>{title}</h2>
      <ol className="literature-list">
        {sorted.map((item, index) => (
          <li key={index} className="literature-item">
            <span className="literature-authors">{item.authors}</span>
            {' '}
            <span className="literature-year">({item.year})</span>.
            {' '}
            <strong className="literature-title">{item.title}</strong>
            {item.source && (
              <>
                . <span className="literature-source">{item.source}</span>
              </>
            )}
            {item.link && (
              <>
                {' '}—{' '}
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="literature-link"
                >
                  link
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
```

#### File: `src/data/literature.json`

```json
{
  "software": [
    {
      "authors": "Valentin Software",
      "year": "2024",
      "title": "PV*SOL Basic Manual",
      "source": "Complete 82-page user manual covering system requirements",
      "link": "https://www.valentin-software.com/..."
    },
    {
      "authors": "Valentin Software",
      "year": "2024",
      "title": "T*SOL Basic Manual",
      "source": "104-page manual covering solar thermal system design",
      "link": "https://www.valentin-software.com/..."
    }
  ],
  "monitoring": [
    {
      "authors": "Smith, J. & Johnson, A.",
      "year": "2023",
      "title": "SCADA Systems for Renewable Energy",
      "source": "Journal of Energy Systems, Vol. 45",
      "link": "https://example.com/article"
    }
  ]
}
```

**Usage in MDX:**

```mdx
import LiteratureList from '@site/src/components/LiteratureList';

## Literatura

<LiteratureList 
  topic="software" 
  title="Dokumentacja oprogramowania"
  sortBy="year"
  order="desc"
/>
```

### Step 3: Create Interactive Quiz Component

#### File: `src/components/InteractiveQuiz.jsx`

```jsx
import React, { useState } from 'react';

/**
 * Multiple Choice Quiz Component
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
```

**Usage Example:**

```mdx
import { MultipleChoiceQuiz } from '@site/src/components/InteractiveQuiz';

<MultipleChoiceQuiz
  question="Który protokół jest najlepszy do komunikacji IIoT?"
  options={[
    "HTTP",
    "MQTT",
    "FTP",
    "SMTP"
  ]}
  correctAnswer={1}
  explanation="MQTT został zaprojektowany specjalnie dla IoT, oferując lekki protokół pub-sub idealny dla urządzeń o ograniczonych zasobach."
/>
```

### Step 4: Document Component Usage

Create `src/components/README.md`:

```markdown
# Custom Components Documentation

## SlideComponents

Location: `src/components/SlideComponents.jsx`

### SlideContainer
Wraps all slides in a lecture section.

```mdx
<SlideContainer>
  <Slide>...</Slide>
  <Slide>...</Slide>
</SlideContainer>
```

### Slide
Individual slide with title and content.

**Props:**
- `title` (string): Slide title
- `type` (string): 'info', 'tip', 'warning', 'danger', 'note', 'default'
- `children` (ReactNode): Slide content

```mdx
<Slide title="🎯 Główny temat" type="info">
  Content here
</Slide>
```

### KeyPoints
Highlight main learning points.

**Props:**
- `title` (string): Section title (default: "📋 Kluczowe punkty")
- `children` (ReactNode): Content

```mdx
<KeyPoints title="🎯 Główne zagadnienia">
  - Point 1
  - Point 2
</KeyPoints>
```

### InstructorNotes
Collapsible detailed teaching notes.

**Props:**
- `title` (string): Collapsible summary text
- `children` (ReactNode): Detailed notes

```mdx
<InstructorNotes>
**Notatki wykładowcy:**
- Teaching guidance here
</InstructorNotes>
```

[Continue documenting all components...]

## LiteratureList

Location: `src/components/LiteratureList.jsx`

Displays formatted bibliography from JSON data.

**Props:**
- `topic` (string, required): Key from literature.json
- `title` (string): Section heading (default: "Literatura")
- `sortBy` (string): 'year', 'title', or 'authors' (default: 'year')
- `order` (string): 'asc' or 'desc' (default: 'desc')

**Data File:** `src/data/literature.json`

## InteractiveQuiz

Location: `src/components/InteractiveQuiz.jsx`

### MultipleChoiceQuiz

**Props:**
- `question` (string, required): Question text
- `options` (array, required): Array of answer strings
- `correctAnswer` (number, required): Index of correct answer (0-based)
- `explanation` (string): Why answer is correct

[Continue with full documentation...]
```

### Step 5: Verify Components Work

1. Import component in MDX file
2. Use component with props
3. Check browser renders correctly
4. Test interactions (click buttons, expand notes)
5. Verify responsive on mobile
6. Check accessibility (keyboard navigation, screen reader)

---

## ✅ Expected Output

After completing this prompt:

**Component Files:**
- `src/components/SlideComponents.jsx` - Presentation components
- `src/components/LiteratureList.jsx` - Bibliography component
- `src/components/InteractiveQuiz.jsx` - Quiz and tabs
- `src/components/README.md` - Component documentation

**Data Files:**
- `src/data/literature.json` - Bibliography data

**Styling:**
- Global CSS classes for components (added in Prompt 08)
- Consistent visual design
- Dark mode support
- Responsive layout

**Quality:**
- All components render without errors
- Props work as documented
- Interactive elements functional
- Accessible markup
- Performance optimized

---

## ✓ Success Criteria

- [ ] SlideComponents.jsx created with all slide components
- [ ] LiteratureList.jsx created and working
- [ ] InteractiveQuiz.jsx created with quiz functionality
- [ ] All components render without console errors
- [ ] Components can be imported in MDX files
- [ ] Props are properly typed/validated
- [ ] Default props set for optional parameters
- [ ] Instructor notes collapse/expand correctly
- [ ] Quiz buttons and state work correctly
- [ ] Literature list sorts correctly
- [ ] All components responsive on mobile
- [ ] Keyboard navigation works
- [ ] Documentation created for all components
- [ ] Example usage provided for each component

---

## 🔧 Troubleshooting

**Problem: "Cannot find module '@site/src/components/...'"**
- Solution 1: Verify file path is correct
- Solution 2: Restart dev server
- Solution 3: Check import statement uses `@site` alias
- Solution 4: Ensure file extension matches (.jsx vs .js)

**Problem: "Component renders but no styling"**
- Solution: Check CSS classes exist in `custom.css`
- Verify class names match between JSX and CSS
- See Prompt 08 for complete CSS styling

**Problem: "Props not working"**
- Solution 1: Check prop names match component definition
- Solution 2: Verify prop types (string, number, array, etc.)
- Solution 3: Look for typos in prop names
- Solution 4: Check console for PropTypes warnings

**Problem: "Quiz state doesn't reset"**
- Solution: Check `handleReset` function sets all state correctly
- Verify `useState` hooks initialized properly
- Test in isolation to identify issue

**Problem: "LiteratureList shows nothing"**
- Solution 1: Verify `literature.json` exists
- Solution 2: Check `topic` prop matches key in JSON
- Solution 3: Ensure JSON has valid syntax
- Solution 4: Check browser console for import errors

---

## 💡 Tips and Best Practices

**Component Design:**
- Keep components small and focused
- Make components reusable with props
- Provide sensible default values
- Handle edge cases gracefully
- Consider performance for large lists

**Code Organization:**
- One component file per major feature group
- Export multiple related components together
- Create separate data files for content
- Document complex logic with comments
- Use consistent naming conventions

**Accessibility:**
- Use semantic HTML elements
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen reader
- Maintain sufficient color contrast

**Performance:**
- Avoid unnecessary re-renders
- Use `React.memo` for expensive components
- Lazy load heavy components if needed
- Optimize images and assets
- Profile with React DevTools

---

## 🎓 Learning Notes

**React Basics for Docusaurus:**
- MDX allows React components in markdown
- Import components at top of MDX file
- Use JSX syntax for components
- Props pass data to components
- State manages interactive behavior

**Component Patterns:**
- Container components wrap children
- Presentational components display UI
- Controlled components manage own state
- Compound components work together
- Higher-order components add functionality

**Global CSS vs CSS Modules:**
- Global: Simple, defined in `custom.css`
- Modules: Scoped, prevents conflicts
- Docusaurus default: Global approach
- Choice depends on project size and team

---

## 📋 Component Development Checklist

```
Planning:
✓ Component needs identified
✓ Props interface designed
✓ Component structure planned
✓ Styling approach decided

Development:
✓ SlideComponents.jsx created
✓ LiteratureList.jsx created
✓ InteractiveQuiz.jsx created
✓ Props validated (PropTypes or TypeScript)
✓ Default props set
✓ Error handling added
✓ Accessibility features included

Testing:
✓ Components render in browser
✓ Props work correctly
✓ Interactive elements functional
✓ Responsive on all screen sizes
✓ Keyboard navigation works
✓ No console errors

Documentation:
✓ Component README created
✓ Usage examples provided
✓ Props documented
✓ Edge cases noted
```

---

## ➡️ Next Steps

After successful component creation, proceed to:
- **Prompt 08**: Styling and Theme Customization
- Add comprehensive CSS for all components
- Customize theme colors and typography
- Implement dark mode support
- Ensure responsive design

**Status Check Before Proceeding:**
- ✅ All components created
- ✅ Components render correctly
- ✅ Interactive features work
- ✅ Documentation complete
- ✅ Ready to add full styling

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [MDX Documentation](https://mdxjs.com/)
- [Docusaurus React Integration](https://docusaurus.io/docs/markdown-features/react)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)
- [React Patterns](https://reactpatterns.com/)

---

**Prompt Version**: 2.0 (LLM-Optimized)  
**Last Updated**: 2025-09-30  
**Status**: ✅ Production-Ready
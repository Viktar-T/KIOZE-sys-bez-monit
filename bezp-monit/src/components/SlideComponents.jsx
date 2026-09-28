import React from 'react';
import clsx from 'clsx';

/**
 * Main slide container component
 * Wraps all slides in a lecture section
 */
export const SlideContainer = ({ children, className, ...props }) => (
  <div className={clsx('slide-container', className)} {...props}>
    {children}
  </div>
);

/**
 * Individual slide card component
 * Creates a styled slide with optional type (info, tip, warning, danger, note)
 *
 * In docs, a string `title` is turned into a "##" heading inside the slide
 * at build time (src/remark/slide-titles.js), so it gets an anchor and a
 * table of contents entry. The `title` prop below is only a fallback.
 *
 * @param {string} title - Slide title
 * @param {string} type - Slide type: 'info', 'tip', 'warning', 'danger', 'note', 'default'
 * @param {ReactNode} children - Slide content
 */
export const Slide = ({
  title,
  children,
  type = 'default',
  className,
  ...props
}) => (
  <div className={clsx('slide-card', `slide-${type}`, className)} {...props}>
    {title && <h2 className="slide-title">{title}</h2>}
    <div className="slide-content">
      {children}
    </div>
  </div>
);

/**
 * Key points section component
 * Highlights main learning content
 * 
 * @param {string} title - Section title (default: "📋 Kluczowe punkty")
 * @param {ReactNode} children - Content
 */
export const KeyPoints = ({ children, title = "📋 Kluczowe punkty", className, ...props }) => (
  <div className={clsx('key-points-box', className)} {...props}>
    <h3 className="key-points-title">{title}</h3>
    <div className="key-points-content">
      {children}
    </div>
  </div>
);

/**
 * Supporting details section component
 * Provides additional context or explanation
 * 
 * @param {string} title - Section title (default: "🔧 Szczegóły")
 * @param {ReactNode} children - Detailed content
 */
export const SupportingDetails = ({ children, title = "🔧 Szczegóły", className, ...props }) => (
  <div className={clsx('supporting-details-box', className)} {...props}>
    <h3 className="supporting-details-title">{title}</h3>
    <div className="supporting-details-content">
      {children}
    </div>
  </div>
);

/**
 * Warning/important information component
 * Displays cautionary information
 */
export const WarningBox = ({ children, title = "⚠️ Ważne", className, ...props }) => (
  <div className={clsx('warning-box', className)} {...props}>
    <h3 className="warning-title">{title}</h3>
    <div className="warning-content">
      {children}
    </div>
  </div>
);

/**
 * Success/achievement component
 * Highlights positive information or achievements
 */
export const SuccessBox = ({ children, title = "✅ Sukces", className, ...props }) => (
  <div className={clsx('success-box', className)} {...props}>
    <h3 className="success-title">{title}</h3>
    <div className="success-content">
      {children}
    </div>
  </div>
);

/**
 * Info/note component
 * Displays informational content
 */
export const InfoBox = ({ children, title = "ℹ️ Informacja", className, ...props }) => (
  <div className={clsx('info-box', className)} {...props}>
    <h3 className="info-title">{title}</h3>
    <div className="info-content">
      {children}
    </div>
  </div>
);

/**
 * Instructor notes component - CRITICAL FOR EDUCATIONAL CONTENT
 * Provides collapsible detailed teaching notes
 * 
 * @param {string} title - Summary text shown when collapsed
 * @param {ReactNode} children - Detailed instructor notes
 */
export const InstructorNotes = ({ children, title = "🎓 Notatki wykładowcy (Kliknij aby rozwinąć)" }) => (
  <details className="instructor-notes">
    <summary className="instructor-notes-summary">{title}</summary>
    <div className="instructor-notes-content">
      {children}
    </div>
  </details>
);

/**
 * Visual separator for different content types
 * Themed separators for different lecture topics
 * 
 * @param {string} type - Separator type: 'default', 'data', 'technical', 'energy'
 */
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

/**
 * Learning Objective component
 * Displays learning objectives at the beginning of a section
 * 
 * @param {ReactNode} children - Learning objective content
 */
export const LearningObjective = ({ children, className, ...props }) => (
  <div className={clsx('alert', 'alert--info', 'learning-objective', className)} {...props}>
    <div className="learning-objective-header">
      🎯 <strong>Cel uczenia</strong>
    </div>
    <div className="learning-objective-content">
      {children}
    </div>
  </div>
);

/**
 * Key Concept component
 * Highlights important conceptual information
 * 
 * @param {string} title - Concept title
 * @param {ReactNode} children - Concept explanation
 */
export const KeyConcept = ({ title, children, className, ...props }) => (
  <div className={clsx('alert', 'alert--success', 'key-concept', className)} {...props}>
    <div className="key-concept-header">
      💡 <strong>{title}</strong>
    </div>
    <div className="key-concept-content">
      {children}
    </div>
  </div>
);

/**
 * Example component
 * Displays practical examples and case studies
 * 
 * @param {string} title - Example title
 * @param {ReactNode} children - Example content
 */
export const Example = ({ title, children, className, ...props }) => (
  <div className={clsx('alert', 'alert--warning', 'example', className)} {...props}>
    <div className="example-header">
      📖 <strong>{title}</strong>
    </div>
    <div className="example-content">
      {children}
    </div>
  </div>
);
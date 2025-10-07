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

// Instructor notes component
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

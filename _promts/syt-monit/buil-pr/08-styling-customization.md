# Prompt 08: Styling and Theme Customization

## Context
Customize the visual appearance of the course website to match institutional branding, improve readability, and create a cohesive educational experience.

## Task
Modify `src/css/custom.css` and related style files to implement custom colors, typography, spacing, and component-specific styling.

## File: `src/css/custom.css`

### Complete Custom CSS Template

**ACTUAL IMPLEMENTATION** - This is the complete, tested CSS from the working project:

```css
/**
 * Custom CSS for Course Website
 * Any CSS included here will be global. The classic template
 * bundles Infima by default. Infima is a CSS framework designed to
 * work well for content-centric websites.
 */

/* ============================================
   1. CSS VARIABLES - THEME COLORS
   ============================================ */

:root {
  /* Primary Color Palette - Green theme for renewable energy */
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;

  /* Secondary Color (for accents and highlights) */
  --ifm-color-secondary: #0288d1;
  --ifm-color-secondary-dark: #01579b;
  --ifm-color-secondary-light: #4fc3f7;

  /* Success, Info, Warning, Danger */
  --ifm-color-success: #4caf50;
  --ifm-color-info: #2196f3;
  --ifm-color-warning: #ff9800;
  --ifm-color-danger: #f44336;

  /* Typography */
  --ifm-font-family-base: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --ifm-font-family-monospace: 'Fira Code', 'Courier New', monospace;
  --ifm-font-size-base: 16px;
  --ifm-line-height-base: 1.65;

  /* Spacing */
  --ifm-spacing-horizontal: 1rem;
  --ifm-spacing-vertical: 1rem;

  /* Code blocks */
  --ifm-code-font-size: 95%;
  --ifm-code-padding-horizontal: 0.4rem;
  --ifm-code-padding-vertical: 0.2rem;
  --ifm-code-border-radius: 4px;

  /* Navbar */
  --ifm-navbar-height: 60px;
  --ifm-navbar-background-color: #ffffff;
  --ifm-navbar-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* Footer */
  --ifm-footer-background-color: #1c1e21;
  --ifm-footer-color: #ffffffb3;
  --ifm-footer-link-color: #ffffff;

  /* Content width */
  --ifm-container-width: 1140px;
  --ifm-container-width-xl: 1320px;
}

  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

/* Dark mode overrides */
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}

/* ============================================
   2. FIX FOR CARD TITLE TRUNCATION
   ============================================ */

/* Fix for card title truncation - allow full titles to display */
.markdown h2 {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

/* Generated index cards - prevent title truncation */
.generated-index-page .card h2 {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-overflow: unset;
  overflow: visible;
  display: block;
  height: auto;
  min-height: auto;
}

/* Additional rules for card title display */
.card h2,
.card__header h2,
.generated-index-page .card h2 {
  white-space: normal !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  text-overflow: unset !important;
  overflow: visible !important;
  display: block !important;
  height: auto !important;
  min-height: auto !important;
  line-height: 1.3 !important;
  max-height: none !important;
}

/* Card container to accommodate longer titles */
.card,
.generated-index-page .card {
  min-height: auto !important;
  height: auto !important;
  display: flex !important;
  flex-direction: column !important;
}

/* ============================================
   3. VISUALIZATION EXAMPLES STYLES
   ============================================ */

/* Two column layout */
.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
}

.column {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

/* Feature grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.feature-card {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

/* Card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.tool-card {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.tool-card h3 {
  color: #1976d2;
  margin: 0 0 0.5rem 0;
}

/* ============================================
   4. SLIDE PRESENTATION STYLES (CRITICAL!)
   ============================================ */

/* Slide Container */
.slide-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1rem 0;
}

/* Individual Slide Cards */
.slide-card {
  border: 2px solid #4CAF50;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
}

.slide-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

/* Slide Types - Different colors for different content types */
.slide-info {
  border-color: #17a2b8;
  background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
}

.slide-tip {
  border-color: #28a745;
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
}

.slide-warning {
  border-color: #ffc107;
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
}

.slide-danger {
  border-color: #dc3545;
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
}

.slide-success {
  border-color: #28a745;
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
}

/* Slide Title */
.slide-title {
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 0.5rem;
}

/* Slide Content */
.slide-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* ============================================
   4. TABLES
   ============================================ */

table {
  display: table;
  width: 100%;
  margin-bottom: 1.5rem;
  border-collapse: collapse;
  font-size: 0.95rem;
}

table thead {
  background-color: var(--ifm-color-primary);
  color: white;
}

table thead th {
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
}

table tbody td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}

table tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

[data-theme='dark'] table tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

/* ============================================
   5. ADMONITIONS (INFO BOXES)
   ============================================ */

.admonition {
  margin-bottom: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.admonition h5 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Tip */
.admonition-tip {
  background-color: #e7f3ff;
  border-color: #1976d2;
}

.admonition-tip h5 {
  color: #1565c0;
}

/* Info */
.admonition-info {
  background-color: #e3f2fd;
  border-color: #0288d1;
}

.admonition-info h5 {
  color: #01579b;
}

/* Caution */
.admonition-caution {
  background-color: #fff3e0;
  border-color: #f57c00;
}

.admonition-caution h5 {
  color: #e65100;
}

/* Warning */
.admonition-warning {
  background-color: #fff8e1;
  border-color: #ffa726;
}

.admonition-warning h5 {
  color: #ff6f00;
}

/* Danger */
.admonition-danger {
  background-color: #ffebee;
  border-color: #e53935;
}

.admonition-danger h5 {
  color: #c62828;
}

/* Note */
.admonition-note {
  background-color: #f5f5f5;
  border-color: #757575;
}

.admonition-note h5 {
  color: #424242;
}

/* ============================================
   6. NAVBAR CUSTOMIZATION
   ============================================ */

.navbar {
  box-shadow: var(--ifm-navbar-shadow);
  padding: 0.5rem 1rem;
}

.navbar__title {
  font-weight: 700;
  font-size: 1.25rem;
}

.navbar__logo {
  height: 40px;
  margin-right: 1rem;
}

.navbar__item {
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease;
}

.navbar__item:hover {
  color: var(--ifm-color-primary);
}

/* ============================================
   7. SIDEBAR CUSTOMIZATION
   ============================================ */

.theme-doc-sidebar-container {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme='dark'] .theme-doc-sidebar-container {
  border-right-color: rgba(255, 255, 255, 0.1);
}

.menu__link {
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.menu__link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

[data-theme='dark'] .menu__link:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.menu__link--active {
  background-color: var(--ifm-color-primary);
  color: white !important;
  font-weight: 600;
}

.menu__link--active:hover {
  background-color: var(--ifm-color-primary-dark);
}

/* ============================================
   8. PAGINATION (NEXT/PREV)
   ============================================ */

.pagination-nav {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}

.pagination-nav__link {
  border: 2px solid var(--ifm-color-primary);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.pagination-nav__link:hover {
  background-color: var(--ifm-color-primary);
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* ============================================
   9. HOMEPAGE CUSTOMIZATION
   ============================================ */

.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--ifm-color-primary-light), var(--ifm-color-primary-dark));
  color: white;
}

.hero__title {
  font-size: 3rem;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero__subtitle {
  font-size: 1.5rem;
  margin-top: 1rem;
  opacity: 0.95;
}

.hero__info {
  margin: 2rem auto;
  max-width: 600px;
  font-size: 1.1rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.button--lg {
  font-size: 1.25rem;
  padding: 1rem 2rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.button--lg:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* Instructor Notes - CRITICAL FOR EDUCATIONAL CONTENT */
.instructor-notes {
  margin-top: 1.5rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
}

.instructor-notes-summary {
  background: #f8f9fa;
  padding: 12px 16px;
  cursor: pointer;
  font-weight: 600;
  color: #495057;
  border-bottom: 1px solid #dee2e6;
  transition: background-color 0.2s ease;
}

.instructor-notes-summary:hover {
  background: #e9ecef;
}

.instructor-notes-content {
  padding: 16px;
  background: #ffffff;
  line-height: 1.6;
}

.instructor-notes-content ul {
  margin: 0.5rem 0;
  padding-left: 1.2rem;
}

.instructor-notes-content li {
  margin-bottom: 0.3rem;
}

/* Slide Separators */
.slide-separator {
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  font-size: 1.5rem;
  color: #6c757d;
}

.visual-separator {
  text-align: center;
  margin: 1.5rem 0;
  padding: 0.8rem;
  font-size: 1.2rem;
  color: #495057;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

/* Slide Progress */
.slide-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.slide-progress-bar {
  flex: 1;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.slide-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #45a049);
  transition: width 0.3s ease;
}

.slide-progress-text {
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: 500;
}

/* Slide Navigation */
.slide-navigation {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.slide-nav-button {
  padding: 0.8rem 1.5rem;
  border: 2px solid #4CAF50;
  background: #ffffff;
  color: #4CAF50;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.slide-nav-button:hover:not(:disabled) {
  background: #4CAF50;
  color: #ffffff;
  transform: translateY(-1px);
}

.slide-nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-color: #6c757d;
  color: #6c757d;
}

/* ============================================
   11. RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 768px) {
  .slide-card {
    padding: 15px;
    margin: 15px 0;
  }
  
  .slide-title {
    font-size: 1.5rem;
  }
  
  .slide-navigation {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .slide-nav-button {
    width: 100%;
    text-align: center;
  }
  
  .two-column-layout {
    grid-template-columns: 1fr;
  }
}

/* ============================================
   12. DARK MODE SUPPORT
   ============================================ */

[data-theme='dark'] .slide-card {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  border-color: #68d391;
}

[data-theme='dark'] .slide-title {
  color: #e2e8f0;
  border-bottom-color: #68d391;
}

[data-theme='dark'] .key-points-box {
  background: #744210;
  border-left-color: #f6ad55;
}

[data-theme='dark'] .key-points-title {
  color: #fbd38d;
}

[data-theme='dark'] .supporting-details-box {
  background: #2c5282;
  border-left-color: #63b3ed;
}

[data-theme='dark'] .supporting-details-title {
  color: #90cdf4;
}

[data-theme='dark'] .warning-box {
  background: #742a2a;
  border-left-color: #fc8181;
}

[data-theme='dark'] .warning-title {
  color: #feb2b2;
}

[data-theme='dark'] .success-box {
  background: #22543d;
  border-left-color: #68d391;
}

[data-theme='dark'] .success-title {
  color: #9ae6b4;
}

[data-theme='dark'] .info-box {
  background: #553c9a;
  border-left-color: #b794f6;
}

[data-theme='dark'] .info-title {
  color: #d6bcfa;
}

[data-theme='dark'] .instructor-notes {
  border-color: #4a5568;
}

[data-theme='dark'] .instructor-notes-summary {
  background: #2d3748;
  color: #e2e8f0;
  border-bottom-color: #4a5568;
}

[data-theme='dark'] .instructor-notes-summary:hover {
  background: #4a5568;
}

[data-theme='dark'] .instructor-notes-content {
  background: #1a202c;
  color: #e2e8f0;
}

/* ============================================
   12. PRINT STYLES
   ============================================ */

@media print {
  .navbar,
  .footer,
  .theme-doc-sidebar-container,
  .pagination-nav,
  .theme-doc-toc-desktop {
    display: none !important;
  }

  .main-wrapper {
    max-width: 100%;
  }

  h1 {
    page-break-before: always;
  }

  h1:first-child {
    page-break-before: avoid;
  }

  pre,
  table,
  figure {
    page-break-inside: avoid;
  }
}
```

## Additional CSS Modules for Custom Components

Create matching CSS modules for components created in Prompt 07:

### `src/components/LiteratureList.module.css`

```css
.literatureContainer {
  margin: 2rem 0;
}

.typeSection {
  margin-bottom: 2.5rem;
}

.typeHeading {
  color: var(--ifm-color-primary);
  border-bottom: 2px solid var(--ifm-color-primary);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.literatureList {
  list-style: none;
  padding: 0;
}

.literatureItem {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.literatureItem:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

[data-theme='dark'] .literatureItem {
  background-color: rgba(255, 255, 255, 0.05);
}

[data-theme='dark'] .literatureItem:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.citation {
  line-height: 1.6;
}

.authors {
  font-weight: 600;
  color: var(--ifm-color-primary-dark);
}

.year {
  color: #666;
}

.title {
  font-style: italic;
}

.link {
  margin-left: 1rem;
  font-weight: 500;
}
```

### `src/components/InteractiveElements.module.css`

```css
.quizContainer {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  border: 2px solid var(--ifm-color-primary);
}

[data-theme='dark'] .quizContainer {
  background-color: rgba(255, 255, 255, 0.05);
}

.quizQuestion {
  color: var(--ifm-color-primary);
  margin-bottom: 1.5rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.option:hover {
  border-color: var(--ifm-color-primary);
  transform: translateX(4px);
}

.option input[type="radio"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.correctOption {
  background-color: #d4edda;
  border-color: #28a745;
}

.wrongOption {
  background-color: #f8d7da;
  border-color: #dc3545;
}

.submitButton,
.resetButton {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submitButton {
  background-color: var(--ifm-color-primary);
  color: white;
}

.submitButton:hover:not(:disabled) {
  background-color: var(--ifm-color-primary-dark);
  transform: translateY(-2px);
}

.submitButton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.resetButton {
  background-color: #6c757d;
  color: white;
  margin-top: 1rem;
}

.resetButton:hover {
  background-color: #5a6268;
}

.correct,
.incorrect {
  padding: 1rem;
  border-radius: 6px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.correct {
  background-color: #d4edda;
  color: #155724;
  border: 2px solid #28a745;
}

.incorrect {
  background-color: #f8d7da;
  color: #721c24;
  border: 2px solid #dc3545;
}

.explanation {
  background-color: #e7f3ff;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #2196f3;
  margin-bottom: 1rem;
}
```

## Implementation Checklist

- [ ] Update CSS variables with course branding colors
- [ ] Customize typography for readability
- [ ] Style admonitions (info boxes)
- [ ] Customize navbar appearance
- [ ] Style sidebar and menu items
- [ ] Add homepage hero styling
- [ ] Create responsive breakpoints
- [ ] Add print styles
- [ ] Test dark mode compatibility
- [ ] Verify mobile responsiveness

## Next Steps
Proceed to Prompt 09 for testing and validation procedures.

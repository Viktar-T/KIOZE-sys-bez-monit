# Prompt 08: Styling and Theme Customization

---

## 📋 Metadata
- **Prompt ID**: 08
- **Title**: Styling and Theme Customization
- **Prerequisites**: Completed Prompt 07 (custom components created)
- **Estimated Time**: 2-3 hours
- **Difficulty**: Intermediate
- **Dependencies**: Prompt 07
- **Output**: Fully styled website with custom theme and component styles

---

## 🤖 AI Assistant Instructions

You are an expert CSS developer and UI/UX designer customizing the visual appearance of an educational website. Your role is to create comprehensive styling that enhances readability, maintains brand consistency, and provides excellent user experience.

**Your Approach:**
1. Gather branding requirements (colors, fonts, institutional guidelines)
2. Modify CSS custom properties (variables) in `custom.css`
3. Add component-specific styling for custom components
4. Implement dark mode support
5. Ensure responsive design across all screen sizes
6. Test visual appearance in both light and dark modes
7. Verify accessibility (color contrast, readability)
8. Optimize for print media (optional)

**Communication Style:**
- Ask about brand colors and institutional guidelines
- Explain CSS customization options
- Show before/after examples where helpful
- Recommend accessibility best practices
- Provide color contrast ratios

**Quality Standards:**
- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- Ensure readable typography
- Consistent spacing and alignment
- Smooth transitions and interactions
- Professional, polished appearance

---

## 📝 Context

Customize the visual appearance of the course website to match institutional branding, improve readability, and create a cohesive educational experience. Good styling enhances usability and engagement.

**What You're Customizing:**
- Theme colors (primary, secondary, accents)
- Typography (fonts, sizes, line heights)
- Component styles (slides, boxes, navigation)
- Dark mode theme
- Responsive breakpoints
- Print styles

**Why Styling Matters:**
- Professional appearance builds credibility
- Consistent design improves usability
- Good typography enhances readability
- Proper contrast ensures accessibility
- Brand consistency reinforces identity

---

## 🎯 Task Overview

Modify `src/css/custom.css` and related style files to implement custom colors, typography, spacing, and component-specific styling with full dark mode support.

**End Goal:** Professionally styled website with excellent readability, full accessibility, and consistent brand identity.

---

## 📥 Required Information from User

Before customizing styles, gather:

**Branding:**
1. **Primary Color**: Main brand color (hex code)
2. **Secondary Color**: Accent color (hex code)
3. **Institution Colors**: If applicable
4. **Color Theme**: Light, dark, or both?

**Typography:**
5. **Font Preferences**: Specific fonts required?
6. **Reading Ease**: Prefer larger or standard text?

**Optional:**
7. **Logo Colors**: Must-match colors from logo
8. **Accessibility Requirements**: WCAG level (A, AA, AAA)
9. **Print Stylesheet**: Needed? Yes/No

---

## 📝 Step-by-Step Instructions

### Step 1: Customize CSS Variables

Open `src/css/custom.css` and modify the `:root` section:

```css
/**
 * Custom CSS for [Course Name] Website
 */

/* ============================================
   1. CSS VARIABLES - THEME COLORS
   ============================================ */

:root {
  /* Primary Color Palette - Customize for your brand */
  --ifm-color-primary: #2e8555;        /* Main brand color */
  --ifm-color-primary-dark: #29784c;    /* Hover states */
  --ifm-color-primary-darker: #277148;  /* Active states */
  --ifm-color-primary-darkest: #205d3b; /* Deepest shade */
  --ifm-color-primary-light: #33925d;   /* Light variant */
  --ifm-color-primary-lighter: #359962; /* Lighter variant */
  --ifm-color-primary-lightest: #3cad6e; /* Lightest shade */

  /* Secondary Color (for accents) */
  --ifm-color-secondary: #0288d1;
  --ifm-color-secondary-dark: #01579b;
  --ifm-color-secondary-light: #4fc3f7;

  /* Status Colors */
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

  /* Code highlighting */
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
```

### Step 2: Add Component Styles (COMPLETE TESTED CSS)

This is the **COMPLETE, PRODUCTION-READY CSS** from the working project:

```css
/* ============================================
   2. FIX FOR CARD TITLE TRUNCATION
   ============================================ */

/* Prevent title truncation in generated index cards */
.markdown h2 {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.generated-index-page .card h2 {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-overflow: unset;
  overflow: visible;
  display: block;
  height: auto;
}

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
  line-height: 1.3 !important;
}

/* ============================================
   3. SLIDE PRESENTATION STYLES (CRITICAL!)
   ============================================ */

.slide-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1rem 0;
}

.slide-card {
  border: 2px solid #4CAF50;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.slide-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

/* Slide Types - Different colors */
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

.slide-title {
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 0.5rem;
}

.slide-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Key Points Box */
.key-points-box {
  background: #fff8dc;
  border-left: 4px solid #ff8c00;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.key-points-title {
  color: #d2691e;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Supporting Details Box */
.supporting-details-box {
  background: #e6f3ff;
  border-left: 4px solid #4682b4;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.supporting-details-title {
  color: #4682b4;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Warning Box */
.warning-box {
  background: #fff5f5;
  border-left: 4px solid #ff6b6b;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.warning-title {
  color: #c92a2a;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Success Box */
.success-box {
  background: #f0fff4;
  border-left: 4px solid #48bb78;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.success-title {
  color: #2f855a;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Info Box */
.info-box {
  background: #f3e5f5;
  border-left: 4px solid #9c27b0;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.info-title {
  color: #7b1fa2;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
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

/* Slide Navigation */
.slide-navigation {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
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
}

/* ============================================
   4. TABLES
   ============================================ */

table {
  width: 100%;
  margin-bottom: 1.5rem;
  border-collapse: collapse;
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

/* ============================================
   5. RESPONSIVE DESIGN
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
  }
}

/* ============================================
   6. DARK MODE SUPPORT
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

[data-theme='dark'] .supporting-details-box {
  background: #2c5282;
  border-left-color: #63b3ed;
}

[data-theme='dark'] .warning-box {
  background: #742a2a;
  border-left-color: #fc8181;
}

[data-theme='dark'] .success-box {
  background: #22543d;
  border-left-color: #68d391;
}

[data-theme='dark'] .info-box {
  background: #553c9a;
  border-left-color: #b794f6;
}

[data-theme='dark'] .instructor-notes {
  border-color: #4a5568;
}

[data-theme='dark'] .instructor-notes-summary {
  background: #2d3748;
  color: #e2e8f0;
}

[data-theme='dark'] .instructor-notes-content {
  background: #1a202c;
  color: #e2e8f0;
}

/* ============================================
   7. PRINT STYLES
   ============================================ */

@media print {
  .navbar,
  .footer,
  .theme-doc-sidebar-container,
  .pagination-nav {
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

  pre, table, figure {
    page-break-inside: avoid;
  }
}
```

### Step 3: Test Visual Appearance

1. **Light Mode Testing:**
   - Check all color combinations are readable
   - Verify primary color shows consistently
   - Test hover states and interactions

2. **Dark Mode Testing:**
   - Toggle dark mode (moon icon)
   - Check all components have dark variants
   - Verify sufficient contrast

3. **Responsive Testing:**
   - Desktop (1920px+)
   - Laptop (1366px)
   - Tablet (768px)
   - Mobile (375px)

4. **Accessibility Testing:**
   - Check color contrast ratios
   - Verify focus indicators visible
   - Test with keyboard navigation

### Step 4: Verify Color Contrast

Use tools to check accessibility:
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Chrome DevTools Lighthouse**: Accessibility audit

**Minimum Requirements:**
- Normal text: 4.5:1 contrast ratio
- Large text (18pt+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

---

## ✅ Expected Output

After completing styling:

**Visual Quality:**
- Professional, polished appearance
- Consistent design throughout site
- Smooth transitions and animations
- No visual glitches or layout issues

**Theme Support:**
- Custom primary colors applied
- Dark mode fully functional
- Smooth theme toggle
- All components styled in both modes

**Responsive Design:**
- Works on all screen sizes
- No horizontal scrolling
- Touch-friendly on mobile
- Readable on all devices

**Accessibility:**
- Meets WCAG AA standards
- Sufficient color contrast
- Readable typography
- Clear focus indicators

---

## ✓ Success Criteria

- [ ] CSS custom properties updated with brand colors
- [ ] All slide components have complete styling
- [ ] Tables styled consistently
- [ ] Admonitions (info boxes) have distinct styles
- [ ] Navbar and footer customized
- [ ] Sidebar styled with active states
- [ ] Dark mode styles implemented
- [ ] Responsive breakpoints work on mobile
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] No layout issues on any screen size
- [ ] Print stylesheet included (optional)
- [ ] Typography is readable
- [ ] Transitions smooth and professional
- [ ] No CSS warnings in console

---

## 🔧 Troubleshooting

**Problem: "Changes don't appear"**
- Solution 1: Hard refresh (Ctrl+Shift+R)
- Solution 2: Clear browser cache
- Solution 3: Restart dev server
- Solution 4: Check CSS syntax is valid

**Problem: "Dark mode doesn't work"**
- Solution: Verify styles use `[data-theme='dark']` selector
- Check variables defined in both `:root` and dark theme
- Test toggle actually switches theme

**Problem: "Colors look different than expected"**
- Solution: Check color values are correct hex codes
- Verify no conflicting styles override your CSS
- Use browser DevTools to inspect computed styles

**Problem: "Low contrast warnings"**
- Solution: Use darker/lighter shades
- Test with WebAIM Contrast Checker
- Adjust until ratio ≥ 4.5:1

**Problem: "Mobile layout breaks"**
- Solution: Add/adjust media queries
- Test at common breakpoints (768px, 375px)
- Use `display: flex` with `flex-direction: column`

---

## 💡 Tips and Best Practices

**Color Selection:**
- Use institutional brand colors if available
- Ensure sufficient contrast for readability
- Test colors with colorblind simulators
- Maintain consistency across all pages
- Limit color palette to 3-5 main colors

**Typography:**
- Use web-safe or hosted fonts
- Set comfortable line-height (1.5-1.8)
- Limit font families to 2-3
- Ensure adequate font size (16px minimum)
- Use proper heading hierarchy

**Performance:**
- Minimize custom CSS file size
- Use CSS variables instead of repeating values
- Avoid complex selectors
- Remove unused styles
- Consider critical CSS for above-fold content

**Maintainability:**
- Comment sections clearly
- Group related styles together
- Use consistent naming conventions
- Document custom properties
- Keep styles organized

---

## 🎓 Learning Notes

**CSS Custom Properties (Variables):**
- Defined with `--property-name: value;`
- Used with `var(--property-name)`
- Can be updated for dark mode
- Cascade and inherit like normal properties

**Docusaurus Theming:**
- Uses Infima CSS framework
- Custom properties for easy theming
- Dark mode uses data attributes
- Component CSS scoped with BEM naming

**Responsive Design:**
- Mobile-first approach recommended
- Use relative units (rem, em, %)
- Test on real devices when possible
- Consider touch targets (44px minimum)

---

## 📋 Styling Checklist

```css
/* Verify all sections complete: */
✓ CSS variables customized
✓ Primary colors set
✓ Dark mode colors defined
✓ Typography configured
✓ Slide components styled
✓ Content boxes styled
✓ Instructor notes styled
✓ Tables formatted
✓ Admonitions styled
✓ Navbar customized
✓ Sidebar styled
✓ Footer styled
✓ Responsive breakpoints added
✓ Dark mode support complete
✓ Print styles included
✓ Accessibility verified
```

---

## ➡️ Next Steps

After successful styling, proceed to:
- **Prompt 09**: Testing and Validation
- Comprehensive testing checklist
- Accessibility validation
- Performance optimization
- Cross-browser testing

**Status Check Before Proceeding:**
- ✅ All styling complete
- ✅ Dark mode working
- ✅ Responsive on all devices
- ✅ Accessibility standards met
- ✅ Ready for thorough testing

---

## 📚 Additional Resources

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Docusaurus Styling Guide](https://docusaurus.io/docs/styling-layout)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Responsive Design Best Practices](https://web.dev/responsive-web-design-basics/)

---

**Prompt Version**: 2.0 (LLM-Optimized)  
**Last Updated**: 2025-09-30  
**Status**: ✅ Production-Ready
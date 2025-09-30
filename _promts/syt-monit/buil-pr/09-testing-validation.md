# Prompt 09: Testing and Validation

---

## 📋 Metadata
- **Prompt ID**: 09
- **Title**: Testing and Validation
- **Prerequisites**: Completed Prompt 08 (styling complete)
- **Estimated Time**: 2-3 hours
- **Difficulty**: Intermediate
- **Dependencies**: Prompt 08, all previous prompts
- **Output**: Tested, validated site ready for deployment

---

## 🤖 AI Assistant Instructions

You are an expert QA engineer and web accessibility specialist helping test and validate an educational website. Your role is to guide comprehensive testing across functionality, accessibility, performance, and user experience.

**Your Approach:**
1. Guide user through systematic testing checklist
2. Help identify and diagnose issues
3. Provide solutions for common problems
4. Run automated testing tools (Lighthouse, validators)
5. Verify accessibility compliance
6. Check performance metrics
7. Test cross-browser compatibility
8. Validate responsive design
9. Document findings and issues

**Communication Style:**
- Provide clear testing steps
- Explain why each test matters
- Help interpret test results
- Offer specific solutions to problems found
- Prioritize issues by severity (critical, high, medium, low)

**Testing Standards:**
- All links functional
- No console errors
- WCAG AA accessibility compliance
- Lighthouse score ≥ 90 for accessibility
- Mobile-friendly (Google test)
- Fast loading (LCP < 2.5s)

---

## 📝 Context

Before deploying the educational website, thorough testing ensures all content displays correctly, links work, images load, and the site functions properly across different devices and browsers. Testing prevents user frustration and ensures quality.

**What You're Testing:**
- Content validity (all pages render, no broken links)
- Functionality (navigation, search, interactions)
- Accessibility (screen readers, keyboard, contrast)
- Performance (load times, optimization)
- Responsive design (mobile, tablet, desktop)
- Cross-browser compatibility

**Why Testing Matters:**
- Prevents broken user experience
- Ensures accessibility for all students
- Catches issues before deployment
- Maintains professional quality
- Meets web standards and best practices

---

## 🎯 Task Overview

Perform comprehensive testing of the Docusaurus site including content validation, functionality testing, accessibility checks, and performance optimization.

**End Goal:** Fully tested, validated website ready for production deployment with no critical issues.

## Testing Checklist

### 1. Local Development Server Testing

#### Start Development Server
```bash
# Navigate to project
cd [project-directory]

# Start development server
npm run start

# Server should start at http://localhost:3000
```

#### Basic Functionality Tests
- [ ] Homepage loads without errors
- [ ] All navbar links work correctly
- [ ] Sidebar navigation is functional
- [ ] Dark mode toggle works
- [ ] Search functionality works (if enabled)
- [ ] All internal links navigate correctly

### 2. Content Validation

#### Documentation Pages
- [ ] All lecture pages render correctly
- [ ] MDX components display properly
- [ ] Code blocks have syntax highlighting
- [ ] Mermaid diagrams render correctly
- [ ] Tables display properly formatted
- [ ] Admonitions (info boxes) show correct styling

#### Images and Media
- [ ] All images load without 404 errors
- [ ] Images have appropriate alt text
- [ ] Images are properly sized and not distorted
- [ ] SVG icons display correctly
- [ ] Favicon appears in browser tab
- [ ] Social card image is configured

#### Links Validation
```bash
# Build the site first
npm run build

# Check for broken links (if you have a link checker installed)
# Or manually check critical links
```

Manual checks:
- [ ] Internal links (between pages) work
- [ ] External links open in new tabs
- [ ] Download links work
- [ ] Anchor links (to sections) work
- [ ] "Edit this page" links work (if configured)

### 3. Navigation Testing

#### Sidebar Navigation
- [ ] All categories expand/collapse correctly
- [ ] Page order is logical and correct
- [ ] Active page is highlighted
- [ ] Nested items indent properly
- [ ] Category labels display correctly

#### Pagination
- [ ] "Previous" button navigates correctly
- [ ] "Next" button navigates correctly
- [ ] Buttons disabled when appropriate (first/last page)

#### Breadcrumbs
- [ ] Breadcrumb trail shows correct path
- [ ] All breadcrumb links are clickable
- [ ] Breadcrumbs reflect page hierarchy

### 4. Responsive Design Testing

Test on multiple screen sizes:

#### Desktop (1920x1080, 1366x768)
- [ ] Layout uses full width appropriately
- [ ] Sidebar is visible
- [ ] Table of contents displays (if enabled)
- [ ] No horizontal scrolling
- [ ] Images fit within content area

#### Tablet (768x1024, landscape and portrait)
- [ ] Sidebar collapses to hamburger menu
- [ ] Content is readable without zooming
- [ ] Touch targets are appropriately sized
- [ ] Images scale properly

#### Mobile (375x667, 414x896)
- [ ] All content is accessible
- [ ] No text overflow
- [ ] Buttons are easily tappable
- [ ] Navigation menu works
- [ ] Images don't break layout

```bash
# Test using browser DevTools
# Chrome: F12 > Toggle Device Toolbar (Ctrl+Shift+M)
# Firefox: F12 > Responsive Design Mode (Ctrl+Shift+M)
```

### 5. Cross-Browser Testing

Test in multiple browsers:
- [ ] **Chrome** (latest version)
- [ ] **Firefox** (latest version)
- [ ] **Safari** (if on Mac)
- [ ] **Edge** (latest version)
- [ ] **Mobile browsers** (Chrome Mobile, Safari iOS)

Check for:
- Consistent rendering
- CSS compatibility
- JavaScript functionality
- Font rendering

### 6. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab key navigates through all interactive elements
- [ ] Enter/Space activate buttons and links
- [ ] Escape closes modals/menus
- [ ] Skip to content link works
- [ ] Focus indicators are visible

#### Screen Reader Testing
Use browser extensions or tools:
- **Chrome**: Install "Screen Reader" extension
- **NVDA** (Windows): Free screen reader
- **JAWS** (Windows): Professional screen reader
- **VoiceOver** (Mac): Built-in screen reader

Check:
- [ ] All images have alt text
- [ ] Headings are properly structured (H1 > H2 > H3)
- [ ] Links have descriptive text
- [ ] Form labels are associated with inputs
- [ ] ARIA labels used where appropriate

#### Color Contrast
Use tools to check contrast ratios:
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Chrome DevTools**: Lighthouse > Accessibility

Requirements:
- [ ] Text contrast ratio ≥ 4.5:1 (normal text)
- [ ] Large text contrast ratio ≥ 3:1 (18pt+ or 14pt bold+)
- [ ] UI components contrast ratio ≥ 3:1

#### WCAG Compliance Check
```bash
# Run Lighthouse accessibility audit
# Chrome DevTools > Lighthouse > Accessibility
```

Target:
- [ ] Score ≥ 90% on Lighthouse Accessibility audit
- [ ] No critical accessibility violations

### 7. Performance Testing

#### Build Size Check
```bash
# Build for production
npm run build

# Check build size
# Look for warnings about large files
```

Check:
- [ ] Build completes without warnings
- [ ] No excessively large bundles
- [ ] Images are optimized
- [ ] Unused dependencies removed

#### Page Load Performance
```bash
# Run Lighthouse performance audit
# Chrome DevTools > Lighthouse > Performance
```

Targets:
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Total Blocking Time (TBT) < 200ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

#### Optimization Recommendations
If performance issues:
- Compress images (use TinyPNG, Squoosh)
- Lazy load images
- Minimize JavaScript bundles
- Enable caching headers
- Use CDN for static assets

### 8. Content Quality Checks

#### Proofreading
- [ ] Spell check all content
- [ ] Grammar check
- [ ] Consistent terminology
- [ ] Proper capitalization
- [ ] Correct punctuation

#### Technical Accuracy
- [ ] Code examples are correct
- [ ] Commands execute successfully
- [ ] Formulas are accurate
- [ ] References are valid
- [ ] Data is up-to-date

#### Formatting Consistency
- [ ] Consistent heading hierarchy
- [ ] Uniform bullet point style
- [ ] Consistent code formatting
- [ ] Aligned table columns
- [ ] Proper spacing

### 9. SEO Validation

#### Meta Tags
Check each page has:
- [ ] Unique title tag
- [ ] Meta description
- [ ] Canonical URL
- [ ] Open Graph tags (for social sharing)
- [ ] Structured data (if applicable)

#### Sitemap
```bash
# After building, verify sitemap exists
# Check: build/sitemap.xml
```

- [ ] Sitemap.xml generated
- [ ] All pages included
- [ ] URLs are absolute
- [ ] Valid XML format

#### Robots.txt
- [ ] Robots.txt allows crawling
- [ ] Sitemap referenced in robots.txt
- [ ] No sensitive paths exposed

### 10. Production Build Testing

```bash
# Create production build
npm run build

# Serve production build locally
npm run serve

# Test at http://localhost:3000
```

Production-specific checks:
- [ ] Build completes successfully
- [ ] No console errors
- [ ] No 404 errors in Network tab
- [ ] Minified JavaScript loads
- [ ] CSS is optimized
- [ ] Assets are compressed

### 11. Custom Component Testing

#### Interactive Elements
- [ ] Quizzes function correctly
- [ ] Buttons respond to clicks
- [ ] Forms validate input
- [ ] Modals open and close
- [ ] Animations play smoothly

#### Custom React Components
- [ ] All custom components render
- [ ] Props are passed correctly
- [ ] State management works
- [ ] No React warnings in console
- [ ] Components are responsive

### 12. Error Handling

#### Test Error Pages
Navigate to non-existent pages:
- [ ] 404 page displays correctly
- [ ] Error message is user-friendly
- [ ] Navigation back to site works
- [ ] 404 page is styled consistently

#### Check Console
- [ ] No JavaScript errors
- [ ] No React warnings
- [ ] No missing dependencies
- [ ] No CORS errors
- [ ] No deprecation warnings

### 13. Documentation Testing Tools

#### Automated Testing Commands

```bash
# Docusaurus-specific checks
npm run docusaurus --help

# Clear cache if issues
npm run clear

# Validate all heading IDs
npm run write-heading-ids

# Check for broken links (if plugin installed)
npm run build -- --check-links
```

#### Recommended Testing Tools

**Browser Extensions**:
- Lighthouse (built into Chrome DevTools)
- WAVE Web Accessibility Evaluation Tool
- axe DevTools (accessibility testing)
- React Developer Tools

**Online Tools**:
- Google PageSpeed Insights
- GTmetrix (performance)
- WebAIM Contrast Checker
- W3C Markup Validation Service

### 14. User Acceptance Testing

#### Student Perspective
- [ ] Content is understandable
- [ ] Navigation is intuitive
- [ ] Examples are helpful
- [ ] Resources are accessible
- [ ] Interface is user-friendly

#### Instructor Perspective
- [ ] Instructor notes are visible and helpful
- [ ] Content covers objectives
- [ ] Pacing is appropriate
- [ ] Materials support teaching
- [ ] Easy to update content

## Testing Report Template

Create a testing report documenting results:

```markdown
# Testing Report - [Course Name] Website

**Date**: [Date]
**Tester**: [Name]
**Environment**: [Browser, OS, Device]

## Summary
- **Total Tests**: [X]
- **Passed**: [Y]
- **Failed**: [Z]
- **Issues Found**: [N]

## Test Results

### Content Validation
✅ All pages render correctly
❌ Issue: Broken link on page X
...

### Responsive Design
✅ Mobile layout works correctly
✅ Tablet layout functional
...

### Accessibility
✅ Lighthouse score: 95/100
⚠️ Warning: Low contrast on buttons
...

### Performance
✅ FCP: 1.2s
✅ LCP: 2.1s
...

## Issues to Fix
1. **High Priority**: [Issue description]
2. **Medium Priority**: [Issue description]
3. **Low Priority**: [Issue description]

## Recommendations
- [Recommendation 1]
- [Recommendation 2]
```

## Validation Checklist Summary

Before deployment, ensure:
- [ ] All automated tests pass
- [ ] Manual testing complete
- [ ] No critical accessibility issues
- [ ] Performance benchmarks met
- [ ] Content is accurate and complete
- [ ] Cross-browser compatibility verified
- [ ] Mobile experience optimized
- [ ] SEO requirements satisfied
- [ ] Production build successful
- [ ] Testing report documented

---

## ✅ Expected Output

After completing testing:

**Test Results:**
- Complete testing checklist (all items verified)
- List of issues found with severity ratings
- Documentation of fixes applied
- Screenshots of test results (Lighthouse, validators)

**Quality Metrics:**
- Lighthouse Accessibility: ≥ 90/100
- Lighthouse Performance: ≥ 85/100
- All critical and high issues resolved
- Mobile-friendly: Pass
- No console errors

**Documentation:**
- Testing report with findings
- Known issues list (if any remain)
- Browser compatibility matrix
- Accessibility compliance statement

---

## ✓ Success Criteria

**Content:**
- [ ] All pages render without errors
- [ ] All internal links work correctly
- [ ] All external links open in new tabs
- [ ] All images load (no 404s)
- [ ] All images have alt text
- [ ] Download links function
- [ ] Code examples display with syntax highlighting
- [ ] Mermaid diagrams render correctly
- [ ] Tables display properly

**Functionality:**
- [ ] Homepage loads correctly
- [ ] All navbar links work
- [ ] Sidebar navigation functional
- [ ] Dark mode toggle works
- [ ] Search works (if enabled)
- [ ] Pagination (next/prev) works
- [ ] Breadcrumbs display correctly
- [ ] Mobile menu opens/closes

**Accessibility:**
- [ ] Lighthouse accessibility score ≥ 90
- [ ] All images have descriptive alt text
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Headings properly structured (H1 → H2 → H3)
- [ ] Screen reader tested (basic)
- [ ] No accessibility violations (axe DevTools)

**Performance:**
- [ ] Lighthouse performance score ≥ 85
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] No console errors or warnings
- [ ] Images optimized (< 500KB each)
- [ ] Build completes successfully

**Responsive:**
- [ ] Desktop (1920px) displays correctly
- [ ] Laptop (1366px) displays correctly
- [ ] Tablet (768px) displays correctly
- [ ] Mobile (375px) displays correctly
- [ ] No horizontal scrolling
- [ ] Touch targets ≥ 44px on mobile
- [ ] Text readable without zooming

**Cross-Browser:**
- [ ] Chrome latest (tested)
- [ ] Firefox latest (tested)
- [ ] Edge latest (tested)
- [ ] Safari (tested if on Mac)
- [ ] Mobile Chrome (tested)
- [ ] Mobile Safari (tested if available)

---

## 🔧 Troubleshooting

**Problem: "Links return 404 errors"**
- Solution 1: Check file exists in `docs/` directory
- Solution 2: Verify link path starts with `/docs/`
- Solution 3: Check filename matches exactly (case-sensitive)
- Solution 4: Rebuild site: `npm run clear && npm run build`

**Problem: "Images don't load"**
- Solution 1: Verify image path starts with `/img/`
- Solution 2: Check filename matches exactly
- Solution 3: Ensure image exists in `static/img/`
- Solution 4: Check file extension correct (.png, .jpg, .svg)

**Problem: "Low Lighthouse scores"**
- Solution (Performance): Optimize images, minimize JS
- Solution (Accessibility): Add alt text, fix contrast
- Solution (SEO): Add meta descriptions
- Solution (Best Practices): Fix console errors, use HTTPS

**Problem: "Mermaid diagrams don't render"**
- Solution 1: Verify `@docusaurus/theme-mermaid` installed
- Solution 2: Check `markdown.mermaid: true` in config
- Solution 3: Validate syntax at https://mermaid.live
- Solution 4: Check no syntax errors in diagram code

**Problem: "Mobile menu doesn't work"**
- Solution 1: Test on actual mobile device (not just DevTools)
- Solution 2: Check JavaScript console for errors
- Solution 3: Verify Docusaurus version supports mobile menu
- Solution 4: Clear cache and hard refresh

**Problem: "Dark mode toggle not working"**
- Solution 1: Check theme config in docusaurus.config.js
- Solution 2: Verify CSS dark mode styles exist
- Solution 3: Test in different browser
- Solution 4: Clear localStorage and refresh

**Problem: "Console shows React warnings"**
- Solution: Review warning message details
- Common: Key props missing in lists
- Common: Invalid prop types
- Fix each warning individually

---

## 💡 Tips and Best Practices

**Testing Strategy:**
- Test systematically, not randomly
- Document all issues found
- Prioritize by severity (critical first)
- Retest after fixing issues
- Test on real devices when possible

**Accessibility Testing:**
- Use multiple tools (Lighthouse, axe, WAVE)
- Test with keyboard only (no mouse)
- Try screen reader if possible
- Check in both light and dark mode
- Focus on common issues first

**Performance Optimization:**
- Compress all images before upload
- Use appropriate image formats
- Lazy load below-fold images
- Minimize custom JavaScript
- Remove unused dependencies

**Browser Testing:**
- Test in most popular browsers first
- Use BrowserStack for comprehensive testing
- Check console in each browser
- Test both desktop and mobile versions
- Document any browser-specific issues

---

## 🎓 Learning Notes

**Lighthouse Metrics Explained:**
- **FCP (First Contentful Paint)**: When first content appears
- **LCP (Largest Contentful Paint)**: When main content loads
- **TTI (Time to Interactive)**: When page becomes fully interactive
- **TBT (Total Blocking Time)**: How long page blocked from input
- **CLS (Cumulative Layout Shift)**: Visual stability during load

**WCAG Levels:**
- **A**: Basic accessibility (minimum)
- **AA**: Acceptable accessibility (target)
- **AAA**: Enhanced accessibility (ideal)

**Common Accessibility Issues:**
- Missing alt text on images
- Low color contrast
- Poor heading structure
- No keyboard navigation
- Missing ARIA labels

---

## 📋 Complete Testing Checklist

**Pre-Testing:**
✓ Dev server running
✓ All content created
✓ Styling complete
✓ Browser DevTools open
✓ Testing tools ready

**Content Validation:**
✓ All pages accessible
✓ No 404 errors
✓ All links work
✓ All images load
✓ Alt text present
✓ Code blocks render
✓ Diagrams display
✓ Tables formatted

**Functionality Testing:**
✓ Navigation works
✓ Search functional
✓ Dark mode toggles
✓ Mobile menu works
✓ Interactive elements work
✓ Forms validate (if any)

**Accessibility Testing:**
✓ Lighthouse audit run
✓ axe DevTools check
✓ Keyboard navigation tested
✓ Focus indicators visible
✓ Color contrast checked
✓ Heading structure verified
✓ Screen reader tested

**Performance Testing:**
✓ Lighthouse performance audit
✓ Image optimization verified
✓ Load times acceptable
✓ No console errors
✓ Build size reasonable

**Responsive Testing:**
✓ Desktop tested
✓ Tablet tested
✓ Mobile tested
✓ No horizontal scroll
✓ Touch targets adequate
✓ Text readable

**Cross-Browser Testing:**
✓ Chrome tested
✓ Firefox tested
✓ Edge tested
✓ Safari tested (if available)
✓ Mobile browsers tested

**Production Build Testing:**
✓ `npm run build` succeeds
✓ `npm run serve` works
✓ Production site tested
✓ No build warnings
✓ Sitemap generated

---

## ➡️ Next Steps

After successful testing and validation, proceed to:
- **Prompt 10**: Build and Deployment
- Create production build
- Deploy to hosting platform
- Configure custom domain
- Set up analytics

**Status Check Before Proceeding:**
- ✅ All critical issues resolved
- ✅ Accessibility standards met
- ✅ Performance acceptable
- ✅ Cross-browser compatible
- ✅ Ready for deployment

---

## 📚 Additional Resources

- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [WebAIM WCAG Checklist](https://webaim.org/standards/wcag/checklist)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Prompt Version**: 2.0 (LLM-Optimized)  
**Last Updated**: 2025-09-30  
**Status**: ✅ Production-Ready

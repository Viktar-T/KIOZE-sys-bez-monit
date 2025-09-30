# Prompt 03: Homepage Customization

---

## 📋 Metadata
- **Prompt ID**: 03
- **Title**: Homepage Customization
- **Prerequisites**: Completed Prompt 02 (basic configuration done)
- **Estimated Time**: 30 minutes
- **Difficulty**: Beginner
- **Dependencies**: Prompt 02
- **Output**: Customized homepage with course information and features

---

## 🤖 AI Assistant Instructions

You are an expert React and Docusaurus developer helping customize the homepage of an educational course website. Your role is to modify the default homepage to reflect course-specific information and create an engaging landing page.

**Your Approach:**
1. Gather course information from user (hours, features, description)
2. Modify `src/pages/index.js` with course header
3. Update `src/components/HomepageFeatures/index.js` with key features
4. Add custom styling if needed
5. Verify changes display correctly
6. Test responsive design

**Communication Style:**
- Ask for specific course details (lecture hours, lab hours, project hours)
- Request 3-5 key features or topic areas to highlight
- Explain what each modification accomplishes
- Confirm visual appearance in browser

---

## 📝 Context

The default Docusaurus homepage is generic and needs customization to reflect your educational course's identity, structure, and value proposition. This creates the first impression for students visiting the site.

**What You're Customizing:**
- Hero banner with course title and tagline
- Course format information (hours breakdown)
- Call-to-action buttons
- Feature highlights (3-5 key topics)
- SEO metadata

---

## 🎯 Task Overview

Modify homepage components to create an engaging landing page that introduces the course, displays key information, and guides students to relevant sections.

**End Goal:** A professional, informative homepage that welcomes students and showcases course highlights.

---

## 📥 Required Information from User

Before starting, gather this information:

**Essential:**
1. **Course Format/Hours**:
   - Lectures: [X] hours
   - Labs/Practical sessions: [Y] hours
   - Projects: [Z] hours
   - Example: `"Wykłady (20h) • Zajęcia audytoryjne (10h)"`

2. **Course Description for SEO**:
   - One-sentence summary for search engines
   - Example: `"Learn monitoring and safety systems for renewable energy installations"`

3. **Key Features** (3-5 highlights):
   - Main topic areas or selling points
   - Each should have:
     - Title (short, catchy)
     - Description (2-3 sentences)
   
**Optional:**
4. **Custom Icons**: SVG files for feature cards (can use defaults)
5. **Additional Call-to-Action**: Extra buttons beyond "Start Learning"

---

## 📝 Step-by-Step Instructions

### Step 1: Modify Homepage Header

Open `src/pages/index.js` and update the `HomepageHeader` function:

```javascript
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* ADD: Course Format Information */}
        <div className="hero__info">
          <p>
            <strong>Format kursu:</strong> 
            Wykłady ([X]h) • Laboratoria ([Y]h) • Projekty ([Z]h)
          </p>
        </div>
        
        {/* MODIFY: Call to Action Buttons */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Rozpocznij naukę
          </Link>
        </div>
      </div>
    </header>
  );
}
```

**Customization:**
- Replace `[X]`, `[Y]`, `[Z]` with actual hours
- Adjust language (Polish/English) as needed
- Modify button text to match course language

### Step 2: Update Page Metadata

In the same file, update the `Home()` function's `<Layout>` component:

```javascript
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="[Course description for SEO - 150 characters max]">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
```

**Example:**
```javascript
description="Comprehensive course on monitoring and safety systems for renewable energy installations including SCADA, IoT, and data analytics."
```

### Step 3: Create Feature Highlights

Open `src/components/HomepageFeatures/index.js` and replace the `FeatureList` array:

```javascript
const FeatureList = [
  {
    title: '[Feature 1 Title]',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        [Description of first key feature or topic area - 2-3 sentences explaining what students will learn]
      </>
    ),
  },
  {
    title: '[Feature 2 Title]',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        [Description of second key feature or topic area]
      </>
    ),
  },
  {
    title: '[Feature 3 Title]',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        [Description of third key feature or topic area]
      </>
    ),
  },
];
```

**Example Feature Sets:**

#### For OZE Monitoring Systems Course:
```javascript
const FeatureList = [
  {
    title: 'SCADA & IIoT Technologies',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Master industry monitoring technologies including OPC UA, MQTT, InfluxDB,
        and edge computing architectures for renewable energy systems.
      </>
    ),
  },
  {
    title: 'Data Analytics & Anomalies',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn anomaly detection techniques and predictive maintenance strategies
        for PV, wind, biogas, and battery energy storage systems.
      </>
    ),
  },
  {
    title: 'Hands-On Lab Practice',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Build real monitoring architectures through practical lab exercises
        covering sensors, protocols, databases, and visualization tools.
      </>
    ),
  },
];
```

#### For Programming Course:
```javascript
const FeatureList = [
  {
    title: 'Hands-On Coding',
    description: (
      <>
        Learn through practical exercises and real-world projects that build
        your programming skills step by step.
      </>
    ),
  },
  {
    title: 'Modern Tools',
    description: (
      <>
        Work with industry-standard development environments and frameworks
        used by professional developers.
      </>
    ),
  },
  {
    title: 'Progressive Learning',
    description: (
      <>
        Start with fundamentals and advance to complex topics with clear
        explanations and comprehensive examples.
      </>
    ),
  },
];
```

### Step 4: Add Custom Styling (Optional)

If you need additional styling, update `src/pages/index.module.css`:

```css
.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero__info {
  margin: 2rem 0;
  font-size: 1.1rem;
}

.hero__info strong {
  color: var(--ifm-color-primary-lightest);
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .hero__info {
    font-size: 1rem;
    padding: 0 1rem;
  }
}
```

### Step 5: Verify Changes

1. Save all modified files
2. Check dev server auto-reloads (http://localhost:3000)
3. Verify homepage displays:
   - Course title and tagline from config
   - Course format information
   - "Start Learning" button links to `/docs/intro`
   - Feature cards with descriptions
4. Test responsive design:
   - Desktop view
   - Tablet view (F12 > Toggle Device Toolbar)
   - Mobile view

---

## ✅ Expected Output

After completing this prompt:

**Homepage Hero Section:**
- Course title prominently displayed
- Tagline/program information visible
- Course format (hours) shown clearly
- Call-to-action button functional

**Features Section:**
- 3-5 feature cards displayed
- Icons/SVGs visible
- Descriptions clear and informative
- Responsive grid layout

**Overall:**
- Professional, engaging appearance
- Mobile-friendly design
- No layout issues or overflow
- Fast loading

---

## ✓ Success Criteria

- [ ] Homepage header displays course title from config
- [ ] Course format information visible and accurate
- [ ] "Start Learning" button links to `/docs/intro`
- [ ] Feature cards display with correct content
- [ ] SVG icons render (or custom icons if provided)
- [ ] Page description set for SEO
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] Content is readable in both light and dark mode
- [ ] Changes saved to git

---

## 🔧 Troubleshooting

**Problem: "Changes don't appear on homepage"**
- Solution 1: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Solution 2: Check dev server is running
- Solution 3: Verify you edited `src/pages/index.js` not `docs/intro.md`

**Problem: "SVG icons don't display"**
- Solution: Verify SVG files exist in `static/img/` directory
- Check file paths match in `require()` statements
- Use default Docusaurus SVGs initially, customize later

**Problem: "Feature descriptions overlap or look broken"**
- Solution: Check each description is wrapped in `<>...</>` (React fragment)
- Ensure no unescaped special characters
- Verify closing tags are present

**Problem: "Button doesn't navigate"**
- Solution 1: Verify link path is `/docs/intro` (leading slash)
- Solution 2: Check `docs/intro.md` file exists
- Solution 3: Restart dev server

**Problem: "Page looks different in dark mode"**
- Solution: Test both light and dark modes
- Adjust colors using CSS variables if needed
- Ensure sufficient contrast in both modes

---

## 💡 Tips and Best Practices

**Feature Highlights:**
- Focus on benefits to students, not just topics
- Use active, engaging language
- Keep descriptions concise (2-3 sentences)
- Choose features that differentiate your course

**Visual Design:**
- Ensure hero banner is visually appealing
- Use high contrast for readability
- Keep button count minimal (1-2 maximum)
- Test on actual mobile devices if possible

**Content Strategy:**
- Homepage should answer: "What will I learn?" and "Why take this course?"
- Feature order matters - put most important first
- Use consistent tone with rest of site
- Keep technical jargon minimal on homepage

---

## 📋 Customization Checklist

```javascript
// Verify all customizations complete:
✓ Course format hours updated in HomepageHeader
✓ SEO description added to Layout
✓ Feature list contains 3-5 items
✓ Each feature has title and description
✓ SVG paths are correct
✓ Call-to-action button text localized
✓ Custom styling added (if needed)
✓ Responsive design tested
✓ Both light/dark modes verified
```

---

## 🎓 Learning Notes

**Why Customize the Homepage?**
- First impression for students
- Sets expectations for course content
- Improves discoverability (SEO)
- Provides clear navigation entry points

**React Components:**
- `index.js` exports the main page component
- `HomepageFeatures` is imported as a child component
- React fragments `<>...</>` allow multiple elements without wrapper div
- `require()` imports static assets at build time

**Docusaurus Theming:**
- `hero--primary` class uses primary color from config
- CSS modules scope styles to specific components
- `clsx` library combines multiple class names

---

## ➡️ Next Steps

After successful homepage customization, proceed to:
- **Prompt 04**: Content Structure Planning
- Plan documentation folder structure
- Organize lectures and projects
- Set up navigation categories

**Status Check Before Proceeding:**
- ✅ Homepage displays course information
- ✅ Feature cards are populated
- ✅ Navigation buttons work
- ✅ Responsive design verified
- ✅ Ready to structure course content

---

## 📚 Additional Resources

- [Docusaurus Pages Documentation](https://docusaurus.io/docs/creating-pages)
- [React JSX Guide](https://react.dev/learn/writing-markup-with-jsx)
- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

**Prompt Version**: 2.0 (LLM-Optimized)  
**Last Updated**: 2025-09-30  
**Status**: ✅ Production-Ready
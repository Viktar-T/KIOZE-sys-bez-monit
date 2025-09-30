# Prompt 03: Homepage Customization

## Context
The default Docusaurus homepage needs to be customized to reflect the course information, structure, and branding.

## Task
Modify the homepage files to create an engaging landing page that introduces the course, displays key information, and guides students to relevant sections.

## Files to Modify

### 1. `src/pages/index.js`

#### Update Homepage Header
Modify the `HomepageHeader` function to display course-specific information:

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
        
        {/* Course Format Information */}
        <div className="hero__info">
          <p>
            <strong>Course Format:</strong> 
            Lectures ([X]h) • Labs ([Y]h) • Projects ([Z]h)
          </p>
        </div>
        
        {/* Call to Action Buttons */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}
```

#### Update Metadata
```javascript
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="[Course description for SEO]">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
```

### 2. `src/components/HomepageFeatures/index.js`

Create feature highlights for the course:

```javascript
const FeatureList = [
  {
    title: '[Feature 1 Title]',
    Svg: require('@site/static/img/[icon-1].svg').default,
    description: (
      <>
        [Description of first key feature or topic area]
      </>
    ),
  },
  {
    title: '[Feature 2 Title]',
    Svg: require('@site/static/img/[icon-2].svg').default,
    description: (
      <>
        [Description of second key feature or topic area]
      </>
    ),
  },
  {
    title: '[Feature 3 Title]',
    Svg: require('@site/static/img/[icon-3].svg').default,
    description: (
      <>
        [Description of third key feature or topic area]
      </>
    ),
  },
];
```

### 3. `src/pages/index.module.css`

Add custom styling if needed:

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
```

## Information Required from User
- Course hours breakdown (Lectures, Labs, Projects)
- 3-5 key features or topic areas to highlight
- Course description for SEO
- Icons/SVGs for features (or use default ones)

## Example Homepage Features

### For Programming Course:
1. **Hands-On Coding** - Practical exercises and real-world projects
2. **Modern Tools** - Industry-standard development environments
3. **Step-by-Step** - Progressive learning from basics to advanced

### For Engineering Course:
1. **Practical Applications** - Real-world engineering scenarios
2. **Industry Software** - Professional design and simulation tools
3. **Project-Based** - Comprehensive final projects

### For OZE Monitoring Systems Course (Example):
1. **SCADA & IIoT** - Industry monitoring technologies (OPC UA, MQTT, InfluxDB)
2. **Data Analytics** - Anomaly detection and predictive maintenance for renewable energy
3. **Hands-On Labs** - Real monitoring architectures for PV, wind, biogas, and BESS systems

## Validation
1. Homepage displays course title and tagline correctly
2. Course format information is visible
3. Feature cards display with icons and descriptions
4. Call-to-action button links to `/docs/intro`
5. Page is responsive on mobile devices

## Next Steps
Proceed to Prompt 04 to plan the documentation content structure.

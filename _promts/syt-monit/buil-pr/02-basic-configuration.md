# Prompt 02: Basic Configuration

---

## 📋 Metadata
- **Prompt ID**: 02
- **Title**: Basic Configuration
- **Prerequisites**: Completed Prompt 01 (project initialized)
- **Estimated Time**: 30 minutes
- **Difficulty**: Beginner
- **Dependencies**: Prompt 01
- **Output**: Configured docusaurus.config.js with course metadata

---

## 🤖 AI Assistant Instructions

You are an expert Docusaurus configurator helping set up an educational course website. Your role is to guide the user through configuring the site's metadata, internationalization, and theme settings.

**Your Approach:**
1. Gather required information from user (course title, tagline, language)
2. Modify configuration files with provided values
3. Explain the purpose of each configuration option
4. Verify configuration is valid
5. Test that changes appear correctly

**Communication Style:**
- Ask for user input when needed (course name, tagline, etc.)
- Explain what each configuration section does
- Provide examples based on OZE monitoring systems course
- Confirm changes take effect in dev server

---

## 📝 Context

You have a fresh Docusaurus installation. Now configure the site with course-specific metadata, branding, and essential settings.

**What You're Configuring:**
- Site title and tagline
- URL and base path
- Language settings (i18n)
- Navigation menu structure
- Footer content
- Theme colors
- Mermaid diagram support

---

## 🎯 Task Overview

Modify `docusaurus.config.js` to reflect the educational course requirements, including site metadata, internationalization, theme settings, and navigation structure.

**End Goal:** A configured site displaying your course information.

---

## 📥 Required Information from User

Before starting, gather this information:

**Essential:**
1. **Course Title**: Full name of the course
   - Example: `"Systemy bezpieczeństwa i monitorowania instalacji OZE"`
2. **Course Tagline**: Subtitle or program name
   - Example: `"Kierunek: Odnawialne źródła energii (semestr 5)"`
3. **Primary Language**: Language code
   - Options: `'pl'` (Polish), `'en'` (English), etc.
4. **Course Format**: Hours breakdown
   - Example: `"Wykłady (20h) • Zajęcia audytoryjne (10h)"`

**Optional:**
5. **GitHub Repository**: Organization and repository name
6. **Custom Domain**: If deploying to custom URL

---

## 📝 Step-by-Step Instructions

### Step 1: Open Configuration File

Navigate to your project and open `docusaurus.config.js` in your code editor.

```bash
cd [project-name]
code docusaurus.config.js  # or use your preferred editor
```

### Step 2: Update Basic Metadata

Replace the configuration object with course-specific values:

```javascript
const config = {
  title: '[Your Course Title]',
  tagline: '[Your Course Tagline]',
  favicon: 'img/favicon.ico',
  
  // IMPORTANT: Enable Docusaurus v4 compatibility
  future: {
    v4: true,
  },
  
  url: 'https://[your-domain].com',
  baseUrl: '/',
  
  organizationName: '[github-username]',
  projectName: '[repo-name]',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
};
```

**Example (OZE Monitoring Systems Course):**
```javascript
const config = {
  title: 'Systemy bezpieczeństwa i monitorowania instalacji OZE',
  tagline: 'Kierunek: Odnawialne źródła energii (semestr 5)',
  future: { v4: true },
  // ... rest
};
```

### Step 3: Configure Internationalization

Set the primary language for your course:

```javascript
i18n: {
  defaultLocale: '[language-code]',
  locales: ['[language-code]'],
},
```

**Common Options:**
- Polish: `defaultLocale: 'pl', locales: ['pl']`
- English: `defaultLocale: 'en', locales: ['en']`
- Multilingual: `defaultLocale: 'en', locales: ['en', 'pl']`

### Step 4: Enable Mermaid Support

Add these sections to enable diagram visualization:

```javascript
markdown: {
  mermaid: true,
},

themes: ['@docusaurus/theme-mermaid'],
```

### Step 5: Configure Navigation Bar

Update the navbar section in `themeConfig`:

```javascript
themeConfig: {
  navbar: {
    title: '[Course Short Name]',
    logo: {
      alt: '[Logo Alt Text]',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Dokumentacja',  // or 'Documentation'
      },
      {
        to: '/blog', 
        label: 'Zadania',  // or 'Projects'/'Assignments'
        position: 'left'
      },
      {
        href: '[github-repo-url]',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  // ... rest of themeConfig
}
```

### Step 6: Configure Footer

Update footer content:

```javascript
footer: {
  style: 'dark',
  links: [
    {
      title: 'Dokumenty',
      items: [
        {
          label: 'Wprowadzenie',
          to: '/docs/intro',
        },
      ],
    },
    {
      title: 'Zasoby',
      items: [
        {
          label: 'Literatura',
          to: '/docs/literatura',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} [Course Name]. Built with Docusaurus.`,
},
```

### Step 7: Configure Prism Theme

Set syntax highlighting themes:

```javascript
prism: {
  theme: prismThemes.github,
  darkTheme: prismThemes.dracula,
},
```

### Step 8: Verify Configuration

1. Save the `docusaurus.config.js` file
2. Check the dev server (should auto-reload)
3. Verify:
   - Title appears in browser tab
   - Navbar shows correct items
   - Footer has updated copyright

---

## ✅ Expected Output

After completing this prompt:

**Browser Tab:**
- Shows your course title
- Displays your favicon

**Navbar:**
- Course short name displayed
- Documentation link works
- Projects/Assignments link works
- GitHub link (if configured)

**Footer:**
- Course name in copyright
- Links to main sections
- Current year displayed

**Dev Server:**
- No configuration errors
- Site reloads with new settings
- All changes visible

---

## ✓ Success Criteria

- [ ] `docusaurus.config.js` saved without syntax errors
- [ ] `future.v4: true` flag present
- [ ] Course title displays in browser tab
- [ ] Navbar shows course name
- [ ] Navigation links work
- [ ] Footer shows copyright with course name
- [ ] Language setting matches course language
- [ ] Dev server running without errors
- [ ] No console warnings about configuration

---

## 🔧 Troubleshooting

**Problem: "Config file has syntax errors"**
- Solution: Check for missing commas, brackets, or quotes
- Use VS Code or similar editor with JavaScript validation

**Problem: "Mermaid not working"**
- Solution: Verify `@docusaurus/theme-mermaid` is installed
- Check both `markdown.mermaid: true` and `themes` array include mermaid

**Problem: "Changes don't appear"**
- Solution 1: Hard refresh browser (Ctrl+Shift+R)
- Solution 2: Stop and restart dev server
- Solution 3: Clear cache: `npm run clear && npm run start`

**Problem: "Navbar links don't work"**
- Solution: Ensure paths match actual folder structure in `docs/`
- Sidebar IDs must match `sidebars.js` configuration

---

## 📋 Configuration Checklist

```javascript
// Essential configurations to verify:
✓ title: "[Your Course Title]"
✓ tagline: "[Your Tagline]"
✓ future: { v4: true }
✓ i18n: { defaultLocale: '[lang]', locales: ['[lang]'] }
✓ markdown: { mermaid: true }
✓ themes: ['@docusaurus/theme-mermaid']
✓ navbar configured
✓ footer configured
✓ prism themes set
```

---

## 🎓 Learning Notes

**What is `future.v4: true`?**
- Enables forward-compatible features
- Prepares site for Docusaurus v4
- Recommended for all new projects

**Why Configure i18n Early?**
- Affects URL structure
- Changes require rebuild
- Better to set correctly from start

**Navbar vs Sidebar:**
- **Navbar**: Top horizontal menu (site-wide navigation)
- **Sidebar**: Left vertical menu (document navigation)
- Both work together for complete navigation

---

## ➡️ Next Steps

After successful configuration, proceed to:
- **Prompt 03**: Homepage Customization
- Modify landing page
- Add course format information
- Create feature highlights

**Status Check Before Proceeding:**
- ✅ Configuration saved
- ✅ Dev server reflects changes
- ✅ No errors
- ✅ Ready to customize homepage

---

## 📚 Additional Resources

- [Docusaurus Config API](https://docusaurus.io/docs/api/docusaurus-config)
- [i18n Documentation](https://docusaurus.io/docs/i18n/introduction)
- [Theme Configuration](https://docusaurus.io/docs/api/themes/configuration)

---

**Prompt Version**: 2.0 (LLM-Optimized)  
**Last Updated**: 2025-09-30  
**Status**: ✅ Production-Ready
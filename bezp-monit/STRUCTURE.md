# Content Structure Guidelines

## 📁 Directory Organization

```
docs/
├── intro.md                     # Main course introduction
├── wyklady/                     # Lectures (10 lectures, 20h)
│   ├── _category_.json         # Category configuration
│   └── README.md               # Lectures overview
├── cwiczenia/                   # Lab exercises (5 sessions, 10h)
│   ├── _category_.json
│   └── README.md
├── projekty/                    # Course projects
│   ├── _category_.json
│   └── README.md
└── literatura/                  # Literature and resources
    ├── _category_.json
    └── index.md
```

## 🎯 Directory Naming Conventions

### General Rules
- Use **lowercase** for all directory and file names
- Use **hyphens** for spaces: `lecture-01-intro` not `lecture_01_intro` or `lecture 01 intro`
- Include **numbers** for ordering: `01-`, `02-`, `03-`, etc.
- Be **descriptive but concise**

### Examples
✅ **Good**:
- `wyklady/wyklad-01-architektura-w1/`
- `cwiczenia/lab-01-opc-ua-mqtt/`
- `projekty/project-01-pv-monitoring.md`

❌ **Bad**:
- `wyklady/Wyklad 1/` (uppercase, spaces)
- `cwiczenia/ex1/` (not descriptive)
- `projekty/PROJECT_FINAL.md` (all caps, underscore)

## 📄 File Naming Conventions

### Markdown Files
- Standard pages: `.md` extension
- Interactive content: `.mdx` extension (allows React components)
- Index files: always `index.md` or `README.md`
- Subtopics: `01-subtopic.mdx`, `02-subtopic.mdx`
- Projects: `project-01-name.md`

### Examples
- `docs/intro.md` - Main introduction
- `docs/wyklady/README.md` - Lectures overview
- `docs/wyklady/wyklad-01-architektura-w1/index.md` - Lecture main page
- `docs/wyklady/wyklad-01-architektura-w1/01-wstep-rola.mdx` - Lecture section

## ⚙️ Category Configuration

Every directory should have a `_category_.json` file (note the **leading underscore**).

### Required Properties

```json
{
  "label": "Display Name",          // Name shown in sidebar
  "position": 2,                     // Order in navigation (lower = higher)
  "link": {
    "type": "generated-index",       // Auto-generate landing page
    "description": "Category description"
  },
  "collapsed": false                 // true = collapsed by default
}
```

### Position Numbering Strategy

Use **increments of 10** to allow easy insertions:

```
1  - Introduction (intro.md)
10 - Wykłady
20 - Ćwiczenia
30 - Projekty
40 - Literatura
```

This allows adding new categories at positions 5, 15, 25, etc. without renumbering everything.

## 📊 Lecture Structure

For detailed lecture content, use this structure:

```
docs/wyklady/wyklad-01-architektura-w1/
├── index.md                    # Lecture overview
├── 01-wstep-rola.mdx          # Section 1
├── 02-warstwy-architektury.mdx # Section 2
├── 03-metryki-kpi.mdx         # Section 3
└── 04-podsumowanie.mdx        # Section 4
```

### Lecture Index Template

```markdown
---
sidebar_position: 1
title: "Wykład 1: Tytuł"
---

# Wykład 1: Główny Temat

## 📋 Przegląd
Brief description...

## 🎯 Cele kształcenia
1. Learning objective 1
2. Learning objective 2

## 📚 Omawiane tematy
1. [Section 1](./01-section)
2. [Section 2](./02-section)
```

## 🔧 Lab Exercise Structure

```
docs/cwiczenia/lab-01-mqtt-opc/
├── index.md                    # Exercise overview
├── instrukcja.md              # Step-by-step instructions
├── rozwiazanie.md             # Solution (hidden or separate)
└── dane/                      # Sample data files
    ├── sample-data.csv
    └── config-template.json
```

## 📝 Project Structure

```
docs/projekty/
├── README.md                   # Projects overview
├── wymagania.md               # Requirements
├── harmonogram.md             # Timeline
├── szablon-dokumentacji.md    # Documentation template
└── przykladowe-projekty/      # Example projects
    └── example-01.md
```

## 🎨 Frontmatter Guidelines

All markdown files should include YAML frontmatter:

### Minimal Frontmatter
```yaml
---
sidebar_position: 1
title: Page Title
---
```

### Extended Frontmatter
```yaml
---
sidebar_position: 1
title: "Wykład 1: Architektura"
description: "Krótki opis strony dla SEO"
keywords:
  - monitoring
  - OZE
  - SCADA
tags:
  - wykład
  - podstawy
---
```

## 🔗 Link Guidelines

### Internal Links
- Use **relative paths**: `./01-section.md` or `../literatura/index.md`
- Include **.md extension** in source (Docusaurus strips it)
- For same directory: `[Link Text](./file.md)`
- For parent directory: `[Link Text](../file.md)`
- For docs root: `[Link Text](/docs/intro)`

### External Links
- Always use **absolute URLs**: `https://example.com`
- Consider opening in new tab: `[Link](url){target="_blank"}`

## 📐 Hierarchy Depth

**Best Practice**: Keep hierarchy **2-3 levels deep** maximum

✅ **Good** (2-3 levels):
```
docs/
└── wyklady/
    └── wyklad-01/
        └── 01-section.mdx
```

❌ **Too Deep** (4+ levels):
```
docs/
└── categories/
    └── lectures/
        └── semester-5/
            └── week-01/
                └── topics/
                    └── section.mdx
```

## 🏷️ Sidebar Metadata

Documents are automatically added to sidebar based on:

1. **Directory structure** - Folders create categories
2. **_category_.json** - Controls category appearance
3. **sidebar_position** - Controls document order within category
4. **title** - Display name in sidebar

### Order Rules
- Lower `sidebar_position` = higher in sidebar
- Within category: sorted by `sidebar_position`
- Without `sidebar_position`: alphabetical order

## 🚀 Scalability Guidelines

### Planning for Growth
- **Leave gaps** in position numbers (10, 20, 30) for future additions
- **Use prefixes** for series: `lab-01-`, `lab-02-`
- **Create placeholders** for future content with "Coming Soon" marker
- **Document decisions** in this file or commit messages

### Adding New Content

**To add a new lecture between existing ones:**
```
Before: wyklad-01 (position: 10), wyklad-02 (position: 20)
Add: wyklad-01-extra (position: 15)
Result: wyklad-01 (10), wyklad-01-extra (15), wyklad-02 (20)
```

**To insert new category:**
```
Before: Wykłady (10), Ćwiczenia (20)
Add: Webinaria (15)
Result: Wykłady (10), Webinaria (15), Ćwiczenia (20)
```

## ✅ Pre-commit Checklist

Before committing new content:
- [ ] File names use lowercase and hyphens
- [ ] All directories have `_category_.json`
- [ ] Frontmatter includes `sidebar_position` and `title`
- [ ] Internal links use relative paths with `.md` extension
- [ ] Images have alt text
- [ ] No broken links (test with `npm run build`)
- [ ] Polish language content uses proper encoding (UTF-8)

## 🔍 Common Issues & Solutions

### Issue: Category not appearing in sidebar
**Solutions:**
- Check `_category_.json` exists and has valid JSON
- Verify file name is exactly `_category_.json` (with underscore)
- Restart dev server: `npm run start`

### Issue: Wrong order in sidebar
**Solutions:**
- Check `position` values in `_category_.json`
- Check `sidebar_position` in document frontmatter
- Ensure no duplicate position values

### Issue: Link returns 404
**Solutions:**
- Verify file exists at target location
- Use relative paths: `./` or `../`
- Include `.md` extension in source
- Check for typos in filename (case-sensitive on Linux)

## 📊 Content Status Indicators

Use these emoji indicators in README files:

- ✅ **Complete** - Content finished and reviewed
- 🚧 **In Progress** - Currently being written
- 🔜 **Coming Soon** - Planned but not started
- 📝 **Draft** - Initial version, needs review
- 🔄 **Updated** - Recently updated content

Example:
```markdown
### Wykład 1: Architektura
**Status**: ✅ Complete
**Last Updated**: 2025-09-30
```

---

## 📞 Questions?

If you're unsure about structure decisions:
1. Check this document first
2. Look at existing content for patterns
3. Ask course coordinator
4. When in doubt, keep it simple and consistent

---

**Document Version**: 1.0  
**Last Updated**: 2025-09-30  
**Maintainer**: Course Coordinator

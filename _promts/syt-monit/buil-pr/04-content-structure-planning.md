# Prompt 04: Content Structure Planning

---

## 📋 Metadata
- **Prompt ID**: 04
- **Title**: Content Structure Planning
- **Prerequisites**: Completed Prompt 03 (homepage customized)
- **Estimated Time**: 45 minutes
- **Difficulty**: Intermediate
- **Dependencies**: Prompt 03
- **Output**: Organized folder structure with category configurations

---

## 🤖 AI Assistant Instructions

You are an expert information architect and educational content designer helping structure a course website. Your role is to design a logical, maintainable folder structure that organizes lectures, projects, and resources in an intuitive way.

**Your Approach:**
1. Gather course structure information (number of lectures, topics, projects)
2. Design appropriate directory hierarchy in `docs/`
3. Create `_category_.json` files for each major section
4. Generate `intro.md` with course overview
5. Create index files for each topic area
6. Verify navigation structure in sidebar
7. Test that all categories display correctly

**Communication Style:**
- Ask about course organization preferences (chronological vs. topical)
- Confirm number of lectures, labs, projects
- Explain rationale for structural decisions
- Show how structure appears in sidebar navigation

---

## 📝 Context

Before creating content, establish a clear folder structure that organizes educational materials logically. Good structure makes content easy to find, maintain, and expand over time.

**What You're Planning:**
- Directory hierarchy in `docs/` folder
- Category organization for sidebar navigation
- File naming conventions
- Index pages for each section
- Navigation order and grouping

**Why Structure Matters:**
- Students can easily find content
- Logical learning progression
- Easier to maintain and update
- Scalable for future content
- Better URLs for SEO

---

## 🎯 Task Overview

Design and implement a documentation folder structure according to course requirements, creating categories, index files, and navigation configuration.

**End Goal:** Well-organized `docs/` directory with clear navigation hierarchy visible in the sidebar.

---

## 📥 Required Information from User

Before starting, gather this information:

**Essential:**
1. **Course Structure**:
   - Number of lectures/weeks: [X]
   - Number of lab sessions: [Y]
   - Number of projects: [Z]
   - Additional resources needed: Yes/No

2. **Organization Preference**:
   - Chronological (Week 1, Week 2, etc.)
   - Topical (By subject area)
   - Hybrid (Topic areas with weekly lessons)

3. **Main Topic Areas**:
   - List 3-7 main subject categories
   - Example: "Fundamentals", "Advanced Topics", "Applications"

4. **Content Types**:
   - Separate lectures and labs? Yes/No
   - Include exercises? Yes/No
   - Case studies? Yes/No
   - Additional materials?

**Optional:**
5. **Special Sections**:
   - FAQ section
   - Glossary
   - External links/resources
   - Student submissions area

---

## 📝 Step-by-Step Instructions

### Step 1: Plan Directory Structure

Based on gathered information, plan the hierarchy:

**Recommended Structure:**
```
docs/
├── intro.md                          # Course introduction
├── literatura/                       # Literature and resources
│   ├── _category_.json
│   └── index.md
├── [topic-area-1]/                   # Main subject area 1
│   ├── _category_.json
│   └── index.md
├── [topic-area-2]/                   # Main subject area 2
│   ├── _category_.json
│   └── index.md
├── [topic-area-3]/                   # Main subject area 3
│   ├── _category_.json
│   └── index.md
├── projekty/                         # Projects section
│   ├── _category_.json
│   ├── project-01-[name].md
│   ├── project-02-[name].md
│   └── project-03-[name].md
└── wyklady/                          # Lectures organized by topic
    ├── _category_.json
    ├── lecture-01-[topic]/
    │   ├── index.md
    │   ├── 01-[subtopic].mdx
    │   ├── 02-[subtopic].mdx
    │   └── 03-[subtopic].mdx
    ├── lecture-02-[topic]/
    │   ├── index.md
    │   └── [slides].mdx
    └── lecture-03-[topic]/
        ├── index.md
        └── [slides].mdx
```

**Alternative: Chronological Structure:**
```
docs/
├── intro.md
├── week-01/
├── week-02/
├── week-03/
└── resources/
```

### Step 2: Create Directory Folders

Create all necessary directories:

```bash
# Navigate to docs folder
cd docs

# Create main categories
mkdir -p wyklady projekty cwiczenia literatura

# Create lecture folders
mkdir -p wyklady/lecture-01-[topic]
mkdir -p wyklady/lecture-02-[topic]
# ... repeat for all lectures
```

### Step 3: Create Category Configuration Files

For each major section, create `_category_.json`:

#### `docs/wyklady/_category_.json`:
```json
{
  "label": "Wykłady",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Wykłady kursowe uporządkowane według tematów i tygodni"
  },
  "collapsed": false
}
```

#### `docs/projekty/_category_.json`:
```json
{
  "label": "Projekty",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "Projekty praktyczne i zadania do samodzielnej pracy"
  },
  "collapsed": false
}
```

#### `docs/cwiczenia/_category_.json`:
```json
{
  "label": "Ćwiczenia",
  "position": 4,
  "link": {
    "type": "generated-index",
    "description": "Ćwiczenia laboratoryjne i praktyczne zastosowania"
  },
  "collapsed": false
}
```

#### `docs/literatura/_category_.json`:
```json
{
  "label": "Literatura",
  "position": 5,
  "link": {
    "type": "generated-index",
    "description": "Literatura przedmiotu, referencje i dodatkowe materiały"
  },
  "collapsed": true
}
```

**Key Properties:**
- `label`: Display name in sidebar
- `position`: Order in navigation (lower = higher)
- `collapsed`: Start collapsed (true) or expanded (false)
- `link.type`: "generated-index" creates automatic landing page
- `description`: Shown on generated index page

### Step 4: Create Main Introduction File

Create `docs/intro.md`:

```markdown
---
sidebar_position: 1
title: Wprowadzenie do kursu
---

# [Nazwa kursu]

## Witamy

Witamy na kursie [Nazwa kursu]! Ten kurs obejmuje [krótki opis treści i celów kursu].

## Struktura kursu

### Wykłady
- **Liczba godzin**: [X] godzin
- **Format**: [Cotygodniowy/Co dwa tygodnie]
- **Tematy**: [Lista głównych tematów wykładów]

### Zajęcia laboratoryjne
- **Liczba godzin**: [Y] godzin
- **Format**: [Ćwiczenia praktyczne/Prowadzone ćwiczenia]
- **Zakres**: [Obszary praktycznego zastosowania]

### Projekty
- **Liczba godzin**: [Z] godzin
- **Format**: [Projekty indywidualne/zespołowe]
- **Produkty**: [Oczekiwane rezultaty]

## Cele kształcenia

Po ukończeniu kursu studenci będą potrafili:

1. [Cel kształcenia 1 - konkretny, mierzalny]
2. [Cel kształcenia 2]
3. [Cel kształcenia 3]
4. [Cel kształcenia 4]
5. [Cel kształcenia 5]

## Wymagania wstępne

- [Wymaganie wstępne 1]
- [Wymaganie wstępne 2]
- [Wymaganie wstępne 3]

## Ocenianie

- Obecność na wykładach: [X]%
- Zadania laboratoryjne: [Y]%
- Projekt końcowy: [Z]%

## Rozpoczęcie nauki

Zacznij od [Wykład 1](./wyklady/lecture-01-intro), aby rozpocząć swoją podróż edukacyjną.

## Organizacja zajęć

| Tydzień | Temat | Typ zajęć |
|---------|-------|-----------|
| 1 | [Temat tygodnia 1] | Wykład |
| 2 | [Temat tygodnia 2] | Wykład + Lab |
| ... | ... | ... |

## Materiały i narzędzia

### Wymagane oprogramowanie
- [Narzędzie 1]: [Link do pobrania]
- [Narzędzie 2]: [Link do pobrania]

### Zalecana literatura
Zobacz sekcję [Literatura](./literatura/) dla pełnej listy zasobów.

## Kontakt

- **Prowadzący**: [Imię i nazwisko]
- **Email**: [adres email]
- **Konsultacje**: [Dni i godziny]
```

### Step 5: Create Topic Area Index Files

For each main topic area, create an `index.md`:

**Example: `docs/wyklady/lecture-01-intro/index.md`:**

```markdown
---
sidebar_position: 1
title: "Wykład 1: Wprowadzenie do tematyki"
---

# Wykład 1: [Główny temat]

## 📋 Przegląd

Krótki opis tego, co obejmuje ten wykład i dlaczego jest ważny.

**Czas trwania**: [X] minut  
**Poziom trudności**: [Początkujący/Średniozaawansowany/Zaawansowany]

## 🎯 Cele kształcenia

Po ukończeniu tego wykładu studenci będą potrafili:

1. [Konkretny, mierzalny cel 1]
2. [Konkretny, mierzalny cel 2]
3. [Konkretny, mierzalny cel 3]
4. [Konkretny, mierzalny cel 4]

## 📚 Omawiane tematy

1. [**Wprowadzenie**](./01-introduction) - Przegląd i kontekst
2. [**Kluczowe pojęcia**](./02-core-concepts) - Główna treść teoretyczna
3. [**Zastosowania praktyczne**](./03-applications) - Przykłady z życia wziętych
4. [**Narzędzia i oprogramowanie**](./04-tools) - Implementacja techniczna
5. [**Podsumowanie**](./05-summary) - Kluczowe wnioski

## 📖 Literatura obowiązkowa

- [Źródło 1]
- [Źródło 2]

## 🔧 Wymagane narzędzia

- [Narzędzie/Oprogramowanie 1]
- [Narzędzie/Oprogramowanie 2]

## 💡 Przygotowanie

Przed tym wykładem:
- [ ] Ukończ ćwiczenia z poprzedniego wykładu
- [ ] Zainstaluj wymagane oprogramowanie
- [ ] Przejrzyj materiały wstępne

## 📝 Ocenianie

- Quiz: [Link jeśli dotyczy]
- Praca domowa: [Link jeśli dotyczy]
- Ćwiczenie laboratoryjne: [Link jeśli dotyczy]
```

### Step 6: Verify Sidebar Navigation

1. Start dev server: `npm run start`
2. Check sidebar displays all categories
3. Verify category order (by `position` values)
4. Confirm labels are correct
5. Test expanding/collapsing categories
6. Check all index pages are accessible

### Step 7: Document Naming Conventions

Create a `STRUCTURE.md` file in project root documenting conventions:

```markdown
# Content Structure Guidelines

## Directory Naming
- Use lowercase
- Use hyphens for spaces: `lecture-01-intro`
- Include numbers for ordering: `01-`, `02-`, etc.
- Be descriptive but concise

## File Naming
- Markdown files: `.md` or `.mdx`
- Index files: always `index.md`
- Subtopics: `01-subtopic.mdx`, `02-subtopic.mdx`
- Projects: `project-01-name.md`

## Category Configuration
- Every folder needs `_category_.json`
- Set `position` to control order
- Use `collapsed` for less important sections
- Add meaningful descriptions

## Position Numbering
1. Introduction: position 1
2. Lectures: position 2
3. Projects: position 3
4. Exercises: position 4
5. Resources: position 5+
```

---

## ✅ Expected Output

After completing this prompt:

**Directory Structure:**
- `docs/` contains organized subfolders
- Each major section has its own directory
- Lecture folders created with proper naming

**Configuration Files:**
- `_category_.json` in each section
- Correct labels and positions
- Appropriate collapse settings

**Index Files:**
- `docs/intro.md` with course overview
- Index page for each major section
- Consistent formatting across all indexes

**Sidebar Navigation:**
- All categories visible
- Correct order
- Proper indentation/hierarchy
- Expandable/collapsible sections work

---

## ✓ Success Criteria

- [ ] All directories created in `docs/`
- [ ] `_category_.json` present in each major section
- [ ] Category labels are descriptive and clear
- [ ] Position values create logical ordering
- [ ] `docs/intro.md` contains complete course overview
- [ ] Index files created for major sections
- [ ] Sidebar displays all categories correctly
- [ ] Navigation hierarchy makes sense
- [ ] Lecture folders numbered sequentially
- [ ] No broken links in index files
- [ ] Structure is scalable for future content

---

## 🔧 Troubleshooting

**Problem: "Categories don't appear in sidebar"**
- Solution 1: Verify `_category_.json` has valid JSON syntax
- Solution 2: Check file is named exactly `_category_.json` (with leading underscore)
- Solution 3: Restart dev server

**Problem: "Categories appear in wrong order"**
- Solution: Check `position` values in `_category_.json`
- Lower numbers appear first (1, 2, 3...)
- Ensure no duplicate position values

**Problem: "Sidebar shows 'undefined' or empty labels"**
- Solution: Verify `label` property exists in `_category_.json`
- Check for typos in property names
- Ensure proper JSON quoting

**Problem: "Index pages show 404"**
- Solution 1: Create `index.md` in each directory
- Solution 2: Check `link.type` is set to `"generated-index"` in category config
- Solution 3: Verify file paths in links are correct

**Problem: "Structure seems confusing"**
- Solution: Revisit organization preference with user
- Consider if chronological would be better than topical
- Test navigation from student perspective
- Simplify hierarchy if too complex

---

## 💡 Tips and Best Practices

**Structure Design:**
- Keep hierarchy 2-3 levels deep maximum
- Group related content together
- Use consistent naming patterns
- Plan for future expansion

**Category Organization:**
- Most important content first (lower position numbers)
- Keep frequently accessed items uncollapsed
- Collapse reference materials by default
- Limit top-level categories to 5-7 items

**File Naming:**
- Prefix with numbers for ordering: `01-`, `02-`
- Use descriptive names: `data-quality.md` not `dq.md`
- Avoid special characters except hyphens
- Keep names concise but meaningful

**Scalability:**
- Leave room for adding lectures between existing ones
- Use increments of 10 for position values (10, 20, 30) to allow insertions
- Create placeholder folders for future content
- Document structure decisions

---

## 🎓 Learning Notes

**Docusaurus Sidebar Generation:**
- Automatically generates sidebar from `docs/` structure
- `_category_.json` controls category behavior
- `sidebar_position` in frontmatter controls document order within category
- Nested folders create nested sidebar sections

**Category Configuration:**
- `generated-index` creates automatic landing page listing all items
- `doc` type links to a specific document
- `link` type creates external link
- `collapsed` only affects initial state, users can toggle

**Best Practices from Education:**
- Structure should match learning progression
- Group prerequisites before advanced topics
- Separate theory (lectures) from practice (labs/projects)
- Make navigation predictable and logical

---

## 📋 Structure Planning Checklist

```
Planning Phase:
✓ Course structure information gathered
✓ Organization preference determined (chronological/topical)
✓ Main topic areas identified
✓ Content types decided

Implementation Phase:
✓ Directory folders created
✓ _category_.json files added to all sections
✓ Category labels and positions set
✓ docs/intro.md created with overview
✓ Index files created for major sections
✓ Naming conventions documented

Verification Phase:
✓ Sidebar displays correctly
✓ Category order is logical
✓ All links work
✓ Structure is intuitive
✓ Ready for content creation
```

---

## ➡️ Next Steps

After successful structure planning, proceed to:
- **Prompt 05**: Lecture Content Creation
- Develop actual lecture slides and materials
- Use MDX format with custom components
- Add interactive elements and instructor notes

**Status Check Before Proceeding:**
- ✅ Directory structure created
- ✅ Categories configured
- ✅ Sidebar navigation verified
- ✅ Index files in place
- ✅ Ready to create lecture content

---

## 📚 Additional Resources

- [Docusaurus Sidebar Documentation](https://docusaurus.io/docs/sidebar)
- [Category Configuration API](https://docusaurus.io/docs/sidebar/items#category-json)
- [Information Architecture Basics](https://www.usability.gov/what-and-why/information-architecture.html)

---

**Prompt Version**: 2.0 (LLM-Optimized)  
**Last Updated**: 2025-09-30  
**Status**: ✅ Production-Ready
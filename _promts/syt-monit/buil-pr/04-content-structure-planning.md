# Prompt 04: Content Structure Planning

## Context
Before creating content, establish a clear, logical folder structure that organizes lectures, topics, projects, and resources in a way that's easy to navigate and maintain.

## Task
Design and implement the documentation folder structure in the `docs/` directory according to course requirements.

## Recommended Directory Structure

```
docs/
├── intro.md                          # Course introduction and overview
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
└── wyklady/                          # Lectures organized by week/topic
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

## Files to Create

### 1. Category Configuration Files (`_category_.json`)

Create a `_category_.json` in each major section:

#### For `wyklady/_category_.json`:
```json
{
  "label": "Lectures",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Course lectures organized by topic and week"
  },
  "collapsed": false
}
```

#### For `projekty/_category_.json`:
```json
{
  "label": "Projects",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "Practical projects and assignments for hands-on learning"
  },
  "collapsed": false
}
```

#### For `literatura/_category_.json`:
```json
{
  "label": "Resources",
  "position": 4,
  "link": {
    "type": "generated-index",
    "description": "Literature, references, and additional learning materials"
  },
  "collapsed": true
}
```

### 2. Main Introduction File (`docs/intro.md`)

```markdown
---
sidebar_position: 1
title: Course Introduction
---

# [Course Name]

## Welcome

Welcome to [Course Name]! This course covers [brief description of course content and objectives].

## Course Structure

### Lectures
- **Duration**: [X] hours
- **Format**: [Weekly/Bi-weekly]
- **Topics**: [List main lecture topics]

### Laboratory Sessions
- **Duration**: [Y] hours
- **Format**: [Hands-on/Guided exercises]
- **Focus**: [Practical application areas]

### Projects
- **Duration**: [Z] hours
- **Format**: [Individual/Team projects]
- **Deliverables**: [Expected outcomes]

## Learning Objectives

By the end of this course, students will be able to:

1. [Learning objective 1]
2. [Learning objective 2]
3. [Learning objective 3]
4. [Learning objective 4]
5. [Learning objective 5]

## Prerequisites

- [Prerequisite 1]
- [Prerequisite 2]
- [Prerequisite 3]

## Assessment

- Lectures attendance: [X]%
- Lab assignments: [Y]%
- Final project: [Z]%

## Getting Started

Start with [Lecture 1](./wyklady/lecture-01-intro) to begin your learning journey.
```

### 3. Topic Area Index Files

For each main topic area, create an `index.md`:

```markdown
---
sidebar_position: [X]
title: "[Topic Area Name]"
---

# [Topic Area Name]

## Overview

Brief introduction to this topic area and its importance in the course.

## What You'll Learn

- Key concept 1
- Key concept 2
- Key concept 3

## Topics Covered

1. [Subtopic 1]
2. [Subtopic 2]
3. [Subtopic 3]

## Resources

- [Resource links]
- [Software tools]
- [Additional readings]
```

## Planning Questions for User

Before implementing, gather:

1. **Course Structure**:
   - How many lectures/weeks?
   - Main topic areas to cover?
   - Number of projects?

2. **Navigation Preferences**:
   - Should lectures be collapsed by default?
   - Chronological or topical organization?
   - Separate sections for theory vs. practice?

3. **Content Types**:
   - Will there be lab exercises?
   - Case studies included?
   - External resources/links?

## Example Course Structure (OZE Monitoring Systems)

For a course with 10 lectures (20h) + 5 lab sessions (10h):

```
docs/
├── intro.md
├── wyklady/
│   ├── wyklad-01-architektura-monitoringu/
│   │   ├── index.md
│   │   ├── 01-rola-monitoringu.mdx
│   │   ├── 02-warstwy-edge-fog-cloud.mdx
│   │   ├── 03-metryki-kpi.mdx
│   │   └── 04-filozofia-alarmowania.mdx
│   ├── wyklad-02-czujniki-akwizycja/
│   ├── wyklad-03-plc-scada-opc-ua/
│   ├── wyklad-04-standardy-integracja/
│   ├── wyklad-05-jakosc-danych/
│   ├── wyklad-06-analityka-anomalie/
│   ├── wyklad-07-monitoring-fotowoltaika/
│   ├── wyklad-08-monitoring-wiatr-biogaz/
│   ├── wyklad-09-edge-ai-digital-twins/
│   └── wyklad-10-systemy-bezpieczenstwa/
├── cwiczenia/
│   ├── cwiczenie-01-projekt-architektury-pv/
│   ├── cwiczenie-02-lab-komunikacji/
│   ├── cwiczenie-03-analiza-danych/
│   ├── cwiczenie-04-bess-monitoring-bezpieczenstwo/
│   └── cwiczenie-05-mini-projekt-poc/
└── literatura/
```

This structure follows a logical progression:
1. Fundamentals (architecture, sensors, protocols)
2. Data management (quality, analytics)
3. Domain-specific applications (PV, wind, biogas)
4. Advanced topics (edge AI, digital twins)
5. Safety systems

## Implementation Steps

1. Create all directory folders in `docs/`
2. Add `_category_.json` to each section
3. Create `intro.md` with course overview
4. Create index files for each major section
5. Verify structure in Docusaurus sidebar

## Validation

1. Run `npm run start`
2. Check sidebar displays all categories correctly
3. Verify category order and labels
4. Confirm all index pages are accessible
5. Test navigation between sections

## Next Steps
Proceed to Prompt 05 to create lecture content structure.

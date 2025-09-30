# Prompt 05: Lecture Content Creation

---

## 📋 Metadata
- **Prompt ID**: 05
- **Title**: Lecture Content Creation
- **Prerequisites**: Completed Prompt 04 (content structure planned)
- **Estimated Time**: 2-4 hours (per lecture)
- **Difficulty**: Intermediate to Advanced
- **Dependencies**: Prompt 04, Prompt 07 (components)
- **Output**: Complete lecture with slides, notes, and interactive elements

---

## 🤖 AI Assistant Instructions

You are an experienced **professor and instructional designer** creating high-quality educational content. Your role is to develop lecture slides and materials optimized for both student learning and instructor presentation.

**Your Approach:**
1. Gather lecture topic and learning objectives from user
2. Create lecture overview (`index.md`) with metadata
3. Develop individual slide sections using MDX format
4. Include detailed instructor notes for each major topic
5. Add interactive elements (quizzes, diagrams, exercises)
6. Ensure clear learning progression
7. Verify content renders correctly
8. Test on multiple devices

**Communication Style:**
- Act as subject matter expert in the course domain
- Use professional academic language
- Explain complex concepts clearly
- Provide practical examples from real-world applications
- Include detailed teaching guidance
- Balance theory with practical application

**Content Quality Standards:**
- Each slide has one clear focus
- Maximum 5-7 bullet points per slide
- Concepts explained simply before technical details
- Learning progression from basics to advanced
- Real-world examples and case studies included

---

## 📝 Context

With the folder structure in place, create actual lecture content with a consistent format optimized for both student learning and instructor presentation. Lectures should be comprehensive, engaging, and practical.

**What You're Creating:**
- Lecture overview with objectives and navigation
- Individual slide sections in MDX format
- Detailed instructor notes
- Interactive elements (diagrams, quizzes)
- Supporting materials and resources

**Why This Format:**
- Students can learn independently
- Instructors have detailed teaching notes
- Content is interactive and engaging
- Easy to update and maintain
- Works well for online and in-person delivery

---

## 🎯 Task Overview

Develop complete lecture materials using MDX format with embedded instructor notes, interactive elements, and clear learning progression.

**End Goal:** Professional, comprehensive lecture ready for classroom use with full instructor support.

---

## 📥 Required Information from User

Before creating lecture content, gather:

**Essential:**
1. **Lecture Topic**: Main subject of this lecture
2. **Learning Objectives** (3-5 specific, measurable goals)
3. **Target Duration**: Typical lecture length (e.g., 90 minutes)
4. **Prerequisites**: What students should know beforehand
5. **Main Subtopics** (4-7 sections to cover)

**Content Details:**
6. **Key Concepts**: Most important principles to teach
7. **Practical Examples**: Real-world scenarios to include
8. **Tools/Software**: Any technical tools to demonstrate
9. **Common Misconceptions**: Issues students typically struggle with
10. **Assessment**: Quiz questions, exercises, or homework

**Optional:**
11. **Visual Assets**: Diagrams, charts, screenshots needed
12. **External Resources**: Links to additional materials
13. **Case Studies**: Specific examples from industry

---

## 📝 Step-by-Step Instructions

### Step 1: Create Lecture Overview File

Create `docs/wyklady/lecture-[NN]-[topic]/index.md`:

```markdown
---
sidebar_position: [N]
title: "Wykład [N]: [Tytuł tematu]"
---

# Wykład [N]: [Główny temat]

## 📋 Przegląd

[Brief description of what this lecture covers and why it's important]

**Czas trwania**: [X] minut  
**Poziom trudności**: [Początkujący/Średniozaawansowany/Zaawansowany]  
**Format**: [Wykład/Wykład + Demo/Warsztat]

## 🎯 Cele kształcenia

Po ukończeniu tego wykładu studenci będą potrafili:

1. [Specific, measurable learning objective 1]
2. [Specific, measurable learning objective 2]
3. [Specific, measurable learning objective 3]
4. [Specific, measurable learning objective 4]

## 📚 Omawiane tematy

1. [**Wprowadzenie**](./01-introduction) - Przegląd i kontekst tematu
2. [**Fundamenty teoretyczne**](./02-fundamentals) - Podstawowe pojęcia i zasady
3. [**Kluczowe koncepcje**](./03-core-concepts) - Główna treść merytoryczna
4. [**Zastosowania praktyczne**](./04-applications) - Przykłady z życia wziętych
5. [**Narzędzia i technologie**](./05-tools) - Implementacja techniczna
6. [**Podsumowanie i wnioski**](./06-summary) - Kluczowe punkty do zapamiętania

## 📖 Literatura obowiązkowa

- [Author, Year]. *[Title]*. [Source/Publisher]
- [Author, Year]. *[Title]*. [Source/Publisher]

## 📖 Literatura uzupełniająca

- [Additional reading 1]
- [Additional reading 2]

## 🔧 Wymagane narzędzia

- [Tool/Software 1] - [Version] ([Download link])
- [Tool/Software 2] - [Version] ([Download link])

## 💡 Przygotowanie przed wykładem

Przed rozpoczęciem tego wykładu studenci powinni:
- [ ] Ukończyć [poprzedni wykład/zadanie]
- [ ] Zainstalować [wymagane oprogramowanie]
- [ ] Przeczytać [materiały wstępne]
- [ ] Przejrzeć [kluczowe pojęcia]

## 📝 Ocenianie

- **Quiz sprawdzający**: [Link do quizu] - 10 pytań, 15 minut
- **Praca domowa**: [Link do zadania] - Termin: [data]
- **Ćwiczenie laboratoryjne**: [Link do lab] - Do wykonania na zajęciach

## 🔗 Powiązane materiały

- [Wykład X]: [Related topic]
- [Projekt Y]: [Related project]
- [Ćwiczenie Z]: [Related exercise]

## 📊 Harmonogram wykładu

| Czas | Temat | Format |
|------|-------|--------|
| 0-10 min | Wprowadzenie i przegląd | Wykład |
| 10-30 min | Fundamenty teoretyczne | Wykład + Q&A |
| 30-50 min | Kluczowe koncepcje | Wykład + Demo |
| 50-60 min | Przerwa | - |
| 60-80 min | Zastosowania praktyczne | Warsztat |
| 80-90 min | Podsumowanie i Q&A | Dyskusja |
```

### Step 2: Create Individual Slide Sections

Create numbered MDX files (e.g., `01-introduction.mdx`) using this **TESTED STRUCTURE**:

```mdx
---
title: "[Tytuł sekcji]"
---

import { 
  SlideContainer, 
  Slide, 
  KeyPoints, 
  SupportingDetails, 
  InfoBox,
  InstructorNotes,
  VisualSeparator 
} from '@site/src/components/SlideComponents';

<SlideContainer>

<Slide title="🎓 [Tytuł slajdu]" type="info">

<KeyPoints title="🌱 Kluczowe punkty">

**🎯 Główne zagadnienia:**
- **[Punkt 1]** - [Krótkie wyjaśnienie]
- **[Punkt 2]** - [Krótkie wyjaśnienie]
- **[Punkt 3]** - [Krótkie wyjaśnienie]
- **[Punkt 4]** - [Krótkie wyjaśnienie]

</KeyPoints>

<InstructorNotes>
**Notatki wykładowcy:**

**📚 Kontekst wykładu:**
- [Background information]
- [Why this topic matters]
- [Connection to previous material]

**🎯 Kluczowe punkty do podkreślenia:**
- [Important concept 1]
- [Important concept 2]
- [Common pitfall to avoid]

**💡 Sugestie dydaktyczne:**
- [Teaching tip 1]
- [Interactive element to include]
- [Question to ask students]

**⏱️ Przybliżony czas:** [X] minut

**🔧 Dodatkowe przykłady (w razie potrzeby):**
- [Backup example 1]
- [Backup example 2]

**❓ Częste pytania studentów:**
- **Q:** [Common question]
- **A:** [Detailed answer]
</InstructorNotes>

</Slide>

<VisualSeparator type="default" />

<Slide title="🎯 [Następny temat]" type="tip">

<KeyPoints title="📊 Główne koncepcje">

[Explanation of key concept]

```mermaid
flowchart TD
    A[Start] --> B{Decision}
    B -->|Option 1| C[Result 1]
    B -->|Option 2| D[Result 2]
    C --> E[End]
    D --> E
```

</KeyPoints>

<SupportingDetails title="🔍 Szczegóły">

**Dodatkowe informacje:**
- [Detail 1]
- [Detail 2]
- [Detail 3]

</SupportingDetails>

<InstructorNotes>
**Notatki wykładowcy:**

[Detailed teaching notes for this slide]
</InstructorNotes>

</Slide>

</SlideContainer>
```

**Slide Types Available:**
- `type="info"` - Blue, informational content
- `type="tip"` - Green, best practices and tips
- `type="warning"` - Yellow, cautions and important notes
- `type="danger"` - Red, critical information
- `type="note"` - Gray, side notes

### Step 3: Add Interactive Elements

#### Include Mermaid Diagrams:

```mdx
<Slide title="📊 Architektura systemu" type="info">

<KeyPoints title="Schemat architektury">

```mermaid
graph LR
    A[Sensors] --> B[Edge Gateway]
    B --> C[SCADA Server]
    C --> D[Cloud Analytics]
    D --> E[Dashboard]
```

</KeyPoints>

</Slide>
```

#### Add Tables:

```mdx
| Technology | Advantages | Disadvantages | Use Cases |
|------------|------------|---------------|-----------|
| OPC UA | Standardized, secure | Complex setup | Industrial systems |
| MQTT | Lightweight, pub-sub | Less security | IoT devices |
| Modbus | Simple, widely used | Limited features | Legacy equipment |
```

#### Include Code Examples:

```mdx
<Slide title="💻 Przykład kodu" type="note">

<KeyPoints title="Implementacja">

```python
# Example: Reading sensor data
import paho.mqtt.client as mqtt

def on_message(client, userdata, message):
    sensor_data = message.payload.decode()
    print(f"Received: {sensor_data}")

client = mqtt.Client()
client.on_message = on_message
client.connect("broker.example.com", 1883)
client.subscribe("sensors/temperature")
client.loop_forever()
```

</KeyPoints>

</Slide>
```

### Step 4: Content Quality Guidelines

**For Each Slide:**
- ✅ One main idea per slide
- ✅ 5-7 bullet points maximum
- ✅ Clear visual hierarchy
- ✅ Consistent formatting
- ✅ Includes instructor notes

**For Instructor Notes:**
- ✅ Detailed enough for substitute teacher
- ✅ Include timing estimates
- ✅ Note common student questions
- ✅ Provide backup examples
- ✅ Reference additional resources

**For Interactive Elements:**
- ✅ Diagrams for complex concepts
- ✅ Code examples are tested and work
- ✅ Tables for comparisons
- ✅ Real-world examples
- ✅ Visual aids support learning

### Step 5: Structure Each Lecture Section

**Recommended Content Distribution:**

1. **Introduction** (5-10% of content)
   - Context and motivation
   - Connection to previous lectures
   - Preview of topics

2. **Core Content** (60-70% of content)
   - Theoretical foundations
   - Key concepts and definitions
   - Examples and demonstrations

3. **Practical Applications** (15-20% of content)
   - Real-world use cases
   - Tool demonstrations
   - Hands-on exercises

4. **Summary** (5-10% of content)
   - Review of key points
   - Connections to future topics
   - Assessment preparation

### Step 6: Add Supporting Materials

Create additional resources as needed:

**Practice Exercises:**
Create `exercises.md` in lecture folder:

```markdown
# Ćwiczenia praktyczne - Wykład [N]

## Ćwiczenie 1: [Tytuł]

**Cel:** [What students will practice]

**Czas:** [X] minut

**Instrukcje:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Oczekiwany rezultat:**
[What success looks like]

**Wskazówki:**
- [Hint 1]
- [Hint 2]

## Ćwiczenie 2: [Tytuł]
[...]
```

**Quiz Questions:**
Add to end of lecture slides:

```mdx
<Slide title="✅ Sprawdź swoją wiedzę" type="tip">

<KeyPoints title="Quiz">

**Pytanie 1:** [Question text]
- A) [Option A]
- B) [Option B]
- C) [Option C]
- D) [Option D]

<details>
<summary>Pokaż odpowiedź</summary>

**Prawidłowa odpowiedź: B**

Wyjaśnienie: [Why B is correct and others are not]
</details>

**Pytanie 2:** [Next question]
[...]

</KeyPoints>

</Slide>
```

---

## ✅ Expected Output

After completing this prompt:

**Lecture Overview:**
- Clear learning objectives
- Complete topic list with navigation
- Required materials listed
- Assessment information included

**Slide Content:**
- Professional presentation format
- Consistent styling across slides
- Clear visual hierarchy
- Appropriate use of emojis and icons

**Instructor Notes:**
- Comprehensive teaching guidance
- Timing estimates included
- Common questions addressed
- Alternative examples provided

**Interactive Elements:**
- Relevant diagrams and charts
- Working code examples
- Practical exercises
- Quiz questions

---

## ✓ Success Criteria

- [ ] Lecture index page created with metadata
- [ ] Learning objectives are specific and measurable
- [ ] All slide sections created (minimum 4-6 sections)
- [ ] Each slide has clear title and focused content
- [ ] Instructor notes included for every major topic
- [ ] At least 2 diagrams or visual aids included
- [ ] At least 1 code example or practical demonstration
- [ ] Summary slide with key takeaways
- [ ] Quiz or assessment questions provided
- [ ] All links and navigation work correctly
- [ ] Content renders properly in browser
- [ ] Responsive on mobile devices
- [ ] No console errors or warnings

---

## 🔧 Troubleshooting

**Problem: "MDX components not rendering"**
- Solution 1: Verify import statement at top of file
- Solution 2: Check component names match exactly (case-sensitive)
- Solution 3: Ensure SlideComponents.jsx exists in `src/components/`

**Problem: "Mermaid diagrams don't display"**
- Solution 1: Verify `@docusaurus/theme-mermaid` is installed
- Solution 2: Check `markdown.mermaid: true` in docusaurus.config.js
- Solution 3: Validate mermaid syntax at https://mermaid.live

**Problem: "Instructor notes always expanded"**
- Solution: Check using `<InstructorNotes>` component, not plain `<details>`
- Verify component renders as `<details>` element with proper CSS

**Problem: "Content too long, slides overwhelming"**
- Solution: Break into smaller sections
- Move detailed content to instructor notes
- Create separate "Deep Dive" optional sections
- Use collapsible details for advanced topics

**Problem: "Slide types don't show different colors"**
- Solution: Verify CSS classes exist in `custom.css`
- Check `type` prop matches available types
- Inspect element to see if classes applied

---

## 💡 Tips and Best Practices

**Content Creation:**
- Start with learning objectives, build content to meet them
- Use storytelling to make concepts memorable
- Include real-world failures as learning examples
- Balance theory with practical application
- Build knowledge progressively (simple → complex)

**Instructor Notes:**
- Write as if teaching a substitute instructor
- Include timing to help with pacing
- Note where students typically struggle
- Provide alternative explanations
- Reference where to find additional resources

**Visual Design:**
- Use consistent emoji/icons for visual cues
- Keep diagrams simple and focused
- Use color to highlight important information
- Ensure good contrast for readability
- Test on projector/large screen if possible

**Interactive Elements:**
- Place activities at natural break points
- Keep exercises focused and time-boxed
- Provide clear success criteria
- Include solutions or expected outcomes
- Make activities relevant to objectives

**Quality Control:**
- Review content from student perspective
- Check technical accuracy of all claims
- Verify all external links work
- Test code examples actually run
- Proofread for typos and grammar

---

## 🎓 Learning Notes

**MDX Format Benefits:**
- Combines Markdown simplicity with React power
- Allows custom interactive components
- Maintains readability in source
- Enables conditional rendering
- Supports dynamic content

**Slide Component System:**
- `SlideContainer` wraps all slides
- `Slide` creates individual slide cards
- `KeyPoints` highlights main content
- `InstructorNotes` provides collapsible teaching notes
- `VisualSeparator` creates clear section breaks

**Educational Best Practices:**
- Active learning beats passive lectures
- Spaced repetition improves retention
- Real examples beat abstract concepts
- Students need both theory and practice
- Assessment drives learning behavior

---

## 📋 Content Creation Checklist

```markdown
Planning:
✓ Learning objectives defined
✓ Main topics identified
✓ Examples and use cases selected
✓ Visual aids planned
✓ Assessment strategy determined

Development:
✓ Lecture index page created
✓ Introduction section written
✓ Core content sections developed
✓ Practical applications included
✓ Summary section completed
✓ Instructor notes added throughout
✓ Interactive elements embedded
✓ Code examples tested
✓ Diagrams created
✓ Quiz questions written

Quality Assurance:
✓ Content reviewed for accuracy
✓ Spelling and grammar checked
✓ All links tested
✓ Components render correctly
✓ Mobile display verified
✓ Instructor notes comprehensive
✓ Learning objectives met
```

---

## ➡️ Next Steps

After successful lecture content creation, proceed to:
- **Prompt 06**: Visual Assets Setup
- Add images, diagrams, and icons
- Organize media files properly
- Optimize visual elements
- Create downloadable resources

**Status Check Before Proceeding:**
- ✅ At least one complete lecture created
- ✅ All components render properly
- ✅ Instructor notes are helpful
- ✅ Content meets quality standards
- ✅ Ready to enhance with visual assets

---

## 📚 Additional Resources

- [MDX Documentation](https://mdxjs.com/)
- [Mermaid Diagram Syntax](https://mermaid.js.org/intro/)
- [Bloom's Taxonomy for Learning Objectives](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/)
- [Instructional Design Best Practices](https://www.td.org/insights/instructional-design-basics)

---

**Prompt Version**: 2.0 (LLM-Optimized)  
**Last Updated**: 2025-09-30  
**Status**: ✅ Production-Ready
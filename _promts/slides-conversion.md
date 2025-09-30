# Slide Conversion Prompt - MDX Approach

## Goal

Convert markdown files into MDX slide presentations for OZE course lectures using React components and custom CSS.

## Core Requirements

### 1. File Format: MDX

- Use MDX files with React component imports
- Import from `@site/src/components/SlideComponents`
- Leverage custom CSS for professional styling
- Maintain Docusaurus compatibility

### 2. Slide Structure Template

```jsx
---
title: "Slide Title"
---

import { 
  SlideContainer, 
  Slide, 
  KeyPoints, 
  SupportingDetails, 
  InstructorNotes,
  VisualSeparator 
} from '@site/src/components/SlideComponents';

<SlideContainer>

<Slide title="🎯 Slide Title" type="info">

<KeyPoints title="📋 Key Points">
- ✅ **Main point 1**
- 🔥 **Main point 2**  
- 💡 **Main point 3**
</KeyPoints>

<SupportingDetails title="🔧 Supporting Details">
- 📊 **Additional context**
- 🎨 **Examples**
- ⚙️ **Technical specifications**
</SupportingDetails>

<InstructorNotes>
**Szczegółowa zawartość wykładu:**
- 📝 Rozszerzone wyjaśnienia
- 📚 Informacje tła
- 💡 Wskazówki dydaktyczne
- 📖 Przykłady i studia przypadków
- ❓ Pytania dla studentów
- 🔄 Notatki przejściowe do następnego slajdu
</InstructorNotes>

</Slide>

<VisualSeparator type="default" />

</SlideContainer>
```

### 3. Available Components

- **`SlideContainer`** - Main container for all slides
- **`Slide`** - Individual slide cards with types (info, tip, warning, danger, success)
- **`KeyPoints`** - Highlighted key information (yellow background)
- **`SupportingDetails`** - Additional context (blue background)
- **`InfoBox`** - Information boxes (purple background)
- **`WarningBox`** - Warning information (red background)
- **`SuccessBox`** - Success information (green background)
- **`InstructorNotes`** - Collapsible instructor notes
- **`VisualSeparator`** - Visual separators between slides

### 4. Slide Types

- **`type="info"`** - Blue theme for informational content
- **`type="tip"`** - Green theme for tips and best practices
- **`type="warning"`** - Yellow theme for warnings
- **`type="danger"`** - Red theme for critical information
- **`type="success"`** - Green theme for achievements

### 5. Visual Separators

- **`<VisualSeparator type="default" />`** - Standard slide transitions
- **`<VisualSeparator type="data" />`** - Data-focused content
- **`<VisualSeparator type="technical" />`** - Technical content
- **`<VisualSeparator type="energy" />`** - Energy-related content

### 6. Content Guidelines

- **Single focus** per slide with visual emphasis
- **Concise content** with visual indicators
- **Progressive disclosure** from general to specific
- **Technical accuracy** maintained with visual clarity
- **Educational goals** preserved with achievement emojis
- **Instructor notes** in collapsible sections for teaching guidance
- **Maximum 5-7 bullet points** per slide

### 7. Visual Enhancements

- **Emojis & Icons**: 🎯 goals, 📊 data, 🔧 tools, ⚡ energy, 🌱 renewable, 💻 tech, 📈 trends, 🎓 education
- **Color-coded components** with CSS styling
- **Gradients**: Subtle backgrounds with high contrast
- **Hover effects** and smooth transitions
- **Dark mode support** with appropriate color schemes
- **Responsive design** for all screen sizes

## Implementation Strategy

### 1. File Structure (example only)

```
docs/wyklady/wyklad-01-wprowadzenie/
├── 01-wprowadzenie-do-tematyki.mdx     ← MDX slide presentation
├── 02-klasyfikacja-narzedzi-oze.mdx    ← MDX slide presentation
├── 03-architektura-aplikacji.mdx       ← MDX slide presentation
├── 04-rola-i-typy-programow.mdx       ← MDX slide presentation
├── 05-trendy-i-przyszlosc.mdx         ← MDX slide presentation
├── 06-podsumowanie.mdx                 ← MDX slide presentation
├── reference-material.md               ← MD for reference content
└── index.md                            ← Main navigation
```

### 2. CSS Styling

- **Custom CSS** in `src/css/custom.css`
- **Responsive design** with mobile breakpoints
- **Dark mode support** with appropriate color schemes
- **Professional typography** and spacing
- **Hover effects** and smooth transitions

### 3. Component Usage

- **Import components** at the top of each MDX file
- **Use appropriate slide types** for different content
- **Include instructor notes** for teaching guidance
- **Add visual separators** between slides
- **Maintain consistent structure** across all files

## Quality Checklist

- [ ] MDX files with proper React component imports
- [ ] Card-based design with CSS styling
- [ ] Colored components for information hierarchy
- [ ] Responsive design for all screen sizes
- [ ] Dark mode support implemented
- [ ] Instructor notes in collapsible sections
- [ ] Visual separators between slides
- [ ] Technical accuracy preserved
- [ ] Educational content enhanced with appropriate visuals
- [ ] Consistent styling across all slides

## Expected Outcome

Transform each markdown file into MDX slide presentations featuring:

- **React components** for interactive slide elements
- **Custom CSS styling** for professional appearance
- **Responsive design** for all devices
- **Dark mode support** for accessibility
- **Instructor notes** for teaching guidance
- **Visual hierarchy** with color-coded components
- **Smooth transitions** and hover effects
- **Educational focus** with technical accuracy

## Benefits of MDX Approach

- ✅ **Full control** over styling and layout
- ✅ **Reusable components** for consistent design
- ✅ **Professional appearance** with educational focus
- ✅ **Responsive design** for all devices
- ✅ **Dark mode support** for better accessibility
- ✅ **Interactive elements** for engagement
- ✅ **Easy maintenance** and updates
- ✅ **Docusaurus compatibility** with native components

Result: Modern, professional slide presentations that are visually appealing, educationally effective, and suitable for university-level OZE course delivery with enhanced student engagement.

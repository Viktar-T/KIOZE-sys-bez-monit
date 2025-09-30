# Build Project Prompts - OZE Monitoring Systems

## Directory Purpose

This directory contains **11 sequential LLM-optimized prompts** designed to guide you through building an educational course website using Docusaurus. The prompts are specifically structured for optimal Large Language Model (GPT-4, Claude, etc.) comprehension and execution.

## 🚀 LLM-Optimized (v2.0)

**All prompts have been restructured for LLM consumption with:**
- 📋 Clear metadata and prerequisites
- 🤖 Explicit AI assistant instructions
- 📝 Step-by-step executable tasks
- ✅ Success criteria and validation
- 🔧 Built-in troubleshooting
- ➡️ Clear progression paths

See `LLM-OPTIMIZATION-GUIDE.md` for complete methodology.

## Based On

These prompts are derived from the successful implementation of:
**"Systemy bezpieczeństwa i monitorowania instalacji OZE"**
- 5th semester course for Renewable Energy Sources students
- 20h lectures (10 × 2h) + 10h lab sessions (5 × 2h)
- Focus: 90% monitoring systems, 10% safety systems
- Technologies: SCADA, OPC UA, MQTT, InfluxDB, Grafana, Edge AI

## Quick Start

1. **Read**: Start with `00-overview.md` for complete context
2. **Execute**: Follow prompts sequentially from 01 to 11
3. **Customize**: Adapt examples to your specific course topic
4. **Deploy**: Complete with functional, deployed course website

## Prompt Files

| # | File | Purpose | Time |
|---|------|---------|------|
| 00 | `00-overview.md` | Project overview and how to use prompts | 15 min read |
| 01 | `01-project-initialization.md` | Set up Docusaurus project | 30 min |
| 02 | `02-basic-configuration.md` | Configure site metadata | 30 min |
| 03 | `03-homepage-customization.md` | Create landing page | 1 hour |
| 04 | `04-content-structure-planning.md` | Design content hierarchy | 2 hours |
| 05 | `05-lecture-content-creation.md` | Write lecture materials | 10-20 hours |
| 06 | `06-visual-assets-setup.md` | Organize images and media | 2 hours |
| 07 | `07-custom-components.md` | Build interactive components | 3 hours |
| 08 | `08-styling-customization.md` | Apply custom CSS theming | 2 hours |
| 09 | `09-testing-validation.md` | Test and validate site | 2 hours |
| 10 | `10-build-deployment.md` | Deploy to production | 1 hour |
| 11 | `11-cursor-rules-setup.md` | Configure AI assistant | 30 min |

**Total estimated time**: 20-40 hours (varies by course complexity)

## How to Use

### With AI Code Assistant (Recommended)

```bash
# 1. Open Cursor or similar AI assistant
# 2. Copy entire prompt file
# 3. Paste into AI chat
# 4. Follow AI guidance step-by-step
# 5. Test changes
# 6. Move to next prompt
```

### With ChatGPT/Claude

```bash
# 1. Start new conversation
# 2. Provide context: "Building educational course website"
# 3. Copy prompt content
# 4. Ask AI to generate code/config
# 5. Implement in your project
# 6. Verify before proceeding
```

### Manual Implementation

```bash
# 1. Read prompt as detailed guide
# 2. Follow instructions manually
# 3. Use code examples as reference
# 4. Complete checklists
# 5. Troubleshoot as needed
```

## Example Course Structure

The prompts will help you create:

```
your-course-site/
├── docs/
│   ├── intro.md
│   ├── wyklady/
│   │   ├── wyklad-01-topic-name/
│   │   │   ├── index.md
│   │   │   ├── 01-subtopic.mdx
│   │   │   └── 02-subtopic.mdx
│   │   └── ...
│   ├── cwiczenia/
│   │   ├── exercise-01/
│   │   └── ...
│   └── literatura/
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
├── static/img/
├── docusaurus.config.js
└── .cursorrules
```

## Technologies Covered

- **Docusaurus 3.x** - Static site generator
- **React** - Component framework
- **MDX** - Enhanced markdown
- **Mermaid** - Diagram generation
- **CSS Modules** - Styling
- **GitHub Pages/Netlify** - Deployment

## Key Features You'll Build

✅ Organized lecture slides with presenter notes  
✅ Interactive quizzes and exercises  
✅ Responsive design for all devices  
✅ Dark mode support  
✅ Search functionality  
✅ Custom React components  
✅ Diagram visualization  
✅ Literature management  
✅ Project documentation  
✅ Accessibility compliance  

## Prerequisites

- Node.js 18.0+
- npm or yarn
- Git
- Code editor (VS Code recommended)
- Basic web development knowledge

## Course-Specific Examples

Throughout the prompts, you'll find concrete examples from the OZE Monitoring Systems course:

**Lecture Topics**:
- W1: Monitoring architecture (edge-fog-cloud, SCADA, KPIs)
- W2: Sensors and data acquisition
- W3: PLC/SCADA/OPC UA and IIoT
- W4: Standards and integration
- W5: Data quality and stream engineering
- W6: Analytics and anomaly detection
- W7: PV monitoring (IV curves, soiling)
- W8: Wind, biogas, hydro monitoring
- W9: Edge AI and digital twins
- W10: Safety systems

**Lab Exercises**:
- Ć1: PV farm monitoring architecture design
- Ć2: Communication protocols lab (Modbus, MQTT)
- Ć3: Operational data analysis
- Ć4: BESS monitoring and safety
- Ć5: Mini POC team project

## Customization

These prompts are templates - adapt them to your course:

- **Programming course**: Emphasize code examples
- **Science course**: Focus on formulas and experiments
- **Business course**: Highlight case studies
- **Engineering course**: Include design projects

## Support

- **Docusaurus Docs**: https://docusaurus.io/docs
- **GitHub Issues**: Report problems
- **Community Forums**: Ask questions
- **AI Assistance**: Use with Cursor, ChatGPT, Claude

## Version

- **Version**: 1.0
- **Date**: September 2025
- **Based on**: OZE-projektowanie successful implementation
- **Target**: Docusaurus 3.x

## Next Steps

🚀 **Start here**: Read `00-overview.md`  
📝 **Then**: Follow prompts 01-11 sequentially  
✨ **Result**: Fully functional educational course website  

## License

Educational use - adapt and modify as needed.

---

**Questions?** Start with the overview or ask your AI assistant!

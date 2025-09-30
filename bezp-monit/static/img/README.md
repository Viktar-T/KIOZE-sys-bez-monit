# Image Assets Inventory & Guide

## 📊 Current Status

**Last Updated**: 2025-09-30

---

## ✅ Existing Assets (Default Docusaurus)

| Asset | Location | Status | Action Needed |
|-------|----------|--------|---------------|
| favicon.ico | `static/img/` | ✅ Using default | 🎨 Customize for OZE |
| logo.svg | `static/img/` | ✅ Using default | 🎨 Customize for OZE |
| docusaurus-social-card.jpg | `static/img/` | ✅ Using default | 🎨 Customize with course info |
| undraw_docusaurus_mountain.svg | `static/img/` | ✅ Homepage feature | ✅ OK to keep |
| undraw_docusaurus_tree.svg | `static/img/` | ✅ Homepage feature | ✅ OK to keep |
| undraw_docusaurus_react.svg | `static/img/` | ✅ Homepage feature | ✅ OK to keep |

---

## 📁 Directory Structure

```
static/
├── img/
│   ├── favicon.ico                 ✅ Browser icon
│   ├── logo.svg                    ✅ Navbar logo
│   ├── docusaurus-social-card.jpg  ⚠️ To customize
│   ├── *.svg                       ✅ Default feature icons
│   │
│   ├── icons/                      📁 Custom icons
│   │   └── [empty - ready for custom icons]
│   │
│   ├── lecture-01/                 📁 Lecture 1 assets
│   │   └── [empty - add as needed]
│   │
│   └── shared/                     📁 Reusable assets
│       └── [empty - add common images]
│
└── downloads/                      📁 Downloadable files
    └── [empty - add PDFs, datasets]
```

---

## 🎨 Branding Assets to Create

### Priority 1: Essential (Do first)

#### 1. Custom Favicon
**Purpose**: Browser tab icon representing course  
**Specifications:**
- Dimensions: 16×16, 32×32, 48×48 pixels
- Format: ICO or PNG
- Design ideas:
  - ⚡ Lightning bolt (energy)
  - ☀️ Sun (solar/renewable)
  - 🏭 Monitoring screen
  - "OZE" or "SB" letters

**How to create:**
```
Option A: Online generator
1. Go to https://favicon.io/favicon-generator/
2. Text: "OZE" or "SB"
3. Background: #2e8555 (green - renewable energy)
4. Font: Roboto Bold
5. Download and replace static/img/favicon.ico

Option B: From image
1. Create 512×512px image (Canva, Figma)
2. Upload to https://realfavicongenerator.net/
3. Generate all sizes
4. Download and replace
```

#### 2. Custom Logo (Navbar)
**Purpose**: Brand identity in navigation bar  
**Specifications:**
- Dimensions: ~300×80px (or 200×50px for compact)
- Format: SVG (preferred) or PNG @2x
- Design requirements:
  - Readable on white background (light mode)
  - Readable on dark background (dark mode)
  - Include text or icon or both

**Design ideas:**
```
Text-based:
"Systemy Bezpieczeństwa OZE" (full or abbreviated)
Font: Bold, modern, professional

Icon + Text:
[⚡ icon] + "SB-OZE" or "Monitoring OZE"

Icon only:
Solar panel + shield (security) + monitoring screen
```

**How to create:**
```
Option A: Text logo (5 minutes)
1. Open https://www.canva.com/
2. Create custom size: 300×80px
3. Add text: "SB-OZE" or "Monitoring OZE"
4. Choose professional font
5. Add simple icon (search "renewable energy")
6. Download as SVG or PNG @2x
7. Save as static/img/logo-oze.svg

Option B: Professional tool
1. Use Figma (free): https://figma.com/
2. Create 300×80px frame
3. Design logo with course theme
4. Export as SVG
5. Test on both light/dark backgrounds
```

#### 3. Social Media Card
**Purpose**: Preview image when sharing on social media  
**Specifications:**
- Dimensions: 1200×630px (exact!)
- Format: JPG (optimized) or PNG
- File size: < 1MB

**Template content:**
```
Top: University/Institution logo
Center: "Systemy bezpieczeństwa i
         monitorowania instalacji OZE"
Subtitle: "Kierunek: Odnawialne źródła energii"
Background: OZE-themed image (solar panels, wind turbines)
Colors: Match theme (green #2e8555)
```

**How to create:**
```
Option A: Canva template (15 minutes)
1. Go to Canva.com
2. Create custom size: 1200×630px
3. Search "social media card" templates
4. Customize with course information
5. Add background: Search "renewable energy"
6. Download as JPG
7. Optimize at https://squoosh.app/
8. Save as static/img/oze-social-card.jpg

Option B: PowerPoint/Google Slides
1. Set slide size to 1200×630px
2. Design slide with course info
3. Export as image
4. Optimize
5. Save
```

---

### Priority 2: Enhancement (Optional)

#### Custom Homepage Feature Icons

**Currently using**: Undraw illustrations (perfectly fine!)  
**If customizing**: Create 3 SVG icons

**Tools for icon creation:**
- [Heroicons](https://heroicons.com/) - Copy SVG code
- [Lucide](https://lucide.dev/) - Download SVG
- [Flaticon](https://www.flaticon.com/) - Requires attribution
- Custom design in Figma/Illustrator

**Recommended icons:**
1. **SCADA/IIoT**: Network/server icon
2. **Analytics**: Chart/graph icon
3. **Lab**: Tool/wrench icon

#### Lecture-Specific Images

**Add as lectures are developed:**
- Screenshots of software (Grafana, Node-RED, etc.)
- Annotated diagrams
- Equipment photos
- Process flowcharts

**Best practices:**
- Use descriptive filenames: `grafana-pv-dashboard.png`
- Keep file size < 500KB
- Include in `/lecture-XX/` folders
- Add alt text when referencing

---

## 📸 Screenshot Guidelines

### Taking Good Screenshots

**For software tutorials (Grafana, Node-RED, etc.):**
1. **Clean workspace** - Close unnecessary windows
2. **High resolution** - 1920×1080 minimum
3. **Annotations** - Highlight important areas
   - Use red arrows/circles
   - Add numbered steps
   - Include labels

4. **Crop smartly** - Remove unnecessary parts
5. **Consistent style** - Same theme, same tool

**Tools for screenshots:**
- **Windows**: Snipping Tool, ShareX (free, powerful)
- **Mac**: Command+Shift+4
- **Cross-platform**: Lightshot, Greenshot

**Annotation tools:**
- [Annotate (Mac)](https://apps.apple.com/app/annotate/)
- [ShareX (Windows)](https://getsharex.com/)
- [Photopea (Online)](https://www.photopea.com/)

---

## 🎯 Image Optimization

### Before Adding Images to Project

**Always optimize to reduce file size and improve performance!**

#### Compression Tools

**Online (Free):**
1. **TinyPNG**: https://tinypng.com/
   - Drag & drop PNG/JPG
   - Reduces 50-80% file size
   - No visible quality loss

2. **Squoosh**: https://squoosh.app/
   - Advanced settings
   - Side-by-side comparison
   - Multiple formats (WebP, AVIF)

3. **SVGOMG**: https://jakearchibald.github.io/svgomg/
   - SVG optimization
   - Removes unnecessary data
   - Clean output

**Desktop:**
- **ImageOptim** (Mac) - Batch optimization
- **GIMP** - Open source image editor
- **XnConvert** - Batch converter/optimizer

#### Target File Sizes

| Image Type | Target Size | Max Acceptable |
|------------|-------------|----------------|
| Favicon | < 10KB | 50KB |
| Logo | < 50KB | 100KB |
| Social card | < 300KB | 500KB |
| Screenshots | < 200KB | 500KB |
| Diagrams (PNG) | < 100KB | 300KB |
| Diagrams (SVG) | < 50KB | 100KB |
| Photos | < 300KB | 800KB |

---

## 📖 Accessibility: Alt Text Guidelines

**Every image MUST have alt text!**

### Good Alt Text Examples

❌ **Bad**: `alt="image"`  
❌ **Bad**: `alt="diagram.png"`  
❌ **Bad**: `alt="click here"`  

✅ **Good**: `alt="Edge-fog-cloud architecture showing three layers of data processing"`  
✅ **Good**: `alt="Grafana dashboard displaying solar farm performance metrics"`  
✅ **Good**: `alt="Sequence diagram illustrating MQTT publish-subscribe communication flow"`  

### Alt Text Rules

1. **Describe content, not appearance**
   - Not: "Green and blue diagram"
   - Yes: "System architecture with edge and cloud layers"

2. **Be specific but concise** (50-150 characters)
   - Include key information
   - Don't write essays

3. **Decorative images** - use empty alt
   - `alt=""` for purely decorative elements
   - Screen readers will skip

4. **Complex diagrams** - provide detailed description
   - Alt text: Brief summary
   - Caption or nearby text: Detailed explanation

### Examples in Markdown

```markdown
![Edge-fog-cloud architecture with three distinct layers](/img/lecture-01/architecture.png)
*Rysunek 1: Architektura trójwarstwowa systemów monitoringu OZE*

![Grafana dashboard showing real-time PV farm metrics including power output, voltage, and current](/img/lecture-01/grafana-dashboard.png)
*Przykładowy dashboard monitoringu farmy fotowoltaicznej w Grafana*
```

---

## 🚀 Quick Start Actions

### Immediate Actions (5 minutes)

**1. Test current setup:**
```bash
cd bezp-monit
npm run start
```

Navigate to homepage and verify:
- ✅ Logo appears in navbar
- ✅ Favicon in browser tab
- ✅ 3 feature icons on homepage

**2. Create placeholder documentation:**
- ✅ This README.md (already created)
- ✅ ASSETS.md tracking file (create next)

### Short-term Actions (1-2 hours)

**1. Customize branding (if desired):**
- Create custom favicon using online generator
- Design simple logo (text-based is fine!)
- Create social media card with course info

**2. Prepare for future content:**
- Create lecture image folders as needed
- Document image requirements
- Set up screenshot tool
- Bookmark free icon/image sites

### Optional Enhancements

**1. Custom homepage icons:**
- Download or create 3 custom SVGs
- Replace undraw illustrations
- Update paths in HomepageFeatures/index.js

**2. Create image library:**
- Collect OZE-related stock photos
- Create reusable diagram templates
- Build icon set for different technologies

---

## 📚 Free Resources for OZE-Themed Images

### Stock Photos (Free, no attribution required)

**Unsplash Collections:**
- [Solar Energy](https://unsplash.com/s/photos/solar-panel)
- [Wind Energy](https://unsplash.com/s/photos/wind-turbine)
- [Renewable Energy](https://unsplash.com/s/photos/renewable-energy)
- [Technology](https://unsplash.com/s/photos/technology)

**Pexels Collections:**
- [Solar Power](https://www.pexels.com/search/solar%20power/)
- [Wind Farm](https://www.pexels.com/search/wind%20farm/)

### Icons (Free)

**Heroicons** (MIT License):
- https://heroicons.com/
- Modern, clean SVG icons
- Copy SVG code directly

**Lucide Icons** (ISC License):
- https://lucide.dev/
- Similar to Heroicons
- Extensive collection

**Font Awesome** (Free tier):
- https://fontawesome.com/
- Huge collection
- Some icons paid only

---

## ✅ Success Criteria Checklist

- [x] `static/img/` directory structure organized
- [x] Subdirectories created: icons/, lecture-01/, shared/, downloads/
- [ ] Favicon customized (optional but recommended)
- [ ] Logo customized (optional but recommended)
- [ ] Social media card customized (recommended)
- [ ] Homepage feature icons evaluated (can keep defaults)
- [x] Asset inventory file created (ASSETS.md)
- [x] Directory structure documented (README.md)
- [ ] All future images will have descriptive filenames
- [ ] Alt text guidelines documented
- [ ] Optimization workflow established
- [ ] Free resource bookmarks saved

---

## 🎓 For Wykład 1: Current Image Status

### Images Currently Used (All Mermaid - No Files Needed!)

Wykład 1 uses **8 Mermaid diagrams** (rendered inline):
- ✅ Maintenance cycle comparison (reactive vs predictive)
- ✅ Data lifecycle flowchart
- ✅ Edge-Fog-Cloud architecture comparison
- ✅ Fog gateway internal architecture
- ✅ Data flow sequence diagram
- ✅ Cloud platform architecture
- ✅ Summary mind map
- ✅ Process flows

**No external image files needed** for Wykład 1! ✅

**Optional enhancements:**
- Screenshot of real Grafana dashboard
- Photo of edge device (Raspberry Pi, industrial gateway)
- Diagram of actual PV farm architecture
- BESS thermal imaging example

---

## 💡 Pro Tips

### Use Mermaid Instead of Images When Possible

**Advantages:**
- ✅ No file management
- ✅ Easy to edit (just text)
- ✅ Always sharp (vector rendering)
- ✅ Consistent styling
- ✅ Small file size
- ✅ Copy-paste friendly

**When to use images instead:**
- ❌ Complex layouts Mermaid can't handle
- ❌ Screenshots of actual software
- ❌ Photos of hardware
- ❌ Highly customized diagrams

### Diagram Creation Workflow

1. **Try Mermaid first** (inline in markdown)
2. **If Mermaid insufficient**, use draw.io
3. **Export as SVG** (scalable, editable)
4. **Optimize SVG** with SVGOMG
5. **Save in appropriate lecture folder**
6. **Reference with descriptive alt text**

---

## 📋 Future Image Needs (Estimated)

### For Complete 10 Lectures

| Lecture | Estimated Images | Type |
|---------|------------------|------|
| Wykład 1 | 0-2 | Screenshots (optional) |
| Wykład 2 | 5-10 | Sensor photos, ADC diagrams |
| Wykład 3 | 8-12 | SCADA screenshots, protocol diagrams |
| Wykład 4 | 3-5 | Standard diagrams |
| Wykład 5 | 10-15 | Database screenshots, Grafana dashboards |
| Wykład 6 | 5-8 | Charts, graphs, ML visualizations |
| Wykład 7 | 10-15 | PV diagrams, IV curves, thermal images |
| Wykład 8 | 8-12 | Turbine photos, vibration spectra |
| Wykład 9 | 5-10 | AI/ML diagrams, digital twin concepts |
| Wykład 10 | 8-12 | Safety equipment, fire suppression |

**Total estimate**: 60-100 images for complete course

**Strategy**: 
- Use Mermaid for 70% (reduces to 20-30 actual image files)
- Take screenshots as software is demonstrated
- Collect gradually as lectures are created

---

## ➡️ Next Steps

### Option A: Minimal Setup (Keep defaults, proceed)
If you're happy with default Docusaurus branding:
- ✅ Structure is ready
- ✅ Can proceed to Prompt 07 (Components)
- ✅ Add images gradually as needed

### Option B: Custom Branding (Recommended)
Take 1-2 hours to create custom assets:
1. Create custom favicon (15 min)
2. Design simple logo (30-45 min)
3. Create social card (30-45 min)
4. Test in browser (10 min)

### Option C: Full Visual Setup
Complete all visual assets before proceeding:
- Custom branding
- Homepage custom icons
- Prepare lecture image library
- Set up downloads folder

---

## 🎯 Recommendation

**For now**: Keep default assets ✅

**Why**: 
- Defaults work perfectly fine
- Focus on content creation first
- Can customize later anytime
- No impact on functionality

**When to customize**:
- Before public launch
- When you have branding guidelines
- If institutional logo required
- When you have design resources

**Ready to proceed to Prompt 07** (Custom Components)! 🚀

---

**Document Version**: 1.0  
**Created**: 2025-09-30  
**Status**: ✅ Structure Ready, Branding Optional

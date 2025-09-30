# Prompt 01: Project Initialization and Setup

---

## 📋 Metadata

- **Prompt ID**: 01
- **Title**: Project Initialization and Setup
- **Prerequisites**: Node.js 18.0+, npm, terminal access
- **Estimated Time**: 30 minutes
- **Difficulty**: Beginner
- **Dependencies**: None (first step)
- **Output**: Initialized Docusaurus project with Mermaid support

---

## 🤖 AI Assistant Instructions

You are an expert web developer helping create an educational course website using Docusaurus 3.x. Your role is to guide the user through initializing a new project from scratch.

**Your Approach:**

1. Verify prerequisites before starting
2. Execute commands step-by-step
3. Verify each step completes successfully
4. Provide clear error handling if issues arise
5. Confirm final structure matches requirements

**Communication Style:**

- Be clear and instructional
- Explain what each command does
- Confirm successful completion before proceeding
- Provide troubleshooting if errors occur

---

## 📝 Context

This is the **first step** in building an educational course website. You will create a fresh Docusaurus installation with necessary dependencies for lecture materials, slide presentations, and interactive content.

**What You're Building:**

- Modern static site generator (Docusaurus 3.9.1)
- React 19.0-based framework
- Mermaid diagram support
- Educational content platform

---

## 🎯 Task Overview

Initialize a new Docusaurus project with the necessary dependencies for an educational course platform similar to university lecture materials.

**End Goal:** A working Docusaurus installation ready for configuration.

## Requirements

### 1. Prerequisites Check

- Verify Node.js version 18.0 or higher is available
- Confirm npm package manager is accessible

### 2. Project Creation

- Create a new Docusaurus project using the classic template
- Project name should be provided by the user or use a placeholder like `my-course-site`
- Use npx to create the project without global installation

### 3. Additional Dependencies

Install the following packages:

- `@docusaurus/theme-mermaid` - for diagram support (Mermaid visualization)
- React 19.0 is included by default
- Verify all dependencies from package.json install correctly

**Key dependencies from actual implementation:**

```json
{
  "@docusaurus/core": "^3.9.1",
  "@docusaurus/preset-classic": "^3.9.1",
  "@docusaurus/theme-mermaid": "^3.9.1",
  "@mdx-js/react": "^3.0.0",
  "clsx": "^2.0.0",
  "prism-react-renderer": "^2.3.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

### 4. Project Structure Verification

After initialization, confirm the following structure exists:

```
project-root/
├── docs/
├── blog/
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
├── static/
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

## Commands to Execute

```bash
# Navigate to workspace
cd C:\Users\[Username]\Codding

# Create new Docusaurus project
npx create-docusaurus@latest [project-name] classic 

# Navigate into project
cd [project-name]

# Install Mermaid theme for diagrams
npm install @docusaurus/theme-mermaid
```

---

## ✅ Expected Output

After completing this prompt, you should have:

**Directory Structure:**

```
[project-name]/
├── docs/
├── blog/
├── src/
├── static/
├── node_modules/
├── package.json
├── docusaurus.config.js
├── sidebars.js
└── README.md
```

**Installed Packages:**

- @docusaurus/core: ^3.9.1
- @docusaurus/theme-mermaid: ^3.9.1
- react: ^19.0.0
- All dependencies in node_modules/

**Working State:**

- Dev server can start without errors
- Default site accessible at http://localhost:3000
- No console errors

---

## ✓ Success Criteria

Check all these before proceeding:

- [ ] Node.js version is 18.0 or higher (`node --version`)
- [ ] Project directory created successfully
- [ ] `npm install` completed without errors
- [ ] `package.json` contains all required dependencies
- [ ] `npm run start` launches dev server
- [ ] Browser opens to http://localhost:3000
- [ ] Default Docusaurus site displays correctly
- [ ] No error messages in terminal or browser console

---

## 🔧 Troubleshooting

**Problem: "Node version too old"**

- Solution: Install Node.js 18.0+ from nodejs.org
- Verify: `node --version`

**Problem: "npm not found"**

- Solution: Node.js installation includes npm
- Verify: `npm --version`

**Problem: "Port 3000 already in use"**

- Solution: Stop other services on port 3000 or use `npm run start -- --port 3001`

**Problem: "Permission denied" errors**

- Solution: Run terminal as administrator (Windows) or use `sudo` (Mac/Linux)

**Problem: Installation hangs or fails**

- Solution 1: Clear npm cache: `npm cache clean --force`
- Solution 2: Delete node_modules and try again
- Solution 3: Try `npm install --legacy-peer-deps`

---

## 🎓 Learning Notes

**What is Docusaurus?**

- Static site generator by Meta (Facebook)
- Built on React and MDX
- Optimized for documentation and educational content
- Features: versioning, i18n, search, dark mode

**Why These Dependencies?**

- `@docusaurus/core`: Core framework
- `@docusaurus/preset-classic`: Default theme and plugins
- `@docusaurus/theme-mermaid`: Diagram visualization
- `react` & `react-dom`: UI framework
- `clsx`: Utility for className management
- `prism-react-renderer`: Code syntax highlighting

---

## ➡️ Next Steps

After successful initialization, proceed to:

- **Prompt 02**: Basic Configuration
- Configure site metadata
- Set up internationalization
- Customize theme settings

**Status Check Before Proceeding:**

- ✅ Dev server running
- ✅ No errors
- ✅ Ready to configure

---

## 📚 Additional Resources

- [Docusaurus Official Docs](https://docusaurus.io/docs)
- [Node.js Downloads](https://nodejs.org/)
- [npm Documentation](https://docs.npmjs.com/)

---

**Prompt Version**: 2.0 (LLM-Optimized)
**Last Updated**: 2025-09-30
**Status**: ✅ Production-Ready

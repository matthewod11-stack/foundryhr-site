# Project-Level Claude Code Configuration

> **Note:** This is a minimal project-specific configuration. For comprehensive guides, see `~/claude-docs/`:
> - [agents.md](~/claude-docs/agents.md) - All available agents and their uses
> - [plugins.md](~/claude-docs/plugins.md) - Plugin commands and workflows
> - [rules.md](~/claude-docs/rules.md) - Coding standards and best practices
> - [workflows.md](~/claude-docs/workflows.md) - Complete workflow guides
> - [mcp.md](~/claude-docs/mcp.md) - MCP server configuration and usage

---

## Project Overview

**Project Name:** mattsite (Personal Portfolio)

**Description:** Personal portfolio/consulting website for Matt O'Donnell, an AI-first HR leader. Single-page Next.js application showcasing consulting services, FoundryHR platform, work experience, and creative work.

**Tech Stack:**
- Framework: Next.js 16.0.3 (App Router)
- Language: TypeScript 5.x (strict mode)
- React: 19.2.0
- Styling: Tailwind CSS v4
- Animation: Framer Motion 12.x
- Icons: Lucide React

**Live Site:** mattodonnell.com

**Repository:** Git worktree at `/Users/mattod/.claude-worktrees/mattsite/objective-mcclintock`
Main repository: `/Users/mattod/Desktop/mattsite`

---

## Project-Specific Rules

> **Default Standards:** See `~/claude-docs/rules.md` for comprehensive coding standards.
> Only document project-specific deviations or additions here.

### Code Style Exceptions
- None (following standard rules.md conventions)

### Project-Specific Conventions
- All site content lives in `src/lib/data.ts` - edit data here, not in components
- Animation variants centralized in `src/lib/animations.ts`
- Use `'use client'` directive only when hooks/interactivity required
- Custom color palette: `warm-*` (brand orange), `sage-*` (accent green), `stone-*` (neutrals)

### Testing Requirements
- No testing framework currently configured (static marketing site)
- Manual testing across breakpoints: mobile, tablet, desktop

---

## Project Architecture

### Directory Structure
```
src/
  app/
    layout.tsx           # Root layout, metadata, fonts (Geist)
    page.tsx             # Main page composing all sections
    globals.css          # Global styles, Tailwind config, custom classes
  components/
    ui/                  # Reusable primitives (Modal.tsx)
    Hero.tsx             # Horizontal-scroll hero with 4 panels
    Navigation.tsx       # Fixed top navigation
    Consulting.tsx       # Services grid with modals
    Project.tsx          # FoundryHR showcase with carousel
    Experience.tsx       # Job history with expandable details
    About.tsx            # Bio section
    Creative.tsx         # Music/film embeds (Spotify, YouTube)
    Contact.tsx          # Contact info and CTA
    Footer.tsx           # Site footer
    JobModal.tsx         # Experience detail modal
    ServiceModal.tsx     # Consulting service detail modal
    ProjectCarousel.tsx  # Feature carousel for Project section
  lib/
    data.ts              # ALL content data with TypeScript interfaces
    animations.ts        # Framer Motion variants and custom hooks
public/
  images/                # Static images (matt.jpeg, etc.)
```

### Key Architectural Decisions
1. **Centralized data layer (`data.ts`):** All site content (hero panels, services, jobs, projects) defined as typed constants. Edit content here, not in components.
2. **Animation library (`animations.ts`):** Reusable Framer Motion variants and custom hooks (`useCountUp`, `useBodyScrollLock`, `useEscapeKey`).
3. **Single-page architecture:** All sections composed in `page.tsx` with smooth scroll navigation to anchors.

---

## Project-Specific Agents

> **All Available Agents:** See `~/claude-docs/agents.md`
> List only the agents most relevant to THIS project's workflow.

### Primary Agents for This Project
1. **visual-design-critic** - Portfolio site requires high design quality; use for visual polish
2. **accessibility-auditor** - Ensure WCAG compliance for public-facing site
3. **performance-profiler** - Framer Motion animations can impact performance; monitor bundle size

### Example Usage in This Project
```bash
# After updating Hero section animations
"Review the hero section design for visual polish and premium feel"
# Uses: visual-design-critic

# Before deployment
"Check accessibility of the modal components"
# Uses: accessibility-auditor

# If site feels sluggish
"Profile the Framer Motion animations for performance issues"
# Uses: performance-profiler
```

---

## Project-Specific Skills & Plugins

> **All Available:** See `~/claude-docs/plugins.md` for complete documentation.

### Recommended Skills for This Project

| Skill | When to Use |
|-------|-------------|
| `frontend-design` | Building new UI sections or components - generates distinctive, polished code |

**Invoke with:** Ask Claude to use the skill, or it will activate automatically for frontend tasks.

### Recommended Slash Commands for This Project

| Command | When to Use |
|---------|-------------|
| `/commit` | After completing a feature or fix |
| `/commit-push-pr` | Ready to deploy changes to production |
| `/review-pr` | Before merging any visual/UI changes (runs 6 agents) |
| `/code-review` | Quick pre-commit style check |

### Workflow Example for This Project
```bash
# 1. Build new section using frontend-design skill
"Add a testimonials section to the site"
# Skill: frontend-design activates for high-quality UI

# 2. Review the design
"Review the testimonials section design"
# Agent: visual-design-critic

# 3. Check accessibility
"Audit the new section for accessibility"
# Agent: accessibility-auditor

# 4. Commit and create PR
/commit-push-pr
# Plugin: commit-commands

# 5. Final PR review before merge
/review-pr
# Plugin: pr-review-toolkit (6 agents)
```

### Skills NOT Needed for This Project
- `document-skills:xlsx/docx/pptx/pdf` - No document processing needed
- `/new-sdk-app` - Not building Claude agents here

---

## Environment Setup

### Required Environment Variables
```bash
# None required - static site with no API keys or secrets
# All external embeds (Spotify, YouTube, GitHub) use public URLs
```

### Local Development Setup
```bash
# 1. Clone and install
cd /Users/mattod/.claude-worktrees/mattsite/objective-mcclintock
npm install

# 2. Run development server
npm run dev
# Opens at http://localhost:3000

# 3. Build for production
npm run build

# 4. Preview production build
npm run start
```

### Commands
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## MCP Configuration

> **Complete Guide:** See `~/claude-docs/mcp.md` for detailed documentation on all MCP servers.

### Recommended Global MCP Servers for This Project

1. **Filesystem Server** - Access project files and cross-reference with other projects
2. **GitHub Server** - Create PRs, manage branches for this worktree

### Project-Specific MCP Usage Notes
- **Most useful:** Filesystem for accessing `~/claude-docs/` reference materials
- **Design integration:** Not using Figma - designs implemented directly in code
- **Database queries:** Not needed - no database in this project

---

## Critical Code Paths

> **Note:** This is a static marketing site with no authentication, payments, or PII handling.

### Content Data (`src/lib/data.ts`)
- **Critical:** Single source of truth for all site content
- **Impact:** Changes here affect entire site
- **Review:** Verify TypeScript types match when adding new content

### Animation System (`src/lib/animations.ts`)
- **Critical:** Custom hooks used across all components
- **Impact:** Breaking changes affect all animated components
- **Review:** Test scroll-triggered animations after changes

---

## Common Tasks & Quick Reference

### Updating Site Content
```bash
# 1. Edit src/lib/data.ts
# 2. TypeScript will catch type errors
# 3. Check responsive layouts at mobile/tablet/desktop
# 4. Test animations and modals
```

### Adding New Section
```bash
# 1. Create component in src/components/NewSection.tsx
# 2. Add data interface and content to src/lib/data.ts
# 3. Import and add to src/app/page.tsx
# 4. Add navigation link in data.ts navLinks array
```

### Design Review Before Deployment
```bash
# Visual design review
"Review the site design for visual polish"
# Uses: visual-design-critic

# Accessibility check
"Audit all interactive components for WCAG compliance"
# Uses: accessibility-auditor
```

---

## Key Implementation Details

### Hero Section
- Horizontal scroll with 4 snap panels (`snap-x snap-mandatory`)
- Panel indicators at bottom (hidden after scrolling past hero)
- `useCountUp` hook for animated stats on panel 3
- Scroll hint animations with Framer Motion

### Modal System (`src/components/ui/Modal.tsx`)
- Reusable modal with focus trap
- `AnimatePresence` for exit animations
- Backdrop click to close
- ESC key to close (via `useEscapeKey` hook)
- Size variants: `md`, `lg`, `xl`, `full`

### Navigation
- Fixed position, transparent until scroll
- Mobile hamburger menu with AnimatePresence
- Smooth scroll to section anchors (`scroll-smooth` on html)

### Custom Styling
```css
/* Custom color palette in globals.css */
warm-*    /* Primary brand (orange/rust) */
sage-*    /* Secondary accent (green) */
stone-*   /* Neutral grays */

/* Custom utility classes */
.gradient-warm    /* Warm gradient background */
.gradient-subtle  /* Subtle stone gradient */
.text-gradient    /* Gradient text effect */
.noise-overlay    /* Subtle texture overlay */
```

---

## Notes for Claude Code

> Instructions for Claude Code when working on this project.

### Project Context
This is a **production** personal portfolio/marketing site. Prioritizes **design quality** and **performance**. No backend, no database, no authentication.

### Special Considerations
- **Animation heavy:** Framer Motion used extensively; be mindful of bundle size
- **Design focused:** Visual polish matters; use visual-design-critic agent
- **Content centralized:** Always edit `data.ts` for content changes, not components
- **Responsive required:** Test all changes at mobile, tablet, and desktop breakpoints

### When Making Changes
1. **Always** reference `~/claude-docs/rules.md` for coding standards
2. **Always** edit `src/lib/data.ts` for content changes
3. **Always** test responsive layouts after UI changes
4. **Critical paths** (data.ts, animations.ts) require extra review

### Prohibited Actions
- Never hardcode content in components (use data.ts)
- Never add environment variables without updating this doc
- Never remove animation variants without checking all consumers

---

**Last Updated:** 2025-11-25
**Updated By:** Claude Code
**Version:** 2.0.0

# Cyberpunk Portfolio Website - Implementation Plan

## Project Overview

**Goal:** Create a static cyberpunk-themed portfolio for GitHub Pages with maximum visual impact, featuring "fake bugs as features" and Italian/English language support. Future-ready for blog migration.

**Repository:** nicodiansk.dev
**Current State:** Fresh repo with README.md and resume PDF only
**Target Deployment:** GitHub Pages with custom domain (to be purchased)

---

## Tech Stack (December 2025)

### Core Framework
- **Next.js 16.0.7+** (patched security version, Dec 2025 release)
- **React 19.0.0+**
- **TypeScript 5.6+**
- **Tailwind CSS 3.4+**

### Animation & Effects Libraries
- **Framer Motion v12+** - Industry-standard UI animations, excellent performance
- **TsParticles v3.8+** - Versatile interactive particle system
- **React Three Fiber v8.18+** - 3D effects with declarative Three.js
- **CSS Animation Libraries** - Zero-JS glitch effects for performance

### Additional Dependencies
- `next-themes` - Dark mode management
- `lucide-react` - Icon system
- `clsx` + `tailwind-merge` - Utility classes
- `class-variance-authority` - Component variants

---

## Design System

### Color Palette (from README)
- **Cyan:** `#00F0FF` - Primary accent, links
- **Magenta:** `#FF00FF` - Secondary accent, highlights
- **Lime:** `#39FF14` - Success states, active elements
- **Yellow:** `#FFE800` - Warnings, special emphasis
- **Dark:** `#0D1117` - Background, containers

### Typography
- **Font:** Share Tech Mono (monospace, cyberpunk aesthetic)
- Used in README typing animation

### Custom Animations
- `glitch` - Random displacement, RGB split
- `scanline` - CRT screen effect
- `flicker` - Neon light flickering
- `matrix-fall` - Falling characters
- `neon-glow` - Pulsing glow effect

---

## Project Structure

```
nicodiansk.dev/
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Main single-page portfolio
│   └── globals.css                # Tailwind + custom cyberpunk styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Sticky nav with glitch logo
│   │   ├── Footer.tsx             # Terminal-style footer
│   │   └── BackgroundEffects.tsx  # Layered visual effects
│   ├── sections/
│   │   ├── Hero.tsx               # Boot sequence intro
│   │   ├── Projects.tsx           # Database-style showcase
│   │   ├── Skills.tsx             # Tech matrix with categories
│   │   ├── About.tsx              # System info panel
│   │   └── Contact.tsx            # Command-line form
│   ├── effects/
│   │   ├── GlitchText.tsx         # RGB split text effect
│   │   ├── ScanlineOverlay.tsx    # CRT scanlines
│   │   ├── MatrixRain.tsx         # Falling characters (Canvas)
│   │   ├── Particles3D.tsx        # 3D floating particles
│   │   └── FakeBugTooltip.tsx     # "Error" tooltips
│   ├── ui/
│   │   ├── ProjectCard.tsx        # DB record aesthetic cards
│   │   ├── SkillBadge.tsx         # Animated skill badges
│   │   ├── TerminalWindow.tsx     # Terminal container
│   │   └── NeonButton.tsx         # Glowing interactive buttons
│   └── providers/
│       ├── ThemeProvider.tsx      # Dark cyberpunk theme
│       └── LanguageProvider.tsx   # IT/EN context
├── data/
│   ├── projects.json              # All projects (bilingual)
│   ├── skills.json                # Tech stack by category
│   ├── about.json                 # Bio, education, work history
│   └── translations.json          # UI strings IT/EN
├── lib/
│   ├── utils.ts                   # Helper functions
│   └── animations.ts              # Framer Motion variants
├── public/
│   ├── .nojekyll                  # GitHub Pages requirement
│   ├── images/                    # Project screenshots, icons
│   └── fonts/                     # Custom fonts if needed
└── .github/
    └── workflows/
        └── deploy.yml             # Auto-deploy to GitHub Pages
```

---

## Data Architecture

### Content Management: JSON/YAML Files

**projects.json Schema:**
```json
{
  "projects": [
    {
      "id": "dev-velocity-mcp",
      "status": "LIVE",
      "title": {
        "en": "DEV_VELOCITY_MCP",
        "it": "DEV_VELOCITY_MCP"
      },
      "description": {
        "en": "SSOT via Confluence+Slack+Jira → AI coding assistants",
        "it": "SSOT via Confluence+Slack+Jira → assistenti AI per coding"
      },
      "longDescription": {
        "en": "Detailed project description...",
        "it": "Descrizione dettagliata del progetto..."
      },
      "techStack": ["Claude", "Gemini", "LangGraph", "MCP"],
      "metrics": [
        {
          "label": { "en": "Dev Productivity", "it": "Produttività Dev" },
          "value": "↑ 60-70%",
          "color": "lime"
        }
      ],
      "tags": ["multi-agent", "rag", "mcp"],
      "year": 2024,
      "featured": true
    }
  ]
}
```

**Content to Extract from Resume:**
- 6 projects: DEV_VELOCITY_MCP, GEO_SEO_ENGINE, LEGAL_RAG_v2, VISION_CLASSIFY, HR_ASSISTANT, HYBRID_RECSYS
- Skills in 4 categories: LLMs & Gen AI, ML & Computer Vision, Infrastructure & MLOps, Vector Databases
- Education: Master's + Bachelor's at Università degli Studi di Bergamo
- Work: Head of AI Business Unit at S.I. 2001 SpA (Apr 2021 - Present)
- Bio: Mission, hobbies, location

---

## GitHub Pages Configuration

### next.config.mjs
```javascript
const nextConfig = {
  output: 'export',              // Static HTML export
  images: { unoptimized: true }, // No Image Optimization API
  basePath: process.env.NODE_ENV === 'production' ? '/nicodiansk.dev' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nicodiansk.dev/' : '',
  trailingSlash: true,
  reactStrictMode: true,
}
```

### GitHub Actions Workflow
**File:** `.github/workflows/deploy.yml`

- **Trigger:** Push to `master` branch ONLY (production deployments)
- **Node:** 20.x
- **Steps:** Checkout → Install dependencies → Build static export → Upload artifact → Deploy to Pages
- **Uses:** Official `actions/deploy-pages@v4`
- **Important:** Develop and feature branches do NOT trigger deployment (test locally)

### Custom Domain Setup (Future)
1. Buy domain (e.g., nicodiansk.dev)
2. Add CNAME file in `public/` with domain name
3. Configure DNS A records pointing to GitHub Pages IPs
4. Enable HTTPS in GitHub Pages settings

---

## Implementation Phases

### Phase 1: Foundation & MVP (Week 1)

**Goals:**
- Next.js project initialized with TypeScript + Tailwind
- GitHub Pages deployment working
- Basic cyberpunk styling (colors, fonts, grid)
- Hero section with simple terminal boot effect
- Projects section loading from JSON
- Language toggle (IT/EN) functional
- One animation working (glitch text)

**Tasks:**
1. Initialize Next.js 16.0.7+ project
2. Install core dependencies (Framer Motion, TsParticles, React Three Fiber)
3. Configure Tailwind with cyberpunk color palette
4. Create project structure (components/, data/, lib/)
5. Set up GitHub Actions workflow
6. Create `projects.json` with 1-2 sample projects
7. Build Hero component with boot sequence
8. Build Projects component with basic cards
9. Implement LanguageProvider with React Context
10. Deploy to GitHub Pages and verify

**Deliverable:** Live site at `https://[username].github.io/nicodiansk.dev/` with basic functionality

---

### Phase 2: Full Content & Enhanced UI (Week 2)

**Goals:**
- All sections complete (Projects, Skills, About, Contact)
- All content from resume migrated to JSON
- Enhanced project cards with database aesthetic
- Navigation with scroll detection
- Mobile responsive

**Tasks:**
1. Extract all resume data into JSON files (bilingual IT/EN)
2. Create Skills section with category tabs and animated badges
3. Create About section with education timeline and bio
4. Create Contact section with command-line form
5. Build Header with sticky nav and language toggle
6. Build Footer with social links and "system status"
7. Enhance ProjectCard with hover effects and expand functionality
8. Add smooth scroll behavior
9. Implement mobile responsive layouts
10. Test on real devices (mobile, tablet, desktop)

**Deliverable:** Complete portfolio with all content and sections

---

### Phase 3: Maximum Chaos - Visual Effects (Week 3-4)

**Goals:**
- ALL animations and effects implemented
- "Fake bugs as features" working
- Background effects layered (particles, matrix rain, scanlines, 3D)
- Terminal boot sequence polished
- Glitch effects on multiple elements

**Background Effects (BackgroundEffects.tsx):**
1. **TsParticles** - Floating cyber debris (mouse-interactive)
2. **Matrix Rain** - Falling green characters (Canvas, code snippets)
3. **Scanlines** - CRT screen overlay (CSS, subtle animation)
4. **Perspective Grid** - 3D cyberpunk floor (React Three Fiber, optional)
5. **Vignette** - Dark edges for depth

**Terminal Boot Sequence (Hero):**
```
1. Cursor blink (1s)
2. "SYSTEM INITIALIZING..." (typewriter effect)
3. Fake loading bars:
   - "Loading LLM modules... [████████] 100%"
   - "Connecting vector database... [████████] 100%"
   - "Initializing neural network... [████████] 100%"
4. "⚡ SYSTEM ONLINE" (with glitch)
5. Fade in hero content
6. Activate background particles
```

**Fake Bugs as Features:**

1. **Console Easter Eggs:**
   ```javascript
   console.error("⚠️ NEURAL_LINK_UNSTABLE: Connection detected")
   console.warn("🔥 HOT_RELOAD: Deploying 10+ AI systems...")
   console.log("✅ HACK_THE_PLANET: Welcome, developer")
   // Hidden: window.glitchMode() to intensify effects
   ```

2. **Project Card "Loading Errors":**
   - Click → "❌ ERROR: Database query failed"
   - → "🔄 RETRYING... [progress bar]"
   - → "⚠️ FALLBACK: Accessing backup server"
   - → "✅ SUCCESS: Records retrieved"
   - → Show content with glitch transition

3. **Glitchy Button Hover:**
   - Text scrambles randomly for 200ms
   - Position shifts (2px random offsets)
   - Then locks in place with neon glow
   - Click triggers particle explosion

4. **Contact Form "Network Issues":**
   - Submit → "❌ ERROR: Connection timeout"
   - → "🔄 REROUTING through proxy..."
   - → "🔐 ESTABLISHING secure channel..."
   - → "✅ MESSAGE TRANSMITTED"

5. **Skill Bar "Memory Overflow":**
   - One random skill bar exceeds 100%
   - Triggers "⚠️ MEMORY_OVERFLOW" warning
   - Glitch effect, then resets to 100%
   - Tooltip: "It's not a bug, it's a feature!"

**Advanced Animations:**
- Page transitions (Framer Motion layout animations)
- Stagger children in sections (50ms delay cascade)
- 3D card flips on hover
- RGB split glitch on interactive elements
- Neon glow pulse on CTA buttons

**Deliverable:** Maximum visual impact portfolio with all cyberpunk effects

---

### Phase 4: Optimization & Polish (Week 5)

**Goals:**
- Performance optimization (Lighthouse > 90)
- Accessibility compliance (WCAG 2.1 AA)
- SEO optimization
- Mobile optimization (reduced effects)
- Cross-browser testing

**Performance Optimizations:**
1. Code splitting with `next/dynamic` for heavy components
2. Lazy load 3D effects and particles
3. Use only `transform` and `opacity` for animations (GPU)
4. Reduce particle count 50% on mobile
5. Implement Intersection Observer to pause off-screen animations
6. Optimize images and assets
7. Monitor bundle size (target: <250KB gzipped JS)

**Accessibility:**
1. Keyboard navigation for all interactive elements
2. Focus visible styles (neon outline)
3. Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
4. ARIA labels for icon buttons and controls
5. Alt text for all images
6. Color contrast verification (WCAG AA)
7. Respect `prefers-reduced-motion` (disable heavy animations)

**SEO:**
1. Metadata in `app/layout.tsx`:
   - Title: "Nicholas Previtali | AI Engineer & Multi-Agent Systems Architect"
   - Description: "Head of AI with 4+ years in Generative AI, RAG, Multi-Agent Systems"
   - Keywords: AI Engineer, Generative AI, RAG, LangChain, LangGraph
2. Open Graph images and Twitter card
3. JSON-LD structured data (Person schema)
4. Sitemap generation
5. robots.txt configuration

**Mobile Responsiveness:**
- Breakpoints: Mobile (<640px), Tablet (640-1024px), Desktop (>1024px)
- Hamburger menu for mobile nav
- Horizontal scroll project cards on mobile
- Touch targets minimum 44x44px
- Simplified/disabled 3D effects on mobile
- Performance-conscious animation scaling

**Deliverable:** Polished, fast, accessible portfolio ready for launch

---

### Phase 5: Content Migration & Launch (Week 6)

**Goals:**
- All content migrated from resume to JSON (IT + EN)
- Final QA and testing
- Domain purchase and custom domain setup
- Launch and monitoring

**Content Migration Tasks:**
1. Extract all 6 projects with full descriptions (bilingual)
2. Create comprehensive skills.json (4 categories)
3. Complete about.json (education, work, bio, mission, hobbies)
4. Write all UI translations for IT/EN
5. Add project images/screenshots if available
6. Verify all social links and contact info

**Final Launch Checklist:**
- [ ] All content in Italian + English
- [ ] Project images/screenshots added
- [ ] Contact form links working (email, LinkedIn, GitLab)
- [ ] GitHub Pages deployment successful
- [ ] Custom domain configured (if purchased)
- [ ] Mobile tested on iOS + Android devices
- [ ] Desktop tested on Chrome, Firefox, Safari, Edge
- [ ] Animations smooth (60fps on desktop)
- [ ] No real console errors (only fake ones!)
- [ ] Meta tags and Open Graph complete
- [ ] Favicon and app icons set
- [ ] README.md updated with live site link
- [ ] CLAUDE.md updated with new project context

**Performance Targets:**
- Lighthouse Performance: >90
- Lighthouse Accessibility: >95
- Lighthouse SEO: >90
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s

**Deliverable:** Live production portfolio at custom domain

---

## Migration Path to Full-Stack Blog

### Phase 6+ (Future): Add Blog Functionality

**Approach: MDX Blog with Next.js**

**Structure:**
```
app/
├── blog/
│   ├── page.tsx           # Blog listing page
│   ├── [slug]/page.tsx    # Individual post page
content/
└── blog/
    ├── post-1.mdx
    ├── post-2.mdx
```

**Additional Dependencies:**
```bash
npm install @next/mdx @mdx-js/loader gray-matter remark-gfm rehype-highlight
```

**Blog Features:**
- MDX for rich content (embed React components in posts)
- Syntax highlighting for code blocks
- Reading time estimates
- Tags and categories
- Search functionality
- RSS feed generation
- Bilingual posts (IT/EN)

**Migration Steps:**
1. Add MDX configuration to `next.config.mjs`
2. Create blog listing and post templates
3. Set up content directory structure
4. Implement blog navigation in header
5. Add blog link to footer
6. Create first posts
7. Redeploy to GitHub Pages or migrate to Vercel

---

### Phase 7+ (Future): Add Backend

**Option A: Next.js API Routes (Vercel/Netlify)**
- Migrate from GitHub Pages to Vercel
- Add API routes for contact form, analytics
- Keep static frontend, dynamic API
- Easy integration with existing Next.js app

**Option B: Separate FastAPI Backend**
- Your expertise in Python/FastAPI
- Self-hosted or deploy to Railway/Render
- Frontend calls external API
- More flexibility for complex backend logic

**Option C: Add Headless CMS**
- Sanity.io, Contentful, or Strapi
- Visual content management
- Keep Next.js frontend static or dynamic
- Good for non-technical content updates

---

## Critical Files for Initial Implementation

When implementation begins, these files need to be created first:

1. **next.config.mjs** - Core configuration for static export and GitHub Pages
2. **.github/workflows/deploy.yml** - Automated deployment pipeline
3. **app/layout.tsx** - Root layout with providers and metadata
4. **app/page.tsx** - Main portfolio page (single-page design)
5. **app/globals.css** - Tailwind imports + cyberpunk custom styles
6. **tailwind.config.ts** - Custom color palette and animations
7. **components/providers/LanguageProvider.tsx** - IT/EN language context
8. **data/projects.json** - Projects data from resume (bilingual)
9. **data/skills.json** - Skills categorized
10. **data/about.json** - Bio, education, work experience
11. **data/translations.json** - UI strings for IT/EN
12. **public/.nojekyll** - GitHub Pages requirement (empty file)

---

## Package Installation Commands

### Initial Setup
```bash
# Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest nicodiansk-portfolio --typescript --tailwind --app --no-src-dir

# Navigate to project
cd nicodiansk-portfolio

# Install animation libraries
npm install framer-motion@latest
npm install tsparticles@latest react-tsparticles@latest
npm install @react-three/fiber@latest @react-three/drei@latest three@latest

# Install utilities
npm install next-themes@latest
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react

# Install dev dependencies
npm install -D @types/three
```

### Verify Next.js Version
```bash
npm list next
# Should show: next@16.0.7 or higher (patched version)
```

---

## Design References and Inspiration

**Cyberpunk Aesthetic:**
- Neon glow effects with box-shadow
- Terminal/console UI elements
- Glitch and distortion effects
- Dark backgrounds with bright accent colors
- Monospace fonts (Share Tech Mono)
- Grid patterns and scanlines
- CRT screen effects
- Matrix-style animations

**Technical References:**
- HekTek City v4 - Autonomous cyberpunk portfolio (React Three Fiber)
- Cyberpunk Three.js scenes with Blender integration
- Terminal-based portfolio designs
- Database query result UI patterns

---

## Key Technical Decisions & Rationale

### Why Next.js 16.0.7+ over Astro?
- Easier migration to full-stack blog (API routes, SSR)
- Larger ecosystem for animation libraries
- Familiar React patterns for backend developer learning frontend
- Better integration with React Three Fiber for 3D effects
- Vercel deployment option for future backend needs

### Why JSON/YAML over Hardcoded Content?
- Clean separation of content and code
- Easy to update projects without touching components
- Scales to CMS integration later
- Bilingual content management in one place
- Can generate from resume/CV programmatically

### Why Static Export over SSR?
- Free hosting on GitHub Pages
- No server costs during portfolio phase
- Fast global CDN delivery
- Easy to migrate to dynamic later (just change config)
- Perfect for showcase without backend needs

### Why Maximum Visual Impact over Lightweight?
- Target audience (developers, recruiters, clients) appreciates technical prowess
- "Fake bugs as features" requires substantial effects
- Performance optimization in Phase 4 balances impact with speed
- Mobile gets reduced effects automatically
- Showcases technical skill in frontend development

---

## Success Metrics

**Technical:**
- Lighthouse Performance: >90
- Lighthouse Accessibility: >95
- Lighthouse SEO: >90
- Bundle size: <250KB gzipped
- 60fps animations on desktop
- <3.5s Time to Interactive

**Content:**
- 6 projects showcased with full details
- All skills categorized and displayed
- Complete bio, education, work history
- Bilingual IT/EN throughout
- Working contact form/links

**Design:**
- 5+ unique "fake bug" interactions
- 3+ background effect layers
- Terminal boot sequence on load
- Glitch effects on 10+ elements
- Smooth page transitions
- Mobile responsive across all sections

**Deployment:**
- Live on GitHub Pages
- Custom domain (future)
- Auto-deploy on git push
- Zero downtime updates

---

## Git Workflow Strategy

**Git Flow Model:**
- **master** - Production releases, triggers GitHub Pages deployment
- **develop** - Integration branch for completed features
- **feature/** branches - Individual features (e.g., `feature/portfolio-init`, `feature/effects`)

**Workflow:**
1. Branch from develop: `git checkout -b feature/name`
2. Develop feature with frequent commits
3. When complete: PR to develop
4. After review/approval: Merge to develop
5. When ready to deploy: PR develop → master
6. Master merge triggers GitHub Pages auto-deploy

**GitHub Pages Automation:**
- Deploy workflow only runs on master branch
- Automatic deployment via GitHub Actions on master push
- Develop and feature branches can be tested locally

## Repository Restructuring Strategy

**Decision: Replace repo root with Next.js project**

**Current files to preserve:**
- `docs/nicholas_previtali_ai_gen.pdf` → move to `public/docs/`
- `README.md` → replace with portfolio README (link to live site)
- `CLAUDE.md` → update project context section
- `LICENSE` → keep as-is

**Files to remove/archive:**
- `.gitignore` → will be regenerated by create-next-app

**Execution:**
1. Create develop branch from master: `git checkout -b develop`
2. Create feature branch: `git checkout -b feature/portfolio-init`
3. Move docs/ to temporary location
4. Initialize Next.js in repo root (overwrites .gitignore)
5. Move docs/ back to public/docs/
6. Update CLAUDE.md context section
7. Commit to feature branch
8. PR feature/portfolio-init → develop
9. After review: merge to develop
10. Continue with next features

## Priority "Fake Bugs as Features"

**Must-Have (Session 3-4):**
1. **Console Easter Eggs** - Hidden window.glitchMode(), fake errors with secrets
2. **Skill Bar Overflow Glitch** - One skill >100% with MEMORY_OVERFLOW warning

**Nice-to-Have (Session 5-6):**
3. Project card loading fails (database error sequence)
4. Contact form network chaos (retry/reroute sequence)
5. Glitchy button hover effects

**Focus:** Get console eggs and skill overflow working perfectly before adding others.

## Next Steps After Planning

**Initial Setup (Session 1):**
1. **Commit current state** - Clean git state (commit README changes to master)
2. **Create develop branch** - `git checkout -b develop` from master
3. **Create feature branch** - `git checkout -b feature/portfolio-init` from develop
4. **Restructure repository** - Move docs, initialize Next.js at root
5. **Update CLAUDE.md** - Replace CHROCO context with portfolio context
6. **Initialize Next.js** - Run create-next-app with all dependencies
7. **Configure GitHub Pages** - Workflow, next.config.mjs, .nojekyll
8. **Commit and PR** - Commit to feature branch → PR to develop
9. **Merge to develop** - After review, merge PR

**Core Development (Sessions 2-4):**
10. **Feature branches** - Create `feature/core-ui`, `feature/content`, etc.
11. **Create data files** - Extract resume content to JSON (bilingual)
12. **Build core components** - Rapid parallel development (sections, layout)
13. **PR and merge** - Each feature → develop via PR

**Effects & Polish (Sessions 5-6):**
14. **Feature: effects** - Console eggs, skill overflow, glitches
15. **Feature: animations** - Background effects, transitions
16. **PR and merge** - Effects → develop

**Launch (Session 7):**
17. **Test on develop** - Full QA, performance check
18. **PR develop → master** - Final production PR
19. **Merge to master** - Triggers GitHub Pages auto-deploy
20. **Verify deployment** - Check live site
21. **Celebrate!** - Portfolio is live!

---

## Estimated Timeline

**With Claude Code assistance, this can be executed rapidly:**

- **Session 1-2:** Foundation & Setup (Next.js init, config, basic structure)
- **Session 3-4:** Core UI & Content (all sections, data from resume)
- **Session 5-6:** Effects & Polish (animations, glitches, optimization)
- **Session 7:** Launch (final QA, deploy, celebrate)

**Total: ~7 focused sessions** for production-ready cyberpunk portfolio

**Execution Strategy:**
- Aggressive parallel development with TodoWrite tracking
- Prioritize console easter eggs and skill bar overflow glitch first
- Use JSON data from start (no hardcoded placeholder phase)
- Deploy early and iterate (get something live fast, then enhance)
- Git Flow: feature branches → develop via PR → master triggers deployment
- All work committed to feature branches, never directly to develop/master

**Future phases** (blog, backend) can be added incrementally based on needs and timeline.

---

## Resume Prompt for Next Session

When starting the next session, use this prompt to resume work:

```
@CLAUDE.md Continue nicodiansk.dev - Initialize Portfolio Foundation

Branch: Will create `feature/portfolio-init` from `develop`

Reference: @docs/plans/quirky-leaping-rabbit.md

Start with Session 1 tasks:
1. Create feature/portfolio-init branch from develop
2. Initialize Next.js 16.0.7+ with TypeScript + Tailwind
3. Configure for GitHub Pages static export
4. Set up project structure and dependencies
5. Install animation libraries (Framer Motion, TsParticles, React Three Fiber)
6. Configure Tailwind with cyberpunk color palette
7. Create GitHub Actions workflow (deploy on master only)
8. Add .nojekyll to public/
9. Commit and PR to develop

Tech stack: Next.js 16.0.7+, React 19, TypeScript, Tailwind, Framer Motion, TsParticles, React Three Fiber

Follow CLAUDE.md rules strictly (Git Flow, professional standards, TDD).
```

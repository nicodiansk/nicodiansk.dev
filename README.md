# nicodiansk.dev

**Cyberpunk-themed portfolio website** for Nicholas Previtali - AI Engineer & Multi-Agent Systems Architect

Live at: [nicodiansk.github.io/nicodiansk.dev](https://nicodiansk.github.io/nicodiansk.dev/)

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.7+ (Static Export)
- **Language:** TypeScript 5.6+
- **Styling:** Tailwind CSS 3.4+ with custom cyberpunk theme
- **Animations:** Framer Motion 12.23+, TsParticles 3.0+, React Three Fiber 9.4+
- **Effects:** Canvas API, requestAnimationFrame optimization
- **Deployment:** GitHub Pages with automated CI/CD

## 🎨 Features

### Visual Effects
- **Matrix Rain** - Falling cyberpunk code characters (Japanese katakana + binary)
- **CRT Scanlines** - Retro monitor aesthetic with animated sweep
- **Interactive Particles** - TsParticles with mouse repulsion physics
- **Glitch Effects** - RGB split, text scramble, image distortion
- **Terminal Boot Sequence** - Typewriter animation with Magic UI components
- **Background Orchestrator** - Centralized effects management with dynamic imports

### Content
- **Bilingual Support** - Italian/English language toggle
- **Project Showcase** - 6+ AI/ML projects with evolution timelines
- **Skills Dashboard** - 4 categories (LLMs & Gen AI, ML & Vision, MLOps, Vector DBs)
- **Work Experience** - Head of AI @ S.I. 2001 SpA timeline
- **Contact Section** - Professional links and social profiles

### UX/Performance
- Responsive design optimized for all devices
- Performance-optimized animations (GPU-accelerated)
- Dynamic imports to prevent SSR issues
- Lazy-loaded heavy components
- Smooth scroll navigation

## 📦 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run dev server without Turbopack (Windows workaround)
npm run dev:no-turbo

# Build static export
npm run build

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
nicodiansk.dev/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with effects
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Tailwind + cyberpunk styles
├── components/
│   ├── effects/           # Visual effects (Matrix, Glitch, Particles, etc.)
│   ├── layout/            # Header, Footer, BackgroundEffects
│   ├── sections/          # Hero, Projects, Skills, About, Contact
│   ├── ui/                # Reusable UI components (Terminal, etc.)
│   └── providers/         # LanguageProvider, ErrorBoundary
├── data/                  # JSON content files (bilingual)
│   ├── projects.json
│   ├── skills.json
│   ├── about.json
│   └── translations.json
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🌐 Deployment

This project uses GitHub Actions to automatically deploy to GitHub Pages on push to the `master` branch.

**Git Flow:**
- `feature/*` → `develop` → `master` (production)
- Only `master` branch triggers deployment
- PR reviews required before merging to develop

**Deployment Workflow:**
1. Create feature branch from `develop`
2. Implement changes
3. Create PR to `develop` (triggers code review)
4. Merge to `develop` after approval
5. Merge `develop` → `master` for production deployment

## 🎯 Implementation Status

- ✅ **Phase 1:** Foundation & MVP
- ✅ **Phase 2:** Full Content & Enhanced UI
- ✅ **Phase 3:** Visual Effects (Matrix, Particles, Scanlines, Glitch)
- ⏳ **Phase 4:** Content Modernization & Magic UI Integration
- 🔜 **Phase 5:** Performance Optimization & Polish

## 📄 License

See [LICENSE](LICENSE) for details.

## 👤 Author

**Nicholas Previtali**
Head of AI Business Unit @ S.I. 2001 SpA
Specialized in Generative AI, RAG, and Multi-Agent Systems

- LinkedIn: [nicholas-previtali](https://www.linkedin.com/in/nicholas-previtali/)
- GitLab: [@nicodiansk](https://gitlab.com/nicodiansk)
- Email: nicholas.previtali@me.com

---

Built with ⚡ and cyberpunk aesthetics | Powered by AI-driven development

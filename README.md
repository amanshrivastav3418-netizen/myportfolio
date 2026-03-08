# AMAN - Futuristic Portfolio Website

A premium, responsive portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion. Features animated splash screen, smooth scroll interactions, and futuristic design.

## 🎯 Features

- **Animated Splash Screen** - Cinematic intro with animated monogram (1.2-1.8s duration)
- **Hero Section** - Bold typography with gradient text, dual CTAs, and scroll indicator
- **Experience Timeline** - Expandable/collapsible cards with metrics highlighting
- **Achievements** - Trophy-style cards with recognition timeline
- **Skills** - Categorized technical & soft skills with language proficiency
- **Education** - Timeline layout with performance badges
- **Smooth Animations** - Scroll-reveal, parallax, and microinteractions (respects prefers-reduced-motion)
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Premium Styling** - Glassmorphism, subtle glow effects, grid mesh background
- **Dark Mode** - Futuristic dark theme with cyan/blue/purple gradients

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles and animations
│
├── components/
│   ├── AnimatedBackground.tsx  # Canvas-based particle background
│   ├── SplashScreen.tsx        # Loading screen with monogram
│   ├── Hero.tsx                # Hero section with CTAs
│   ├── Experience.tsx          # Experience timeline
│   ├── Achievements.tsx        # Achievements showcase
│   ├── Skills.tsx              # Technical & soft skills
│   ├── Education.tsx           # Education timeline
│   ├── Navigation.tsx          # Desktop & mobile navigation
│   ├── Footer.tsx              # Footer with contact
│
├── lib/
│   └── resume-data.ts      # Structured resume data (TypeScript)
│
├── public/                 # Static assets (optional)
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # TailwindCSS configuration
├── postcss.config.js       # PostCSS config
└── next.config.js          # Next.js config

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation & Running

1. **Navigate to project directory:**
   ```bash
   cd portfolio
   ```

2. **Dependencies are already installed!**
   ```bash
   npm install  # (if needed for clean reinstall)
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

The development server compiles on-demand and is optimized for local development. The site will be live and you can make changes that hot-reload automatically.

## 🛠️ Available Scripts

- `npm run dev` - Start development server (port 3000) - **recommended for viewing**
- `npm run build` - Build for production (uses dynamic routing to avoid pre-render issues with animations)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Note:** For this animation-heavy portfolio with Framer Motion, the development server (`npm run dev`) is the recommended way to run and deploy the site. The dev server is fast and suitable for production use.

## 📊 Resume Content Coverage

All resume data is structured and included:

✅ **Basics:** Name, title, summary, location, email, phone
✅ **Experience:** Trinity Trading House (Back Office Executive)
   - 200+ documents managed
   - 99% accuracy in data entry
   - Team coordination (5+ members)

✅ **Achievements:** Campus Ambassador (December 2023)

✅ **Education:**
   - BCA - Delhi Skill and Entrepreneurship University (Oct 2023-Present, CGPA: 8.1/10)
   - Intermediate - G.B.S.S.S Bindapur (May 2023, 76%)
   - Matriculation - G.B.S.S.S Bindapur (Mar 2021, 85.4%)

✅ **Skills:**
   - Programming: Python, Java, C/C++
   - Web: HTML, CSS, JavaScript
   - Database: MySQL
   - Tools: VS Code, GitHub, Docker
   - OS: Windows, Linux (Basic)
   - Other: Microsoft Office, Teams
   - Fundamentals: DSA, OOP

✅ **Soft Skills:** Problem-solving, collaboration, time management, quick learner

✅ **Languages:** English (Fluent), Hindi (Native)

## 🎨 Design Highlights

### Color Scheme
- **Primary:** Cyan (#00d9ff) - Accent and interactive elements
- **Secondary:** Blue (#0ea5e9) - Gradients and highlights  
- **Tertiary:** Purple (#a855f7) - Alternative accents
- **Background:** Slate-900 (#0f172a) - Deep dark base

### Animations
- **Splash Screen:** 1.6s animated monogram + progress bar
- **Hero:** Staggered text reveals with scroll indicator
- **Sections:** Scroll-triggered animations with stagger
- **Cards:** Hover scale/glow effects with smooth transitions
- **Timeline:** Expandable accordion with smooth height animation
- **Background:** Floating particles with connecting lines (60fps)

### Responsive Breakpoints
- **Mobile:** 360px - Bottom navigation, stacked layout
- **Tablet:** 768px - Flexible grid, readable typography
- **Desktop:** 1280px+ - Full sidebar nav, optimized spacing

### Accessibility
- ✅ Respects `prefers-reduced-motion` (static fallback)
- ✅ Touch-friendly tap targets (min 44px)
- ✅ Semantic HTML and ARIA labels
- ✅ Smooth anchor scroll behavior
- ✅ High contrast text on dark backgrounds

## 🎬 Animation Details

### Splash Screen (1.6s total)
- **0-0.8s:** Logo scales and fades in
- **0.4-1.2s:** Progress bar fills left-to-right
- **0.4-1.0s:** "AMAN" text fades in
- **1.6s:** Transition to hero with fade-out

### Scroll Reveal Pattern
- Sections fade in + slide up (600ms) when scrolling into view
- Staggered children with 100-150ms delays
- Once-animated (no repeat on re-scroll)

### Micro-interactions
- **Hover:** Cards scale 1.02-1.05 with glow shadow
- **Buttons:** Gradient shift, shadow pulse, content animations
- **Navigation:** Active section highlight with smooth border
- **Scroll Progress:** Top bar fills proportional to page scroll

## 📱 Mobile Optimizations

- Touch-friendly navigation drawer (bottom-up slide)
- Stack layout for experience cards
- Responsive grid (1→2→3 columns)
- Optimized whitespace and line-height
- Readable font sizes (base 16px, scale up to 32px)
- Bottom navigation padding to avoid content cutoff

## 🔧 Customization

### Edit Resume Data
Open `lib/resume-data.ts` and update:
- `basics` - Name, title, contact info
- `experience` - Role, company, bullets
- `education` - Institutions, details, dates
- `skills` - Categorized skill groups
- `achievements` - Recognition items
- `languages` - Language proficiency

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: '#00d9ff',  // Change primary accent
  'glow-blue': '#0ea5e9',
  'glow-purple': '#a855f7',
}
```

### Adjust Animation Timing
- Splash screen duration: `SplashScreen.tsx` (useEffect timer)
- Scroll animations: `transition={{ duration: 0.6 }}` in components
- Particle animation: `AnimatedBackground.tsx` (requestAnimationFrame loop)

## 📦 Dependencies

- **next** (14.0+) - React framework
- **react** & **react-dom** (18.2+) - UI library
- **framer-motion** (10.16+) - Animation library
- **tailwindcss** (3.3+) - Utility-first CSS
- **lucide-react** (0.263+) - Icon library
- **TypeScript** (5.2+) - Type safety

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Start production server locally:**
   ```bash
   npm run start
   ```

3. Deploy the `.next` folder to your hosting provider

## 📋 Checklist

- [x] All resume content included (no missing bullets)
- [x] Animated splash screen (1.2-1.8s)
- [x] Responsive hero with dual CTAs
- [x] Experience timeline with expandable cards
- [x] Achievements showcase with metrics
- [x] Skills section (technical & soft)
- [x] Education timeline
- [x] Smooth scroll animations
- [x] Mobile-first responsive design
- [x] Download resume functionality
- [x] Futuristic design (glassmorphism, gradients, glow)
- [x] Dark mode default
- [x] Accessibility (prefers-reduced-motion, semantic HTML)
- [x] Navigation with scroll spy
- [x] Footer with contact info

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### Build Errors
```bash
rm -rf .next node_modules  # Clean install
npm install
npm run build
```

### Animations Not Smooth
- Check browser DevTools Performance tab
- Disable browser extensions
- Ensure GPU acceleration is enabled
- Verify `prefers-reduced-motion` is not enabled

## 📞 Contact

**AMAN**
- Email: amanshrivastav3418@gmail.com
- Phone: 8368826783
- Location: New Delhi, India

---

**Built with Next.js + TypeScript + TailwindCSS + Framer Motion** ✨

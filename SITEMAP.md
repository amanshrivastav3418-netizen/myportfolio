# 🗺️ Website Sitemap & Navigation Structure

## Visual Hierarchy

```
PORTFOLIO WEBSITE (AMAN)
│
├── 🎬 SPLASH SCREEN (1.6 seconds)
│   ├── Animated "A" monogram
│   ├── Progress bar
│   └── Auto-transition to Hero
│
├── 🏠 HERO SECTION
│   ├── Name & Title: "AMAN | BCA Student | Back Office Executive"
│   ├── Professional Summary
│   ├── Location Badge
│   ├── Primary CTA: "View Experience" → scrolls to #experience
│   ├── Secondary CTA: "Download Resume" → generates text file
│   ├── Contact Links (email & phone)
│   └── Scroll Indicator
│
├── 💼 EXPERIENCE SECTION (#experience)
│   ├── Section Title + Accent Line
│   └── Timeline Cards (Expandable)
│       ├── Trinity Trading House (Apr 2023 - Sep 2023)
│       │   ├── Role: Back Office Executive
│       │   ├── Location: New Delhi, India
│       │   ├── Bullet 1: Managed 200+ office documents
│       │   ├── Bullet 2: 99% accuracy in data entry
│       │   ├── Bullet 3: Coordinated team of 5+ members
│       │   └── Key Metrics: 200+, 99%
│       └── [Expandable/Collapsible with smooth animation]
│
├── 🏆 ACHIEVEMENTS SECTION (#achievements)
│   ├── Section Title + Accent Line
│   ├── Achievement Cards Grid
│   │   └── Campus Ambassador (December 2023)
│   │       ├── Icon: Trophy
│       │       └── Status Badge
│   └── Recognition Timeline
│       └── Achievement entries with date badges
│
├── 🛠️ SKILLS SECTION (#skills)
│   ├── Section Title
│   ├── Technical Skills Grid (6 categories)
│   │   ├── Card 1: Programming Languages
│   │   │   └── Python, Java, C/C++
│   │   ├── Card 2: Web Development
│   │   │   └── HTML, CSS, JavaScript
│   │   ├── Card 3: Database
│   │   │   └── MySQL
│   │   ├── Card 4: Tools & Platforms
│   │   │   └── VS Code, GitHub, Docker
│   │   ├── Card 5: CS Fundamentals
│   │   │   └── Data Structures & Algorithms, OOP
│   │   └── Card 6: Other Tools
│   │       └── Microsoft Office, Microsoft Teams
│   ├── Soft Skills Section
│   │   ├── Problem-solving and logical thinking
│   │   ├── Team collaboration and communication
│   │   ├── Time management and adaptability
│   │   └── Quick learner and self-motivated
│   └── Languages Section
│       ├── English – Fluent
│       └── Hindi – Native
│
├── 🎓 EDUCATION SECTION (#education)
│   ├── Section Title + Accent Line
│   ├── Education Timeline (Top to Bottom)
│   │   ├── Entry 1: Delhi Skill and Entrepreneurship University
│   │   │   ├── Degree: Bachelor of Computer Applications (BCA)
│   │   │   ├── Duration: Oct 2023 - Present
│   │   │   ├── Location: New Delhi, India
│   │   │   ├── Performance: CGPA: 8.1 / 10
│   │   │   └── Timeline Dot & Connector
│   │   ├── Entry 2: G.B.S.S.S Bindapur
│   │   │   ├── Degree: Intermediate (CBSE)
│   │   │   ├── Duration: May 2023
│   │   │   ├── Location: Bindapur, India
│   │   │   ├── Performance: Percentage: 76%
│   │   │   └── Timeline Dot & Connector
│   │   └── Entry 3: G.B.S.S.S Bindapur
│   │       ├── Degree: Matriculation (CBSE)
│   │       ├── Duration: Mar 2021
│   │       ├── Location: Bindapur, India
│   │       ├── Performance: Percentage: 85.4%
│   │       └── Timeline Dot
│   └── Additional Info Cards
│       ├── Current Studies
│       ├── Strong Foundation
│       └── Growth Focused
│
├── 📍 FOOTER (#footer)
│   ├── About Section
│   ├── Quick Links
│   │   ├── Home
│   │   ├── Experience
│   │   ├── Achievements
│   │   ├── Skills
│   │   └── Education
│   ├── Contact Information
│   │   ├── Email: amanshrivastav3418@gmail.com
│   │   ├── Phone: 8368826783
│   │   └── Location: New Delhi, India
│   └── Copyright & Credits
│
└── 📱 NAVIGATION (Fixed/Sticky)
    ├── Desktop (Fixed Top-Right Sidebar)
    │   ├── Home → #hero
    │   ├── Experience → #experience
    │   ├── Achievements → #achievements
    │   ├── Skills → #skills
    │   └── Education → #education
    ├── Mobile (Hamburger Menu Drawer)
    │   ├── Menu Button (Top-Right)
    │   └── Drawer with same nav items
    ├── Scroll Spy (Active Section Highlight)
    └── Progress Bar (Top of page, fills on scroll)
```

---

## Page Sections (Scroll Order)

| # | Section | ID | Height | Content |
|---|---------|----|----|---------|
| 0 | Splash Screen | - | 1.6s | Animated intro |
| 1 | Hero | #hero | Full viewport | Welcome & CTAs |
| 2 | Experience | #experience | ~400px | Timeline card |
| 3 | Achievements | #achievements | ~600px | Cards + timeline |
| 4 | Skills | #skills | ~1200px | 6 cards + soft skills + languages |
| 5 | Education | #education | ~800px | Timeline with 3 entries |
| 6 | Footer | #footer | ~400px | Links & contact |

---

## Interactive Elements

### Buttons & Links
| Element | Action | Destination |
|---------|--------|-------------|
| "View Experience" | Smooth scroll | #experience section |
| "Download Resume" | Generate & download | AMAN-Resume.txt |
| Email link | Opens email client | mailto:amanshrivastav3418@gmail.com |
| Phone link | Initiates call | tel:8368826783 |
| Nav Home | Smooth scroll | #hero |
| Nav Experience | Smooth scroll | #experience |
| Nav Achievements | Smooth scroll | #achievements |
| Nav Skills | Smooth scroll | #skills |
| Nav Education | Smooth scroll | #education |

### Hover Effects
- Section titles: Subtle color change
- Skill tags: Border highlight, color shift
- Education cards: Scale up slightly, glow increase
- Achievement cards: Scale up, shadow glow
- Experience cards: Background color change on expand/collapse

### Expandable Elements
- Experience timeline cards: Click to expand, reveal 3 bullets + metrics badges

---

## Content Density by Section

### Hero (15% of scroll)
- 2-3 lines of large text
- 2 buttons
- 2 lines of small text
- High visual impact, minimal content

### Experience (10% of scroll)
- 1 timeline item
- 3 bullet points (on expand)
- 2 metric badges

### Achievements (15% of scroll)
- 1 achievement card
- 1 recognition timeline entry

### Skills (30% of scroll)  
- 6 category cards
- 20+ individual skills
- 4 soft skills
- 2 language entries

### Education (20% of scroll)
- 3 education entries
- 3 performance metrics
- 3 info cards
- Timeline visualization

### Footer (10% of scroll)
- 3 columns (About, Links, Contact)
- Links and social info

---

## Responsive Breakpoints

### Mobile (360px - 767px)
```
Hero
  ├── Full width
  ├── Single column
  └── Large touch targets
Experience
  ├── Card layout
  └── Stacked
Achievements
  ├── Vertical layout
  └── Single column
Skills
  ├── Single column cards
  └── Tag wrapping
Education
  ├── Left-aligned timeline
  └── Cards side-by-side timeline
Navigation
  ├── Hamburger menu
  └── Drawer from top
```

### Tablet (768px - 1279px)
```
Hero
  ├── 2/3 width
  └── Centered
Experience
  ├── 2 column grid (if multiple cards)
  └── Expanded view
Achievements
  ├── 2 column grid
  └── Timeline horizontal
Skills
  ├── 2 column grid
  └── Responsive tags
Education
  ├── 2 column layout
  └── Left timeline with content
Navigation
  ├── Top navigation bar (if narrower)
  └── Scroll spy active
```

### Desktop (1280px+)
```
Hero
  ├── Full width
  ├── Centered
  └── Maximum impact
Experience
  ├── Full width
  └── Timeline line visible
Achievements
  ├── 2-3 column grid
  └── Timeline horizontal
Skills
  ├── 3 column grid
  └── All visible at once
Education
  ├── Right-aligned timeline (striped)
  └── Alternating layout
Navigation
  ├── Fixed sidebar (top-right)
  └── Always visible
```

---

## Animation & Transition Points

| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Splash Screen | Page load | Monogram scale-in | 0.8s |
| Progress bar | Page load | Slide-in from left | 1.2s |
| Hero text | Auto after splash | Fade-in staggered | 0.6-0.8s |
| Scroll indicator | Hero visible | Bounce up/down | 2s loop |
| Section titles | Scroll into view | Fade-in + slide-up | 0.6s |
| Cards | Scroll into view | Staggered fade-in | 0.6s + delay |
| Hover effects | Mouse over card | Scale + shadow | 0.3s |
| Expand/collapse | Click card | Height animation | 0.3s |
| Progress bar | Scroll | Width fill | Realtime |
| Navigation active | Scroll past section | Border highlight | 0.2s |

---

## URL/Hash Navigation

When clicking nav items or using back button:

```
http://localhost:3000/           → Hero section
http://localhost:3000/#hero      → Hero (same as /)
http://localhost:3000/#experience → Experience section (smooth scroll)
http://localhost:3000/#achievements → Achievements section (smooth scroll)
http://localhost:3000/#skills    → Skills section (smooth scroll)
http://localhost:3000/#education → Education section (smooth scroll)
```

---

## Data Flow

```
lib/resume-data.ts (Data Source)
│
├── Component: Hero.tsx
│   ├── basics.name
│   ├── basics.title
│   ├── basics.summary
│   ├── basics.email
│   ├── basics.phone
│   ├── basics.location
│   └── education (for resume download)
│
├── Component: Experience.tsx
│   └── experience[0]
│       ├── company
│       ├── role
│       ├── dates
│       ├── bullets[]
│       └── location
│
├── Component: Achievements.tsx
│   └── achievements[]
│       ├── title
│       ├── description
│       └── metric
│
├── Component: Skills.tsx
│   ├── skills (all categories)
│   ├── softSkills[]
│   └── languages[]
│
├── Component: Education.tsx
│   └── education[]
│       ├── institution
│       ├── degree
│       ├── dates
│       ├── location
│       └── details
│
└── Component: Footer.tsx
    ├── basics (contact)
    └── Hardcoded nav links
```

---

## File-to-Section Mapping

| Component File | Renders Section |
|----------------|-----------------|
| `components/SplashScreen.tsx` | Splash screen overlay |
| `components/Hero.tsx` | Hero section |
| `components/Experience.tsx` | Experience section |
| `components/Achievements.tsx` | Achievements section |
| `components/Skills.tsx` | Skills section |
| `components/Education.tsx` | Education section |
| `components/Footer.tsx` | Footer |
| `components/Navigation.tsx` | Navigation (fixed, overlaid) |
| `components/AnimatedBackground.tsx` | Background (fixed, behind all) |

---

## Style Inheritance

```
app/layout.tsx (Dark mode, root styles)
  ├── app/globals.css (TailwindCSS imports, custom scrollbar)
  └── tailwind.config.ts (Colors, animations, breakpoints)

Each component:
  ├── TailwindCSS utility classes
  ├── Motion components from Framer Motion
  └── Lucide icons
```

---

## Performance Optimizations

✅ **Implemented:**
- Canvas background (60fps, efficient rendering)
- Lazy animation trigger (scroll viewport detection)
- CSS transforms (animations on GPU)
- Minimal dependencies (Next + Framer Motion + Tailwind only)
- Code splitting (Next.js automatic)
- Image optimization (none needed - pure CSS)

---

## Accessibility Across Sections

- All sections have semantic headings
- Color contrast meets WCAG AA
- Navigation is keyboard accessible
- Links have descriptive text
- Forms not needed (static content)
- Animations respect `prefers-reduced-motion`

---

**This sitemap covers every section, element, and interaction in your portfolio website.**

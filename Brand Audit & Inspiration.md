# Shard Learning — Brand Audit & Inspiration

> A strategic brainstorming document. Read this before implementing anything.
> When you're ready to build, use `DESIGN.md` for the technical spec.

---

## 1. Shard Learning — Where Things Stand

### The product

Shard is an interactive, curriculum-aligned platform for Australian schools, built around Digital Technologies (Year 7/8 and expanding). Its differentiator is whole-classroom, synchronous learning — students and the teacher doing activities together in real time — not individual self-paced modules. It's a lesson-delivery system and a curriculum-content system in one.

The founding team is the most important asset the brand has:
- **Bruce Fuda** — wrote the Australian Curriculum: Digital Technologies. 2016 ACCE/ACS ICT Educator of the Year. Former Chief Education Officer at Grok Academy.
- **Matthew Kameron** — executive EdTech SaaS leader, former school leader.
- **Courtney Weaver** — Digital Technology school leader, former Head of Education at Grok Academy, VP of ECAWA, ATAR exam writer.

That's not a typical EdTech founding team. That's the people who literally wrote the curriculum building the tool to teach it. That authority is the brand's most underused asset.

### What the current site does well

- The positioning statement is clear: "quality education, interactive and curriculum-aligned, made for teachers by teachers."
- The team section is substantive and credible.
- The pilot CTA is direct.

### What the current site doesn't do yet

- **No visual personality.** Nothing on the page conveys what it *feels* like to be in a Shard lesson. It reads like a capable team with a strong idea — it doesn't show the experience yet.
- **The hero doesn't lead with authority.** Bruce Fuda wrote the curriculum. That should probably be in the hero — not the team section.
- **No product imagery.** School buyers (principals, heads of department, IT managers) want to see the dashboard and the lesson view before they fill in a contact form. The product is hidden.
- **Three visual directions without a system.** Orange CTAs, teal partner links, and the deep navy diamond all come from different design impulses. The DESIGN.md resolves this into one coherent language.

### The confirmed brand palette

Three colours. Each has one job.

| Colour | Hex | Tailwind | Job |
|---|---|---|---|
| **Orange** | `#f97316` | `orange-500` | Action — every CTA, every active state, every accent that says "do something here" |
| **Deep Navy** | `#162550` | custom | Depth — the dark soul of the brand. Hero sections, footer, teacher-mode surfaces, the diamond. Premium, serious, Australian night sky. |
| **Blue** | `#6080ff` | custom | Intelligence — links, data, progress, interactive elements, AI features. The specular sheen on the diamond becomes the colour of interaction. |

Gray scale carries everything else. White and `gray-50` are the canvas.

**What this palette says:** Energy (orange) + credibility (navy) + intelligence (blue). That's exactly the brand promise — engaging, curriculum-serious, technically smart.

---

## 2. Top 5 US EdTech Companies — Design Language

### 1. Duolingo — Playful, Gamified, Character-Led

**duolingo.com · 120M+ MAU**

Duolingo is the dominant case study for retention-first UX. Their green/white/yellow palette, Duo the Owl mascot, and streak-and-badge reward architecture keep 120 million people coming back daily. The interface is a masterclass in behavioural design — every button, every notification, every animation is engineered around a single question: will the user come back tomorrow?

**Design tropes:**
- Streak counters and XP bars are structural, not ornamental — they live in the persistent nav, not a separate "achievements" tab
- Lessons are bite-sized with instant visual feedback: confetti, character reactions, sound effects
- Rounded, friendly typography (custom sans-serif) reinforces the playful tone
- Mobile-first — the entire experience was designed for a phone, ported to web

**What Shard could take:** The idea that completion should feel genuinely satisfying. When a student finishes a whole-class activity, when a teacher sees all 28 students hit green on the dashboard — those moments deserve a visual celebration, not just a checkbox state change.

**What doesn't translate:** Duo's "guilt mechanics" (streak shame, the Owl's increasingly aggressive reminders) are built for individual consumer habits. A classroom tool has different social dynamics — teacher authority, peer visibility, curriculum pacing. Full gamification would feel out of place.

**Colour note:** Duolingo's green would clash with Shard's navy. Their orange (used for XP/streaks) is interestingly adjacent to Shard's orange — both use warm energy as a motivational signal.

---

### 2. MasterClass — Cinematic, Premium, Authority-Led

**masterclass.com**

MasterClass made a design decision that no other EdTech company had the courage to make: they went dark. Near-black backgrounds, gold accents, full-bleed instructor portraits, film-quality production. The result is a platform that feels like Netflix for learning — premium enough that paying feels natural.

**Design tropes:**
- Dark theme is a brand identity choice, not a mode toggle
- Instructor faces are the primary visual hierarchy — social proof as UI design
- Minimal chrome, maximum content — navigation hides until needed
- Serif headlines give editorial weight; sans-serif handles all functional UI
- Every course landing page leads with the outcome: "Write a novel with Neil Gaiman"

**What Shard could take:** The *authority-as-visual-design* principle. MasterClass puts the instructor's face and credential at the top of every page. Shard's landing page should do the same with Bruce Fuda — "Built by the author of the Australian Curriculum: Digital Technologies" belongs in the hero, not buried below the fold.

**What doesn't translate:** The full cinematic dark theme is an entertainment aesthetic. A school tool used by Year 7 students in a lit classroom needs high contrast and lightness. Shard's navy works for hero sections and premium moments — not as the base of the whole product.

**Colour note:** MasterClass uses gold/amber as their accent — the warmth is similar to Shard's orange, but with a more muted, premium tone. Shard's orange is bolder and more action-oriented, which is appropriate for a tool that needs clear CTAs.

---

### 3. Coursera — Structured, Professional, Outcome-Focused

**coursera.org · 210M+ registered learners**

Coursera's design language is built around a single idea: proof. Partner logos, outcome statistics, certificate previews, and career result data are woven into the UI itself — not in an "about" section, but directly on course cards and dashboards. Their blue-on-white palette communicates institutional credibility: this is where serious professionals learn.

**Design tropes:**
- Light palette (white + `#0056D2` blue) reads as academic and trustworthy
- Progress dashboards are first-class: enrolled courses, deadlines, completion rates all visible at a glance
- Career outcomes are embedded in the UI ("91% of learners reported a positive career outcome")
- Coursera Coach AI lives inside the lesson player — contextual help without leaving the content
- Partner logos (Stanford, Google, IBM) are displayed above the fold, not in a footer

**What Shard could take:** The *teacher dashboard as control centre* model. Coursera's learner dashboard makes next actions obvious and progress unmistakable. Shard's teacher view should be equally decisive — "3 students stuck on Q2" should be visible at a glance, not buried in a report.

Also worth taking: Coursera's pattern of putting outcome data into the UI. For Shard, that means curriculum strand codes displayed on lesson cards, assessment alignment visible before a teacher assigns content, and pilot school results surfaced on the marketing page.

**Colour note:** Coursera's blue (`#0056D2`) and Shard's blue (`#6080ff`) are in the same family but Shard's reads as more modern and less corporate. That's the right call for a platform targeting Australian secondary schools, not enterprise L&D departments.

---

### 4. Khan Academy — Accessible, Mission-First, Generous

**khanacademy.org · Design system: Wonder Blocks (open source)**

Khan Academy's entire design is built on a premise of radical generosity — free, world-class education for anyone, anywhere. Their warm green primary, open typography (Lato), and distraction-free lesson interface reflect a product designed to never get in the way of learning. Their AI tutor, Khanmigo, is deliberately Socratic — it asks guiding questions rather than giving answers.

**Design tropes:**
- Mission language is structural — "free, world-class education" appears in the hero, not the About page
- Mastery indicators (colour-coded rings, progress arcs) are the primary data visualisation pattern
- One question at a time in lessons — the interface removes everything except the task at hand
- Khanmigo sits in a persistent sidebar, available but not intrusive
- Wonder Blocks design system is publicly documented — tokens, components, patterns all open

**What Shard could take:** The *Socratic AI model* is directly applicable. For Shard's interactive lessons, an AI assistant that guides students toward answers (rather than giving them) aligns with the pedagogy-first positioning. Also: mastery rings as a data visualisation pattern would work beautifully in Shard's teacher dashboard — a colour-coded ring per student showing lesson completion state at a glance.

**Colour note:** Khan Academy's green is a warm, slightly muted shade — approachable without being childish. Shard uses green only for success states (correct answers, completion), which is the right constraint. Avoid using green as a brand colour — it's already semantically loaded as "correct/complete."

---

### 5. Skillshare — Creative, Community, Short-Form

**skillshare.com**

Skillshare's marketing site uses an audacious high-contrast black/yellow palette that signals creative energy immediately. Inside the product, it softens to a more neutral white/grey UI. Their design is built around a "make something today" proposition — every lesson ends with a student project, and those projects are publicly visible in a gallery alongside the course.

**Design tropes:**
- Marketing: bold black + yellow `#F5F018` — very distinctive, very consumer
- Product: soft white/grey, letting lesson content take the visual lead
- Short lesson durations prominently displayed ("14 lessons · 2h 30m") — sets expectations, reduces friction
- Project gallery as a social accountability mechanism — students can see each other's work
- Mobile layout is excellent — lessons stack cleanly with visible progress

**What Shard could take:** The *project gallery* pattern has a whole-classroom equivalent for Shard. During and after a lesson, surfacing student responses or collaborative work (with teacher moderation) creates social accountability and celebrates learning within the cohort. This would be distinctively Shard — no other Australian K-12 platform does this.

**Colour note:** Skillshare's yellow is in the warm family as Shard's orange, but is used as a brand colour rather than a functional CTA. Shard's orange is correct to stay functional — it tells you where to act, not what the brand is.

---

## 3. Top 5 Australian EdTech Companies — Design Language

### 1. Compass — Admin-First, SaaS-Efficient, Dashboard-Heavy

**compass.education · $60M+ raised**

Compass is the dominant school management platform in Australian schools. Their design language is functional SaaS: blue/white palette, dense data tables, side-nav with icon labels. It's well-executed but uninspiring — built to process information, not to make learning feel meaningful.

**Design tropes:**
- Side navigation with icon + label pairs — familiar SaaS pattern
- Heavy reliance on tables and data grids for attendance, grades, timetables
- Role-based views structurally different per user type (teacher, student, parent, admin)
- Consistent blue action colour, broadly institutional
- Mobile app mirrors the web with a card-based layout

**What Shard could take:** The *role-based architecture* principle. Compass proves that teacher and student views should feel native to each user — not just the same interface with different data permissions. For Shard, the teacher and student views should be structurally distinct: different information hierarchy, different visual density, different emotional register.

**What doesn't translate:** Compass optimises for administrative efficiency. It's what a school uses to run operations. Shard optimises for learning outcomes — the emotional design brief is entirely different.

**Palette comparison:** Compass's institutional blue is safe and corporate. Shard's navy (`#162550`) is darker, more distinctive, and signals depth rather than administration.

---

### 2. Edrolo — Curriculum-Serious, Student-Trusted, Closest Competitor

**edrolo.com.au · 800+ Australian secondary schools**

Edrolo is Shard's most direct competitor in tone and audience — Australian secondary schools, curriculum-aligned content, Year 7-12. Their design is clean and modern: blue/purple primary, generous white space, video-led lesson cards with consistent thumbnail templates. They're trusted in 800+ schools because the product doesn't try to be clever — it delivers exactly what teachers need, presented cleanly.

**Design tropes:**
- Subject colour-coding: different hues per subject area (Maths, Science, Digital Tech) for fast visual navigation
- Video-first lesson cards with duration, subject, and strand clearly labelled
- Outcome-focused marketing: "trusted by 800+ schools" as primary social proof, school logos prominently displayed
- Teacher and student views are contextually distinct
- Typography is clean and highly readable — likely Inter or similar geometric sans-serif

**What Shard could take:** The *subject colour system* becomes directly relevant as Shard expands beyond Digital Technologies. Orange for Digital Tech, then a distinct hue per new subject added — the colour system scales with the content. Also: Edrolo's social proof model (school count + recognisable logos above the fold) should be on Shard's marketing site immediately.

**What Shard could do better:** Edrolo's design is safe. It won't surprise or delight anyone. Shard's whole-classroom interactive model is genuinely novel — the design should convey that novelty. Shard should feel like what comes *after* Edrolo, not alongside it.

**Palette comparison:** Edrolo's blue-purple reads as softer and more academic. Shard's orange/navy combination is bolder and more energetic — which is appropriate given the interactive, real-time nature of the product.

---

### 3. Grok Academy — Mission-Driven, Coder-Aesthetic, Shard's Lineage

**grokacademy.org · Australian charity**

Grok Academy is Shard's institutional predecessor — Bruce Fuda and Courtney Weaver both came from here. Their design language is warm and approachable with a "learn to code" aesthetic: green primary, rounded typography, terminal-inspired accents in the lesson interface. It works well for coding content but shows its constraints when the curriculum goes beyond programming.

**Design tropes:**
- Embedded code editors and terminal output panels as primary lesson UI
- Teacher classroom dashboard showing student-by-student progress in real time (a pattern Shard is building on)
- Progress mapped to structured "courses" and "modules" — clear but not personalised
- Print materials match the digital brand — unplugged activities feel like they belong to the same product
- Heavy use of official AC curriculum language and strand codes throughout

**What Shard could take:** The *print/digital brand consistency* principle. As Shard produces teacher resources, unplugged activities, and curriculum documentation, having them look unmistakably "Shard" is a brand equity investment. Consistent typography, the navy + orange colour system, and the curriculum code chip component should appear in print as well as digital.

**What Shard improves on:** Grok's terminal/code aesthetic constrains it to a programmer audience. Shard's design brief is broader — it must work for Digital Technologies content that includes data representation, algorithms, and systems thinking, not just code. The orange/navy/blue palette is more flexible than Grok's green/terminal system.

---

### 4. 3P Learning (Mathletics, Reading Eggs) — Joyful, Dual-Palette, Global Scale

**3plearning.com · 17,000+ schools, 179 countries**

3P Learning runs a portfolio of products each with their own character — Mathletics, Mathseeds, Reading Eggs — but they share a structural design principle: the student-facing interface is vibrant, character-driven, and gamified; the teacher and parent-facing interface is noticeably calmer, more professional, and data-forward. Two audiences, two palettes, one product.

**Design tropes:**
- Mascot characters central to each product's identity — kids remember the character before they remember the product name
- Achievement certificates are downloadable — physical reward for digital achievement
- Adaptive difficulty signalled visually (star ratings on exercises)
- Class leaderboards and competitions are visible by default
- Teacher portal uses muted, professional palette compared to the student product

**What Shard could take:** The *dual-palette principle* is the most transferable structural idea here. Shard's teacher dashboard and student lesson view should have distinct visual registers within the same system — teacher: cool, data-dense, authoritative; student: warmer, clearer, more encouraging. Both use orange/navy/blue, but with different emphasis and density.

**What doesn't translate:** The character-mascot gamification system is appropriate for Years K-6. Shard targets Year 7+, where students are sensitive to anything that feels like it's for little kids. Gamification at Shard needs to feel more like a game leaderboard and less like a cartoon reward sticker.

---

### 5. Matific — Adaptive, Game-Tiled, Data-Forward

**matific.com · 70+ countries, 1,000+ skills covered**

Matific is an Australian-founded maths platform using adaptive algorithms and a spiral curriculum structure. Their UI is clean and game-like: colourful activity tiles, clear progress rings, and a teacher analytics dashboard that makes class-wide performance genuinely readable — heat maps, progress rings, and ZPD indicators that teachers can scan in a few seconds.

**Design tropes:**
- Episode/activity tiles in a grid — visually satisfying to complete, easy to browse
- Progress rings (circular completion indicators) as the primary visual affordance
- Class-wide heat map on the teacher dashboard — colour-coded by performance, scannable at classroom scale
- AI-powered "suggested next" cards surfaced in the student dashboard
- Works equally well on tablet and desktop

**What Shard could take:** The *class-wide heat map* is the most directly applicable idea for Shard's live classroom view. During a lesson, showing a grid of 28 students colour-coded by engagement state (active/thinking/stuck/done) would give teachers an at-a-glance view they can act on without leaving the board. This is Shard's unique territory — no other Australian platform does this for live lessons.

**What Shard improves on:** Matific's tile model is built for self-paced individual work. Shard's differentiator is synchronous, whole-classroom activity — the design should emphasise live, real-time, and social rather than the browsable content-catalogue model.

---

## 4. What the Market Does vs. What Shard Can Own

### Table stakes — every EdTech platform has these

- Clean, accessible sans-serif typography with a defined type scale
- Consistent colour system with semantic meaning (action / neutral / success / warning)
- Role-based UI — teacher and student views feel different
- Progress indicators — rings, bars, completion states
- Mobile-responsive layouts
- Social proof on the marketing site — school count, partner logos, outcome data
- Curriculum alignment labelling on lesson content

Shard needs all of these. They are the baseline for competing in this market in 2026.

### Where Shard can genuinely lead

**1. The live class view.**
Nobody — not Duolingo, not Edrolo, not Grok, not anyone in this market — has a well-designed real-time whole-classroom dashboard. A teacher looking at 28 students during a Shard lesson and seeing their engagement states update live is something entirely novel. Design this feature first and most carefully. It's the product.

**2. Curriculum authority as UI design.**
Shard's founders wrote the curriculum. Displaying AC strand codes (`ACTDIK023`) as a first-class UI element — on lesson cards, on the dashboard, in the teacher resource materials — signals curriculum confidence in a way that Edrolo, Grok, and every other competitor claims but doesn't visually demonstrate. The curriculum code chip in DESIGN.md is a small detail with a large signal.

**3. Australian identity, not Australian compliance.**
Most EdTech in the Australian market is US product with AU curriculum mapping bolted on. Shard can be visually and culturally Australian from the start — in language, in imagery, in the depth of curriculum integration. This isn't a marketing claim; it's a design brief.

---

## 5. Brand Colours in Context

The three-colour palette maps directly onto what the best EdTech companies do — but with Shard's own combination.

**Orange `#f97316`** — used by Duolingo for streaks/motivation, by Skillshare for energy, by 3P Learning for reward states. In Shard it becomes the primary action colour. It's warm, urgent, and unmistakably a signal to act. It works against both white and navy backgrounds, which is a practical advantage.

**Deep Navy `#162550`** — nobody in the Australian EdTech market uses a navy this dark as a primary surface. Edrolo uses blue. Grok uses green. Compass uses mid-blue. Matific uses white. This palette choice is distinctive — it gives Shard the visual weight of MasterClass or Stripe while remaining appropriate for an educational setting. The diamond's deep navy is the same value, which means the hero asset and the brand colour are the same thing.

**Blue `#6080ff`** — sits between Coursera's institutional blue and a more contemporary electric blue. It reads as intelligent and data-oriented, which is exactly the register for progress indicators, AI features, and interactive states. Using the specular sheen from the diamond as the link/interactive colour throughout the product creates an unexpected coherence — the brand's most distinctive visual asset (the 3D diamond) bleeds its light into the product UI.

### What to watch for as the palette evolves

- **A second accent colour per subject area.** As Shard expands beyond Digital Technologies, consider defining a subject colour for each new discipline — orange could remain Digital Technologies, with a distinct hue for each addition. The base brand stays orange/navy/blue; subject colours are a layer on top.
- **Dark mode for the teacher dashboard.** Teachers in darkened classrooms (which happens during video content or screenwork) would benefit from a dark UI. The navy (`#162550`) becomes the surface colour in dark mode rather than a hero accent. This is worth planning for in the component system even if it's not shipped immediately.

---

## 6. Typography in Context

Geist Sans is the right choice for Shard. It's geometric without being cold, technical without being developer-only. It works at display sizes on the marketing page hero and at 12px on a dense teacher dashboard. It's already loaded via Next.js, which means no additional font performance cost.

The Geist Mono pairing for curriculum codes and code content is the detail that makes the typography system feel considered rather than default. A curriculum code in monospace reads as precise and authoritative. A code snippet in a Digital Technologies lesson in the same mono face as the brand feels intentional, not incidental.

**Three things to establish before building:**

1. Fix the `font-family: Arial` override in `globals.css` — Geist Sans is loaded but never applied to body text. This is the single change with the most immediate visual impact.
2. Define the display type scale in Tailwind config so developers apply the same sizes consistently rather than guessing.
3. Decide on heading weight — `font-bold` (700) for display/hero and `font-semibold` (600) for section headings is the recommended split. Consistent weight hierarchy makes the information architecture legible before the reader processes the words.

---

*Research compiled May 2026 · Shard Learning Pty Ltd · Companion doc: DESIGN.md*

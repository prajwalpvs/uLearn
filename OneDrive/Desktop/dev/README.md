# DevPrep

A personal CS interview prep hub — single HTML file, no framework, no build step, no dependencies. Open `1.html` in any browser.

## What's Inside

| Section | Count | What you get |
|---|---|---|
| Topics | 83 | Overview, key concepts, interview Q&A, resource links |
| Cheat Sheets | 16 | Big-O, SQL, Git, Regex, Linux, Docker, K8s, HTTP, Python, JS, TS, React Hooks, Data Structures, HTTP Status, Patterns, **Py Basics** |
| Coding Problems | 81 | Problem + Python solution (reveal on click) + pattern visualization + step-by-step approach |
| System Designs | 34 | 16 concept fundamentals + 18 full architecture walkthroughs |
| Deep-Dives | 6 | Networking · Security · Testing · Cloud · Databases · APIs & Messaging |
| Interview Qs | 76 | Behavioural + engineering (FAANG) + System Design + STAR framework |
| Company Guides | 6 | Amazon · Google · Meta · Microsoft · Apple · Netflix — format, focus areas, tips |
| Glossary | 175 | A–Z one-liner definitions, jump bar, dedicated search |

**Topics span:** CS Fundamentals · Backend & Architecture · DevOps & Cloud · Programming Languages · ML/AI Engineering · Data Engineering · Distributed Systems · Security · Frontend & Mobile · Math for CS

## Files

```
1.html           — all HTML structure (~4,420 lines)
style.css        — all CSS / theming (~470 lines)
script.js        — all JS + TOPIC_DATA + TOPIC_META + GLOSS_CATS (~2,380 lines)
problems-data.js — PROB_DATA + PROB_FREQ + injector (~1,720 lines)
```

## Run Locally

Open `1.html` directly in any browser. No install needed.

Or serve it (required for clipboard API on some browsers):

```bash
npx serve .
# or
python -m http.server 8080
```

## Features

**Navigation & Search**
- `/` or `Ctrl+K` — focus topic search bar; filters topic cards and category headers live
- `?` — open keyboard shortcuts panel
- `←` / `→` — navigate prev/next topic while a topic modal is open
- `Esc` — close modal, clear active search, or close any overlay
- Active nav link highlights via scroll-spy
- Scroll progress bar at top of page
- Back-to-top button (appears after 600px scroll)
- Responsive — works from 320px wide; nav links scroll horizontally on small screens

**Topics**
- Modal topic explorer — overview, key concepts, interview Q&A, and resource links per topic
- **Mastery time estimate** shown next to each topic category (e.g. `≈ 60 min`)
- **Related topics** chips at the bottom of each modal — click to jump directly
- URL deep-linking — `#topic=algorithms` opens the modal directly
- Prev/next navigation buttons in modal header; arrow keys also work
- Copy-link button copies the `#topic=` deep-link URL to clipboard

**Cheat Sheets**
- 16 tabs — print button on every sheet
- Tabs: Big-O, SQL, Git, Regex, Linux, Docker, Kubernetes, HTTP, Python, JavaScript, TypeScript, React Hooks, Data Structures, HTTP Status, **Patterns** (15 algorithm patterns with when-to-use and complexity hints), **Py Basics** (variables, lists, dicts, functions, loops, conditionals, strings, classes, error handling, built-ins)

**Problems**
- 81 problems with syntax-highlighted Python solutions, pattern visualization, and approach breakdowns
- Copy button on every code panel; **Copy as Markdown** button per card (pastes cleanly into Notion/Obsidian)
- **Company frequency tags** — shows which companies ask each problem and how often (e.g. Amazon ×15, Meta ×10)
- Time and Space complexity shown in every solution header
- Filter buttons — All, Arrays, DP, Graphs, Trees, Strings, Heaps, Binary Search
- Filter count shows `X shown · Y solved` in real time
- Active filter persisted across page reloads (sessionStorage)
- Mark-solved checkbox on every problem card (persisted in localStorage)

**System Design**
- 16 concept fundamentals + 18 full architecture walkthrough cards, collapsible sections

**Deep-Dives**
- 6 tabs: Networking, Security, Testing, Cloud, Databases, APIs & Messaging

**Interview**
- 76 questions across 13 categories — Behavioral, STAR stories, Engineering (FAANG), System Design, and more
- 6 company guides: Amazon · Google · Meta · Microsoft · Apple · Netflix
- STAR framework reference card
- "Drill me" button — random question mode, one Q at a time with reveal-on-demand answer

**Glossary**
- 175 A–Z terms with alphabetical jump bar
- Dedicated search input (independent of topic search); `Esc` clears it
- **Category filter** — filter by Distributed, Databases, Networking, Security, DevOps, ML/AI, Algorithms
- **Copy button** on every term — copies `TERM — definition` to clipboard (appears on hover)

**General**
- Category headers collapse/expand their grids; collapsed state persisted in localStorage
- `aria-expanded` on all collapsible headers
- `scroll-margin-top` on all sections so fixed nav doesn't obscure headings

## Adding a Topic

1. Add an entry to `TOPIC_DATA` in `script.js`:
   ```js
   'my-topic': {
     icon: '🔧', title: 'My Topic', cat: 'Category Name',
     overview: 'One paragraph overview.',
     concepts: ['<strong>Term</strong> — definition.'],
     qas: [{ q: 'Question?', a: 'Answer.' }],
     resources: [{ name: 'Link text', url: 'https://...' }]
   }
   ```
2. Add a `.topic-card` in the matching `#topics` category grid in `1.html`
3. Update the count in `.hero h1 .line3`, the footer, and the `og:description` meta tag

## Adding a Problem

Add an entry to `PROB_DATA` in `problems-data.js` keyed by the exact problem name:

```js
'Problem Name': {
  pattern: 'Pattern Name — short description',
  logic: ['Step 1', 'Step 2', 'Step 3'],
  visual: `ascii diagram here`
}
```

The injector script reads `data-prob` attributes on `.prob-solution` divs at DOMContentLoaded and inserts the approach and visualization blocks automatically.

## Adding an Interview Question

Add a `.iq-card` to the relevant `.iq-grid` in `1.html`:

```html
<div class="iq-card">
  <div class="iq-num">01</div>
  <div class="iq-q">Your question here?</div>
  <span class="iq-toggle" onclick="toggleIQ(this)">&#9658; show answer</span>
  <div class="iq-answer"><p class="iq-ans">Your answer here.</p></div>
</div>
```

The Drill me mode scrapes all `.iq-card` elements automatically at startup — no extra wiring needed.

---

Built for Prajwal · [prajwalpvs](https://github.com/prajwalpvs)

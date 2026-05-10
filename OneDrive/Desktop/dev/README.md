# DevPrep

A personal CS interview prep hub — single HTML file, no framework, no build step, no dependencies. Open `1.html` in any browser.

## What's Inside

| Section | Count | What you get |
|---|---|---|
| Topics | 69 | Overview, key concepts, interview Q&A, resource links |
| Cheat Sheets | 14 | Big-O, SQL, Git, Regex, Linux, Docker, K8s, HTTP, Python, JS, TS, React Hooks, Data Structures, HTTP Status |
| Coding Problems | 81 | Problem + Python solution (reveal on click) + pattern visualization + step-by-step approach |
| System Designs | 34 | 16 concept fundamentals + 18 full architecture walkthroughs |
| Deep-Dives | 6 | Networking · Security · Testing · Cloud · Databases · APIs & Messaging |
| Interview Qs | 72 | Behavioural + engineering (FAANG) + STAR framework reference |
| Company Guides | 6 | Amazon · Google · Meta · Microsoft · Apple · Netflix — format, focus areas, tips |
| Glossary | 175 | A–Z one-liner definitions, jump bar, dedicated search |

**Topics span:** CS Fundamentals · Backend & Architecture · DevOps & Cloud · Programming Languages · ML/AI Engineering · Data Engineering · Distributed Systems · Security · Frontend & Mobile · Math for CS

## Files

```
1.html          — all HTML structure (~4,250 lines)
style.css       — all CSS / theming (~380 lines)
script.js       — all JS + TOPIC_DATA (~1,950 lines)
problems-data.js — pattern, logic, and visualization data for 81 problems
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

- `/` or `Ctrl+K` — focus topic search bar; filters topic cards and category headers live
- Glossary has its own search input; independent of the topic search
- Modal topic explorer — concepts, interview Q&A, and resource links per topic
- URL deep-linking — opening `#topic=algorithms` directly loads the modal
- 14 cheat sheet tabs — print button on every sheet
- 81 problems with syntax-highlighted Python solutions, pattern visualization, and approach breakdowns
- Copy button on every code panel
- Problem filter buttons — Arrays, DP, Graphs, Trees, Strings, Heaps, Binary Search
- 16 system design fundamentals + 18 full walkthrough cards, collapsible sections
- 6 concept deep-dive tabs (Networking, Security, Testing, Cloud, Databases, APIs)
- Interview section — STAR framework reference, 72 questions across 12 categories, 6 company guides
- Category headers collapse/expand their grids; state not persisted between visits
- Active nav link highlights via scroll-spy
- Scroll progress bar at top of page
- Back-to-top button (appears after 600px scroll)
- `scroll-margin-top` on all sections so fixed nav doesn't obscure headings
- Responsive — works from 320px wide; nav links scroll horizontally on small screens

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
3. Update the stat counters in `.stats-bar` and the `hero h1 .line3` span

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

---

Built for Prajwal · [prajwalpvs](https://github.com/prajwalpvs)

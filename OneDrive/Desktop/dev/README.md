# DevPrep

A personal CS interview prep hub — 69 topics, 8 cheat sheets, 16 coding problems, 9 system design breakdowns, and 4 deep-dive concept explainers. No framework, no build step, no dependencies. Just open `1.html`.

## What's Inside

| Section | Count | What you get |
|---|---|---|
| Topics | 69 | Overview, key concepts, interview Q&A, resources |
| Cheat Sheets | 8 | Big-O, HTTP codes, DS complexity, SQL, Git, SOLID, and more |
| Coding Problems | 16 | Problem + hidden solution (click to reveal) |
| System Designs | 9 | Architecture breakdowns with trade-offs |
| Deep Dives | 4 | OOP, Data Structures, Algorithms, Networks |

**Topics span:** Algorithms · Data Structures · System Design · Databases · DevOps & Cloud · AI/ML · Data Engineering · Programming Languages · Security · Frontend · Math

## Files

```
1.html      — all HTML structure (~1,400 lines)
style.css   — all CSS / theming (~200 lines)
script.js   — all JS + topic data (~3,400 lines)
```

## Run Locally

Open `1.html` directly in any browser. No install needed.

Or serve it locally:

```bash
npx serve .
# or
python -m http.server 8080
```

## Features

- Dark / light mode with `localStorage` persistence
- Modal topic explorer with concepts, Q&A, and resource links
- Cheat sheet tabs with one-click copy for code blocks
- Coding problems with hidden solutions
- System design cards with expandable details
- Fully keyboard and scroll accessible
- Print-friendly cheat sheets

## Adding a Topic

1. Add an entry to `TOPIC_DATA` in `script.js` with keys: `icon`, `title`, `cat`, `overview`, `concepts[]`, `qas[]`, `resources[]`
2. Add a `.topic-card` in the `#topics` grid in `1.html`
3. Update the stat counters in `.stats-bar` and the footer text

---

Built for Prajwal · [prajwalpvs](https://github.com/prajwalpvs)

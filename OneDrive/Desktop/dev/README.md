# DevPrep

A personal CS interview prep hub — 69 topics, 10 cheat sheets, 81 coding problems, 9 system design breakdowns, 4 deep-dive concept explainers, and a 100-term glossary. No framework, no build step, no dependencies. Just open `1.html`.

## What's Inside

| Section | Count | What you get |
|---|---|---|
| Topics | 69 | Overview, key concepts, interview Q&A, resources |
| Cheat Sheets | 10 | Big-O, SQL (+ joins / window fns / patterns), Git, Regex, Linux, Docker, K8s, HTTP, Python, Data Structures |
| Coding Problems | 81 | Full Blind 75 + extras — problem + hidden Python solution (click to reveal) |
| System Designs | 9 | Architecture breakdowns with capacity estimates and trade-offs |
| Deep Dives | 4 | OOP, Data Structures, Algorithms, Networks |
| Glossary | 100 | A–Z one-liner definitions, alphabetical jump bar, live-searchable |

**Topics span:** Algorithms · Data Structures · System Design · Databases · DevOps & Cloud · AI/ML · Data Engineering · Programming Languages · Security · Frontend · Math

**Blind 75 coverage:** Arrays · Bit Manipulation · Dynamic Programming · Graph · Intervals · Linked List · Matrix · String · Tree · Heap · Trie

## Files

```
1.html      — all HTML structure (~3,050 lines)
style.css   — all CSS / theming (~250 lines)
script.js   — all JS + topic data (~1,900 lines)
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

- `/` or `Ctrl+K` — focus search bar; filters topics and glossary terms live
- Dark / light mode with `localStorage` persistence
- Modal topic explorer with concepts, Q&A, and resource links
- Cheat sheet tabs — 10 tabs, print button on every sheet
- SQL cheat sheet includes JOIN types, window functions, and 7 interview patterns
- 81 coding problems with hidden Python solutions (syntax-highlighted)
- System design cards with expandable architecture details
- 100-term glossary with A–Z jump bar and per-letter grouping
- Responsive — 2-column glossary collapses to 1 on mobile

## Adding a Topic

1. Add an entry to `TOPIC_DATA` in `script.js` with keys: `icon`, `title`, `cat`, `overview`, `concepts[]`, `qas[]`, `resources[]`
2. Add a `.topic-card` in the `#topics` grid in `1.html`
3. Update the stat counters in `.stats-bar` and the footer text

---

Built for Prajwal · [prajwalpvs](https://github.com/prajwalpvs)

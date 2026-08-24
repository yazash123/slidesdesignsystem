# House of the People — Slide Show Design System

**Purpose: slides for citizens' assembly sittings.** Everything here is aimed at one job — putting information in front of 100 members of the public, in a Zoom call or a hall, so that it can be understood on sight. This is a stripped-back successor to the full brand system: same palette, same two typefaces, same bricks, far fewer decisions.

Built from 19 real slides from the AI sitting deck (see `assets/reference/`). Palette values were sampled from those slides, so they are the truth.

> **If you read nothing else:** sky-blue field, black serif headline, one white panel with a coloured spine, and stop. That is 60% of a good deck.

---

## Index

| Path | What's inside |
| --- | --- |
| `readme.md` | This file — the whole system |
| `styles.css` | The only stylesheet to link (imports the four token files) |
| `tokens/` | `colors.css`, `type.css`, `slide.css` (geometry), `fonts.css` |
| `slides/` | **Start here.** One HTML template per slide family + `index.html` (flip through all of them) |
| `components/` | React primitives: `SlideFrame`, `SlideBar`, `Eyebrow`, `Panel`, `Tile`, `Brick` |
| `guidelines/` | Foundation specimen cards |
| `assets/bricks/tight/` | **11 single-colour brick PNGs — the only bricks in the system** |
| `assets/scaffolds/` | 4 scaffold PNGs |
| `assets/logos/` | 6 lockups (H1–H3, V1–V3) |

---

## 1. The canvas

**1920 × 1080.** Nothing below **22px**. Body copy is 26px. A slide holds **one idea**; if it holds two, it is two slides.

Square everything: **0px radius, no shadows, no gradients, no blur, no gutters between tiles.** Tiles bleed to the slide edge.

---

## 2. The four slide families

Pick a family first. Do not blend two families on one slide. There is deliberately **no title-slide family** — open a deck on a bar slide or a tiled slide and get straight to the work.

### A — Bar slide *(facilitation: the room is being asked to do something)*
A **150px header bar** across the top: lowercase serif title on the left (`warm up discussion`, `let's meet each other`), optional **mustard duration chip** hard-right (`40mins`). Body on a **chambray or forest field**. Content sits in one or two **white panels with a 22px coloured spine** down the left edge: caps eyebrow → big serif question → small sans note.
→ `slides/activity.html`, `slides/rounds.html`, `slides/poll.html`

### B — Field slide *(explanation: you are teaching something)*
Sky field, generous edge inset. Top-left **eyebrow**: a small square colour chip + all-caps sans section name (`SETTING OFF`, `IDEA 3 — THE CHATBOT`). Under it, a **sentence-case serif headline with a full stop** — headlines are statements, not labels ("ChatGPT's actual job: to guess the next word."). Below, the explanatory furniture: colour steps, numbered rows, comparison cards, a chart in a white panel, a big number.
→ `slides/explainer.html`, `slides/rows.html`, `slides/compare.html`, `slides/chart.html`, `slides/recap.html`
→ `slides/timeline.html` uses the same eyebrow but a chambray field.

### C — Tiled slide *(a list of statements)*
No field, no margin. The whole slide is a grid of solid colour tiles that touch. One statement per tile — **all-caps sans, white, 40px** — with a brick PNG beneath it, or nothing. Title lives in its own tile in the top-left corner (lowercase serif). Every tile in the grid earns its keep — an empty tile carries at least an eyebrow, or the grid gets fewer, larger tiles. Single-colour bricks may build up out of one empty area as flush courses (see §5).
→ `slides/tiles.html`, `slides/glossary.html`

### D — Split slide *(one photograph, one explanation)*
The slide splits down the middle at 960px. A documentary photograph fills one half edge-to-edge — no border, no caption over it, no gutter between the halves. The other half is a sky field opened by a **full-width colour title tile** butting straight into the photo, then the explanation stacked beneath it: the furniture from family B (dot matrix, banana chips, a struck-through word) is all fair game here. Use it once or twice a deck, where a real image does the work that words can't.
→ `slides/photo.html`

---

## 3. Colour

Ten colours, three groups. **Every slide takes one from each group** — usually sky (light) as the field, a dark for the field or panel spine, and mediums across the tiles.

| Group | Colours | Text on it |
| --- | --- | --- |
| Dark | crimson `#C0184F` · forest `#387030` · chambray `#5878A0` | **white** |
| Medium | pink `#E078B0` · purple `#B868C0` · coral `#E06050` · orange `#E08850` | **black** |
| Light | sky `#C0E8F8` · banana `#F0E060` · mustard `#E0C060` | **black** |

Ink: black `#0A0A0A`, white `#FFFFFF`, cream `#FDFCF3` (softer panel on a dark field), grey `#6B6B6B` (small labels on white panels only).

Rules that matter:
- **Sky is the default field.** Chambray or forest when the room is doing an activity. Never plain white as a whole-slide field.
- White panels on a coloured field are correct and common — that is the one place white belongs.
- **Text is white on dark, black on medium and light.** Two exceptions: short all-caps tile labels on pink/purple/coral read white, and white on **mustard** is correct for tile labels and tiled-slide titles.
- **Never white text on banana or sky.** They are the two lightest colours in the system and white dies on both — black, always.
- Yellow banana is the highlighter, never a whole-slide field and never behind a numbered row.
- **No background left showing.** Tiles, bands and panels butt up against each other and bleed to the slide edge; a gap of field colour between two coloured elements is a mistake, not breathing room.
- Never place a brick on a background that matches one of its own colours.

---

## 4. Type

Two faces, two weights, used equally.

- **Adelphe** (serif) — titles, headlines, questions, big numbers. 600 for everything that matters, 400 italic for a quotation.
- **BBB Poppins TN** (sans) — eyebrows, tile labels, body, notes, small print. 700 or 400.

| Role | Token | Face |
| --- | --- | --- |
| One big statement | `--fs-hero` 104px | serif 600 |
| One big number | `--fs-stat` 140px | serif 600 |
| Slide title (in bar) | `--fs-title` 64px | serif 600, **lowercase** |
| Headline | `--fs-h1` 56px | serif 600, sentence case + full stop |
| Question in a panel | `--fs-question` 46px | serif 600 |
| Tile label | `--fs-tile` 40px | sans 700, **UPPERCASE** |
| Lead | `--fs-lead` 32px | sans 400 |
| Body | `--fs-body` 26px | sans 400 |
| Small / note | `--fs-small` 22px | sans 400 |
| Eyebrow | `--fs-eyebrow` 22px | sans 700, UPPERCASE, `0.12em` |

Casing carries meaning: **lowercase serif = a moment in the agenda. Sentence-case serif = a claim. UPPERCASE sans = a label.**

When serif and sans sit on one line, set the sans run at ~0.84em so they look the same size.

---

## 5. Bricks & scaffolds

**Use the bricks in `assets/bricks/tight/`** — one brick, one colour, cropped to its own edges so a row of them sits flush with no seam. The old multi-colour brick images (three bricks baked into one PNG at a fixed ratio) have been **removed from this system**: they never line up with anything and always looked approximate. If you find one in an old file, replace it with single bricks.

Never redraw a brick, never stretch one — set `width`/`height` at ~2.34:1 with `object-fit: cover`. They carry meaning: one brick = one unit; a stack = building; a row = a foundation.

How to lay them:
- **Courses, not stairs.** Bricks in a row butt edge to edge (`margin-left:-1px` to kill the seam); rows stack with no vertical gap. Each course sits directly on the one below.
- **Bottom-align the wall** to the edge of the empty area it grows out of, and let it run **off the right or left edge of the slide** — a brick leaving the canvas is good.
- **A brick never overlaps content.** It may cross the slide edge; it may not cross a tile that has words in it, a panel, or a headline.
- **Under a tile statement** — one brick centred in the lower half of that tile, no others.

Scaffolds anchor a timeline or a big statistic — push them **well off** the right or left edge (two-thirds of the artwork outside the canvas is normal), and align the thing they anchor to one of the scaffold's **pink hinge joints** so the two read as connected. `scaffold-alt` at `height:1000px; bottom:-110px` puts joints at y ≈ 260, 458, **655**, 853 — run a timeline bar into one of those. Never put a scaffold on a field that uses one of its own colours (scaffold-1/2 → sky or purple; scaffold-alt → chambray; scaffold-purple-hinge → forest).

The brick's **three dots** also work alone as bullets: circles in a row inside a colour bar, or a single dot as a marker beside a list item.

---

## 6. Furniture (the recurring parts)

- **Spine panel** — white/cream panel, 22px colour spine down the left, 64px padding. Eyebrow (coloured caps) → serif question → 22px grey note. The workhorse of every facilitation slide.
- **Duration chip** — mustard tile, flush to the top-right of the header bar, sans 700 (`25mins`, `20 mins`).
- **Eyebrow chip** — 22px solid square before a caps section name.
- **Colour steps** — 3–4 solid colour boxes in a row, sans-bold label + small explanation, black arrows between them.
- **Numbered rows** — full-width colour bands stacked with no gaps, serif numeral + sans bold label + grey trailing note. Colours descend through the palette.
- **Callout banner** — one full-width forest band at the bottom of a slide with the takeaway in white sans bold.
- **Highlight** — banana behind a phrase inside white panels, to mark what changed.
- **Struck-through word** — used to correct language in front of the room (`~~Debate~~ Deliberate on`).

---

## 7. Copy

Plain English, British spellings, first-person plural. Short sentences; verbs do the work. Speak to the room, not about it.

- Agenda titles are lowercase and human: `warm up discussion`, `what do we think?`, `starting views`, `let's meet each other`.
- Explanatory headlines are full sentences with a full stop: `'AI' is an old label, with a history in marketing.` `Which data you keep changes the trend.`
- Questions are asked directly: `What is AI to us? Where do we encounter it?`
- Permission is given explicitly: `If you'd rather not share yet, that's okay too. No one will define or correct your answer.`
- Never patronise, never jargon. If a term must appear, put it in the glossary slide.
- Vocabulary: House, Chamber, Sitting, Member, Assembly, Charter, sortition, democratic lottery, ordinary people. Avoid: stakeholders, deliver, leverage, journey, users, citizens (alone — prefer "people").
- No emoji.

---

## 8. Motion & states

Slides do not animate. If a build is needed: a 200ms ease-out fade, one element at a time. No parallax, no autoplay video, no transitions between slides beyond a cut.

Interactive surfaces (a poll link, a button in a Zoom-shared page): hover darkens the tile 5–10% or underlines the link; press translates 2px; focus is a 3px chambray outline at 2px offset. Disabled is 40% opacity.

---

## 9. Iconography

The system is icon-light — bricks, dots, arrows and colour do the work. When a functional icon is unavoidable use [Lucide](https://lucide.dev) at 1.5–2px stroke, black, 32–40px on a slide. **Flagged substitution:** the brand has no documented icon set; swap if Assemble has a custom pack. Arrows drawn on slides are chunky black triangular arrows (see the citizens'-assembly and colour-step slides), not thin line arrows. Never emoji, never unicode glyphs as icons.

---

## 10. Checklist before you ship a slide

1. One idea on the slide?
2. One family (bar / field / tiled / split) — not two?
3. One dark, one medium, one light?
4. Nothing under 22px, nothing rounded, nothing shadowed?
5. Text white on dark, black on light — and never white on banana or sky?
6. Headline serif, labels sans, casing correct?
7. If a brick is present: single-colour, from `tight/`, flush to its neighbours, and overlapping nothing but the slide edge?
8. Any field colour showing between two coloured elements? Close it.

---

## Using this as a design system

The project is laid out for the design-system compiler: `styles.css` at the root is the only entry point consumers link (imports only — fonts, colours, type, slide geometry). `components/slides/` holds the six primitives, each as `.jsx` + `.d.ts` + `.prompt.md`. Every specimen and template carries an `@dsCard` tag, so the Design System tab shows the palette, type, brand and furniture cards plus all 12 slide templates. The 12 templates and the `SlideFrame`/`Tile` primitives are tagged `@startingPoint`, so a new design can be seeded straight from one.

Edit sources in `*/_src/`, then re-run the build (`tools/build.js`) — it inlines the tokens and base64 fonts and turns `A:` asset refs into data URIs. Don't hand-edit the built files.

**To share it:** set the file type to **Design System** in the Share menu. Until then it's a normal project and won't appear in the design-system picker.

# House of the People — Design System

> A new sort of Parliament, for the people of Britain.

This design system supports the **House of the People** — a grassroots citizens' assembly initiative built by the Assemble project. 100 randomly selected members of the public meet in periodic sittings to address the biggest issues facing the UK; the agenda is set bottom-up by local Assemblies across the country.

The visual identity is built on three motifs — **bricks**, **scaffolds**, and **tiled layouts** — that together evoke a chamber being built brick by brick, scaffolded into existence by ordinary people.

---

## Source materials

- **Logo files** (provided): 6 lockups in `assets/logos/` — three horizontal (H1, H2, H3) and three vertical (V1, V2, V3). Each lockup uses a different colour combination.
- **Bricks** (provided): 17 PNGs in `assets/bricks/` covering every canonical single-colour brick and multi-brick stack. **Use these directly — don't redraw them.**
- **Scaffolds** (provided): 4 PNGs in `assets/scaffolds/` showing the diagonal-cross-brace illustration system.
- **Inspiration / reference graphics** (provided): 11 examples in `assets/inspiration/` — the 5 Charter social squares, a webinar promo, a speaker promo, a Gaza solidarity post, and 5 spreads from the First Sitting Report PDF.
- **Typefaces** (provided): Adelphe (Floreal cut) by Eugénie Bidaut / Velvetyne, and BBB Poppins TN (Text) by Bakken & Bæck. Both open source. Stored in `fonts/`.
- **Brand voice and product context** referenced from `houseofthepeople.uk`.

---

## Index

| Path                       | What's inside                                              |
| -------------------------- | ---------------------------------------------------------- |
| `README.md`                | This file — manifest, content fundamentals, visual foundations, iconography |
| `SKILL.md`                 | Agent Skill manifest                                       |
| `colors_and_type.css`      | All CSS variables (10 brand colors, type, spacing, motion) and semantic typography classes |
| `fonts/`                   | Adelphe Floreal + BBB Poppins TN (otf, provided)           |
| `assets/logos/`            | 6 logo lockups (H×3, V×3)                                  |
| `assets/bricks/`           | 17 brick PNGs — single and multi-colour                    |
| `assets/scaffolds/`        | 4 scaffold illustration PNGs                               |
| `assets/inspiration/`      | Reference graphics from the brand archive (incl. the two A4 posters) |
| `preview/`                 | Design-system preview cards (incl. poster + social templates) |
| `preview/_src/`            | Editable source for the inlined poster/social cards        |
| `ui_kits/website/`         | Recreation of houseofthepeople.uk                          |

---

## Content Fundamentals

> **The voice is the voice of a kitchen-table conversation that has decided it is time to act.** Plain, direct, defiant where it needs to be, never patronising.

### Tone
- **Plain English.** "Tax wealth, not work." "Politics is broken, so people are picking up the tools to fix it." Short sentences. Verbs do the work.
- **First-person plural.** *We* are building, *our* democracy, *let's* unlock Parliament. "You" appears only for direct CTAs.
- **Defiant but hopeful.** Names what's broken — "rising fascism, climate collapse, social breakdown" — then names who's fixing it: ordinary people.
- **Concrete, not abstract.** "Your mum, your neighbour, nurses, teachers, posties." Never "stakeholders".
- **Historic and grounded.** Borrows the cadence of pamphlet writing — Suffragettes, Chartists, Magna Carta. Comfortable using *House*, *Chamber*, *Charter*, *Sitting*, *Member*.

### Casing & punctuation
- **Sentence case** for body, navigation, most headings.
- **All-caps** reserved for: wordmark, eyebrow labels, very short impact words.
- **Em-dashes** used liberally — for cadence, asides, lists.
- **British spellings throughout.** *organise, colour, neighbour, programme, defence.*

### Vocabulary
- **Use:** House, Chamber, Sitting, Member, Charter, Assembly (capital A for the named institution), People's Charter, sortition, lottery, local Assembly, ordinary people.
- **Avoid:** stakeholders, leverage, deliver, ecosystem, disrupt, journey, citizens (as a stand-alone — prefer "people"), users, residents.
- **No emoji in formal copy.** Acceptable in social posts (UK flag, ✋, 🏛️).

### Example copy patterns

**Headline / hero:** "Democracy is the pride of Britain, but it's out of date."
**Three-beat manifesto:** "Rising fascism. Climate collapse. Social breakdown."
**CTA:** "Let's unlock Parliament."
**Charter point:** "Tax wealth, not work." (4-word slogan → one-sentence elaboration)
**Naming-people pattern:** "Your mum, your neighbour, nurses, teachers, posties."

---

## Visual Foundations

The brand is built on three motifs and one composition rule.

### Motif 1 — The Brick

A flat-colour rectangle (≈2:1) with three filled circles inside, evenly spaced. Originally read as a "bench of three seated members" but reframed as a **building block** — bricks stack into a chamber, a House, a Charter, a movement.

- **Use the provided PNGs.** `assets/bricks/` contains every approved single-colour and multi-colour combination. Never redraw them.
- **Bricks have meaning on top of decoration.** A stack of bricks = building. A single brick = a unit (a date, a time, a label). A row of bricks = a foundation.
- **Bricks can hold copy.** Pin a date or a short label inside or directly next to a brick — see `assets/inspiration/social-charter-1.jpg` ("14 MAY", "7PM") and `social-diz-undone.jpg`.

### Motif 2 — The Scaffold

Diagonal cross-braced scaffolding illustrations, drawn with the same chunky vocabulary as the bricks. The scaffold is the **structure being assembled** — the new democratic chamber, mid-construction.

- **Use the provided PNGs.** `assets/scaffolds/` contains 4 variants — color it differently by composing it against a coloured background. **The background must never use a colour that appears in the scaffold itself.** scaffold-1 / scaffold-2 (blue poles, pink hinges, red/green/yellow braces) → light blue or purple. scaffold-alt (green poles, light-blue braces) → dark blue. scaffold-purple-hinge (orange poles, purple hinges, pink/yellow braces) → dark green. The same rule applies to bricks: never place a brick on a background that matches one of its own colours.
- Pair scaffolds with large stats or pull-quotes (see `social-charter-1.jpg`: 96% statistic anchored to a green scaffold panel).

### Posters & social squares — the construction composition

The two canonical poster layouts (see `assets/inspiration/poster-build-this-house.jpg` and `poster-peoples-charter.jpg`) reveal how the motifs combine:

- **Light blue is the sky.** Posters open on a light-blue field — the space above the construction. Headlines sit in the sky in big black Adelphe.
- **Bricks build up from the bottom.** A wall of multi-coloured brick PNGs, laid in staggered rows, forms the foundation along the bottom edge — the House being built.
- **The scaffold rises out of the wall.** A scaffold illustration stands on the brick foundation, bleeding off the left edge.
- **A yellow "sun" circle** sits behind the wordmark for the hero poster.
- **Bricks scale up to become content tiles.** In the Charter poster, each demand is a solid-colour tile with one big circle (the brick's dot, enlarged) and the demand in white — half-then-half-again tiling. A literal brick (3 dots) anchors a corner. Bricks "peek" over the skyline as a descending stair.
- **Brick-labels** carry dates, times and categories ("14 MAY", "7 PM", "ONLINE") — stacked solid rectangles, one short word each.
- **Mix serif and sans within one poster** — e.g. "Tax wealth, not work." in serif beside "Reclaim our spaces." in sans.

See `preview/poster-build.html`, `preview/poster-charter.html`, `preview/social-demand.html` and `preview/social-event.html` for working templates.

### Production notes — working with bricks & scaffolds in code

Hard-won lessons from building the poster/social templates. Follow these or the motifs break.

- **Brick PNGs carry a transparent border.** Every file in `assets/bricks/` has roughly **10–12px of fully-transparent padding** baked around the visible brick. If you tile the raw PNGs they will NOT touch — you get thin seams of background between them. **Before tiling, crop each brick to its opaque bounding box** (scan the alpha channel, find min/max x/y where alpha > 16, redraw cropped). The cropped bricks come out to a consistent ~920×393. The scaffold PNGs have the same border — crop them too so the feet sit at the image's bottom edge.
- **Bricks must touch — and overlap by 1px.** After cropping, lay them in a flex row/column with `width`/`height` fixed, `object-fit: cover` (NEVER `fill`), and a `-1px` margin between siblings (`img + img { margin-left: -1px }`, rows `margin-top: -1px`). The 1px overlap hides sub-pixel rounding gaps at non-integer scales.
- **Never stretch a brick.** Use `object-fit: cover` with a fixed aspect box, never `object-fit: fill` or a free `flex: 1 1 0` that distorts width. A brick is ~2.34:1 after cropping — respect it.
- **Randomise, but family-aware.** When filling a wall, shuffle the brick selection so there's no obvious repeating sequence — BUT never place two bricks of the **same colour family** side by side. `orange.png` and `orange-2.png` both read as orange; treat them as one family. Tag each brick with a family key and filter out the previous brick's family when picking the next.
- **Stacked wordmark text: never flex-row + `<br>`.** A flex container turns raw text nodes and `<br>` into horizontal flex items, so line breaks silently fail and the words pile up on one line. To centre a multi-line wordmark inside a circle, wrap the lines in a **block child** (`.wordmark { display:flex; align-items:center; justify-content:center } .wordmark .mk { text-align:center }`) and put the `<br>`s (or block lines) inside `.mk`. The lockup is three centred serif lines — `HOUSE` / `of the` (lowercase, ~0.66em) / `PEOPLE`.
- **Mixing both typefaces inside one headline.** When you set some words in Poppins and others in Adelphe on the same line, Poppins reads optically *smaller* at the same point size. Bump the Poppins run to roughly **0.84em** of the serif size so the words look equally weighted on the page. Tune by eye per headline.
- **The hero poster composition that works:** light-blue sky; big mixed-font Adelphe/Poppins headline centred at the top; a yellow "sun" circle anchored bottom-right with the wordmark dead-centre inside it; the scaffold standing bottom-left with its feet resting exactly on the top course of the brick wall; the brick wall building up flush from the bottom edge; a solid disc (QR-code placeholder) floating just above the scaffold's top yellow ledger.
- **Build pipeline.** The editable sources live in `preview/_src/`. They reference assets with `A:<relative-path>` placeholders and carry a `<!--MEGACSS-->` marker. A build step inlines the foundation `<style>` (fonts + colour vars) in place of the marker and replaces each `A:` ref with a data URI (cropping bricks/scaffolds en route), writing the self-contained file to `preview/`. Edit the `_src` file, then re-run the build — don't hand-edit the giant inlined output. Note: these files embed the fonts as base64, so DOM-rendering screenshot tools can't capture their data-URI images — verify geometry via `getBoundingClientRect`/`naturalWidth` in the live DOM instead.

### Motif 3 — Tiled Layout

> *"To mimic the bricks in the logotype and to keep layouts dynamic and playful, divide the area in half and then in half again to make containers for different types of content."*

Every layout is a grid of coloured rectangles. Halves, quarters, occasionally thirds — always rectangular, always edge-to-edge.

- **No outer padding around tiles.** They bleed to the artboard edge.
- **No rounded corners on tiles.** Square. Always.
- **No gutters between tiles.** They touch.
- **One tile per content type.** A title goes in one tile, an image in another, a stat in a third. Don't compose multiple things inside a single coloured rectangle (except a brick stack as decoration).
- **Images fill tiles entirely** — no borders, no padding, no captions over the image. If you want a caption, put it in the adjacent tile.

### The colour rule (one dark + one medium + one light)

> *"As you see in the logotypes the main colours are one dark, one light and one medium. Keep to this principle when you combine colours in designs — i.e. think about getting representation from the 3 groups whenever possible."*

The 10 brand colours fall into three groups:

| Group  | Colours                                                  | Text on this background |
| ------ | -------------------------------------------------------- | ----------------------- |
| Dark   | Dark Red, Dark Green, Dark Blue                          | White                   |
| Medium | Pink, Purple, Red (coral), Orange                        | Black                   |
| Light  | Light Blue, Yellow (banana), Mustard                     | Black                   |

When composing a layout (poster, social, report spread, hero), pick **one from each group** for the dominant areas. The brick inside a tile can pull from any of the three. Avoid all-medium or all-light compositions — they go flat.

### Typography

Two typefaces, used **equally**.

- **Adelphe** (serif) — has personality. Used in the logotype itself.
- **BBB Poppins TN** (sans) — geometric, sturdy. The counterbalance.

Both fonts are used for **headlines as well as smaller text**. Mix them freely within a layout — a serif headline paired with a sans subhead, or vice versa. See `social-charter-1.jpg`: serif "Tax wealth, not work" + sans subhead beneath. See `social-charter-3-2.jpg`: sans "Choose life over GDP" + serif "THE PEOPLE'S CHARTER" beneath.

Two weights only:
- **Regular (400)** — body, small text
- **SemiBold (600 in Adelphe / 700 in Poppins TN)** — titles and headlines

### Text colour rule

- **Black** on medium and light backgrounds.
- **White** on dark backgrounds.
- **Accent text** (e.g. yellow on dark green) is allowed for posters where one word needs to pop — but the body should still respect black-on-light / white-on-dark.

### Backgrounds

- **Default surface is a coloured tile from the 10-colour palette** — not white. White is reserved for body text in long-form documents (report pages with photos and paragraphs of body copy) and even there it's split tile-style with adjacent coloured panels (see `report-ex2.png`, `report-ex4.png`).
- **Avoid plain white backgrounds in graphics.** They look boring and off-brand.

### Imagery

- **Documentary photography.** Real members, real rooms (Conway Hall, community centres, local Assemblies at festivals). No stock, no AI.
- **Photos fill a whole tile.** No drop-shadow, no border, no rounded corners. The tile boundary frames them.
- **Photos are NOT desaturated.** They're full colour, often slightly warm.
- **Circular photo crops** are used in editorial spreads for headshots only (see `report-ex2.png` Sarah Chayes / Prof Graham Smith).

### Animation & motion
- **Restrained.** Civic infrastructure, not a SaaS dashboard.
- Permitted: subtle fades (200–360ms ease-out), button hover transitions, the "three dots filling in" loading state.
- **No parallax, no autoplay video, no animated gradients, no shimmer skeletons.**

### Interaction states
- **Hover (buttons):** subtle tile darkening (5–10% darker), or a small horizontal arrow translation.
- **Hover (links):** underline appears or thickens.
- **Press:** translate 2px down/right, or 95% scale.
- **Focus:** 2px solid outline in `--c-dark-blue`, 2px offset.
- **Disabled:** 40% opacity.

### Borders & rules
- Use sparingly. Tiles separate themselves by colour change — they don't need borders.
- When a border is needed: 1.5px solid `--c-black`.
- **Never use a coloured left-border accent stripe.** Use a whole tile instead.

### Shadows
- **None by default.** The brand reads flat.
- A subtle `0 2px 8px rgba(0,0,0,0.08)` is allowed for floating overlays (menus, modals) but not for cards or buttons.

### Corner radii
- **0px everywhere.** Tiles, bricks, hero sections, dividers, buttons-as-tiles.
- **Pill (`r-pill`)** for chips/tags only, sparingly.

### Transparency & blur
- A semi-transparent white text box over a photo is acceptable when a headline must overlay imagery (see `social-genocide.jpg`).
- Otherwise: solid colours, no blur, no glass effects.

### Layout rules (summary)
- Tile-based, half-then-half-again partitioning.
- Edge-to-edge tiles, no gutters.
- One dark + one medium + one light per composition.
- Mix serif + sans in the same layout.
- Black on medium/light, white on dark.
- Bricks and scaffolds as supplied PNGs, never redrawn.
- Photos fill tiles, no decoration.

---

## Iconography

The brand is **icon-light**. The bricks and scaffold do most of the heavy lifting. When functional icons are needed:

- **[Lucide](https://lucide.dev/)** — open-source stroke icons, loaded from CDN. Selected as the closest match to the pamphlet/civic-line-drawing feel. **Flagged substitution** — the brand has no documented icon set; swap if Assemble has a custom pack.
- **The Brick** itself is used as a list-bullet icon (one brick = one item, three dots inside = three voices/seats/perspectives).
- **Arrows** in graphics are drawn chunky and stroke-only (see `social-charter-1.jpg` top-right diagonal arrow, `social-webinar-promo.jpg` "Register via [↗] link in bio").
- **No emoji in formal interfaces.** Social posts: 🏛️, ✋, UK flag are fine.
- **No unicode-as-icon** (no ✓, →, ★ in headings).

### Icons used
| Icon          | Where                              |
| ------------- | ---------------------------------- |
| `menu`        | Mobile nav toggle                  |
| `x`           | Modal close                        |
| `arrow-up-right` | "Register via link in bio", external link |
| `arrow-right` | Primary CTA                        |
| `chevron-down`| Accordion, dropdown                |
| `map-pin`     | "Find an Assembly near you"        |
| `users`       | Members / participants             |
| `mail`        | Newsletter signup                  |

Sizes: 20px in body, 24px in nav, 16px inline with text. Always stroke (1.5–2px), never filled.

---

## How to use this system

1. **Include** `colors_and_type.css` and use the CSS variables.
2. **Start with a coloured background, not white.** Pick from the 10-colour palette.
3. **Compose with tiles.** Halve, then halve again.
4. **One dark + one medium + one light** per layout.
5. **Drop in a brick or scaffold PNG** from `assets/` — don't redraw.
6. **Mix Adelphe and Poppins TN** freely. Two weights only.
7. **Black text on light/medium, white text on dark.** Always.

---
name: house-of-the-people-slide-show-design-system
description: Use this skill to design slides and graphics for the House of the People citizens' assembly — sitting decks, facilitation slides, explainer slides, tiled statement slides, posters and social squares. Contains the stripped-back slide show design system: palette, two typefaces with font files, brick and scaffold artwork, slide templates and React primitives.
user-invocable: true
---

Read `readme.md` — it is the whole system, and it is short. Then open `slides/` and copy the template closest to the slide you need; the four slide families are described in readme section 2.

Link `styles.css` for tokens and fonts. Use the single-colour brick PNGs in `assets/bricks/tight/` and the scaffolds in `assets/scaffolds/` as-is; never redraw them, and never use the multi-colour brick images on a slide.

If creating visual artifacts (slides, posters, social graphics), copy the assets you need out and write static HTML at 1920×1080. If working on production code, read the tokens and use the CSS custom properties.

If invoked with no other guidance, ask what is being presented, to whom, and how long the session is — then design.

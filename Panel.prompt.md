A white panel with a coloured spine — how a question is put to the room.

```jsx
<Panel
  spine="var(--c-crimson)"
  background="var(--c-cream)"
  eyebrow="group agreement → go-arounds → open discussion"
  question="What is AI to us? Where do we encounter it?"
  note="These are starting points: our views will probably change!"
/>
```

Two panels stacked with `--stack-gap` make a two-round go-around (spines in different colours, eyebrows "round 1" / "round 2"). Pass `children` instead of `question` for lists, poll options or highlighted bars.

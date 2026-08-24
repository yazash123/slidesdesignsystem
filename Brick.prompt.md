The brand's building block. One brick, one colour — the PNGs in `assets/bricks/tight/` are cropped to their own edges so a row of them lays flush.

```jsx
<div style={{ display: 'flex' }}>
  <Brick color="orange" width={320} />
  <Brick color="green" width={320} style={{ marginLeft: -1 }} />
</div>
```

Lay bricks in courses, not stairs: edge to edge across, no vertical gap between rows. Bottom-align the wall to the empty area it grows out of and let it run off the slide edge. A brick may cross the slide edge; it may never cross a tile, a panel or a headline. Never place a brick on a field that matches one of its own colours.

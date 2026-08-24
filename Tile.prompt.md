One statement, one colour, edge to edge. Use for group agreements, charter demands, glossary terms.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: '100%' }}>
  <Tile background="var(--c-chambray)" label="Everyone is welcome" brick="green" />
  <Tile background="var(--c-purple)" label="All voices are equal" />
  <Tile background="var(--c-coral)" label="Facilitators may step in" />
</div>
```

No gaps, no radii. Keep to three or four words per tile; drop `fontSize` to 30px for a dense glossary grid.

The slide canvas — 1920x1080, one field colour, everything else positioned inside it.

```jsx
<SlideFrame field="var(--c-chambray)" ink="var(--ink-inverse)">
  <SlideBar title="warm up discussion" duration="40mins" />
</SlideFrame>
```

Sky (`--c-sky`) is the default field and the right answer most of the time. Use chambray or forest when the room is doing an activity, and set `ink` to `var(--ink-inverse)`. Never a white field.

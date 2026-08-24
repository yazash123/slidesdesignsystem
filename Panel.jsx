import React from 'react';

/* White panel with a coloured spine down its left edge — the workhorse of
   every facilitation slide. Eyebrow, then a serif question, then a note. */
export function Panel({ spine = 'var(--c-crimson)', background = 'var(--panel)', eyebrow, question, note, padding = 'var(--panel-pad)', style, children }) {
  return (
    <div style={{ display: 'flex', background, ...style }}>
      <div style={{ width: 'var(--spine-w)', flex: 'none', background: spine }} />
      <div style={{ padding, flex: 1 }}>
        {eyebrow ? (
          <div
            style={{
              color: spine,
              font: '700 var(--fs-eyebrow)/1 var(--ff-sans)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--ls-caps)',
              marginBottom: 28,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        {question ? (
          <p style={{ margin: 0, font: '600 var(--fs-question)/var(--lh-snug) var(--ff-serif)' }}>{question}</p>
        ) : null}
        {note ? (
          <p style={{ margin: '32px 0 0', font: '400 var(--fs-small)/var(--lh-body) var(--ff-sans)' }}>{note}</p>
        ) : null}
        {children}
      </div>
    </div>
  );
}

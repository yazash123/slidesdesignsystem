import React from 'react';

/* All-caps section label, optionally preceded by a solid colour chip. */
export function Eyebrow({ children, chip, color = 'var(--ink)', style }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        color,
        font: '700 var(--fs-eyebrow)/1 var(--ff-sans)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-caps)',
        ...style,
      }}
    >
      {chip ? <span style={{ width: 22, height: 22, flex: 'none', background: chip }} /> : null}
      {children}
    </div>
  );
}

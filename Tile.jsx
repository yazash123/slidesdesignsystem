import React from 'react';
import { Brick } from './Brick.jsx';

/* One solid colour tile carrying one statement. Tiles touch: put them in a
   grid with no gap. Long labels drop to 30px. */
export function Tile({ background = 'var(--c-chambray)', ink = 'var(--ink-inverse)', label, brick, fontSize = 'var(--fs-tile)', align = 'center', style, children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: align,
        gap: 40,
        padding: 48,
        background,
        color: ink,
        textAlign: 'center',
        ...style,
      }}
    >
      {label ? (
        <span style={{ font: '700 ' + fontSize + '/var(--lh-snug) var(--ff-sans)', textTransform: 'uppercase' }}>{label}</span>
      ) : null}
      {brick ? <Brick color={brick} width={300} /> : null}
      {children}
    </div>
  );
}

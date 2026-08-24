import React from 'react';

/* A brick, always the supplied PNG — never redrawn, never stretched.
   Pass a single-colour name from assets/bricks/tight/ (e.g. "blue", "pink")
   or an explicit src. Aspect is locked at 2.34:1. */
export function Brick({ color = 'blue', src, base = 'assets/bricks/tight', width = 300, style, ...rest }) {
  return (
    <img
      src={src || base + '/' + color + '.png'}
      alt=""
      style={{ width, height: Math.round(width / 2.34), objectFit: 'cover', display: 'block', ...style }}
      {...rest}
    />
  );
}

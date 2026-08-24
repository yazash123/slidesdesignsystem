import React from 'react';

/* The 1920x1080 canvas every slide is built on. */
export function SlideFrame({ field = 'var(--c-sky)', ink, style, children, ...rest }) {
  return (
    <div
      style={{
        position: 'relative',
        width: 'var(--slide-w)',
        height: 'var(--slide-h)',
        overflow: 'hidden',
        background: field,
        color: ink || 'var(--ink)',
        fontFamily: 'var(--ff-sans)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

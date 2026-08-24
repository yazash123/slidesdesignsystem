import React from 'react';

/* Header bar for a facilitation slide: lowercase serif title, optional
   mustard duration chip hard-right. */
export function SlideBar({ title, duration, background = 'var(--c-sky)', align = 'center', style }) {
  return (
    <div style={{ display: 'flex', height: 'var(--bar-h)', ...style }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          padding: '0 var(--pad-edge)',
          background,
          font: '600 var(--fs-title)/var(--lh-tight) var(--ff-serif)',
          textTransform: 'lowercase',
        }}
      >
        {title}
      </div>
      {duration ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 56px',
            background: 'var(--c-mustard)',
            font: '700 var(--fs-title)/1 var(--ff-sans)',
          }}
        >
          {duration}
        </div>
      ) : null}
    </div>
  );
}

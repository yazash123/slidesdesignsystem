import * as React from 'react';

/** The brick motif, always as the supplied PNG. Aspect locked at 2.34:1. */
export interface BrickProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** File stem in assets/bricks/tight/ — "blue", "pink", "green", "yellow"… */
  color?: string;
  /** Explicit src, if you copied the PNG somewhere else. */
  src?: string;
  /** Folder the PNGs live in, relative to the page. */
  base?: string;
  width?: number;
}
export declare function Brick(props: BrickProps): JSX.Element;

import * as React from 'react';

/** One solid colour tile carrying one statement, optionally over a brick. *
 * @startingPoint section="Slide primitives" subtitle="One statement, one colour, edge to edge" viewport="700x240" */
export interface TileProps {
  background?: string;
  /** Text colour: white on dark, black on light. */
  ink?: string;
  /** The statement — set in uppercase sans. */
  label?: React.ReactNode;
  /** Single-colour brick name from assets/bricks/tight/, e.g. "green". */
  brick?: string;
  fontSize?: string;
  align?: 'center' | 'flex-start' | 'space-between';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Tile(props: TileProps): JSX.Element;

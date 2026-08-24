import * as React from 'react';

/** All-caps sans section label, the opening move of every field slide. */
export interface EyebrowProps {
  children: React.ReactNode;
  /** Colour of the leading square chip. Omit for no chip. */
  chip?: string;
  /** Text colour — black on light fields, or a brand colour inside a panel. */
  color?: string;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;

import * as React from 'react';

/**
 * White panel with a coloured spine. Holds one question for the room.
 *
 * @startingPoint section="Slides" subtitle="Spine panel with a question" viewport="1600x420"
 */
export interface PanelProps {
  /** Spine colour; the eyebrow inherits it. */
  spine?: string;
  /** Panel fill — white, cream, or sky on a forest field. */
  background?: string;
  eyebrow?: React.ReactNode;
  /** The question, in serif. */
  question?: React.ReactNode;
  /** Small reassurance or instruction under the question. */
  note?: React.ReactNode;
  padding?: string | number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Panel(props: PanelProps): JSX.Element;

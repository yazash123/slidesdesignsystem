import * as React from 'react';

/**
 * The 1920x1080 slide canvas. Every slide starts here.
 *
 * @startingPoint section="Slides" subtitle="Empty 1920x1080 slide canvas" viewport="1920x1080"
 */
export interface SlideFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field colour. Sky by default; chambray or forest for activity slides. Never white. */
  field?: string;
  /** Text colour. Set to var(--ink-inverse) on a dark field. */
  ink?: string;
  children?: React.ReactNode;
}
export declare function SlideFrame(props: SlideFrameProps): JSX.Element;

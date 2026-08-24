import * as React from 'react';

/** Header bar for a facilitation slide. Title is always lowercase serif. */
export interface SlideBarProps {
  /** Agenda title, written lowercase: "warm up discussion". */
  title: React.ReactNode;
  /** Optional duration chip, e.g. "40mins". Renders mustard, hard-right. */
  duration?: React.ReactNode;
  /** Title tile colour — sky or banana. */
  background?: string;
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}
export declare function SlideBar(props: SlideBarProps): JSX.Element;

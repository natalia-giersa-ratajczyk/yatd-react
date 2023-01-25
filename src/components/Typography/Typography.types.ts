import { ElementType } from 'react';

export type Variant = 'heading' | 'body' | 'iAmSmol' | 'iAmThiccBoi';
export type Color = 'text' | 'accent' | 'gray';
export type Element = Extract<ElementType, 'h2' | 'p' | 'span'>;
export type ColorConfig = Record<Color, string>;
export type MyFantasticConfig = Record<Variant, unknown>;

export interface TypographyProps {
  text: string | number;
  variant: Variant;
  color?: Color;
  renderAs?: Element;
}

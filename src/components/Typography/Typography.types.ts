import { ElementType } from 'react';
import { CssInterpolation } from 'styled-components';

export type Variant = 'heading' | 'body' | 'small';
export type Color = 'textColor' | 'accentColor' | 'grayColor';
export type Element = Extract<ElementType, 'h2' | 'p' | 'span'>;

export interface TypographyProps {
  text: string | number;
  variant: Variant;
  color?: Color;
  renderAs?: Element;
}

export type StyledVariantConfig = Record<Variant, CssInterpolation>;

export type StyledTypographyProps = {
  $variant: TypographyProps['variant'];
  $color: TypographyProps['color'];
};

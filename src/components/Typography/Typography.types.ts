import { ElementType } from 'react';
import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export type Variant = 'heading' | 'body' | 'small';
export type Color = 'textColor' | 'accentColor' | 'grayColor';
export type Element = Extract<ElementType, 'h2' | 'p' | 'span'>;

export interface TypographyProps {
  text: string | number;
  variant: Variant;
  color?: Color;
  renderAs?: Element;
}

export type StyledVariantConfig = Record<Variant, FlattenInterpolation<ThemeProps<DefaultTheme>>>;

export type StyledTypographyProps = {
  $variant: TypographyProps['variant'];
  $color: TypographyProps['color'];
};

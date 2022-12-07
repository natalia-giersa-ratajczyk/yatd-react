import { MouseEvent, ReactNode } from 'react';

type Color = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps {
  color?: Color;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

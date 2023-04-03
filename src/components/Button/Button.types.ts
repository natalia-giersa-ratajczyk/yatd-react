import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}

export type StyledButtonProps = {
  $variant?: ButtonProps['variant'];
};

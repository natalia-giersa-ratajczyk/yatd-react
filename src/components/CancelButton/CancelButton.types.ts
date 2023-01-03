import { MouseEvent } from 'react';

export interface CancelButtonProps {
  clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
}

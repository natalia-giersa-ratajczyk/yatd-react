import { ChangeEvent, FocusEvent } from 'react';

export interface InputProps {
  id: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  blurHandler?: (event: FocusEvent<HTMLInputElement>) => void;
}

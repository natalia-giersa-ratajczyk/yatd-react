import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

export interface InputProps {
  id: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  keyDownHandler?: (event: KeyboardEvent<HTMLInputElement>) => void;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  blurHandler?: (event: FocusEvent<HTMLInputElement>) => void;
}

export type StyledInputProps = {
  $disabled?: InputProps['disabled'];
};

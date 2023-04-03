import { forwardRef } from 'react';

import * as Styles from './Input.styles';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, value, changeHandler = () => {}, blurHandler, keyDownHandler, disabled = false }, ref) => {
    return (
      <Styles.Input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        ref={ref}
        onChange={changeHandler}
        onBlur={blurHandler}
        disabled={disabled}
        onKeyDown={keyDownHandler}
        $disabled={disabled}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;

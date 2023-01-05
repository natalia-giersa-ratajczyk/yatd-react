import { forwardRef } from 'react';

import styles from './Input.module.css';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, value, changeHandler = () => {}, blurHandler, disabled = false }, ref) => {
    const disabledStyles = disabled ? styles['input-disabled'] : '';

    return (
      <input
        className={`${styles.input} ${disabledStyles}`}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        ref={ref}
        onChange={changeHandler}
        onBlur={blurHandler}
        disabled={disabled}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;

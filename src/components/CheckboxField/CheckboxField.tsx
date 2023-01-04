import { forwardRef } from 'react';

import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';

import styles from './CheckboxField.module.css';
import { CheckboxFieldProps } from './CheckboxField.types';

const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (
    {
      id,
      name,
      placeholder,
      value,
      checked,
      changeHandler,
      blurHandler,
      isActive = false,
      disabled = false,
      clickHandler,
    },
    ref,
  ) => {
    return (
      <div className={styles['checkbox-field']}>
        <Checkbox
          id={id}
          name={name}
          isActive={isActive}
          checked={checked}
          disabled={disabled}
          clickHandler={clickHandler}
        />
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          ref={ref}
          changeHandler={changeHandler}
          blurHandler={blurHandler}
          disabled={disabled}
        />
      </div>
    );
  },
);

CheckboxField.displayName = 'CheckboxField';

export default CheckboxField;

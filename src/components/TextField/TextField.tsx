import { ForwardedRef, forwardRef } from 'react';

import Typography from '@/components/Typography/Typography';

import styles from './TextField.module.css';
import { TextFieldProps } from './TextField.types';

const TextFieldInner = (
  { id, name, label, value, placeholder, onChange }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div className={styles.textfield}>
      <label htmlFor={id}>
        <Typography text={label} variant="body" renderAs="span" />
      </label>
      <input type="text" id={id} name={name} value={value} placeholder={placeholder} ref={ref} onChange={onChange} />
    </div>
  );
};

const TextField = forwardRef(TextFieldInner);

export default TextField;

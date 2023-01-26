import { ForwardedRef, forwardRef } from 'react';

import Typography from '@/components/Typography/Typography';

import * as Styles from './TextField.styles';
import { TextFieldProps } from './TextField.types';

const TextFieldInner = (
  { id, name, label, value, placeholder, onChange }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <Styles.TextField>
      <label htmlFor={id}>
        <Typography text={label} variant="body" />
      </label>
      <Styles.Input
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
      />
    </Styles.TextField>
  );
};

const TextField = forwardRef(TextFieldInner);

export default TextField;

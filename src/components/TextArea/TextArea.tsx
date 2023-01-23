import { ForwardedRef, forwardRef } from 'react';

import Typography from '@/components/Typography/Typography';

import styles from './TextArea.module.css';
import { TextAreaProps } from './TextArea.types';

const TextAreaInner = (
  { id, name, label, value, placeholder, onChange }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  return (
    <div className={styles.textarea}>
      <label htmlFor={id}>
        <Typography text={label} variant="body" renderAs="span" />
      </label>
      <textarea id={id} name={name} value={value} placeholder={placeholder} ref={ref} onChange={onChange} />
    </div>
  );
};

const TextArea = forwardRef(TextAreaInner);

export default TextArea;

import { ForwardedRef, forwardRef } from 'react';

import Typography from '@/components/Typography/Typography';

import * as Styles from './TextArea.styles';
import { TextAreaProps } from './TextArea.types';

const TextAreaInner = (
  { id, name, label, value, placeholder, onChange }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  return (
    <Styles.Wrapper>
      <label htmlFor={id}>
        <Typography text={label} variant="body" />
      </label>
      <Styles.TextArea id={id} name={name} value={value} placeholder={placeholder} ref={ref} onChange={onChange} />
    </Styles.Wrapper>
  );
};

const TextArea = forwardRef(TextAreaInner);

export default TextArea;

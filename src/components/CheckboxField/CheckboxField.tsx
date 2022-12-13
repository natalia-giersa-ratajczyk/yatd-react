import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';

import styles from './CheckboxField.module.css';
import { CheckboxFieldProps } from './CheckboxField.types';

const CheckboxField = ({ id, name, placeholder, value, changeHandler, blurHandler }: CheckboxFieldProps) => {
  return (
    <div className={styles['checkbox-field']}>
      <Checkbox id={id} name={name} />
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        changeHandler={changeHandler}
        blurHandler={blurHandler}
      />
    </div>
  );
};

export default CheckboxField;

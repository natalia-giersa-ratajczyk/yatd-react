import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';

import * as Styles from './CheckboxField.styles';
import { CheckboxFieldProps } from './CheckboxField.types';

const CheckboxField = ({
  id,
  name,
  placeholder,
  value,
  checked,
  changeHandler,
  blurHandler,
  keyDownHandler,
  isActive = false,
  disabled = false,
  clickHandler,
}: CheckboxFieldProps) => {
  return (
    <Styles.CheckboxField>
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
        changeHandler={changeHandler}
        blurHandler={blurHandler}
        keyDownHandler={keyDownHandler}
        disabled={disabled}
      />
    </Styles.CheckboxField>
  );
};

export default CheckboxField;

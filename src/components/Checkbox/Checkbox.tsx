import { useState } from 'react';

import CheckIcon from '@/assets/icons/check.svg';

import * as Styles from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({
  id,
  name,
  checked = false,
  disabled = false,
  isActive = false,
  clickHandler = () => {},
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleHandler = () => {
    setIsChecked((previousState) => !previousState);
  };

  return (
    <Styles.Label htmlFor={id} $checked={isChecked} $disabled={disabled} $isActive={isActive}>
      <Styles.Icon>
        <CheckIcon />
      </Styles.Icon>

      <Styles.Input
        id={id}
        name={name}
        type="checkbox"
        disabled={disabled}
        onChange={toggleHandler}
        onClick={() => clickHandler(id)}
      />
    </Styles.Label>
  );
};

export default Checkbox;

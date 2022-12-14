import { useState } from 'react';

import CheckIcon from '@/assets/icons/check.svg';

import styles from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({ id, name, checked = false, disabled = false, isActive = false }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleHandler = () => {
    setIsChecked((previousState) => !previousState);
  };

  const checkedStyles = isChecked ? styles['checkbox-label-checked'] : '';

  const disabledStyles = disabled ? styles['checkbox-label-disabled'] : '';

  const activeStyles = isActive ? styles['checkbox-label-active'] : '';

  return (
    <label className={`${styles['checkbox-label']} ${checkedStyles} ${disabledStyles} ${activeStyles}`} htmlFor={id}>
      <span className={styles.icon}>
        <CheckIcon />
      </span>

      <input id={id} name={name} type="checkbox" disabled={disabled} onChange={toggleHandler} />
    </label>
  );
};

export default Checkbox;

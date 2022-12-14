import styles from './Input.module.css';
import { InputProps } from './Input.types';

const Input = ({ id, name, placeholder, value, changeHandler, blurHandler, disabled = false }: InputProps) => {
  const disabledStyles = disabled ? styles['input-disabled'] : '';

  return (
    <input
      className={`${styles.input} ${disabledStyles}`}
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      onBlur={blurHandler}
      disabled={disabled}
    />
  );
};

export default Input;

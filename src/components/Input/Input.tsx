import styles from './Input.module.css';
import { InputProps } from './Input.types';

const Input = ({ id, name, placeholder, value, changeHandler, blurHandler }: InputProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  );
};

export default Input;

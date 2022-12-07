import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button = ({ color = 'primary', onClick, children }: ButtonProps) => {
  return (
    <button type="button" className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

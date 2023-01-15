import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button = ({
  children,
  onClick,
  disabled = false,
  icon,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;

import * as Styles from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({ children, onClick, disabled = false, icon, variant = 'primary', type = 'button' }: ButtonProps) => {
  return (
    <Styles.Button type={type} onClick={onClick} disabled={disabled} $variant={variant}>
      {children}
      {icon}
    </Styles.Button>
  );
};

export default Button;

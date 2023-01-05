import { Link } from 'react-router-dom';

import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button = ({ link, text }: ButtonProps) => {
  return (
    <button className={styles.button}>
      <Link to={link} className={styles.link}>
        {text}
      </Link>
    </button>
  );
};

export default Button;

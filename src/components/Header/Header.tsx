import Button from '@/components/Button';
import Logo from '@/components/Logo';

import styles from './Header.module.css';
import { HeaderProps } from './Header.types';

const Header = ({ button }: HeaderProps) => {
  const { children, onClick } = button;

  return (
    <div className={styles.header}>
      <Logo />
      <Button onClick={onClick} variant="secondary">
        {children}
      </Button>
    </div>
  );
};

export default Header;

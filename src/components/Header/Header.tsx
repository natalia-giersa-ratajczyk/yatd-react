import Button from '@/components/Button';
import Logo from '@/components/Logo';

import styles from './Header.module.css';
import { HeaderProps } from './Header.types';

const Header = ({ button }: HeaderProps) => {
  const { link, text } = button;

  return (
    <div className={styles.header}>
      <Logo />
      <Button link={link} text={text} />
    </div>
  );
};

export default Header;

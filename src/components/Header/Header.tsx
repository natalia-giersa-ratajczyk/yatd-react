import Button from '@/components/Button';
import Logo from '@/components/Logo';

import * as Styles from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = ({ button }: HeaderProps) => {
  const { children, onClick } = button;

  return (
    <Styles.Header>
      <Logo />
      <Button onClick={onClick} variant="secondary">
        {children}
      </Button>
    </Styles.Header>
  );
};

export default Header;

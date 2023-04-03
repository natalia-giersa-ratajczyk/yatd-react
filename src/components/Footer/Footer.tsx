import CoffeeIcon from '@/assets/icons/coffee.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import Typography from '@/components/Typography';

import * as Styles from './Footer.styles';

const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.Box $side="left">
        <Typography text="Crafted with" color="grayColor" variant="small" />
        <CoffeeIcon />
        <Typography text="by Furu.DEV" color="grayColor" variant="small" />
      </Styles.Box>
      <Styles.Box $side="right">
        <Typography text="Coded with" color="grayColor" variant="small" />
        <HeartIcon />
        <Typography text="by N.Giersa" color="grayColor" variant="small" />
      </Styles.Box>
    </Styles.Footer>
  );
};

export default Footer;

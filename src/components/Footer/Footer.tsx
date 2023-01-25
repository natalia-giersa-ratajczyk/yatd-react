import CoffeeIcon from '@/assets/icons/coffee.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import Typography from '@/components/Typography';

import * as Styles from './Footer.styles';

const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.Box $side="left">
        <Typography text="Crafted with" color="gray" variant="small" />
        <CoffeeIcon />
        <Typography text="by Furu.DEV" color="gray" variant="small" />
      </Styles.Box>
      <Styles.Box $side="right">
        <Typography text="Coded with" color="gray" variant="small" />
        <HeartIcon />
        <Typography text="by N.Giersa" color="gray" variant="small" />
      </Styles.Box>
    </Styles.Footer>
  );
};

export default Footer;

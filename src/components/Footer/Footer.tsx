import CoffeeIcon from '@/assets/icons/coffee.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import Typography from '@/components/Typography';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles['footer-box']} ${styles['footer-left-box']}`}>
        <CoffeeIcon />
        <Typography text="Crafted with" color="accent" variant="body" />
        <span>by Furu.DEV</span>
      </div>
      <div className={`${styles['footer-box']} ${styles['footer-right-box']}`}>
        <span>Coded with</span>
        <HeartIcon />
        <Typography text="by N.Giersa" color="text" variant="body" renderAs="p" />
      </div>
    </footer>
  );
};

export default Footer;

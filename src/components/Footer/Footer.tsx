import CoffeeIcon from '@/assets/icons/coffee.svg';
import HeartIcon from '@/assets/icons/heart.svg';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles['footer-box']} ${styles['footer-left-box']}`}>
        <span>Crafted with</span>
        <CoffeeIcon />
        <span>by Furu.DEV</span>
      </div>
      <div className={`${styles['footer-box']} ${styles['footer-right-box']}`}>
        <span>Coded with</span>
        <HeartIcon />
        <span>by N.Giersa</span>
      </div>
    </footer>
  );
};

export default Footer;

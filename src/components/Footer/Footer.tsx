import CoffeeIcon from '@/assets/icons/coffee.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import Typography from '@/components/Typography';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles['footer-box']} ${styles['footer-left-box']}`}>
        <Typography text="Crafted with" color="gray" variant="small" />
        <CoffeeIcon />
        <Typography text="by Furu.DEV" color="gray" variant="small" />
      </div>
      <div className={`${styles['footer-box']} ${styles['footer-right-box']}`}>
        <Typography text="Coded with" color="gray" variant="small" />
        <HeartIcon />
        <Typography text="by N.Giersa" color="gray" variant="small" />
      </div>
    </footer>
  );
};

export default Footer;

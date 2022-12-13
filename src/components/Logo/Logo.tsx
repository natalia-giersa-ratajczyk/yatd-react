import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles['logo-box']}>
      <h1 className={styles.logo}>
        YA<span>TD</span>.
      </h1>
    </div>
  );
};

export default Logo;

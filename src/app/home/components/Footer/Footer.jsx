"use client";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <div className={styles.name}>YESSER BARKA</div>
        <button className={styles.contactButton}>CONTACT ME</button>
      </div>

      <div className={styles.imageGrid}>
        <div className={styles.imageWrapper}>
          <img src="/test.jpg" alt="Footer 1" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/test.jpg" alt="Footer 2" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/test.jpg" alt="Footer 3" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/test.jpg" alt="Footer 4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
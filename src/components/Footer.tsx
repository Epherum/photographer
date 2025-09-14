"use client";
import Image from "next/image";
import TransitionLink from "./TransitionLink";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <Image
          src="/yesser-Logo.svg"
          alt="Yesser Barka"
          width={120}
          height={64}
          className={styles.logo}
        />
        <TransitionLink href="/contact" className={styles.contactButton}>
          CONTACT ME
        </TransitionLink>
      </div>

      <div className={styles.linksSection}>
        <TransitionLink href="/" className={styles.link}>
          HOME
        </TransitionLink>
        <TransitionLink href="/portfolio" className={styles.link}>
          PORTFOLIO
        </TransitionLink>
        <TransitionLink href="/about" className={styles.link}>
          ABOUT
        </TransitionLink>
        <TransitionLink href="/contact" className={styles.link}>
          CONTACT
        </TransitionLink>
      </div>

      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img src="/footer/1.webp" alt="Footer 1" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/footer/2.webp" alt="Footer 2" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/footer/3.webp" alt="Footer 3" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/footer/4.webp" alt="Footer 4" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/footer/5.webp" alt="Footer 5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
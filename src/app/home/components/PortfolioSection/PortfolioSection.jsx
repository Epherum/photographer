"use client";
import TransitionLink from '@/components/TransitionLink';
import styles from './PortfolioSection.module.css';

const PortfolioSection = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.headline}>PORTFOLIO</h2>

        <div className={styles.imageGrid}>
          <div className={styles.topRow}>
            <div className={styles.imageWrapper}>
              <img src="/images/home/portfolio/1.webp" alt="Portfolio 1" />
            </div>
            <div className={styles.imageWrapper}>
              <img src="/images/home/portfolio/2.webp" alt="Portfolio 2" />
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.imageWrapper}>
              <img src="/images/home/portfolio/3.webp" alt="Portfolio 3" />
            </div>
          </div>
        </div>

        <TransitionLink href="/portfolio" className={styles.portfolioButton}>
          VIEW FULL PORTFOLIO
        </TransitionLink>
      </div>
    </section>
  );
};

export default PortfolioSection;
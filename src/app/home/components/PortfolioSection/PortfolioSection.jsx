"use client";
import styles from './PortfolioSection.module.css';

const PortfolioSection = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.headline}>PORTFOLIO</h2>

        <div className={styles.imageGrid}>
          <div className={styles.topRow}>
            <div className={styles.imageWrapper}>
              <img src="/test.jpg" alt="Portfolio 1" />
            </div>
            <div className={styles.imageWrapper}>
              <img src="/test.jpg" alt="Portfolio 2" />
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.imageWrapper}>
              <img src="/test.jpg" alt="Portfolio 3" />
            </div>
          </div>
        </div>

        <button className={styles.portfolioButton}>VIEW FULL PORTFOLIO</button>
      </div>
    </section>
  );
};

export default PortfolioSection;
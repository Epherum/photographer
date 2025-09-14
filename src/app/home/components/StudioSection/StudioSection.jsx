"use client";
import styles from './StudioSection.module.css';

const StudioSection = () => {
  return (
    <section className={styles.studio}>
      <div className={styles.container}>
        <p className={styles.subtext}>THE STUDIO</p>
        <div className={styles.headlineContainer}>
          <h2 className={styles.headline}>
            MASTERFUL <br /> PHOTOGRAPHY<br />
            <span>in</span> SPECTACULAR <br /> DESTINATIONS
          </h2>
          <img
            src="/yesser-logo-alt.svg"
            alt="Yesser Logo"
            className={styles.overlayLogo}
          />
        </div>

        <div className={styles.videoContainer}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/home/studio-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className={styles.description}>
          For a moment, time stands still a memory is captured, a look is immortalized,
          and pure magic happens.
        </p>

        <button className={styles.aboutButton}>ABOUT ME</button>
      </div>
    </section>
  );
};

export default StudioSection;
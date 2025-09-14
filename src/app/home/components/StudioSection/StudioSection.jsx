"use client";
import styles from './StudioSection.module.css';

const StudioSection = () => {
  return (
    <section className={styles.studio}>
      <div className={styles.container}>
        <p className={styles.subtext}>THE STUDIO</p>
        <h2 className={styles.headline}>
          MASTERFUL PHOTOGRAPHY<br />
          IN SPECTACULAR DESTINATIONS
        </h2>

        <div className={styles.videoContainer}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/critical-video.mp4" type="video/mp4" />
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
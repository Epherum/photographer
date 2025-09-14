"use client";
import styles from './ParallaxVideo.module.css';

const ParallaxVideo = () => {
  return (
    <section className={styles.parallax}>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/parallax-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ParallaxVideo;
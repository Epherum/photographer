"use client";
import { useEffect, useRef } from 'react';
import styles from './ParallaxVideo.module.css';

const ParallaxVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && containerRef.current) {
        const scrollY = window.scrollY;
        const containerTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        // Check if the parallax section is in viewport
        if (scrollY + windowHeight > containerTop && scrollY < containerTop + containerHeight) {
          // Calculate parallax offset (video moves slower than scroll)
          const parallaxSpeed = 0.5;
          const yPos = (scrollY - containerTop) * parallaxSpeed;
          videoRef.current.style.transform = `translateY(${yPos}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.parallax} ref={containerRef}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/home/parallax-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ParallaxVideo;
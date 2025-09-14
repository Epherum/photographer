"use client";
import styles from './TestimonialSection.module.css';

const TestimonialSection = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.subtext}>kind words</p>
          <blockquote className={styles.quote}>
            "Yesser's style is so authentic, timeless, and full of emotion. He captures moments in a way that feels natural but still unforgettable. His photos don't just look beautiful—they bring back the feelings of that exact moment every time you see them"
          </blockquote>
        </div>
        <div className={styles.imageContent}>
          <img src="/test.jpg" alt="Testimonial" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
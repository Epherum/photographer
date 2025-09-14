"use client";

import { motion } from "framer-motion";
import AnimatedWord from "@/components/animation/AnimatedWord";
import Navigation from "@/components/Navigation";
import { easings } from "@/utils/easings";
import styles from "./about.module.css";

const textContainerVariants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1, ease: easings.easeOut } },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easings.easeOut }
  },
};

export default function About() {
  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          <motion.h1
            className={styles.title}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatedWord variants={wordVariants}>About</AnimatedWord>{" "}
            <AnimatedWord variants={wordVariants}>the</AnimatedWord>
            <br />
            <AnimatedWord variants={wordVariants}>photographer</AnimatedWord>
          </motion.h1>

          <div className={styles.grid}>
            <motion.div
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className={styles.cardTitle}>
                My Journey
              </h2>
              <p className={styles.cardText}>
                With over 8 years of experience in photography, I've had the
                privilege of capturing thousands of precious moments. From
                intimate weddings to stunning landscapes, my passion lies in
                telling stories through the lens.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className={styles.cardTitle}>
                My Approach
              </h2>
              <p className={styles.cardText}>
                I believe every photograph should evoke emotion and preserve
                memories that last a lifetime. My approach combines technical
                expertise with creative vision to capture authentic moments
                and genuine connections.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className={styles.cardTitle}>
                Services Offered
              </h2>
              <p className={styles.cardText}>
                Specializing in wedding photography, portrait sessions, and
                nature photography. I work closely with clients to understand
                their vision and deliver images that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className={styles.cardTitle}>
                Equipment & Quality
              </h2>
              <p className={styles.cardText}>
                Using professional-grade Canon equipment and post-processing
                techniques to ensure every image meets the highest standards.
                Attention to detail and commitment to excellence in every shot.
              </p>
            </motion.div>
          </div>

          <motion.div
            className={styles.finalSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easings.easeOut }}
            viewport={{ once: true }}
          >
            <h2 className={styles.finalTitle}>
              Let's Create Something Beautiful Together
            </h2>
            <p className={styles.finalText}>
              Every moment is unique, and every photo tells a story. I'm passionate
              about capturing those fleeting moments that become cherished memories.
              Let's work together to create something truly special.
            </p>
          </motion.div>

          <div className={styles.spacer}></div>
        </main>
      </div>
    </>
  );
}
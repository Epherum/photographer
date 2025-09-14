// src/components/animation/AnimatedWord.tsx
"use client";

import { motion, Variants } from "framer-motion";
import styles from "./AnimatedWord.module.css";

interface AnimatedWordProps {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
}

const AnimatedWord = ({ children, className, variants }: AnimatedWordProps) => {
  return (
    <span className={styles.wordWrapper}>
      <motion.span
        variants={variants}
        className={className}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default AnimatedWord;
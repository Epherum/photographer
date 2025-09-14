"use client";

import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <TransitionLink
          href="/"
          className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
        >
          Home
        </TransitionLink>
        <TransitionLink
          href="/portfolio"
          className={`${styles.navLink} ${pathname.startsWith('/portfolio') ? styles.active : ''}`}
        >
          Portfolio
        </TransitionLink>
        <TransitionLink
          href="/about"
          className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
        >
          About
        </TransitionLink>
        <TransitionLink
          href="/contact"
          className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
        >
          Contact
        </TransitionLink>
      </div>
    </nav>
  );
}
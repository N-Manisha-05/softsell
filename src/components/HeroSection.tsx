// src/components/HeroSection.tsx
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hheroSection}>
      <h1 className={styles.hheroTitle}>
        Turn Your Unused Software Into Cash
      </h1>

     

      <p className={styles.hheroText}>
        We help you sell your unused software licenses in minutes.
      </p>

      <button className={styles.hquoteButton}>
        Get a Quote
      </button>
    </section>
  );
}

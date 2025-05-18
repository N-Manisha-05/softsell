import styles from "./HeroSection.module.css";
import { FaRocket } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className={styles.hheroSection}>
      <div className={styles.iconWrapper}>
        <FaRocket className={styles.icon} />
      </div>

      <h1 className={styles.hheroTitle}>
        Turn Your Unused Software Into Cash
      </h1>

      <p className={styles.hheroText}>
        SoftSell helps you quickly and securely sell your unused software licenses — saving time and putting money back in your pocket.
      </p>

      <button className={styles.hquoteButton}>
        Get a Quote
      </button>
    </section>
  );
}

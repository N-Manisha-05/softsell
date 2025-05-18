import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>SoftSell</div>

        <ul className={styles.links}>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#why-us">Why Choose Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className={styles.socials}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
      </div>
    </footer>
  );
}

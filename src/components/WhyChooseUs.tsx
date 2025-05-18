import styles from './WhyChooseUs.module.css';
import { FaBolt, FaShieldAlt, FaTags, FaStar } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaBolt size={28} color="#3b82f6" />,
      title: "Fast & Easy",
      desc: "Skip the complexity. List your software license in under a minute and let us handle the rest. It's smooth, efficient, and beginner-friendly.",
    },
    {
      icon: <FaShieldAlt size={28} color="#10b981" />,
      title: "Secure Transactions",
      desc: "Our platform uses advanced encryption and secure payment systems to guarantee safe and private license transfers—your peace of mind is our priority.",
    },
    {
      icon: <FaTags size={28} color="#f59e0b" />,
      title: "Get the Best Value",
      desc: "We ensure you get the most out of your license resale with smart pricing and high market demand—maximize your return without compromising speed.",
    },
    {
      icon: <FaStar size={28} color="#fbbf24" />,
      title: "Proven & Trusted",
      desc: "Over 1,000 users have rated SoftSell 5-stars for reliability, support, and results. You’re in good hands with a community that vouches for us.",
    },
  ];

  return (
    <section id="why-us" className={styles.section}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <div className={styles.grid}>
        {features.map((feature, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

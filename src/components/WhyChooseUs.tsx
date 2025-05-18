import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const features = [
    { title: "Fast & Easy", desc: "Sell your license in just a few clicks." },
    { title: "Secure", desc: "All transactions are encrypted and safe." },
    { title: "Best Prices", desc: "We offer the highest resale value." },
    { title: "Trusted", desc: "Rated 5-stars by 1,000+ users." },
  ];

  return (
    <section id="why-us" className={styles.section}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

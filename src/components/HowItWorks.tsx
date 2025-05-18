import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const steps = [
    { title: "Upload License", emoji: "📤" },
    { title: "Get Valuation", emoji: "💰" },
    { title: "Get Paid", emoji: "🏦" },
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      <h2 className={styles.title}>How It Works</h2>
      <div className={styles.grid}>
        {steps.map((step, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.emoji}>{step.emoji}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "IT Manager",
      company: "TechCorp",
      quote:
        "SoftSell made it incredibly easy to offload our unused licenses. Highly recommend!",
    },
    {
      name: "John Smith",
      role: "Freelancer",
      company: "IndieSoft",
      quote:
        "Quick, secure, and great customer service. I’ll definitely use SoftSell again!",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>"{t.quote}"</p>
            <p className={styles.name}>{t.name}</p>
            <p className={styles.roleCompany}>
              {t.role}, {t.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

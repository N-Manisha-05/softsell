import styles from "./Testimonials.module.css";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "IT Manager",
      company: "TechCorp",
      quote:
        "SoftSell made it incredibly easy to offload our unused licenses quickly and securely. The platform’s intuitive interface saved us valuable time and effort. Highly recommend to any business!",
    },
    {
      name: "John Smith",
      role: "Freelancer",
      company: "IndieSoft",
      quote:
        "Quick, secure, and great customer service. The support team was very responsive and helped me through every step. I’ll definitely use SoftSell again for my software needs!",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <FaQuoteLeft className={styles.quoteIcon} />
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

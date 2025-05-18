// "use client";

// import { useState } from "react";
// import styles from "./ContactForm.module.css";


// export default function ContactForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     licenseType: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Message sent! (Just a demo)");
//   };

//   return (
//     <section id="contact" className={styles.csection}>
//       <h2  className={styles.ctitle}>Get in Touch</h2>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           required
//           onChange={handleChange}
//           className={styles.cinput}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           required
//           onChange={handleChange}
//           className={styles.cinput}
//         />
//         <input
//           type="text"
//           name="company"
//           placeholder="Company Name"
//           required
//           onChange={handleChange}
//           className={styles.cinput}
//         />
//         <select
//           name="licenseType"
//           required
//           onChange={handleChange}
//           className={styles.cselect}
//         >
//           <option value="">Select License Type</option>
//           <option value="Windows">Windows</option>
//           <option value="Adobe">Adobe</option>
//           <option value="Other">Other</option>
//         </select>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows={4}
//           required
//           onChange={handleChange}
//           className={styles.ctextarea}
//         />
//         <button type="submit" className={styles.cbutton}>
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Just a demo)");
    setForm({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className={styles.csection}>
      <div className={styles.contactWrapper}>
        {/* Left side - Get in Touch */}
        <div className={styles.contactInfo}>
          <h2 className={styles.ctitle}>Get in Touch</h2>
          <p className={styles.infoText}>
            Ready to turn your unused software licenses into cash? Fill out the form and our expert team will provide a free valuation within 24 hours.
          </p>

          <div className={styles.contactDetails}>
            <div>
              <h3>Email Us</h3>
              <a href="mailto:info@softsell.example" className={styles.contactLink}>
                info@softsell.example
              </a>
            </div>

            <div>
              <h3>Call Us</h3>
              <p>(555) 123-4567</p>
            </div>

            <div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9am - 5pm EST</p>
              <p>Weekend: Closed</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.formTitle}>Request a Free Valuation</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className={styles.cinput}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className={styles.cinput}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className={styles.cinput}
          />
          <select
            name="licenseType"
            required
            value={form.licenseType}
            onChange={handleChange}
            className={styles.cselect}
          >
            <option value="">Select License Type</option>
            <option value="Windows">Windows</option>
            <option value="Adobe">Adobe</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us about the software licenses you'd like to sell..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={styles.ctextarea}
          />
          <button type="submit" className={styles.cbutton}>
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

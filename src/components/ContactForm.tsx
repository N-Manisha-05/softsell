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
  };

  return (
    <section id="contact" className={styles.csection}>
      <h2  className={styles.ctitle}>Get in Touch</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          className={styles.cinput}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className={styles.cinput}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          required
          onChange={handleChange}
          className={styles.cinput}
        />
        <select
          name="licenseType"
          required
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
          placeholder="Your Message"
          rows={4}
          required
          onChange={handleChange}
          className={styles.ctextarea}
        />
        <button type="submit" className={styles.cbutton}>
          Send Message
        </button>
      </form>
    </section>
  );
}

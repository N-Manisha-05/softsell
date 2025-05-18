"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">SoftSell</Link>
      </div>
      <div className={styles.links}>
        <Link href="#contact">Contact</Link>
        <Link href="#why-us">Why Choose Us</Link>
        <Link href="#how-it-works">How It Works</Link>
        <button onClick={toggleTheme} className={styles.toggleBtn} aria-label="Toggle Theme">
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

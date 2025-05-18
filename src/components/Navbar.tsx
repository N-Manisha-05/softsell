'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">SoftSell</Link>
      </div>

      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link href="#why-us" onClick={() => setMenuOpen(false)}>Why Choose Us</Link>
        <Link href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
        <Link href="#chat" onClick={() => setMenuOpen(false)}>Chat AI</Link>
        <button onClick={toggleTheme} className={styles.toggleBtn} aria-label="Toggle Theme">
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

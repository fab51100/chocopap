// Header.js
import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <a href="/">
        <img className={styles.logo} src="../img/logo.png" />
      </a>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/boutique">Boutique</a>
        </li>
        <li>
          <a href="/panier">
            <FaShoppingCart />
          </a>
        </li>
      </ul>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
        <a href="/">Accueil</a>
        <a href="/boutique">Boutique</a>
        <a href="/panier">
          Panier <FaShoppingCart />
        </a>
      </nav>
    </header>
  );
};

export default Header;

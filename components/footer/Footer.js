// Footer.js
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h1>Choco Pap</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum
          <br />
          dolor sit amet
        </p>
      </div>
      <div>
        <h1>Contact</h1>
        <p>
          Adresse : 51 rue du chocolat 75000 Paris
          <br />
          Téléphone: 01 23 45 67 89
          <br />
          Horaires: 9h00-17h00 du Lundi au vendredi
        </p>
      </div>
      <div className={styles.icons}>
        <a
          className={styles.rs}
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={styles.icon} />
        </a>
        <a
          className={styles.rs}
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className={styles.icon} />
        </a>
        <a
          className={styles.rs}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

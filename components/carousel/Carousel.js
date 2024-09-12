// Carrousel.js
import React, { useState } from "react";
import styles from "./carrousel.module.css";

const images = ["/img/accueil1.jpg", "/img/accueil2.jpg", "/img/accueil3.jpg"];

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className={styles.carouselItem} key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={styles.carouselImage}
              />
              <div className={styles.overlay}>
                <h1 className={styles.title}>Choco Pap</h1>
                <div className={styles.space}></div>
                <a href="/boutique" className={styles.button}>
                  Voir la Boutique
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.prevButton} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleSelect(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;

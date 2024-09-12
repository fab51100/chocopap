// Filtres.js
import React, { useState, useEffect } from "react";
import styles from "./filtres.module.css";

const Filtres = ({ onFilterChange, isMobile }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(!isMobile);
  const [isPriceOpen, setIsPriceOpen] = useState(!isMobile);
  const [isNotesOpen, setIsNotesOpen] = useState(!isMobile);

  const categories = [
    "blanc",
    "lait",
    "noir",
    "noix",
    "fruit",
    "caramel",
    "liqueur",
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handleFilterChange = () => {
    onFilterChange({
      categories: selectedCategories,
      minPrice,
      maxPrice,
      minRating,
      maxRating,
    });
  };

  useEffect(handleFilterChange, [
    selectedCategories,
    minPrice,
    maxPrice,
    minRating,
    maxRating,
  ]);

  return (
    <div className={styles.filtresContainer}>
      <div className={styles.filtresTitle}>Filtres</div>

      <div className={styles.filterGroup}>
        <h3 onClick={() => isMobile && setIsCategoriesOpen(!isCategoriesOpen)}>
          Catégories {isMobile && (isCategoriesOpen ? "-" : "+")}
        </h3>
        {(isCategoriesOpen || !isMobile) && (
          <div className={styles.filterOptions}>
            {categories.map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  value={category}
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterGroup}>
        <h3 onClick={() => isMobile && setIsPriceOpen(!isPriceOpen)}>
          Prix {isMobile && (isPriceOpen ? "-" : "+")}
        </h3>
        {(isPriceOpen || !isMobile) && (
          <div className={styles.filterOptions}>
            <label>
              Prix min:
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
            </label>
            <label>
              Prix max:
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </label>
          </div>
        )}
      </div>

      <div className={styles.filterGroup}>
        <h3 onClick={() => isMobile && setIsNotesOpen(!isNotesOpen)}>
          Notes {isMobile && (isNotesOpen ? "-" : "+")}
        </h3>
        {(isNotesOpen || !isMobile) && (
          <div className={styles.filterOptions}>
            <label>
              Note min:
              <input
                type="number"
                value={minRating}
                min="0"
                max="5"
                onChange={(e) => setMinRating(Number(e.target.value))}
              />
            </label>
            <label>
              Note max:
              <input
                type="number"
                value={maxRating}
                min="0"
                max="5"
                onChange={(e) => setMaxRating(Number(e.target.value))}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filtres;

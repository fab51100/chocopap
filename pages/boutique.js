// Boutique.js
import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Filtres from "../components/filtres/Filtres";
import styles from "../styles/boutique.module.css";
import productsData from "../public/data/products.json";

const Boutique = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Charger les produits depuis le JSON
    setProducts(productsData);
    setFilteredProducts(productsData.slice(0, 9)); // Affiche les 9 premiers produits par défaut

    // Charger le panier depuis le localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    // Vérifier si l'appareil est mobile
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateMedia();
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  useEffect(() => {
    // Sauvegarder le panier dans le localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleFilterChange = (filters) => {
    const { categories, minPrice, maxPrice, minRating, maxRating } = filters;

    const filtered = products.filter((product) => {
      const isCategoryMatch =
        categories.length === 0 ||
        categories.some((category) => product.category[category]);
      const isPriceMatch =
        product.price >= minPrice && product.price <= maxPrice;
      const isRatingMatch =
        product.note >= minRating && product.note <= maxRating;

      return isCategoryMatch && isPriceMatch && isRatingMatch;
    });

    setFilteredProducts(filtered.slice(0, 9)); // Réaffiche les 9 premiers produits filtrés
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>BOUTIQUE</h1>
        <div className={styles.contentWrapper}>
          <Filtres onFilterChange={handleFilterChange} isMobile={isMobile} />
          <div className={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <img
                    src={`/img/${product.image.replace("./images/", "")}`}
                    alt={product.title}
                    className={styles.productImage}
                  />
                  <div className={styles.productDetails}>
                    <h2>{product.title}</h2>
                    <p>
                      <strong>Prix :</strong> {product.price} €
                    </p>
                    <p>
                      <strong>Note :</strong> {product.note}/5
                    </p>
                    <button
                      className={styles.addToCartButton}
                      onClick={() => handleAddToCart(product)}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noProductsMessage}>
                Pas de produits dans cette catégorie actuellement.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Boutique;

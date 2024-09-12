import React from "react";
import { useCart } from "../context/CartContext";

const CartPopup = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-popup">
      <button onClick={onClose} className="close-button">
        ✖
      </button>
      <h2>Panier</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <button onClick={() => removeFromCart(item.id)}>✖</button>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.price} €</p>
          </div>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            min="1"
            max="9"
          />
        </div>
      ))}
      <h3>Total: {total.toFixed(2)} €</h3>
      <button onClick={clearCart}>Vider le panier</button>
      <button>Valider le panier</button>
    </div>
  );
};

export default CartPopup;

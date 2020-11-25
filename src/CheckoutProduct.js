import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkout-product">
      <img className="checkout-product_image" src={image} alt={title} />

      <div className="checkout-product_info">
        <p className="checkout-product_info_title">{title}</p>
        <p className="checkout-product_info_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product_info_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

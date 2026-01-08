import React, { useContext } from "react";
import toast from "react-hot-toast";

import {
  FaRegHeart,
  FaRegStarHalfStroke,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../components/context/CartContext";
export default function ProductInfo({ product }) {
  const { cartItems, addToCart } = useContext(CartContext);
   const isInCart = cartItems.some((i) => i.id === product.id);
  function handerlAddToCart() {
    addToCart(product);
    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />

        <div className="toast-content">
          <strong>{product.title}</strong>
          added to Cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              {" "}
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  }

  return (
    <>
      <div className="details_item">
        <h1 className="name">{product.title}</h1>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>

        <p className="price">$ {product.price}</p>

        <h5>
          Availability: <span>{product.availabilityStatus}</span>
        </h5>
        <h5>
          Brand: <span>{product.brand}</span>
        </h5>
        <p className="desc">{product.description}</p>
        <h5 className="stock">
          <span>Hurry Up! Only {product.stock} products left in stock.</span>{" "}
        </h5>
        <button className={`btn ${isInCart? "in-cart":""}`} onClick={handerlAddToCart}>
           {isInCart?"Item in Cart":"Add To Cart"} <TiShoppingCart />
        </button>
        <div className="icons">
          <span className={``}>
            <FaRegHeart />
          </span>
          <span>
            <FaShare />
          </span>
        </div>
      </div>
    </>
  );
}

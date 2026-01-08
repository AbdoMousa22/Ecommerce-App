// ICONS
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function Product({ item }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const isInCart = cartItems.some((i) => i.id === item.id);

  function handerlAddToCart() {
    addToCart(item);
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />

        <div className="toast-content">
          <strong>{item.title}</strong>
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
      <div className={`product ${isInCart ? "in-cart" : ""}`}>
        <Link to={`/products/${item.id}`}>
          <span className="status_cart">
            <FaCheck /> in cart
          </span>
          <div className="img_product">
            <img src={item.images[0]} alt="" />
          </div>

          <p className="name_product">{item.title}</p>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </div>
        </Link>
        <p className="price">
          <span>${item.price}</span>
        </p>
        <div className="icons">
          <span className="btn_addtocart" onClick={handerlAddToCart}>
            <FaCartArrowDown />
          </span>
          <span>
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

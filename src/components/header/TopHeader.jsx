import { Link } from "react-router-dom";

// CSS FILE
import "./header.css"
// ICONS
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function TopHeader() {
    const {cartItems}=useContext(CartContext);
  return (
     <div className="top_header">
        <div className="container">
            <Link className="logo"><img src="././public/img/logo.png" alt="Logo"/></Link>
            <form action="" className="search_box">
                <input type="text" name="search" id="search" placeholder="Search For Products" />
                <button type="submit">  <IoSearch /> </button>
            </form>
            <div className="header_icons">
                <div className="icon">
                    <CiHeart />
                    <span className="count">5</span>
                </div>
                <div className="icon">
                     <Link to='/cart'>
                        <FaCartPlus />
                        <span className="count">{cartItems.length}</span>
                     </Link>
                        
                </div>
            </div>
        </div>
     </div>
  )
}


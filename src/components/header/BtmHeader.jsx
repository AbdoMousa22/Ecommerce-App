// ICONS
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = [
  { title: "Home" , link : "/"},
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog",    link: "/blog" },
  { title: "Contact", link: "/contact" },
]


export default function BtmHeader() {
  const location=useLocation()
  const[categories,setCategories]=useState([]);
  const[isCategoryOpen,setIsCategoryOpen]=useState(false);

  useEffect(()=>{
    setIsCategoryOpen(false)
  },[location])
  
  useEffect(()=>{
    fetch("https://dummyjson.com/products/categories")
    .then((res)=>res.json())
    .then((data)=>setCategories(data));
  },[])
  return (
      <div className="btm_header">
        <div className="container">
          <nav className="nav">
            <div className="category_nav" >
              <div className="category_btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                <IoMenu className="one"/>
                <p>Browse Category</p>
                <IoMdArrowDropdown />
              </div>
              <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}  >
                  {categories.map((category) => (
                    <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
                  ))}
             </div>
            </div>
             <div className="nav_links">
                 {NavLinks.map((item) => (
                   <li className={location.pathname===item.link?"active":""} key={item.link}><Link to={item.link}>{item.title}</Link></li>
                 ))}
             </div>
          </nav>
          <div className="sign_regs_icon">
            <Link to="/"><PiSignInBold /></Link>
            <Link to="/"><FaUserPlus /></Link>
        </div>
        </div>
      </div>
  )
}

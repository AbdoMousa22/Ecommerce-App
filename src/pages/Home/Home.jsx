import {useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProduct from "../../components/slideproduct/SlideProduct";
import "./home.css"
import { CartContext } from "../../components/context/CartContext";

const categories = [
  // "beauty",
  // "fragrances",
  // "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
];



export default function Home() {

  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);

 

  useEffect(() => {
    const fetchProducts=async()=>{
      try{
        const results = await Promise.all(
          categories.map(async(category)=>{
            const res=await fetch(`https://dummyjson.com/products/category/${category}`)
            const data =await res.json();
            return {[category]:data.products}
          })
        )
        const productsData=Object.assign({},...results);
        setProducts(productsData)
      }catch(error){
        console.error("Error Fetching",error)
      }finally{
        setLoading(false)
      }
    }
  fetchProducts();
  }, []);

  
  return (
    <>
      <HeroSlider/>
      {
        loading?(<p>Loading ...</p>):
        (
          categories.map((category)=>(
            <SlideProduct key={category} data={products[category]} title={category.replace("-"," ")}/>
        
            ))
        )
    }
  
    </>
  )
}

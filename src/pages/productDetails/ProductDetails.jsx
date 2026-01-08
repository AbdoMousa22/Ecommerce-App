import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductImages from './ProductImages';

import './productDetails.css'
import ProductInfo from './ProductInfo';
import SlideProduct from '../../components/slideproduct/SlideProduct';
import ProductDetailsLoading from './ProductDetailsLoading';

export default function ProductDetails() {
    const {id}=useParams();

    const [product,setProduct]=useState();
    const [loading,setLoading]=useState(true);

    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

    useEffect(()=>{
        const fetchProduct=async()=>{
            try{
                const res=await fetch(`https://dummyjson.com/products/${id}`)
                const data= await res.json()
                setProduct(data)
                setLoading(false)
            }catch(error){
                console.log("Error",error)
            }

        }
        fetchProduct();
    },[id])



    useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);


 
   
   if(loading) return <ProductDetailsLoading/>
   if(!product) return <ProductDetailsLoading/>
     
  return (
    <> 
       <div>
        {loading ? (
          <ProductDetailsLoading/>
        ) : (
          <div className="item_details">
            <div className="container">
              <ProductImages product={product} />
              <ProductInfo product={product} />
            </div>
          </div>
        )}

        {loadingRelatedProducts ? (
        <ProductDetailsLoading/>
        ) : (
          <SlideProduct
            key={product.category}
            data={relatedProducts}
            title={product.category.replace("-", " ")}
          />
        )}
      </div> 
    </>
  )
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
// import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import Product from "../../components/slideProduct/Product";
import "./catogorypage.css";
export default function CategoryPage() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  //   console.log(category)
  const [categoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data.products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      <div className="category_products">
        {loading ? (
           <p>The Page is loading</p>
        ) : (
          <div className="container">
            <div className="top_slide">
              <h2>
                {category} : {categoryProducts.limit}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, voluptates?
              </p>
            </div>

            <div className="products">
              {categoryProducts.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

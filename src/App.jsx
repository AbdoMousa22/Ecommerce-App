import TopHeader from "./components/header/TopHeader";
import BtmHeader from "./components/header/BtmHeader";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import CategoryPage from "./pages/categorypage/CategoryPage";
function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
<Toaster position="bottom-right" reverseOrder={false}/>
<ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;

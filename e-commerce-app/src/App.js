import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"
import NavBar from "./components/navbar";
import Product from "./pages/product/product";
import Products from "./pages/products/products";
import { NotFound } from "./pages/not-found/not-found"
import Cart from "./pages/cart/cart";
import { useCart } from "./context/cart";


function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
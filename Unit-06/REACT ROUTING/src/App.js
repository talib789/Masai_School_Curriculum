import "./styles.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AllProducts from "./Components/AllProducts";
import ProductDetails from "./Components/ProductDetails";
import NotFound from "./Components/NotFound";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AllProducts" element={<AllProducts />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

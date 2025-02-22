import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

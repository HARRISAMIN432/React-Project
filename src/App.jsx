import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/product-detail" element={<ProductDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

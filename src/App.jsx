import "./App.css";
import Row from "./components/common/Row";
import TopHeader from "./components/Header/TopHeader";
import BottomHeader from "./components/Header/BottomHeader";
import HeroSection from "./components/Home/HeroSection";
import Container from "./components/common/Container";
import PopularProducts from "./components/Home/PopularProducts";
import BestSellerProducts from "./components/Home/BestSellerProducts";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <div className="w-full bg-[rgba(79,95,112,0.05)] h-[60px]">
      <TopHeader />
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
      <Footer />
    </div>
  );
}

export default App;

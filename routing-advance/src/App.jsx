import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import MensCollection from "./pages/MensCollection";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/mens" element={<MensCollection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

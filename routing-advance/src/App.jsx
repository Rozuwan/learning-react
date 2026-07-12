import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import MensCollection from "./pages/MensCollection";
import Product from "./pages/Product";
import Women from "./pages/Women";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Product />}>
          <Route index element={<h2>Choose a category</h2>} />
          <Route path="mens" element={<MensCollection />} />
          <Route path="womens" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

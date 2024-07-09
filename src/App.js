import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import { NewsLetter } from "./Components/NewsLetter/NewsLetter";
import { FooterAddition } from "./Components/FooterAddition/FooterAddition";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <NewsLetter />
        <Footer />
        <FooterAddition />
      </BrowserRouter>
    </div>
  );
}

export default App;

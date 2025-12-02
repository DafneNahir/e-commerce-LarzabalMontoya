import { useState } from "react";
import { Routes, Route } from "react-router";
import './App.css'
import ItemListContainer from "./components/Container/ItemListContainer/itemListContainer.jsx";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/Presentacion/NavBar/NavBar";
import Footer from "./components/Presentacion/Footer/Footer";
import Home from "./pages/Home/Home";
import Ingresar from "./pages/Ingresar/Ingresar";
import Contacto from "./pages/Contacto/Contacto";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const welcomeMessage = "Descubrí la joya que está destinada a vos";

  return (
    <>
      <NavBar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home greeting={welcomeMessage} addToCart={addToCart} />} />
        <Route path="/productos" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/productos/:categoryId/:subcategoryId" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/producto/:productId" element={<ItemDetailContainer addToCart={addToCart} />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


import { Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";
import ItemListContainer from "./components/Container/ItemListContainer/itemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/Presentacion/CartWidget/CartWidget";
import NavBar from "./components/Presentacion/NavBar/NavBar";
import Footer from "./components/Presentacion/Footer/Footer";

import Home from "./pages/Home/Home";
import Ingresar from "./pages/Ingresar/Ingresar";
import Perfil from "./pages/Perfil/Perfil";
import Contacto from "./pages/Contacto/Contacto";
import NotFound from "./pages/NotFound/NotFound";
import Registrarse from "./pages/Registrarse/Registrarse";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const welcomeMessage = "Descubrí la joya que está destinada a vos";

  return (
    <AuthProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home greeting={welcomeMessage} />} />

        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId/:subcategoryId" element={<ItemListContainer />} />
        <Route path="/producto/:productId" element={<ItemDetailContainer />} />

        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/order" element={<OrderDetail />} />
        <Route path="/orderId" element={<CartWidget />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/perfil" element={ <ProtectedRoute> <Perfil /> </ProtectedRoute> } />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;

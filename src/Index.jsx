import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './contexts/Auth/AuthProvider.jsx';
import { CartProvider } from './contexts/Cart/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/e-commerce-LarzabalMontoya'>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>       
      </AuthProvider>      
    </BrowserRouter>
  </StrictMode>
);

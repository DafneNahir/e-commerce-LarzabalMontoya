# Joyeria – E-commerce React

Proyecto final del curso de React en Coderhouse.  
Se trata de una Single Page Application (SPA) de e-commerce desarrollada con React y Firebase.

## 🛠 Tecnologías utilizadas
- React
- React Router
- Context API
- Firebase (Authentication y Firestore)
- CSS

## 📦 Funcionalidades
- Listado dinámico de productos desde Firestore
- Vista de detalle de producto
- Selección de cantidad y validaciones de stock
- Carrito de compras con estado global
- Autenticación de usuarios
- Generación de órdenes de compra en Firestore
- Obtención del ID de orden al finalizar la compra
- Página de contacto con formulario y datos de la tienda

## 🧾 Órdenes de compra
- Las órdenes se almacenan en Firestore
- Al finalizar la compra se redirige a `/order/:id`
- La vista de orden muestra el resumen y número de seguimiento

## 🔥 Firebase
- Colección `Joyeria` para productos
- Colección `orders` para órdenes de compra
- Autenticación con email y contraseña
- Colección `orders` para almacenar compras
- Colección `contact` para mensajes de contacto

## ✅ Estado del proyecto
Proyecto funcional, probado localmente y conectado a Firebase.

## 🌐 Deploy
Proyecto desplegado en GitHub Pages.

## 🚀 Instalación
```bash
git clone https://github.com/DafneNahir/e-commerce-LarzabalMontoya
npm install
npm run dev

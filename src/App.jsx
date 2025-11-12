import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from "./components/Footer";


function App() {
  
  const welcomeMessage = "Descubrí la joya que está destinada a vos"; 

  return (
    <>
      <NavBar />
      
      <ItemListContainer greeting={welcomeMessage} />
      
      <Footer />
      
    </>
  )
}

export default App
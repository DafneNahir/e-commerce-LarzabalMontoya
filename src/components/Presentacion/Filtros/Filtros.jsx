import { useState } from "react";
import { useNavigate } from "react-router";
import "./Filtros.css";

const categorias = {
  anillos: ["oro", "oro-rosa", "plata"],
  aros: ["argollas", "colgantes"],
  collares: ["cadenas", "dijes"],
  pulseras: [],
  relojes: [],
};

const Filtros = () => {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");

  const handleCategoria = (e) => {
    const value = e.target.value;
    setCategoria(value);
    setSubcategoria("");
    navigate(`/category/${value}`);
  };

  const handleSubcategoria = (e) => {
    const value = e.target.value;
    setSubcategoria(value);
    navigate(`/category/${categoria}/${value}`);
  };

  return (
    <div className="filtros-container">
      <select value={categoria} onChange={handleCategoria}>
        <option value="">Categoría</option>
        {Object.keys(categorias).map((cat) => (
          <option value={cat} key={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {categoria && categorias[categoria].length > 0 && (
        <select value={subcategoria} onChange={handleSubcategoria}>
          <option value="">Subcategoría</option>
          {categorias[categoria].map((sub) => (
            <option value={sub} key={sub}>
              {sub.charAt(0).toUpperCase() + sub.slice(1)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Filtros;

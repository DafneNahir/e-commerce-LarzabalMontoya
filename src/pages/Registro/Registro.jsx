import "./Registro.css";
import { useState } from "react";
import { useAuth } from "../../context/Auth/useAuth.js";

const Registro = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <div className="page-container">
      <h2>Crear cuenta</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label>Contraseña</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <button type="submit" className="btn-auth">Registrarme</button>
      </form>
    </div>
  );
};

export default Registro;

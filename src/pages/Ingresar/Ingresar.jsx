import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/Auth/useAuth";
import "./Ingresar.css";

const Ingresar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    await login(email, password);
    navigate("/productos"); 
  } catch (err) {
    setError("Usuario o contraseña incorrectos");
    console.error(err);
  }
};

  return (
    <div className="container">
      <h2 className="ingresar">Ingresar</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-login">Ingresar</button>

        <p className="register-link">
          ¿No tenés cuenta? <span onClick={() => navigate("/Registrarse")}>Registrate</span>
        </p>

      </form>
    </div>
  );
};

export default Ingresar;

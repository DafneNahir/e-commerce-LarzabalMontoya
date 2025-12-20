import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/Auth/useAuth";
import "./Registrarse.css";

const Registrarse = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const res = await register(email, password);

    if (!res.ok) {
      setError(res.error);
      return;
    }

    navigate("/");
  };
  
  return (
    <div className="container">
      <h2 className="ingresar">Registrarse</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Repita contraseña</label>
        <input type="password" value={password} onChange={(e) => setRepeatPassword(e.target.value)} required />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-login">Registrarme</button>
      </form>
    </div>
  );
};

export default Registrarse;
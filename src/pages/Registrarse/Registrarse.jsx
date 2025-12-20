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
    setError("");

    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await register(email, password);
      navigate("/productos");
    } catch (err) {
      setError("No se pudo registrar el usuario");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="ingresar">Registrarse</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Repetir contraseña</label>
        <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required />
        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-login"> Registrarme
        </button>
      </form>
    </div>
  );
};

export default Registrarse;

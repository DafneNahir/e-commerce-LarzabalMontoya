import { useAuth } from "../../contexts/Auth/useAuth";
import "./Perfil.css";

const Perfil = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h2>Mi perfil</h2>

      <div className="perfil-card">
        <p><strong>Nombre:</strong> {user?.displayName || "Sin nombre"}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default Perfil;

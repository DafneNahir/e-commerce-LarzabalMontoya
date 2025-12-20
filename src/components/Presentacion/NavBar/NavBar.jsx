import { useAuth } from "../../../contexts/Auth/useAuth";
import { Link } from "react-router";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = ({ cartCount }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">Joyería AMFA</Link>
      </div>

      <div className="nav-links">
        <Link to="/" className="panel-nav">Inicio</Link>        

        <div className="dropdown">
          <span className="panel-nav">Catálogo</span>
          <ul className="dropdown-menu">
            <li className="has-submenu">
              <Link to="/productos/anillos">Anillos</Link>
              <ul className="submenu-items">
                <li><Link to="/productos/anillos/oro">Oro</Link></li>
                <li><Link to="/productos/anillos/oro-rosa">Oro rosa</Link></li>
                <li><Link to="/productos/anillos/plata">Plata</Link></li>
              </ul>
            </li>

            <li className="has-submenu">
              <Link to="/productos/aros">Aros</Link>
              <ul className="submenu-items">
                <li><Link to="/productos/aros/argollas">Argollas</Link></li>
                <li><Link to="/productos/aros/colgantes">Colgantes</Link></li>
              </ul>
            </li>

            <li className="has-submenu">
              <Link to="/productos/collares">Collares</Link>
              <ul className="submenu-items">
                <li><Link to="/productos/collares/cadenas">Cadenas</Link></li>
                <li><Link to="/productos/collares/dijes">Dijes</Link></li>
              </ul>
            </li>

            <li><Link to="/productos/pulseras">Pulseras</Link></li>
            <li><Link to="/productos/relojes">Relojes</Link></li>
          </ul>
        </div>

        <Link to="/contacto" className="panel-nav">Contacto</Link>
      </div>

      {user ? (
        <div className="panel-nav ingresar">
          <span style={{ marginRight: "12px" }}>{user.email}</span>
          <span onClick={logout} style={{ cursor: "pointer" }}>Cerrar sesión</span>
        </div>
      ) : (
        <div className="panel-nav ingresar">
          <Link to="/ingresar">Ingresar</Link>
        </div>
      )}

      <div className="cart-desktop">
        <CartWidget cartCount={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;

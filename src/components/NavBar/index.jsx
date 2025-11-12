import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
    return (
        <nav className="container-nav">        
            <div>
                <h1 className="titulo-nav">Joyería AMFA</h1>
            </div>
            <div>
                <a href="" className="panel-nav">Inicio</a>
                <a href="" className="panel-nav">Catálogo</a>
                <a href="" className="panel-nav">Ingresar</a>
                <a href="" className="panel-nav">Contacto</a>
            </div>
            <div>
                <CartWidget /> 
            </div>       
        </nav>
    )
}
export default NavBar
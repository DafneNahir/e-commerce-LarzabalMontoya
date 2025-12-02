import "./Home.css";

const Home = ({ greeting }) => {
  return (
    <>
      <div className="home-container">
        <h2>{greeting}</h2>
        <div></div>
        <p>Bienvenida a la joyería AMFA ✨</p>
      </div>
      <div></div>
      <div>  
        <p>(Luego veremos un mensaje acorde a la recibida al espacio que nos embellece)</p>
      </div>
    </>
  );
};

export default Home;


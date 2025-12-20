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
      <div className="msj-inicio">  
        <p>
          Cada pieza de AMFA nace del encuentro entre el tiempo, la materia y la intención.  
          Creemos en la belleza vive en los gestos pequeños, en lo que se elige con calma
          y en aquello que nos acompaña todos los días.
        </p>

        <p>
          AMFA es una invitación a habitar lo delicado. Un espacio para celebrar lo sutil,
          lo hecho con cuidado y aquello que guarda historia. Bienvenida a una forma de expresión.
        </p>
      </div>
    </>
  );
};

export default Home;


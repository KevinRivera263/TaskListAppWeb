import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a TaskListAppWeb </h1>
      <p>Selecciona una opción:</p>
      <ul>
        <li>
          <Link to="/tasks">Ir a Tareas</Link>
        </li>
        <li>
          <Link to="/listado">Ir a Listado</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

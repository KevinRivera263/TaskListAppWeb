import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Listado from "./pages/Listado";
import "./App.css";  // 👈 importa el CSS

function App() {
  return (
    <Router>
      <div>
        {/* Menú de navegación */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/listado">Listado</Link>
        </nav>

        {/* Contenido de las páginas */}
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/listado" element={<Listado />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { useEffect, useState } from "react";
import { tasksApi } from "../api/taskApi";
import "../styles/Listado.css";

interface ElementItem {
  id: string;
  name: string;
  avatar?: string;
  email?: string;
  createdAt?: string;
}

const Listado = () => {
  const [items, setItems] = useState<ElementItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const apiItems = await tasksApi.getAll();
        setItems(apiItems);
      } catch (error) {
        console.error("Error al cargar datos desde la API", error);
      } finally {
        setLoading(false);
      }
    };

    fetchElements();
  }, []);

  if (loading) return <p>Cargando elementos...</p>;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Fecha no disponible";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="listado-container">
      <h2>Listado de elementos (API)</h2>
      {items.length === 0 ? (
        <p>No hay datos en la API.</p>
      ) : (
        <ul className="contact-list">
          {items.map((item) => (
            <li key={item.id} className="contact-item">
              {item.avatar && (
                <img
                  src={item.avatar}
                  alt={item.name || "Sin nombre"}
                  className="contact-avatar"
                />
              )}
              <div className="contact-info">
                <span className="contact-name">
                  {item.name && item.name.trim() !== "" ? item.name : "Sin nombre"}
                </span>
                {item.email && item.email.trim() !== "" && (
                  <span className="contact-email">{item.email}</span>
                )}
                <span className="contact-date">
                  Creado: {formatDate(item.createdAt)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listado;

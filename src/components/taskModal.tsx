import { useState } from "react";
import "./../styles/taskModal.css";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (title: string) => void;
}

const TaskModal = ({ isOpen, onClose, onAddTask }: TaskModalProps) => {
  const [title, setTitle] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onAddTask(title);
    setTitle("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Agregar nueva tarea</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Descripción de la tarea"
          />
          <div className="modal-buttons">
            <button type="submit">Agregar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;

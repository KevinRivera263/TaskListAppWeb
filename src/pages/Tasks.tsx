import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addTask, toggleTask } from "../store/tasksSlice";
import TaskModal from "../components/taskModal";
import "../styles/Tasks.css";

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks.list);
  const dispatch = useDispatch();

  const handleAddTask = (title: string) => {
    dispatch(addTask(title));
  };

  return (
    <div className="tasks-container">
      <h2>Lista de Tareas</h2>

      <button onClick={() => setIsModalOpen(true)}>Agregar nueva tarea</button>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => dispatch(toggleTask(task.id))}
            className={task.completed ? "completed" : ""}
          >
            {task.title}
          </li>
        ))}
      </ul>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default Tasks;

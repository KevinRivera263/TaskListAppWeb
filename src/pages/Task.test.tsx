import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Tasks from "./Tasks";

describe("Tasks Page", () => {
  const renderWithProvider = (ui: React.ReactNode) => {
    return render(<Provider store={store}>{ui}</Provider>);
  };

  it("debe renderizar la página con el título", () => {
    renderWithProvider(<Tasks />);
    expect(screen.getByText("Lista de Tareas")).toBeInTheDocument();
  });

  it("no debe agregar tarea si está vacío", () => {
    renderWithProvider(<Tasks />);
    const addButton = screen.getByText("Agregar nueva tarea");

    // abrir modal
    fireEvent.click(addButton);

    // buscar input y botón dentro del modal
    const modalButton = screen.getByText("Agregar");
    fireEvent.click(modalButton);

    // no debería haber ninguna tarea creada
    const list = screen.queryAllByRole("listitem");
    expect(list.length).toBe(0);
  });

  it("debe agregar una nueva tarea válida", () => {
    renderWithProvider(<Tasks />);
    const addButton = screen.getByText("Agregar nueva tarea");

    // abrir modal
    fireEvent.click(addButton);

    const input = screen.getByPlaceholderText("Descripción de la tarea");
    fireEvent.change(input, { target: { value: "Tarea de prueba" } });

    const modalButton = screen.getByText("Agregar");
    fireEvent.click(modalButton);

    // validar que la tarea aparece en la lista
    expect(screen.getByText("Tarea de prueba")).toBeInTheDocument();
  });
});

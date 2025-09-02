import tasksReducer, { addTask, toggleTask } from "./tasksSlice";

describe("tasksSlice", () => {
  it("debe retornar el estado inicial", () => {
    const initialState = { list: [] };
    expect(tasksReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("debe agregar una nueva tarea", () => {
    const previousState = { list: [] };
    const newState = tasksReducer(previousState, addTask("Nueva tarea"));

    expect(newState.list.length).toBe(1);
    expect(newState.list[0].title).toBe("Nueva tarea");
    expect(newState.list[0].completed).toBe(false);
  });

  it("debe alternar el estado de completed", () => {
    const previousState = {
      list: [{ id: 1, title: "Tarea existente", completed: false }],
    };

    const newState = tasksReducer(previousState, toggleTask(1));

    expect(newState.list[0].completed).toBe(true);
  });

  it("no debe romperse si toggleTask recibe un id inexistente", () => {
    const previousState = {
      list: [{ id: 1, title: "Tarea existente", completed: false }],
    };

    const newState = tasksReducer(previousState, toggleTask(999));

    expect(newState).toEqual(previousState); // sin cambios
  });
});


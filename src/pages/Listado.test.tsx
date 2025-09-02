import { render, screen } from "@testing-library/react";
import Listado from "./Listado";
import { tasksApi } from "../api/taskApi";

// 🔹 Mock de la API
jest.mock("../api/taskApi", () => ({
  tasksApi: {
    getAll: jest.fn(),
  },
}));

describe("Listado Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debe mostrar el loader al inicio y luego el título", async () => {
    (tasksApi.getAll as jest.Mock).mockResolvedValueOnce([]);

    render(<Listado />);

    // Loader inicial
    expect(screen.getByText("Cargando elementos...")).toBeInTheDocument();

    // Esperar a que aparezca el título después del fetch
    expect(await screen.findByText("Listado de elementos (API)")).toBeInTheDocument();
  });

  it("debe mostrar elementos cuando la API responde (con avatar)", async () => {
    (tasksApi.getAll as jest.Mock).mockResolvedValueOnce([
      {
        id: "1",
        name: "Elemento 1",
        avatar: "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
        email: "test1@email.com",
        createdAt: "2021-10-22T12:13:22.338Z",
      },
      {
        id: "2",
        name: "Elemento 2",
        avatar: "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
        email: "test2@email.com",
        createdAt: "2021-10-22T12:13:22.338Z",
      },
    ]);

    render(<Listado />);

    // Verificamos que se rendericen los textos
    expect(await screen.findByText("Elemento 1")).toBeInTheDocument();
    expect(await screen.findByText("Elemento 2")).toBeInTheDocument();

    // Verificamos que se rendericen las imágenes de avatar
    const avatars = await screen.findAllByRole("img");
    expect(avatars.length).toBe(2);
    expect(avatars[0]).toHaveAttribute(
      "src",
      "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
    );
  });

  it("debe mostrar mensaje cuando no hay datos", async () => {
    (tasksApi.getAll as jest.Mock).mockResolvedValueOnce([]);

    render(<Listado />);

    expect(await screen.findByText("No hay datos en la API.")).toBeInTheDocument();
  });

  it("maneja errores en la API sin romper", async () => {
    (tasksApi.getAll as jest.Mock).mockRejectedValueOnce(new Error("Error API"));

    render(<Listado />);

    // Debe seguir mostrando el título
    expect(await screen.findByText("Listado de elementos (API)")).toBeInTheDocument();
  });


beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});    
    });

afterAll(() => {
        (console.error as jest.Mock).mockRestore();
    });

});

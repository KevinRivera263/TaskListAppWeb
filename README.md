# TaskListAppWeb

Aplicación desarrollada en **React + TypeScript** como parte de una prueba técnica.  
El proyecto implementa una lista de tareas con **Redux Toolkit** y un listado remoto consumido desde una **API pública (MockAPI)**.

---

## 🚀 Funcionalidades

- **Pantalla principal (Home)** con navegación hacia *Tasks* y *Listado*.  
- **Tasks**
  - Gestión de tareas usando **Redux Toolkit**.
  - Modal con formulario para agregar nuevas tareas.
  - Validación: no se permite crear tareas vacías.
  - Persistencia local (las tareas permanecen mientras la app está abierta).  
- **Listado**
  - Consumo de datos desde el endpoint remoto:
    ```
    https://6172cfe5110a740017222e2b.mockapi.io/elements
    ```
  - Render de nombre, email, avatar y fecha de creación.
  - Loader al inicio y mensaje cuando no hay datos.
  - Manejo de errores sin romper la UI.

---

## 🛠️ Tecnologías

- React 18  
- TypeScript  
- Redux Toolkit  
- React Router DOM  
- Axios  (para la api)
- Jest + React Testing Library (unit tests)  


---

---

## ⚙️ Instalación y ejecución


   ```bash
   git clone https://github.com/kevinrivera263/tasklistappweb.git
   cd tasklistappweb
   npm install
   npm start
   npm test




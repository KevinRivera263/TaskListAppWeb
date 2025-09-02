import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TasksState {
  list: Task[];
}

const initialState: TasksState = {
  list: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;

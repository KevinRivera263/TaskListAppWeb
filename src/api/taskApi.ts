import axiosClient from "./axiosClient";

export const tasksApi = {
  getAll: async () => {
    const { data } = await axiosClient.get("/");
    return data;
  },
  create: async (title: string) => {
    const { data } = await axiosClient.post("/", {
      title,
      completed: false,
    });
    return data;
  },
  toggle: async (id: string, completed: boolean) => {
    const { data } = await axiosClient.put(`/${id}`, {
      completed: !completed,
    });
    return data;
  },
};

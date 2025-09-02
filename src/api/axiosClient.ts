import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://6172cfe5110a740017222e2b.mockapi.io/elements", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;

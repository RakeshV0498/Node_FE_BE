import axios from "axios";

// const API_URL = "http://localhost:8000/";
const API_URL = import.meta.env.VITE_LOCAL_BACKEND_URL;

// Update with your actual API endpoint

export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}students-db/`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch students");
  }
};

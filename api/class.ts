import { Class } from "../types";
import instance from "./instance";

export const getClasses = async () => {
  try {
    const res = await instance.get("/classes?_embed=teacher&_embed=students");
    return res.data;
  } catch (error) {
    alert("Error fetching classes or teachers");
    console.error(error);
  }
};

export const createClass = async (data: Class) => {
  try {
    const res = await instance.post("/classes", data);
    return res.data;
  } catch (error) {
    console.error("Failed to add classes:", error);
    throw error;
  }
};

export const deleteClasses = async (id: string) => {
  try {
    const res = await instance.delete(`/classes/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to add student:", error);
    throw error;
  }
};

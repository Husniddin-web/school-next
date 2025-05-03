import { Student } from "@/types";
import instance from "./instance";

export const getStudents = async () => {
  try {
    const res = await instance.get<Student[]>("/students");
    return res.data;
  } catch (e) {
    alert("Failed to fetch students!");
  }
};

export const createStudent = async (student: Student) => {
  try {
    const res = await instance.post("/students", student);
    return res.data;
  } catch (error) {
    console.error("Failed to add student:", error);
    throw error;
  }
};
export const deleteStudent = async (id: string) => {
  try {
    const res = await instance.delete(`/students/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to add student:", error);
    throw error;
  }
};

export const getOneStudent = async (id: string) => {
  try {
    const res = await instance.get(`/students/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to add student:", error);
    throw error;
  }
};

export const updateStudent = async (data: Student, id: string) => {
  try {
    const res = await instance.put(`/students/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("Failed to add student:", error);
    throw error;
  }
};

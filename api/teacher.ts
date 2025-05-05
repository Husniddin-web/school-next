import { useMutation } from "@tanstack/react-query";
import { Teacher } from "../types/teachers";
import instance from "./instance";

export const getTeachers = async () => {
  try {
    const res = await instance.get<Teacher[]>("/teachers?_embed=classes");
    return res.data;
  } catch (e) {
    alert("Failed to fetch students!");
  }
};

export const createTeacher = async (teacher: Teacher) => {
  try {
    const res = await instance.post("/teachers", teacher);
    return res.data;
  } catch (error) {
    console.error("Failed to add teacher:", error);
    throw error;
  }
};

export const deleteTeacher = async (id: number) => {
  try {
    const res = await instance.delete(`/teachers/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Failed to add student:", error);
    throw error;
  }
};

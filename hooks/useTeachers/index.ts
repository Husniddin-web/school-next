import { useMutation, useQuery } from "@tanstack/react-query";
import { createTeacher, deleteTeacher, getTeachers } from "../../api";
import { Teacher } from "../../types";

export function useTeachers() {
  return useQuery({
    queryFn: getTeachers,
    queryKey: ["teachers"],
  });
}

export function createTeacherMutation({
  onSuccess,
  onError,
}: {
  onSuccess: (teacher: Teacher) => void;
  onError: (error: unknown) => void;
}) {
  return useMutation({
    mutationFn: (teacher: Teacher) => createTeacher(teacher),
    onSuccess,
    onError,
  });
}

export function deleteTeacherMutation({
  onSuccess,
  onError,
}: {
  onSuccess: (id: number) => void;
  onError: (error: unknown) => void;
}) {
  return useMutation({
    mutationFn: (id: number) => deleteTeacher(id),
    onSuccess,
    onError,
  });
}

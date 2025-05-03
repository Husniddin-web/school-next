import {
  createStudent,
  deleteStudent,
  getOneStudent,
  getStudents,
  updateStudent,
} from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Student } from "../../types";

export function useStudents() {
  return useQuery({
    queryFn: getStudents,
    queryKey: ["students"],
  });
}

export function createStudentMutation({
  onSuccess,
  onError,
}: {
  onSuccess: (student: Student) => void;
  onError: (error: unknown) => void;
}) {
  return useMutation({
    mutationFn: (student: Student) => createStudent(student),
    onSuccess,
    onError,
  });
}

export function updateStudentMutation({
  onSuccess,
  onError,
}: {
  onSuccess: (student: Student) => void;
  onError: (error: unknown) => void;
}) {
  return useMutation({
    mutationFn: ({ student, id }: { student: Student; id: string }) =>
      updateStudent(student, id),
    onSuccess,
    onError,
  });
}

export function deleteStudentMutation({
  onSuccess,
  onError,
}: {
  onSuccess: (id: string) => void;
  onError: (error: unknown) => void;
}) {
  return useMutation({
    mutationFn: (id: string) => deleteStudent(id),
    onSuccess,
    onError,
  });
}

export function useOneStudent(id: string) {
  return useQuery({
    queryKey: ["studentone", id],
    queryFn: () => getOneStudent(id),
    enabled: !!id,
  });
}

import { getStudents } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createClass, deleteClasses, getClasses } from "../../api/class";
import { Class } from "../../types";

export function useClasses() {
  return useQuery({
    queryFn: getClasses,
    queryKey: ["classes"],
  });
}

export function createClassMutation({
  onSuccess,
  onError,
}: {
  onSuccess: (date: Class) => void;
  onError: (error: unknown) => void;
}) {
  return useMutation({
    mutationFn: (data: Class) => createClass(data),
    onSuccess,
    onError,
  });
}

export function deleteClassMutation({
  onSuccess,
  onError,
}: {
  onSuccess: (id: string) => void;
  onError: (error: unknown) => void;
}) {
  return useMutation({
    mutationFn: (id: string) => deleteClasses(id),
    onSuccess,
    onError,
  });
}

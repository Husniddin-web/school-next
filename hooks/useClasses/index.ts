import { getStudents } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../../api/class";

export function useClasses() {
  return useQuery({
    queryFn: getClasses,
    queryKey: ["classes"],
  });
}

// types/class.ts
import { Student } from "./student";
import { Teacher } from "./teachers";

export interface Class {
  id: string;
  name: string;
  studentCount: number;
  teacherId: string | null;
  teacher?: Teacher;
  students?: Student[];
}

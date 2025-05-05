import { Class } from "./classes";

export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  classes?: Class[];
}

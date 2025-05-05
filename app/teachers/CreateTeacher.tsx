import React, { useState } from "react";
import { useClasses } from "../../hooks/useClasses";
import { useRouter } from "next/router";
import { createStudentMutation } from "../../hooks";
import { StudentCreateWrapper } from "../Students/Students.styles";
import { Button, Input } from "../../components";
import { createTeacherMutation } from "../../hooks/useTeachers";

const CreateTeacher = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
  });
  const router = useRouter();
  const { mutate, isSuccess } = createTeacherMutation({
    onSuccess: () => {
      router.push("/teacher");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = String(Date.now());

    mutate({ id, ...form });
  };

  return (
    <StudentCreateWrapper>
      <h1>New Teacher</h1>
      <form onSubmit={handleSubmit} className="form">
        <Input
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          name="firstName"
          type="text"
          placeholder="First name"
          required
        />

        <Input
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          name="lastName"
          type="text"
          placeholder="Last name"
          required
        />

        <Input
          onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
          name="birthDate"
          type="date"
          required
        />

        <Button title="Add Teacher" />
      </form>
    </StudentCreateWrapper>
  );
};

export default CreateTeacher;

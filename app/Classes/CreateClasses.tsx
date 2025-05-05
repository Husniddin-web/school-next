import { useRouter } from "next/router";
import React, { useState } from "react";
import { createTeacherMutation, useTeachers } from "../../hooks/useTeachers";
import { StudentCreateWrapper } from "../Students/Students.styles";
import { Button, Input } from "../../components";
import { createClassMutation } from "../../hooks/useClasses";

const CreateClasses = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    teacherId: "",
  });

  const { data: teachers } = useTeachers();

  const { mutate, isSuccess } = createClassMutation({
    onSuccess: () => {
      router.push("/classes");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = String(Date.now());

    mutate({ id, ...form, studentCount: 0 });
  };

  return (
    <StudentCreateWrapper>
      <h1>New Class</h1>
      <form onSubmit={handleSubmit} className="form">
        <Input
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          name="name"
          type="text"
          placeholder="Class Name"
          required
        />

        <div>
          <select
            id="teacherId"
            name="teacherId"
            value={form.teacherId}
            onChange={(e) => setForm({ ...form, teacherId: e.target.value })}
            required
            className="select-form"
          >
            <option value="" disabled>
              Select Teacher
            </option>
            {teachers?.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.firstName} {teacher.lastName}
              </option>
            ))}
          </select>
        </div>

        <Button title="Add Class" />
      </form>
    </StudentCreateWrapper>
  );
};

export default CreateClasses;

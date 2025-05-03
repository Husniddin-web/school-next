import React, { useState } from "react";
import { StudentCreateWrapper } from "./Students.styles";
import { Button, Input, Select } from "../../components";
import { useClasses } from "../../hooks/useClasses";
import { getOptionsAdapter } from "../../lib/getClassOption";
import { createStudentMutation } from "../../hooks";
import { useRouter } from "next/router";

const CreateStudent = () => {
  const { data = [], isError } = useClasses();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    classId: "",
  });
  const router = useRouter();
  const { mutate, isSuccess } = createStudentMutation({
    onSuccess: () => {
      router.push("/students");
      console.log("created student");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.classId == "") {
      return alert("Please choose a class");
    }
    console.log(form);
    const id = String(Date.now());

    mutate({ id, ...form });
  };

  const handleClassChange = (selectedClassId: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      classId: selectedClassId,
    }));
  };

  return (
    <StudentCreateWrapper>
      <h1>New Student</h1>
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

        <Select
          onChange={handleClassChange}
          options={getOptionsAdapter(data)}
        />

        <Button title="Add Student" />
      </form>
    </StudentCreateWrapper>
  );
};

export default CreateStudent;

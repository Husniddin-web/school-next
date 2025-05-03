import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useOneStudent, updateStudentMutation } from "../../../hooks";
import { useClasses } from "../../../hooks/useClasses";
import Loading from "../../../components/common/Loading";
import { getOptionsAdapter } from "../../../lib/getClassOption";
import {
  Button,
  Form,
  Input,
  Label,
  Select,
  Title,
  Wrapper,
} from "./update.style";

const UpdatePage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const { data: student, isLoading, isError } = useOneStudent(id);
  const { data: classes = [] } = useClasses();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    classId: "",
  });

  const { mutate, isPending } = updateStudentMutation({
    onSuccess: () => {
      router.push("/students");
    },
    onError: (err) => {
      console.error(err);
      alert("Failed to update student");
    },
  });

  useEffect(() => {
    if (student) {
      setForm({
        firstName: student.firstName,
        lastName: student.lastName,
        birthDate: student.birthDate,
        classId: student.classId,
      });
    }
  }, [student]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ student: { id, ...form }, id });
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading student data</div>;

  return (
    <Wrapper>
      <Title>Update Student</Title>
      <Form onSubmit={handleSubmit}>
        <Label>First Name</Label>
        <Input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <Label>Last Name</Label>
        <Input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />

        <Label>Birth Date</Label>
        <Input
          type="date"
          name="birthDate"
          value={form.birthDate}
          onChange={handleChange}
          required
        />

        <Label>Class</Label>
        <Select
          name="classId"
          value={form.classId}
          onChange={handleChange}
          required
        >
          <option value="">Choose class</option>
          {getOptionsAdapter(classes).map((opt: any) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Updating..." : "Update Student"}
        </Button>
      </Form>
    </Wrapper>
  );
};

export default UpdatePage;

import React from "react";
import styled from "styled-components";
import { Teacher } from "../../../../types";
import { Trash2, Pencil } from "lucide-react";

import {
  Card,
  Name,
  BirthDate,
  ClassList,
  NoClasses,
  CardInfoWrapper,
} from ".";
import { Button } from "../../../../components";
import { deleteTeacherMutation } from "../../../../hooks/useTeachers";
import { useQueryClient } from "@tanstack/react-query";

interface TeacherProps {
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherProps> = ({ teacher }) => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = deleteTeacherMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
    onError: () => {},
  });

  const handleDeleteTeacher = (id: number) => {
    mutate(id);
  };

  return (
    <Card>
      <CardInfoWrapper>
        <Name>
          {teacher.firstName} {teacher.lastName}
        </Name>
        <BirthDate>Born: {teacher.birthDate}</BirthDate>

        <div>
          <strong>Classes:</strong>
          {teacher.classes && teacher.classes.length > 0 ? (
            <ClassList>
              {teacher.classes.map((cls) => (
                <li key={cls.id}>
                  {cls.name} — {cls.studentCount} students
                </li>
              ))}
            </ClassList>
          ) : (
            <NoClasses>No classes assigned</NoClasses>
          )}
        </div>
      </CardInfoWrapper>
      <div className="button-wrapper">
        <div>
          <Button onClick={() => handleDeleteTeacher(Number(teacher.id))}>
            <Trash2 />
          </Button>
        </div>
        <div>
          <Button>
            <Pencil />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TeacherCard;

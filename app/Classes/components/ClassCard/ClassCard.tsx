import React, { useState } from "react";
import styled from "styled-components";
import { Student } from "../../../../types";
import { Trash2, Eye, EyeClosed } from "lucide-react";
import { Button } from "../../../../components";
import { deleteClassMutation } from "../../../../hooks/useClasses";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

const Title = styled.h3`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 8px;
`;

// Teacher and Student info
const Info = styled.p`
  font-size: 1em;
  color: #555;
  margin: 5px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  padding: 8px 15px;
  font-size: 1em;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #45a049;
  }

  &.remove {
    background-color: #f44336;

    &:hover {
      background-color: #e53935;
    }
  }
`;

const StudentListContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

interface ClassCardProps {
  classItem: {
    id: string;
    name: string;
    teacher: { firstName: string; lastName: string } | null;
    studentCount: number;
    students: Student[];
  };
}

const ClassCard: React.FC<ClassCardProps> = ({ classItem }) => {
  const [showStudents, setShowStudents] = useState(false);
  const queryClient = useQueryClient();
  const toggleStudentList = () => {
    setShowStudents((prevState) => !prevState);
  };
  const { mutate } = deleteClassMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
    onError: () => {},
  });
  const onRemoveClass = (id: string) => {
    mutate(id);
  };

  return (
    <ClassContainer>
      <Title>{classItem.name}</Title>
      <Info>
        Teacher:{" "}
        {classItem.teacher
          ? `${classItem.teacher.firstName} ${classItem.teacher.lastName}`
          : "No teacher assigned"}
      </Info>
      <Info>Students: {classItem.studentCount}</Info>

      {showStudents && classItem.students && classItem.students.length > 0 && (
        <StudentListContainer>
          <h4>Students List:</h4>
          <ul>
            {classItem.students.map((student) => (
              <li key={student.id}>
                {student.firstName} {student.lastName}
              </li>
            ))}
          </ul>
        </StudentListContainer>
      )}

      <ButtonContainer>
        <Button onClick={toggleStudentList}>
          {showStudents ? <EyeClosed /> : <Eye />}
        </Button>

        <Button onClick={() => onRemoveClass(classItem.id)}>
          <Trash2 />
        </Button>
      </ButtonContainer>
    </ClassContainer>
  );
};

export default ClassCard;

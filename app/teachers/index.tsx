import React from "react";
import { TeacherCardsWrapper, TeacherWrapper } from "./TeacherStyle";
import { useTeachers } from "../../hooks/useTeachers";
import {} from "./components/TeacherCard";
import TeacherCard from "./components/TeacherCard/TeacherCard";
import { Button } from "../../components";
import { useRouter } from "next/router";

const TeacherPage = () => {
  const { data: teachers, isLoading, isError } = useTeachers();
  const router = useRouter();
  const handleNextCreatePate = () => {
    router.push("/teacher/create");
  };
  return (
    <>
      <TeacherWrapper>
        <div className="teacher-head-wrapper">
          <h2 className="page-title">Teachers Info</h2>
          <div>
            <Button onClick={handleNextCreatePate}>Add Teacher</Button>
          </div>
        </div>
        <TeacherCardsWrapper>
          {teachers?.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </TeacherCardsWrapper>
      </TeacherWrapper>
    </>
  );
};

export default TeacherPage;

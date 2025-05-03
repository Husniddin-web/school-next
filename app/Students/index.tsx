import React from "react";
import StudentsTable from "./components/StudentsTable";
import { StudentPageWrapper } from "./Students.styles";
import { Button } from "../../components";
import { Router, useRouter } from "next/router";
import { Link } from "lucide-react";

const Students = () => {
  const router = useRouter();
  return (
    <StudentPageWrapper>
      <div className="title-side">
        <h1>Students</h1>
        <Button onClick={()=>router.push("students/create")}>Add Student</Button>
      </div>
      <StudentsTable />
    </StudentPageWrapper>
  );
};

export default Students;

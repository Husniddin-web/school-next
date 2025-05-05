import React from "react";
import { useClasses } from "../../hooks/useClasses";
import ClassCard from "./components/ClassCard/ClassCard";
import { Button } from "../../components";
import { ClassWrapper } from "./ClassesStyle";
import { useRouter } from "next/router";
const ClassesPage = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useClasses();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading classes</div>;
  const handleNextCreateCLassPage = () => {
    router.push("/classes/create");
  };
  return (
    <ClassWrapper>
      <div className="class-head-wrapper">
        <h2>Classes</h2>
        <div>
          <Button onClick={handleNextCreateCLassPage}>Add Class</Button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.map((classItem: any) => (
          <ClassCard key={classItem.id} classItem={classItem} />
        ))}
      </div>
    </ClassWrapper>
  );
};

export default ClassesPage;

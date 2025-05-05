import React from "react";
import { Table } from "@/components";

const Home = () => {
  const schoolInfo = {
    name: "144-sonli Umumta'lim maktabi",
    location: "Muqiymiy ko'ch. 100 uy",
    overallStudentCount: 1,
    overallStaffCount: 1,
    overallClassCount: 1,
    about: "Yaxshi maktab!",
    phoneNumber: "+9989565555551",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to {schoolInfo.name}</h1>
      <p>{schoolInfo.about}</p>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>School Name</td>
            <td>{schoolInfo.name}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{schoolInfo.location}</td>
          </tr>
          <tr>
            <td>Student Count</td>
            <td>{schoolInfo.overallStudentCount}</td>
          </tr>
          <tr>
            <td>Staff Count</td>
            <td>{schoolInfo.overallStaffCount}</td>
          </tr>
          <tr>
            <td>Class Count</td>
            <td>{schoolInfo.overallClassCount}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{schoolInfo.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;

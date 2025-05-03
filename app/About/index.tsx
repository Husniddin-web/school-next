"use client";

import React from "react";
import { AboutWrapper } from "./about.style";

const AboutPage = () => {
  return (
    <AboutWrapper>
      <div className="container">
        <div className="header">
          <h1>About Our School ERP System</h1>
          <p className="subtitle">
            Streamlining education management for better outcomes
          </p>
        </div>

        <section className="section">
          <h2>Our Mission</h2>
          <p>
            Our School ERP system is designed to simplify administrative tasks,
            enhance communication between teachers, students, and parents, and
            provide valuable insights to improve educational outcomes. We
            believe that technology should empower educators, not burden them
            with complexity.
          </p>
        </section>

        <section className="section">
          <h2>Key Features</h2>
          <div className="features">
            <div className="feature">
              <h3>Student Management</h3>
              <p>
                Comprehensive student profiles, attendance tracking, and
                performance analytics.
              </p>
            </div>
            <div className="feature">
              <h3>Staff Administration</h3>
              <p>
                Streamlined HR processes, payroll management, and staff
                scheduling.
              </p>
            </div>
            <div className="feature">
              <h3>Academic Planning</h3>
              <p>
                Curriculum management, timetable generation, and exam
                scheduling.
              </p>
            </div>
            <div className="feature">
              <h3>Parent Portal</h3>
              <p>
                Real-time access to student progress, attendance, and school
                communications.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Why Choose Our ERP</h2>
          <ul className="benefits">
            <li>Intuitive interface designed for educational professionals</li>
            <li>Cloud-based solution accessible from anywhere</li>
            <li>Comprehensive reporting and analytics</li>
            <li>Secure data management with role-based access</li>
            <li>Regular updates and dedicated support</li>
          </ul>
        </section>

        <section className="section">
          <h2>Our School</h2>
          <p>
            Founded in 1995, our school has been at the forefront of educational
            excellence for over 25 years. With a dedicated staff of 150+
            educators and support personnel, we serve a diverse student body of
            2,000+ learners. Our commitment to innovation in education led us to
            develop this ERP system, which has transformed our administrative
            efficiency and educational effectiveness.
          </p>
        </section>

        <section className="section contact">
          <h2>Contact Us</h2>
          <p>Have questions about our School ERP system? We're here to help!</p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong> info@schoolerp.example.com
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 Education Lane, Learning City, ED
              12345
            </p>
          </div>
        </section>
      </div>
    </AboutWrapper>
  );
};

export default AboutPage;

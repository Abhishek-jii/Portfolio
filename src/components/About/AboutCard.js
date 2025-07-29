import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Sharma</span> from{" "}
            <span className="purple">Jaipur, India</span>.
            <br /><br />
            <strong>Fitpage</strong>, a fitness tech startup.
            <br />
            I have completed my <strong>B.Tech in Computer Science</strong> from{" "}
            <strong>BIT Bangalore</strong>.
            <br /><br />
            💼 <strong>Software Development Intern @ Fitpage</strong>
            <br />
            During my internship, I worked on a live fitness platform, contributing to features across the tech stack.
            I gained hands-on experience with a modern web development stack including{" "}
            <strong>Next.js</strong> for frontend, <strong>NestJS</strong> for backend services and{" "}
            <strong>PostgreSQL</strong> as the database.
            <br />
            I collaborated closely with senior engineers, followed agile workflows, and learned the dynamics of working in a fast-paced startup environment.
            <br /><br />
            Apart from coding, here are a few activities I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>



          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

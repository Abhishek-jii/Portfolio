import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ELearning from "../../Assets/Projects/E-learning site.png";
import Game from "../../Assets/Projects/2D_Game.png";
import Gym from "../../Assets/Projects/Gym_registration.png";
import yt_extension from "../../Assets/Projects/yt_extension.png";
import ir from "../../Assets/Projects/ir.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ELearning}
              isBlog={false}
              title="E-Learning"
              description="This is an E-Learning platform where the teacher can upload their lecture videos under a particular course and student can learn from it along with that they can see their courese completion percentage. Teachers can see how many users are there on the platform and how many courses are there. The platform is built with React.js, CSS, Node.js, Express.js, MongoDB."
              ghLink="https://github.com/Abhishek-jii/E-Learning-frontend"
              demoLink="https://e-learning-frontend-lemon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gym}
              isBlog={false}
              title="Student Gym Registration"
              description="This is web application made using React.js, Node.js, Express.js, PostgreSQl. Here student can register for the gym by making payment for different slots. The admin can see the registered students and their details. The admin can also add, delete, and update the slots available for the students."
              ghLink="https://github.com/Abhishek-jii/Student_Gym_Registration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yt_extension}
              isBlog={false}
              title="YT bookmark Extension"
              description="This is a youtube chrome extension which works only when youtube video is playing. It allows the user to bookmark the video at a particular time and save it. The users can also see all the bookmarks for the particular video they have made. They can delete and play them as well. The extension is built using HTML, CSS and Javascript."
              ghLink="https://github.com/Abhishek-jii/Youtube_bookmark_Extension"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="2D Ball Game"
              description="This is a 2D Game made using C++ and oops concepts along with the openCV. This game involves a bat which moves to prevent the ball from falling down. The bat is controlled by the user using the mouse."
              ghLink="https://github.com/Abhishek-jii/2D-ballGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ir}
              isBlog={false}
              title="India Running"
              description="It is an marathon event management website where users can register for the events and see their details. The admin can add, delete, and update the events. The website is built using Next.js, NestJS, PostgreSQL and TypeORM model."
              ghLink="https://github.com/Abhishek-jii/IR-website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
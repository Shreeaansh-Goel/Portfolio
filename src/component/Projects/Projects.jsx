import React from "react";
import ProjectCards from "./ProjectCards"; // Importing ProjectCards component
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid className="project-section">
      <h1 style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px" }}>My Projects</h1>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* Project 1 */}
        <Col md={4} className="project-card">
          <ProjectCards
            imgPath="path_to_image.jpg"
            title="Project 1"
            description="This is a brief description of Project 1."
            ghLink="https://github.com/user/project1"
            demoLink="https://project1demo.com"
          />
        </Col>

        {/* Project 2 */}
        <Col md={4} className="project-card">
          <ProjectCards
            imgPath="path_to_image.jpg"
            title="Project 2"
            description="This is a brief description of Project 2."
            ghLink="https://github.com/user/project2"
            demoLink="https://project2demo.com"
          />
        </Col>

        {/* Project 3 */}
        <Col md={4} className="project-card">
          <ProjectCards
            imgPath="path_to_image.jpg"
            title="Project 3"
            description="This is a brief description of Project 3."
            ghLink="https://github.com/user/project3"
            demoLink="https://project3demo.com"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;

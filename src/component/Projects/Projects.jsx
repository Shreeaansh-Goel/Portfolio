import React from "react";
import ProjectCards from "./ProjectCards"; // Importing ProjectCards component
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid className="project-section">
     <h1 style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px", color: "white" }}>My Projects</h1>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* Project 1 */}
        <Col md={4} className="project-card">
          <ProjectCards
            // imgPath="path_to_image.jpg"
            title="Smart Video Search Navigator"
            description="Utilized moviepy to extract audio from video files and Google Speech Recognition for speech-to-text conversion, 
enabling multimedia processing."
            ghLink="https://github.com/Shreeaansh-Goel/Smart-Video-Search-Navigator"
            // demoLink="https://project1demo.com"
          />
        </Col>

        {/* Project 2 */}
        <Col md={4} className="project-card">
          <ProjectCards
            // imgPath="path_to_image.jpg"
            title="Image Caption Generator"
            description="Developed a deep learning model combining RNNs, CNNs, and Transformers to generate descriptive image captions."
            ghLink="https://github.com/user/project2https://github.com/Shreeaansh-Goel/IMAGE-CAPTION-GENERATOR"
          />
        </Col>

        {/* Project 3 */}
        <Col md={4} className="project-card">
          <ProjectCards
            // imgPath="path_to_image.jpg"
            title="Gesture Vision Desktop Control"
            description="Designed a computer vision-based system for hands-free desktop navigation using intuitive hand gestures via OpenCV and 
Mediapipe.his is a brief description of Project 3."
            ghLink="hthttps://github.com/Shreeaansh-Goel/Desktop-Automizations://github.com/user/project3"
            // demoLink="https://project3demo.com"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;

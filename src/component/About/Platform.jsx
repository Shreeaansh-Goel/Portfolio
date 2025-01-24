import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAnaconda,
  SiPycharm,
  SiKaggle,
  SiGooglecolab,
  SiGithub,
} from "react-icons/si";

function Platform() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="icon-caption">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="icon-caption">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <div className="icon-caption">Anaconda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <div className="icon-caption">PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKaggle />
        <div className="icon-caption">Kaggle</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <div className="icon-caption">Google Colab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="icon-caption">GitHub</div>
      </Col>
    </Row>
  );
}

export default Platform;

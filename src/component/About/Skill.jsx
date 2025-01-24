import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiReact,
  SiTensorflow,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiDjango,
} from "react-icons/si";

function Skill() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="icon-caption">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="icon-caption">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="icon-caption">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="icon-caption">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <div className="icon-caption">Keras</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="icon-caption">NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="icon-caption">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <div className="icon-caption">OpenCV</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="icon-caption">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <div className="icon-caption">Express</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="icon-caption">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="icon-caption">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="icon-caption">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <div className="icon-caption">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <div className="icon-caption">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <div className="icon-caption">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <div className="icon-caption">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <div className="icon-caption">Django</div>
      </Col>
    </Row>
  );
}

export default Skill;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
          
        </Card.Title>

        {/* Card Image */}
        {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ marginBottom: "20px" }} /> */}

        {/* Project Description */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Links as List */}
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {/* GitHub Link */}
          <li style={{ marginBottom: "10px" }}>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          </li>

          {/* Demo Link if present */}
          {/* {!props.isBlog && props.demoLink && (
            <li>
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            </li>
          )} */}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

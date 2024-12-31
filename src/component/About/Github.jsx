import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <img
        src="https://leetcard.jacoblin.cool/Shreeaansh_Goel?ext=heatmap"
        alt="LeetCode Stats"
        style={{ width: "500px", height: "auto" }}
      />
    </Row>
  );
}

export default Github;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/p1.jpg";
 // Use relative path
 import Particle from "../Particle.jsx";
 // Use relative path
import Home1 from "./Home1";
import Text from "./Text";
function Home() {
  return (
    <section>
      <Container  className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHREEAANSH GOEL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Text/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Home1 />
        </Container>

      </Container>
    </section>
  );
}

export default Home;
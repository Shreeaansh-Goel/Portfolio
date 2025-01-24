import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function QuoteCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Shreeaansh Goel </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently Third year engineering student At Indian Institute of Information Technology , Una.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Strength Training
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs about recent AI advancements
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming ideas into reality, one line of code at a time."{" "}
          </p>
          <footer className="blockquote-footer">Shreeaansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default QuoteCard;
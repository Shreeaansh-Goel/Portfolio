import React from "react";
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Machine Learning Developer",
          "Deep Learning Developer",
          "Competitive Programmer",
          "Generative AI ENthusiast",
          "Data Structures and Algorithm",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Text;
import React from "react";
import selfImage from "../../assets/portrait/selfie.jpg";

function About() {
  return (
    <section className="my-2">
      <h1 id="about">Who is Steven Mendoza?</h1>
      <img
        src={selfImage}
        className="my-2"
        style={{ width: "25%", margin: "auto", display: "block" }}
        alt="cover"
      />
      <p className="my-4">
        Eager and motivated software developer with coding experience from UC
        Berkeley's bootcamp for Full-Stack Web Development. Skilled in Python,
        Javascript, Lua, SQL, MongoDB, HTML, CSS, React, Express.js, and
        passionate to learn more from peers and mentors. Demonstrated ability to
        work independently and collaboratively through projects on GitHub.
        Passionate about the gaming industry, data analytics, automation,
        practical machine learning algorithms, AI utliziation, and currently
        seeking a challenging entry-level role at Roblox to build my skills and
        contribute to creating immersive experiences.
      </p>
    </section>
  );
}

export default About;

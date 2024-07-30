import React from "react";
import profileImage from "../../assets/profile_pic.png";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="Phil Choi's Profile Picture" />
          </div>
          <p>
            Hello! I'm Phil Choi, a 37-year-old Korean-American, born and raised in New Jersey. I hold a B.A. in Communication from Rutgers University, from where I graduated in 2010. I've been working in Sales since 2015, and in the technology sector since 2017, but in 2023 I went through a medical condition and decided on a career change.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

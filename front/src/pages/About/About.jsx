/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import Team from "../../components/Team/Team";
import Awards from "../../components/Awards/Awards";

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="blob-background"></div> {/* Blob background */}
      <div className="content-wrapper">
        {/* Left Side - Text */}
        <div className="text-content">
          <h2>About Chadhava Foundation</h2>
          <p>
            Chadhava Foundation is devoted to the preservation, restoration, and
            support of temples across India. We aim to protect our spiritual and
            cultural heritage by ensuring temples continue to be places of
            worship, learning, and community gathering. Through our work, we
            ensure that these sacred spaces retain their significance in the
            modern world.
          </p>
          <p>
            Our mission is not just about the physical restoration of temples
            but also about fostering a deeper connection between communities and
            their traditions. By collaborating with local authorities and
            artisans, we strive to keep the art, architecture, and rituals alive
            for future generations.
          </p>

          <p className="slogan">
            "Guardians of temples, protectors of faith. <br />
                     Your support lights the path of devotion."
          </p>
        </div>

        {/* Right Side - YouTube Video */}
        <div className="video-content">
          <iframe
            src="https://www.youtube.com/embed/fiEwahMPJuA"
            title="Chadhava Foundation Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
       
    <Team/>
    <Awards />
    </>
  );
};

export default About;

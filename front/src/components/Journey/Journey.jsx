/* eslint-disable no-unused-vars */
import React from "react";
import "./Journey.css"; // Import CSS file

const Journey = () => {
  return (
    <section className="our-journey">
      <h2>Our Journey</h2>
      <p>Watch our journey of restoring and preserving temples across India.</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YT65t1wJQZc"
          title="Our Journey"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="journey_after_video_para">Let’s unite and take action to protect and preserve our heritage <button className="journey_after_video_para_button">Join Now</button> </p>
    </section>
  );
};

export default Journey;

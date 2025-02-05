/* eslint-disable no-unused-vars */
import React from "react";
import "./Stories.css";

const videos = [
  "https://www.youtube.com/embed/gTh7xZvN7X8",
  "https://www.youtube.com/embed/m9JzfiSOxq0",
  "https://www.youtube.com/embed/6RQPrUNXEo0",
  "https://www.youtube.com/embed/j0L8PifkFFE",

  "https://www.youtube.com/embed/gFBiFH7pBok",
  "https://www.youtube.com/embed/R4ZjeOlnYwM",
  "https://www.youtube.com/embed/YT65t1wJQZc",
];

const Stories = () => {
  return (
    <div className="impact-stories">
      {/* Hero Section */}
      <div className="hero-banner">
        <h1>Impact Stories</h1>
      </div>

      {/* Introduction Section */}
      <div className="video-intro">
        <h2>Witness the Change</h2>
        <p>
          Every temple tells a story of faith, resilience, and community. Here
          are some of the powerful transformations we’ve facilitated through
          your generous support. Watch and be inspired by the difference we make
          together.
        </p>
      </div>

      {/* Video Gallery */}
      <section className="video-gallery">
        {videos.map((video, index) => (
          <div className={`video-item video-${index + 1}`} key={index}>
            <iframe
              src={video}
              title={`Impact Story ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Stories;

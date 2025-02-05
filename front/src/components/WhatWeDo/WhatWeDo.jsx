/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import './WhatWeDo.css';
import Img1 from '../../assets/What_we_do_1.jpg'
import Img2 from '../../assets/What_we_do_2.jpg'
import Img3 from '../../assets/What_we_do_3.jpg'
import Img4 from '../../assets/What_we_do_4.jpg'
import Img5 from '../../assets/What_we_do_5.jpg'

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5
];

const WhatWeDo = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, []);

  return (
    <div className="what-we-do-container">
      <div className="left-side">
        <p className="what_we_do_p">What We Do</p>
        <h2>Supporting India's Sacred Temples – Reviving Heritage and Spirituality</h2>
        <p>
          At Chadhava Foundation, we are dedicated to the restoration and preservation of ancient temples across India. Our mission is to bring back the rich cultural heritage and divine sanctity of these sacred places, ensuring they stand strong for generations to come. We believe in the spiritual and historical significance of these temples, and through your generous contributions, we can help rebuild structures, preserve artwork, and ensure that the temples continue to remain accessible for worshippers.
        </p>
        <p>
          We work closely with temple authorities and local communities to understand their needs and provide the necessary resources to help them thrive. From restoration projects to educational programs that teach about the temples' history, our foundation strives to create a lasting impact. Join us in this noble cause and help us spread the light of faith, culture, and devotion across the country. Your support can make a difference in reviving these spiritual landmarks that have been the heart of India's culture for centuries.
        </p>
      </div>
      <div className="right-side">
        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt="Temple"
            className="slider-image"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

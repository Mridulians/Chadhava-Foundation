/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Involved.css";
import Img1 from "../../assets/get_involved_1.jpg";
import Img2 from "../../assets/get_involved_2.jpg";
import Img3 from "../../assets/get_involved_3.jpg";
import Img4 from "../../assets/get_involved_4.jpg";
import { useNavigate } from "react-router-dom";

const Involved = () => {
    const navigate = useNavigate();
  return (
    <div className="get-involved">
      {/* Banner Section */}
      <div className="hero-banner-involved">
        <h1>Get Involved</h1>
      </div>

      {/* Introduction Section */}
      <div className="intro">
        <p>
          At Chadhava Foundation, we believe that together, we can create a
          better future. Whether you're an individual looking to make a
          difference or a company looking to contribute to society, there are
          plenty of ways to get involved with us.
        </p>
        <p>
          Your involvement helps us reach more people, bring more change, and
          spread kindness. Join us in this journey and be a part of something
          meaningful.
        </p>
      </div>

      {/* Involvement Cards Section */}
      <div className="cards-container">
        <div className="card">
          <img src={Img1} alt="Job Openings" />
          <h3>Job Openings</h3>
          <p>
            Join our dedicated team and work with us to make a difference in
            people's lives.
          </p>
          <button className="contact_us_btn" onClick={()=>navigate('/contact-us')}>Contact Us</button>
        </div>

        <div className="card">
          <img src={Img2} alt="Volunteering" />
          <h3>Volunteering</h3>
          <p>
            Become a volunteer and be the helping hand that transforms
            communities.
          </p>
          <button className="contact_us_btn" onClick={()=>navigate('/contact-us')}>Contact Us</button>
        </div>

        <div className="card">
          <img src={Img3} alt="Corporate Activities" />
          <h3>Corporate Activities</h3>
          <p>
            Partner with us through CSR activities and social impact
            initiatives.
          </p>
          <button className="contact_us_btn" onClick={()=>navigate('/contact-us')}>Contact Us</button>
        </div>

        <div className="card">
          <img src={Img4} alt="Interning with Us" />
          <h3>Interning with Us</h3>
          <p>Gain hands-on experience and contribute to a meaningful cause.</p>
          <button className="contact_us_btn" onClick={()=>navigate('/contact-us')}>Contact Us</button>
        </div>

        <div className="card">
          <img src={Img3} alt="Corporate Activities" />
          <h3>Corporate Activities</h3>
          <p>
            Partner with us through CSR activities and social impact
            initiatives.
          </p>
          <button className="contact_us_btn" onClick={()=>navigate('/contact-us')}>Contact Us</button>
        </div>

        <div className="card">
          <img src={Img1} alt="Job Openings" />
          <h3>Job Openings</h3>
          <p>
            Join our dedicated team and work with us to make a difference in
            people's lives.
          </p>
          <button className="contact_us_btn" onClick={()=>navigate('/contact-us')}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Involved;

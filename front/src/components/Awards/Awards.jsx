/* eslint-disable no-unused-vars */
import React from 'react';
import './Awards.css';

const awards = [
  { 
    title: 'Excellence in Temple Restoration', 
    year: '2020', 
    description: 'Awarded for outstanding contributions to restoring ancient temples across South India.',
    img: 'https://www.helpageindia.org/wp-content/uploads/2024/09/Ms.-Argentina-Matavel-Piccin-UNFPA-Representative-India-L-presenting-the-certificate-to-Mr.-Rohit-Prasad-CEO-HelpAge-India.jpg'
  },
  { 
    title: 'Best Community Service NGO', 
    year: '2021', 
    description: 'Recognized for impactful community engagement and volunteer programs.',
    img: 'https://www.helpageindia.org/wp-content/uploads/2024/11/vayoshreshta-award.webp'
  },
  { 
    title: 'Cultural Heritage Award', 
    year: '2022', 
    description: 'Honored for preserving India\'s cultural heritage through temple conservation.',
    img: 'https://www.helpageindia.org/wp-content/uploads/2024/09/HelpAge-India_CRISIL-Grading-Certificate-2022.jpg'
  },
  { 
    title: 'Innovative Fundraising Initiatives', 
    year: '2023', 
    description: 'Awarded for creating unique, transparent fundraising models for temple upkeep.',
    img: 'https://www.helpageindia.org/wp-content/uploads/2024/11/vayoshreshta-award.webp'
  },
  { 
    title: 'Sustainability in Heritage Conservation', 
    year: '2024', 
    description: 'Recognized for implementing eco-friendly methods in temple renovations.',
    img: 'https://www.helpageindia.org/wp-content/uploads/2024/11/ECOSOC-Logo.webp'
  },
];

const Awards = () => {
  return (
    <section className="awards-section">
      <h2>Awards & Recognitions</h2>
      <p>Our dedication to preserving India’s sacred temples and cultural heritage has earned us numerous awards and recognitions over the years.</p>

      <div className="timeline">
        {awards.map((award, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="content">
              <img src={award.img} alt={`${award.title}`} />
              <h3>{award.title}</h3>
              <span className="year">{award.year}</span>
              <p>{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;

/* eslint-disable no-unused-vars */
import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Ananya Sharma', position: 'Founder & Visionary', img: 'https://www.helpageindia.org/wp-content/uploads/2024/09/Rumjhum-Chatterjee.png' },
  { name: 'Rajiv Menon', position: 'Director of Operations', img: 'https://www.helpageindia.org/wp-content/uploads/2024/09/Mr.-Kiran-Karnik.png' },
  { name: 'Priya Das', position: 'Fundraising Coordinator', img: 'https://www.helpageindia.org/wp-content/uploads/2024/09/Radhika-Bharat-Ram.png' },
  { name: 'Amit Verma', position: 'Cultural Heritage Expert', img: 'https://www.helpageindia.org/wp-content/uploads/2024/09/Mr.-Sanjeev-Kapur.png' },
  { name: 'Sneha Kapoor', position: 'Community Outreach Manager', img: 'https://www.helpageindia.org/wp-content/uploads/2024/09/Ms.-Gita-Nayyar.png' },
  { name: 'Vikram Singh', position: 'Restoration Architect', img: 'https://www.helpageindia.org/wp-content/uploads/2024/09/Mr.-Kaushik-Dutta.png' },
  { name: 'Kavya Iyer', position: 'Volunteer Coordinator', img: 'https://www.helpageindia.org/wp-content/uploads/2024/11/Sonali-Sharma.webp' },
  { name: 'Arjun Patel', position: 'Finance & Compliance Head', img: 'https://www.helpageindia.org/wp-content/uploads/2024/11/Mr.-Rohit-Prasad.webp' },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Dedicated Team</h2>
      <p>
        Behind every temple restored and every tradition preserved is a team of passionate individuals.
        Our team is committed to safeguarding India’s spiritual heritage and fostering a sense of community across the nation.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={`${member.name}`} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

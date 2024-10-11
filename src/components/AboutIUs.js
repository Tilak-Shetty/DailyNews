import React from 'react';
import './AboutUs.css'; // You can style the component by creating a separate CSS file.

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About DailyNews</h1>
      <p>
        Welcome to <strong>DailyNews</strong>, your go-to platform for the latest and most reliable news from around the world. 
        Our mission is to keep you informed with up-to-date and accurate information on a wide range of topics, 
        including politics, technology, business, sports, entertainment, and more.
      </p>
      <p>
        At <strong>DailyNews</strong>, we believe that staying informed is essential in today’s fast-paced world. 
        Our dedicated team works tirelessly to bring you breaking news, in-depth analysis, and insightful commentary to help you 
        stay ahead of the curve.
      </p>
      <p>
        Whether you’re browsing on the go or relaxing at home, DailyNews provides a seamless and engaging experience 
        to ensure you never miss out on what matters.
      </p>
      <p>
        <strong>Stay informed. Stay connected. Stay with DailyNews.</strong>
      </p>
    </div>
  );
};

export default AboutUs;

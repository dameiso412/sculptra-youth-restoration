import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <h1>Welcome to Our Landing Page</h1>
          <p>A beautiful, responsive landing page for your business</p>
        </div>
      </header>
      
      <section className="features-section">
        <div className="container">
          <h2>Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Feature 1</h3>
              <p>Description of feature 1 and its benefits.</p>
            </div>
            <div className="feature-card">
              <h3>Feature 2</h3>
              <p>Description of feature 2 and its benefits.</p>
            </div>
            <div className="feature-card">
              <h3>Feature 3</h3>
              <p>Description of feature 3 and its benefits.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied customers today!</p>
          <button className="cta-button">Sign Up Now</button>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
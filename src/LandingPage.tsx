import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page" style={{ 
      width: '100%', 
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <header style={{ 
        textAlign: 'center', 
        padding: '60px 0', 
        background: '#4a90e2',
        color: 'white',
        marginBottom: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Our Landing Page</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            A beautiful, responsive landing page for your business needs.
          </p>
        </div>
      </header>
      
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Our Features</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#4a90e2' }}>Feature 1</h3>
            <p>Description of feature 1 and its benefits for your business.</p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#4a90e2' }}>Feature 2</h3>
            <p>Description of feature 2 and its benefits for your business.</p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#4a90e2' }}>Feature 3</h3>
            <p>Description of feature 3 and its benefits for your business.</p>
          </div>
        </div>
      </section>
      
      <section style={{ 
        background: '#333', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center',
        margin: '60px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
            Join thousands of satisfied customers today!
          </p>
          <button style={{ 
            background: '#4a90e2', 
            color: 'white', 
            border: 'none', 
            padding: '15px 30px', 
            fontSize: '1.2rem', 
            borderRadius: '4px', 
            cursor: 'pointer'
          }}>
            Sign Up Now
          </button>
        </div>
      </section>
      
      <footer style={{ 
        background: '#f5f5f5', 
        padding: '30px 20px', 
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
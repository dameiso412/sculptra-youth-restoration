import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './LandingPage';

function App() {
  useEffect(() => {
    console.log('App component mounted');
    // Log styling information for debugging
    const appElement = document.querySelector('.App');
    if (appElement) {
      const styles = window.getComputedStyle(appElement);
      console.log('App element styles:', {
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity
      });
    }
  }, []);

  // Force inline styles to ensure visibility
  return (
    <div 
      className="App" 
      style={{ 
        width: '100%', 
        minHeight: '100vh', 
        display: 'block', 
        visibility: 'visible', 
        opacity: 1 
      }}
    >
      <LandingPage />
    </div>
  );
}

export default App;
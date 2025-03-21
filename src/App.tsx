import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import './App.css';

function App() {
  // State to track visibility and mounting
  const [isMounted, setIsMounted] = useState(false);
  const [visibilityChecked, setVisibilityChecked] = useState(false);
  
  // Verbose logging for debugging deployment issues
  useEffect(() => {
    console.log('App component mounted with timestamp: 2025-03-21T22:20:34.698Z');
    setIsMounted(true);
    
    // Notify parent window that React has mounted
    if (window.__reactMounted && typeof window.__reactMounted === 'function') {
      window.__reactMounted();
    }
    
    // Log DOM structure and critical elements
    const rootEl = document.getElementById('root');
    console.log('Root element:', rootEl ? {
      id: rootEl.id,
      children: rootEl.childNodes.length,
      style: window.getComputedStyle(rootEl)
    } : 'NOT FOUND');
    
    // Force visibility check and correction
    const checkAndFixVisibility = () => {
      const appEl = document.querySelector('.App');
      const landingEl = document.querySelector('.landing-page');
      
      console.log('Visibility check at', new Date().toISOString());
      
      if (appEl) {
        const appStyle = window.getComputedStyle(appEl);
        console.log('App element styles:', {
          display: appStyle.display,
          visibility: appStyle.visibility,
          opacity: appStyle.opacity
        });
        
        // Force visibility if needed
        if (appStyle.display === 'none' || appStyle.visibility === 'hidden' || appStyle.opacity === '0') {
          console.log('Forcing App element visibility');
          appEl.setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important; width: 100%; min-height: 100vh;');
        }
      }
      
      if (landingEl) {
        const landingStyle = window.getComputedStyle(landingEl);
        console.log('Landing page styles:', {
          display: landingStyle.display,
          visibility: landingStyle.visibility,
          opacity: landingStyle.opacity
        });
        
        // Force visibility if needed
        if (landingStyle.display === 'none' || landingStyle.visibility === 'hidden' || landingStyle.opacity === '0') {
          console.log('Forcing landing page element visibility');
          landingEl.setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important; width: 100%; min-height: 100vh;');
        }
      }
      
      setVisibilityChecked(true);
    };
    
    // Run visibility check immediately
    checkAndFixVisibility();
    
    // And also after a delay to catch any late CSS application
    const visibilityTimer = setTimeout(checkAndFixVisibility, 500);
    
    // Also run checks when window is fully loaded
    window.addEventListener('load', checkAndFixVisibility);
    
    return () => {
      clearTimeout(visibilityTimer);
      window.removeEventListener('load', checkAndFixVisibility);
    };
  }, []);

  // Render with explicit inline styles for guaranteed visibility
  return (
    <div 
      className="App" 
      style={{ 
        width: '100%', 
        minHeight: '100vh', 
        display: 'block', 
        visibility: 'visible', 
        opacity: 1,
        position: 'relative',
        zIndex: 10,
        overflow: 'auto'
      }}
      data-mounted={isMounted ? 'true' : 'false'}
      data-visibility-checked={visibilityChecked ? 'true' : 'false'}
      data-timestamp="2025-03-21T22:20:34.698Z"
    >
      {/* Loading indicator inside App as backup */}
      {!visibilityChecked && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <p>Checking content visibility...</p>
        </div>
      )}
      
      <LandingPage />
      
      {/* Add a tiny debug indicator in corner */}
      <div style={{ 
        position: 'fixed', 
        bottom: 5, 
        right: 5, 
        background: '#4c1d95',
        color: 'white',
        padding: '2px 6px',
        fontSize: '10px',
        borderRadius: '4px',
        opacity: 0.6,
        zIndex: 9999
      }}>
        React Mounted
      </div>
    </div>
  );
}

export default App;
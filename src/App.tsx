import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import './App.css';

// Type definitions for our global window extensions
interface ScriptStatus {
  mainLoaded: boolean;
  rootMounted: boolean;
  reactInitialized: boolean;
  errors: Array<{
    message: string;
    stack: string;
    time: string;
  }>;
}

declare global {
  interface Window {
    __reactMounted?: () => void;
    __pageLoadTime?: string;
    __scriptStatus?: ScriptStatus;
  }
}

function App() {
  // State to track visibility and mounting
  const [isMounted, setIsMounted] = useState(false);
  const [visibilityChecked, setVisibilityChecked] = useState(false);
  
  // Verbose logging for debugging deployment issues
  useEffect(() => {
    console.log('App component mounted with timestamp: 2025-03-22T00:00:28.516Z');
    setIsMounted(true);
    
    // Notify parent window that React has mounted
    if (typeof window !== 'undefined' && window.__reactMounted && typeof window.__reactMounted === 'function') {
      window.__reactMounted();
    }
    
    // Log DOM structure and critical elements
    const rootEl = document.getElementById('root');
    if (rootEl) {
      console.log('Root element:', {
        id: rootEl.id,
        children: rootEl.childNodes.length,
        style: window.getComputedStyle(rootEl)
      });
    } else {
      console.log('Root element: NOT FOUND');
    }
    
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
        
        // Force visibility if needed with proper type casting
        if (appStyle.display === 'none' || appStyle.visibility === 'hidden' || appStyle.opacity === '0') {
          console.log('Forcing App element visibility');
          (appEl as HTMLElement).style.display = 'block';
          (appEl as HTMLElement).style.visibility = 'visible';
          (appEl as HTMLElement).style.opacity = '1';
          (appEl as HTMLElement).style.width = '100%';
          (appEl as HTMLElement).style.minHeight = '100vh';
        }
      }
      
      if (landingEl) {
        const landingStyle = window.getComputedStyle(landingEl);
        console.log('Landing page styles:', {
          display: landingStyle.display,
          visibility: landingStyle.visibility,
          opacity: landingStyle.opacity
        });
        
        // Force visibility if needed with proper type casting
        if (landingStyle.display === 'none' || landingStyle.visibility === 'hidden' || landingStyle.opacity === '0') {
          console.log('Forcing landing page element visibility');
          (landingEl as HTMLElement).style.display = 'block';
          (landingEl as HTMLElement).style.visibility = 'visible';
          (landingEl as HTMLElement).style.opacity = '1';
          (landingEl as HTMLElement).style.width = '100%';
          (landingEl as HTMLElement).style.minHeight = '100vh';
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
    
    // Initialize or update window.__scriptStatus
    if (typeof window !== 'undefined') {
      if (!window.__scriptStatus) {
        window.__scriptStatus = {
          mainLoaded: false,
          rootMounted: true,
          reactInitialized: true,
          errors: []
        };
      } else {
        window.__scriptStatus.rootMounted = true;
        window.__scriptStatus.reactInitialized = true;
      }
    }
    
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
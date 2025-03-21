import React, { useEffect, useState } from 'react';
import './App.css';

// Import LandingPage component - This is the main content that will be displayed
// If this import fails, a fallback component will be rendered
let LandingPage: React.FC;
try {
  // Dynamic import attempt with fallback
  LandingPage = require('./LandingPage').default;
} catch (error) {
  console.error('Failed to import LandingPage component:', error);
  // Fallback implementation if the import fails
  LandingPage = () => (
    <div style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to Our Landing Page</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
        The main landing page component could not be loaded. 
        This is a fallback component to ensure something is displayed.
      </p>
      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f9fafb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Features:</h2>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Feature 1 Description</li>
          <li style={{ marginBottom: '0.5rem' }}>Feature 2 Description</li>
          <li style={{ marginBottom: '0.5rem' }}>Feature 3 Description</li>
        </ul>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <button style={{ 
          background: '#3b82f6', 
          color: 'white', 
          padding: '0.75rem 1.5rem', 
          border: 'none', 
          borderRadius: '0.375rem',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
}

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

// Make these types available in the global namespace
declare global {
  interface Window {
    __scriptStatus?: ScriptStatus;
    __reactMounted?: () => void;
    __pageLoadTime?: string;
  }
}

function App() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Setup effect for tracking mounting and diagnostics
  useEffect(() => {
    console.log('✅ App component mounted at', new Date().toISOString());
    setIsMounted(true);
    
    // Notify parent window that React has mounted (used for error handling)
    if (typeof window !== 'undefined' && window.__reactMounted && typeof window.__reactMounted === 'function') {
      window.__reactMounted();
    }
    
    // Check and log DOM structure for diagnostic purposes
    const rootEl = document.getElementById('root');
    if (rootEl) {
      console.log('✅ Root element found with children:', rootEl.childNodes.length);
    } else {
      console.error('❌ Root element not found in DOM');
    }
    
    // Force visibility check and correction
    const checkAndFixVisibility = () => {
      // Try to find the App element
      const appEl = document.querySelector('.App');
      if (appEl) {
        const appStyle = window.getComputedStyle(appEl);
        // Force visibility if needed with proper type casting
        if (appStyle.display === 'none' || appStyle.visibility === 'hidden') {
          console.log('🔧 Forcing App element visibility');
          (appEl as HTMLElement).style.display = 'block';
          (appEl as HTMLElement).style.visibility = 'visible';
          (appEl as HTMLElement).style.opacity = '1';
        }
      }
    };
    
    // Run visibility check after mounting
    checkAndFixVisibility();
    
    // And also after a delay to catch any late CSS application
    const visibilityTimer = setTimeout(checkAndFixVisibility, 500);
    
    // Initialize window.__scriptStatus for tracking
    if (typeof window !== 'undefined') {
      if (!window.__scriptStatus) {
        window.__scriptStatus = {
          mainLoaded: true,
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
    };
  }, []);

  // Render the App with explicit inline styles for guaranteed visibility
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
      data-mounted={isMounted ? 'true' : 'false'}
    >
      <LandingPage />
    </div>
  );
}

export default App;

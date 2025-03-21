import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './LandingPage';

// Global type declarations for TypeScript support
declare global {
  interface Window {
    __reactMounted?: () => void;
    __scriptStatus?: {
      mainLoaded?: boolean;
      rootMounted?: boolean;
      reactInitialized?: boolean;
      errors?: Array<{
        message: string;
        stack: string;
        time: string;
      }>;
    };
  }
}

function App() {
  useEffect(() => {
    console.log('App component mounted');
    // Log styling information for debugging with proper TypeScript casting
    const appElement = document.querySelector('.App');
    if (appElement) {
      const styles = window.getComputedStyle(appElement as Element);
      console.log('App element styles:', {
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity
      });
    }
    
    // Report mount status to global tracker with type guard
    if (typeof window !== 'undefined' && window.__scriptStatus) {
      window.__scriptStatus.rootMounted = true;
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
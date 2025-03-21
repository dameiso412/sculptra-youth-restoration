import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Critical load indicator
console.log('⭐ main.tsx executing at', new Date().toISOString());

// DOM content loaded check
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔄 DOM fully loaded and parsed');
  
  // Get the root element for React mounting
  const rootElement = document.getElementById('root');
  
  // If no root element, create one
  if (!rootElement) {
    console.error('❌ No #root element found in the document!');
    
    // Create the root element since it doesn't exist
    const newRoot = document.createElement('div');
    newRoot.id = 'root';
    document.body.appendChild(newRoot);
    
    console.log('✅ Created new #root element as fallback');
    
    // Try mounting React on the newly created root
    try {
      const root = createRoot(newRoot);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log('✅ React mounted on fallback root element');
      // Notify parent window that React has mounted (used by the error handling in index.html)
      if (typeof window !== 'undefined' && window.__reactMounted) {
        window.__reactMounted();
      }
    } catch (error) {
      console.error('❌ Failed to render React on fallback root:', error);
      
      // Show visible error on the page
      newRoot.innerHTML = `
        <div style="font-family: sans-serif; padding: 20px; max-width: 800px; margin: 0 auto;">
          <h2 style="color: #e11d48;">React Rendering Error</h2>
          <p>There was an error rendering the React application:</p>
          <pre style="background: #f1f1f1; padding: 10px; border-radius: 4px; overflow: auto;">${error}</pre>
          <p>Please check the console for more details.</p>
        </div>
      `;
    }
  } else {
    // Normal initialization with enhanced error handling
    try {
      const root = createRoot(rootElement);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log('✅ React mounted successfully on existing root element');
      // Notify parent window that React has mounted (used by the error handling in index.html)
      if (typeof window !== 'undefined' && window.__reactMounted) {
        window.__reactMounted();
      }
    } catch (error) {
      console.error('❌ Failed to render React on existing root:', error);
      
      // Show visible error on the page
      rootElement.innerHTML = `
        <div style="font-family: sans-serif; padding: 20px; max-width: 800px; margin: 0 auto;">
          <h2 style="color: #e11d48;">React Rendering Error</h2>
          <p>There was an error rendering the React application:</p>
          <pre style="background: #f1f1f1; padding: 10px; border-radius: 4px; overflow: auto;">${error}</pre>
          <p>Please check the console for more details.</p>
        </div>
      `;
    }
  }
  
  // Mark main script as loaded in global status tracker
  if (typeof window !== 'undefined') {
    if (!window.__scriptStatus) {
      window.__scriptStatus = {
        mainLoaded: true,
        rootMounted: false,
        reactInitialized: false,
        errors: []
      };
    } else {
      window.__scriptStatus.mainLoaded = true;
    }
  }
});

// Add window error handler for uncaught exceptions
window.addEventListener('error', (event) => {
  console.error('❌ Global error caught:', event.error || event.message);
  
  // Log error to our custom tracker if available
  if (typeof window !== 'undefined' && window.__scriptStatus) {
    window.__scriptStatus.errors.push({
      message: event.message,
      stack: event.error?.stack || '',
      time: new Date().toISOString()
    });
  }
});

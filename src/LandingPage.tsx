import React, { useEffect, useState } from 'react';
import './LandingPage.css';

// Declare global types to ensure TypeScript recognizes window extensions
declare global {
  interface Window {
    __reactMounted?: () => void;
    __scriptStatus?: {
      mainLoaded: boolean;
      rootMounted: boolean;
      reactInitialized: boolean;
      errors: Array<{
        message: string;
        stack: string;
        time: string;
      }>;
    };
  }
}

function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Component mount and visibility enforcement
  useEffect(() => {
    // Debug information
    console.log('LandingPage component mounted at', new Date().toISOString());
    console.log('LandingPage timestamp: 2025-03-21T23-10-50-845Z');
    
    // Mark as mounted
    setMounted(true);
    
    // Force visibility by directly manipulating DOM
    const forceElementVisibility = () => {
      console.log('Forcing landing page visibility');
      const landingPageElement = document.querySelector('.landing-page');
      
      if (landingPageElement) {
        // Get current styles
        const styles = window.getComputedStyle(landingPageElement);
        console.log('Landing page styles before fix:', {
          display: styles.display,
          visibility: styles.visibility,
          opacity: styles.opacity
        });
        
        // Force visibility with !important flags
        // Use proper type assertion for HTMLElement
        (landingPageElement as HTMLElement).setAttribute('style', 
          'display: block !important; ' +
          'visibility: visible !important; ' +
          'opacity: 1 !important; ' +
          'width: 100% !important; ' +
          'min-height: 100vh !important;'
        );
        
        // Check if forcing worked
        const newStyles = window.getComputedStyle(landingPageElement);
        console.log('Landing page styles after fix:', {
          display: newStyles.display,
          visibility: newStyles.visibility,
          opacity: newStyles.opacity
        });
        
        // Also check if children are visible
        const headerElement = document.querySelector('.landing-header');
        if (headerElement) {
          // Use proper type assertion for HTMLElement
          (headerElement as HTMLElement).setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important;');
        }
        
        setContentVisible(true);
      } else {
        console.error('Could not find .landing-page element to force visibility');
      }
    };
    
    // Run visibility fix immediately
    forceElementVisibility();
    
    // And again after a short delay (to catch any styles applied after mount)
    const visibilityTimer = setTimeout(forceElementVisibility, 500);
    
    // And one more time for good measure
    const finalCheckTimer = setTimeout(() => {
      forceElementVisibility();
      console.log('Final visibility check completed');
      
      // Create a DOM mutation observer to watch for any style changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            // If style changes, force visibility again
            forceElementVisibility();
          }
        });
      });
      
      // Start observing the landing page element
      const landingPageElement = document.querySelector('.landing-page');
      if (landingPageElement) {
        observer.observe(landingPageElement, { attributes: true });
      }
    }, 2000);
    
    // Apply direct visibility corrections to body and root
    // Use type assertions for all HTML elements
    document.body.style.display = 'block';
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
    
    const rootElement = document.getElementById('root');
    if (rootElement) {
      // Use proper type assertion
      (rootElement as HTMLElement).style.display = 'block';
      (rootElement as HTMLElement).style.visibility = 'visible';
      (rootElement as HTMLElement).style.opacity = '1';
    }
    
    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(finalCheckTimer);
    };
  }, []);

  // This component was last updated at: 2025-03-21T23:10:50.845Z
  return (
    <div 
      className="landing-page" 
      style={{ 
        display: 'block', 
        visibility: 'visible', 
        opacity: 1, 
        width: '100%',
        minHeight: '100vh'
      }}
      data-mounted={mounted.toString()}
      data-visible={contentVisible.toString()}
      data-timestamp="2025-03-21T23-10-50-845Z"
    >
      <header className="landing-header">
        <div className="container">
          <h1>Welcome to Our Landing Page</h1>
          <p className="subtitle">This page has been synced from Lovable at 2025-03-21T23-10-50-845Z</p>
          <p className="update-id">Update ID: 8p9sinag3wg</p>
          <p className="mount-status">{mounted ? '✅ Component Mounted' : '⏳ Mounting...'}</p>
          <p className="visibility-status">{contentVisible ? '✅ Content Visible' : '⏳ Fixing Visibility...'}</p>
        </div>
      </header>
      <main>
        <section className="features-section">
          <div className="container">
            <h2>Our Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Easy to use</h3>
                <p>Our platform is designed to be intuitive and user-friendly.</p>
              </div>
              <div className="feature-card">
                <h3>Fully customizable</h3>
                <p>Tailor everything to match your brand and specific needs.</p>
              </div>
              <div className="feature-card">
                <h3>Great performance</h3>
                <p>Optimized for speed and responsiveness on all devices.</p>
              </div>
              <div className="feature-card">
                <h3>Updated: 2025-03-21T23-10-50-845Z</h3>
                <p>We regularly improve our platform with new features.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <div className="container">
            <h2>Ready to get started?</h2>
            <p>Join thousands of satisfied customers today!</p>
            <button className="cta-button" onClick={() => console.log('CTA button clicked')}>
              Sign Up Now
            </button>
          </div>
        </section>
        
        {/* Debug information section */}
        <section className="debug-section" style={{ padding: '20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
          <div className="container">
            <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Page Information</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ padding: '0.25rem 0.5rem', background: '#e0f2fe', borderRadius: '0.25rem', fontSize: '0.75rem' }}>
                Timestamp: 2025-03-21T23-10-50-845Z
              </div>
              <div style={{ padding: '0.25rem 0.5rem', background: '#e0f2fe', borderRadius: '0.25rem', fontSize: '0.75rem' }}>
                Mounted: {mounted ? 'Yes' : 'No'}
              </div>
              <div style={{ padding: '0.25rem 0.5rem', background: '#e0f2fe', borderRadius: '0.25rem', fontSize: '0.75rem' }}>
                Content Visible: {contentVisible ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="landing-footer">
        <div className="container">
          <p>&copy; 2025 - Created with Lovable</p>
          <p className="debug-footer">Last updated at 2025-03-21T23-10-50-845Z</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
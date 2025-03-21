// Deployment diagnostic utilities

/**
 * Checks for common deployment and rendering issues
 */
export function runDeploymentDiagnostics() {
  console.log('=== DEPLOYMENT DIAGNOSTICS STARTED ===');
  console.log('Running at:', new Date().toISOString());
  
  // Check for React initialization
  console.log('React initialization:', {
    reactInWindow: typeof window.React !== 'undefined',
    createRootInWindow: typeof window.ReactDOM?.createRoot !== 'undefined'
  });
  
  // DOM structure
  const rootElement = document.getElementById('root');
  console.log('Root element:', rootElement ? {
    childNodes: rootElement.childNodes.length,
    innerHTML: rootElement.childNodes.length < 3 ? rootElement.innerHTML : '[Content too large]'
  } : 'NOT FOUND');
  
  // Check style sheets
  const styleSheets = document.styleSheets;
  console.log('Style sheets loaded:', styleSheets.length);
  
  // Check scripts
  const scripts = document.scripts;
  const scriptUrls = Array.from(scripts).map(script => script.src);
  console.log('Scripts loaded:', scripts.length);
  console.log('Script URLs:', scriptUrls);
  
  // Check React components
  const appElement = document.querySelector('.App');
  console.log('App component:', appElement ? 'Found' : 'Not found');
  
  const landingElement = document.querySelector('.landing-page');
  console.log('Landing page component:', landingElement ? 'Found' : 'Not found');
  
  // Check for errors
  console.log('Recorded errors:', window.__scriptStatus?.errors || 'No error tracking available');
  
  console.log('=== DEPLOYMENT DIAGNOSTICS COMPLETED ===');
  
  return {
    timestamp: new Date().toISOString(),
    reactInitialized: typeof window.React !== 'undefined',
    rootFound: !!rootElement,
    appFound: !!appElement,
    landingFound: !!landingElement,
    stylesheetsCount: styleSheets.length,
    scriptsCount: scripts.length,
    errors: window.__scriptStatus?.errors || []
  };
}

/**
 * Attempts to fix common issues with React rendering
 */
export function attemptRenderingFix() {
  console.log('Attempting to fix rendering issues...');
  
  // Force visibility on all key elements
  const elements = [
    document.body,
    document.getElementById('root'),
    document.querySelector('.App'),
    document.querySelector('.landing-page')
  ];
  
  elements.forEach(el => {
    if (el) {
      el.style.display = 'block';
      el.style.visibility = 'visible';
      el.style.opacity = '1';
    }
  });
  
  console.log('Applied visibility fixes to elements');
  
  // Force an update of the DOM
  try {
    document.body.offsetHeight; // Trigger reflow
  } catch (e) {
    console.error('Error triggering reflow:', e);
  }
  
  console.log('Rendering fix attempts completed');
}

// Export diagnostic functions
export default {
  runDeploymentDiagnostics,
  attemptRenderingFix
};
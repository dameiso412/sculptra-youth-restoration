import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Function to handle errors during render
function handleRenderError(error: Error) {
  console.error('Error rendering React application:', error);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif;">
        <h2 style="color: #d32f2f;">Rendering Error</h2>
        <p>There was an error rendering the application:</p>
        <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${error.message}
${error.stack}</pre>
      </div>
    `;
  }
}

// Ensure the DOM is fully loaded before mounting React
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('DOM loaded, mounting React application...');
    const rootElement = document.getElementById('root');
    
    if (!rootElement) {
      throw new Error('Failed to find the root element');
    }
    
    // Log root element properties
    console.log('Root element found:', {
      id: rootElement.id,
      tagName: rootElement.tagName,
      childNodes: rootElement.childNodes.length
    });
    
    const root = createRoot(rootElement);
    
    // Wrap the render in a try-catch for better error visibility
    try {
      root.render(<App />);
      console.log('React application mounted successfully');
    } catch (renderError) {
      console.error('Error during render:', renderError);
      handleRenderError(renderError instanceof Error ? renderError : new Error(String(renderError)));
    }
  } catch (error) {
    console.error('Error during React initialization:', error);
    handleRenderError(error instanceof Error ? error : new Error(String(error)));
  }
});

// Log that the script was loaded
console.log('main.tsx script loaded at', new Date().toISOString());
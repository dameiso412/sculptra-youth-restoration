/// <reference types="vite/client" />

// Augment the Window interface to include our custom properties
interface Window {
  __reactMounted?: () => void;
  __pageLoadTime?: string;
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
  React?: any;
  ReactDOM?: {
    createRoot?: any;
  };
}

// Declare global namespace for these properties to be accessible globally
declare global {
  interface Window {
    __reactMounted?: () => void;
    __pageLoadTime?: string;
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
    React?: any;
    ReactDOM?: {
      createRoot?: any;
    };
  }
}
// Global type declarations for window objects
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

// Make sure these are available in the global scope
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
/// <reference types="vite/client" />

// Define typed interfaces for global objects
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

// Define the window extensions globally to ensure TypeScript recognizes them
interface Window {
  __reactMounted?: () => void;
  __pageLoadTime?: string;
  __scriptStatus?: ScriptStatus;
  React?: any;
  ReactDOM?: {
    createRoot?: any;
  };
}

// Make these types available in the global namespace
declare global {
  interface Window {
    __reactMounted?: () => void;
    __pageLoadTime?: string;
    __scriptStatus?: ScriptStatus;
    React?: any;
    ReactDOM?: {
      createRoot?: any;
    };
  }
}
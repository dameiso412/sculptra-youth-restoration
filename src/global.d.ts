// Global type declarations for the entire application

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

// Define the window extensions globally
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
  
  // Extend HTMLElement to ensure TypeScript recognizes style property access
  interface HTMLElement {
    style: CSSStyleDeclaration;
  }
}
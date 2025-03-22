import React from 'react';

const LandingPage: React.FC = () => {
  console.log("✅ LandingPage is rendering and visible");

  return (
    <div
      className="landing-page"
      style={{
        background: 'white',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          color: 'red',
          fontSize: '48px',
          textAlign: 'center',
        }}
      >
        🚀 Landing is visible!
      </h1>
    </div>
  );
};

export default LandingPage;

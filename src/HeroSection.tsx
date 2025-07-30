import React from 'react';

const HeroSection = () => {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '0 0 20px 0',
      }}
    >
      <div
        className="hero-container"
        style={{
          width: '100%',
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0px 20px 5px 65px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 0,
          // marginLeft:5,
          // marginRight:5
        }}
      >
        {/* Text */}
        <div
          className="hero-text"
          style={{
            flex: 1,
            paddingTop: 0,
            paddingBottom: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            paddingLeft: 0,
          }}
        >
          <h1
            className="hero-title"
            style={{
              fontSize: 53,
              fontWeight: 800,
              color: '#1a202c',
              fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              letterSpacing: '-0.02em',
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Get your tasks done
            <span style={{ color: '#f9b233', display: 'block', fontSize: '0.9em' }}>wherever you are</span>
          </h1>
          <p
            className="hero-description"
            style={{
              fontSize: 20,
              color: '#6B7280',
              maxWidth: 550,
              lineHeight: 1.5,
              marginBottom: 36,
              marginTop: 8,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Post any task, anywhere. Trusted locals will handle it for you.
          </p>
          <div className="hero-buttons" style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: 16, 
            marginBottom: 16,
          }}>
            <button
              className="hero-button primary"
              style={{
                background: 'hsl(42 96% 62%)',
                color: '#222',
                fontWeight: 'bold',
                fontSize: 18,
                padding: '0px 32px',
                borderRadius: 5,
                border: 'none',
                boxShadow: '0 4px 16px #f9b23344',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'background 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'hsl(42 96% 62%)'}
              onMouseOut={e => e.currentTarget.style.background = 'hsl(42 96% 62%)'}
            >
              Get Started
              <span style={{ marginLeft: 10, fontSize: 18, color: '#222' }}>→</span>
            </button>
            <button
              className="hero-button secondary"
              style={{
                background: '#fff',
                color: 'hsl(42 96% 62%)',
                fontWeight: 'bold',
                fontSize: 18,
                padding: '16px 32px',
                borderRadius: 10,
                border: '2px solid hsl(42 96% 62%)',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#222';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = 'hsl(42 96% 62%)';
              }}
            >
              <span style={{ marginRight: 10, fontSize: 18, color: 'hsl(42 96% 62%)' }}>▶</span>
              Watch Demo
            </button>
          </div>
        </div>
        {/* Image/Mockup */}
        <div
          className="hero-mockup"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
            position: 'relative',
            minWidth: 520
          }}
        >
          <div
            className="mockup-container"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 920,
              minHeight: 320,
              animation: 'slideUp 1s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={require('../assets/images/herocard.png')}
              alt="Extrahand Mobile App"
              style={{
                width: '100%',
                maxWidth: 520,
                height: 'auto',
                borderRadius: 24,
                marginRight: 170,
                // boxShadow: '0 12px 32px #0003',
                // margin: '0 auto',
              }}
              onError={e => {
                e.currentTarget.src = require('../assets/mobilescreens/approve-task.jpg');
              }}
            />


          </div>
        </div>
      </div>
      {/* Keyframes for animation */}
      <style>
        {`
          @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
          }
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          
          @media (max-width: 768px) {
            .hero-container {
              flex-direction: column !important;
              gap: 32px !important;
              padding: 0 0 !important;
            }
            .hero-text {
              flex: none !important;
              text-align: center !important;
              align-items: center !important;
              padding-left: 0 !important;
              width: 100% !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
            }
            .hero-title {
              font-size: 40px !important;
            }
            .hero-description {
              font-size: 18px !important;
              max-width: 100% !important;
              white-space: pre-line !important;
              text-align: center !important;
            }
            .hero-buttons {
              flex-direction: column !important;
              width: 100% !important;
              max-width: 300px !important;
              // align-items: center !important;
              // justify-content: center !important;
            }
            .hero-button {
              font-size: 18px !important;
              padding: 14px 28px !important;
              justify-content: center !important;
            }
            .hero-mockup {
              flex: none !important;
              min-height: 250px !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              width: 100% !important;
              padding : 0px 15px 0px 15px !important;
            }
            .mockup-container {
              max-width: 280px !important;
              min-height: 250px !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              
            }
            .mockup-device {
              padding: 20px !important;
              border-radius: 24px !important;
              margin: 0 auto !important;
              width: 100% !important;
              max-width: 280px !important;
              
            }
            .mockup-screen {
              padding: 16px !important;
              border-radius: 16px !important;
              gap: 12px !important;
            }
                         .floating-element {
               display: none !important;
             }
          }
          
          @media (max-width: 480px) {
            .hero-title {
              font-size: 32px !important;
            }
            .hero-description {
              font-size: 16px !important;
            }
            .hero-button {
              font-size: 16px !important;
              padding: 12px 24px !important;
            }
            .mockup-device {
              padding: 16px !important;
              border-radius: 20px !important;
            }
            .mockup-screen {
              padding: 12px !important;
              border-radius: 12px !important;
              gap: 8px !important;
              
            }
            .mockup-app-name {
              font-size: 16px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection; 
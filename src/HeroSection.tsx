import React from 'react';

const HeroSection = () => {
  return (
    <section
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(120deg, #f8fafc 0%, #f1f5f9 100%)',
        padding: '0 0 40px 0',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 40,
        }}
      >
        {/* Text */}
        <div
          style={{
            flex: 7,
            paddingTop: 34,
            paddingBottom: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            paddingLeft: 48,
          }}
        >
          <h1
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: '#1a202c',
              fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              letterSpacing: '-0.03em',
              marginBottom: 8,
              lineHeight: 1.1,
            }}
          >
            Get your tasks done
            <span style={{ color: '#f9b233', display: 'block' }}>wherever you are</span>
          </h1>
          <p
            style={{
              fontSize: 22,
              color: '#6B7280',
              maxWidth: 520,
              lineHeight: 1.5,
              marginBottom: 32,
              marginTop: 8,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Post any task, anywhere. Trusted locals will handle it for you.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 16, marginBottom: 16 }}>
            <button
              style={{
                background: '#f9b233',
                color: '#222',
                fontWeight: 'bold',
                fontSize: 20,
                padding: '16px 36px',
                borderRadius: 16,
                border: 'none',
                boxShadow: '0 4px 16px #f9b23344',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'background 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#ffd966'}
              onMouseOut={e => e.currentTarget.style.background = '#f9b233'}
            >
              Get Started
              <span style={{ marginLeft: 12, fontSize: 22, color: '#222' }}>→</span>
            </button>
            <button
              style={{
                background: '#fff',
                color: '#f9b233',
                fontWeight: 'bold',
                fontSize: 20,
                padding: '16px 36px',
                borderRadius: 16,
                border: '2px solid #f9b233',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#f9b23322';
                e.currentTarget.style.color = '#222';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#f9b233';
              }}
            >
              <span style={{ marginRight: 12, fontSize: 22, color: '#f9b233' }}>▶</span>
              Watch Demo
            </button>
          </div>
        </div>
        {/* Image/Mockup */}
        <div
          style={{
            flex: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
            position: 'relative',
            marginRight: 100,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 400,
              minHeight: 320,
              animation: 'slideUp 1s ease',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.7)',
                borderRadius: 32,
                padding: 32,
                boxShadow: '0 8px 32px #f9b23322, 0 2px 16px #0001',
                width: '100%',
                maxWidth: 400,
                backdropFilter: 'blur(8px)',
                marginRight: 0,
              }}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  boxShadow: '0 2px 8px #0001',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img
                      src={require('../assets/images/logo.png')}
                      alt="Extrahand Logo"
                      style={{ width: 32, height: 32, borderRadius: 8, background: '#f3f4f6', objectFit: 'cover' }}
                      onError={e => { e.currentTarget.src = '/logo.png'; }}
                    />
                    <span style={{ fontWeight: 700, color: '#2563EB', fontSize: 20 }}>Extrahand</span>
                  </div>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      background: '#10B981',
                      borderRadius: 6,
                      animation: 'bounce 1.5s infinite alternate',
                    }}
                  ></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ background: '#f3f4f6', borderRadius: 10, padding: 12 }}>
                    <p style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>New Task Posted</p>
                    <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>Pick up forgotten laptop from office</p>
                  </div>
                  <div style={{ background: '#fff7e6', borderRadius: 10, padding: 12 }}>
                    <p style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>Match Found!</p>
                    <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>Sarah is 2.3km away</p>
                  </div>
                  <div style={{ background: '#d1fae5', borderRadius: 10, padding: 12 }}>
                    <p style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>Task Complete</p>
                    <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>Photo proof uploaded</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div
              style={{
                position: 'absolute',
                top: -24,
                right: -24,
                background: '#2563EB',
                borderRadius: '50%',
                padding: 16,
                boxShadow: '0 4px 16px #2563EB33',
                animation: 'bounce 1.5s infinite alternate',
              }}
            >
              <span style={{ fontSize: 22, color: '#fff' }}>→</span>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: -24,
                left: -24,
                background: '#10B981',
                borderRadius: '50%',
                padding: 16,
                boxShadow: '0 4px 16px #10B98133',
                animation: 'bounce 1.5s infinite alternate',
                animationDelay: '1s',
              }}
            >
              <span style={{ fontSize: 22, color: '#fff' }}>▶</span>
            </div>
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
        `}
      </style>
    </section>
  );
};

export default HeroSection; 
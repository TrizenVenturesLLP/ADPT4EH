import React from 'react';

const trustFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      </svg>
    ),
    title: 'Verified Performers',
    description: 'All task performers undergo background checks and identity verification.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Review System',
    description: 'Transparent ratings and reviews from real users help you choose the right person.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
        <circle cx="12" cy="16" r="1"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Secure Payments',
    description: 'Your money is protected with escrow payments released only after task completion.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Real-time Communication',
    description: 'Stay connected with live chat, live location sharing, and instant updates.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
    ),
    title: 'Proof of Work',
    description: 'Every completed task comes with visual proof of photos or videos, shared directly in the app. This helps you verify the quality and completion of work even when you\'re away, ensuring full transparency, accountability, and peace of mind.',
  },
];

const TrustSafetySection = () => {
  return (
    <section style={{ 
      padding: 'clamp(40px, 8vw, 64px) 0 clamp(60px, 10vw, 80px) 0', 
      background: 'linear-gradient(120deg, #f7f8fd 0%, #fdf8f3 100%)' 
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        padding: '0 clamp(16px, 4vw, 24px)' 
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 6vw, 44px)', 
            fontWeight: 800, 
            color: '#000', 
            margin: 'clamp(12px, 2vw, 18px) 0 clamp(8px, 1.5vw, 12px) 0', 
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.2
          }}>
            Your Security is Our <span style={{ color: '#f9b233' }}>Priority</span>
          </h2>
          <p style={{ 
            fontSize: 'clamp(16px, 3vw, 20px)', 
            color: '#374151cc', 
            maxWidth: 700, 
            margin: '0 auto', 
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.5
          }}>
            We\'ve built multiple layers of protection to ensure every task is completed safely and securely.
          </p>
        </div>
        
        {/* Trust features grid */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(20px, 3vw, 32px)',
            maxWidth: 900,
            margin: '0 auto',
          }}>
            {trustFeatures.slice(0, 4).map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: 'clamp(16px, 2.5vw, 24px)',
                  background: '#f7f8fd',
                  borderRadius: 28,
                  boxShadow: '0 4px 24px #0001',
                  padding: 'clamp(24px, 4vw, 32px) clamp(20px, 3vw, 28px)',
                  border: '1px solid #f3f4f6',
                  minHeight: 100,
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'pointer',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.boxShadow = '0 8px 32px #f9b23344';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.boxShadow = '0 4px 24px #0001';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{
                  width: 'clamp(48px, 6vw, 64px)',
                  height: 'clamp(48px, 6vw, 64px)',
                  borderRadius: 20,
                  background: 'hsl(42deg 96% 62% / 10%)',
                  color: 'hsl(42 96% 62%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginRight: 0,
                }}>
                  <div style={{ color: 'hsl(42 96% 62%)' }}>
                    {feature.icon}
                  </div>
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <h3 style={{ 
                    fontSize: 'clamp(18px, 3vw, 24px)', 
                    fontWeight: 800, 
                    color: '#222', 
                    margin: '0 0 8px 0', 
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.3
                  }}>{feature.title}</h3>
                  <p style={{ 
                    fontSize: 'clamp(14px, 2.5vw, 16px)', 
                    color: '#374151', 
                    margin: 0, 
                    fontFamily: 'Inter, sans-serif', 
                    lineHeight: 1.5 
                  }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 5th card full width below grid */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(24px, 4vw, 40px)' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 'clamp(16px, 2.5vw, 24px)',
              background: '#f7f8fd',
              borderRadius: 28,
              boxShadow: '0 4px 24px #0001',
              padding: 'clamp(24px, 4vw, 32px) clamp(20px, 3vw, 28px)',
              border: '1px solid #f3f4f6',
              minHeight: 180,
              width: '100%',
              maxWidth: 600,
              margin: '0 auto',
            }}>
              <div style={{
                width: 'clamp(48px, 6vw, 64px)',
                height: 'clamp(48px, 6vw, 64px)',
                borderRadius: 20,
                background: 'hsl(42deg 96% 62% / 10%)',
                color: 'hsl(42 96% 62%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginRight: 0,
              }}>
                <div style={{ color: 'hsl(42 96% 62%)' }}>
                  {trustFeatures[4].icon}
                </div>
              </div>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <h3 style={{ 
                  fontSize: 'clamp(18px, 3vw, 24px)', 
                  fontWeight: 800, 
                  color: '#222', 
                  margin: '0 0 8px 0', 
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.3
                }}>{trustFeatures[4].title}</h3>
                <p style={{ 
                  fontSize: 'clamp(14px, 2.5vw, 16px)', 
                  color: '#374151', 
                  margin: 0, 
                  fontFamily: 'Inter, sans-serif', 
                  lineHeight: 1.5 
                }}>{trustFeatures[4].description}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '0 clamp(16px, 4vw, 24px)' }}>
          <h3 style={{ 
            fontSize: 'clamp(20px, 4vw, 26px)', 
            fontWeight: 700, 
            color: '#000', 
            marginBottom: 16, 
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.3
          }}>
            Ready to Experience Secure Task Delegation?
          </h3>
          <p style={{ 
            color: '#374151cc', 
            marginBottom: 24, 
            maxWidth: 500, 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            fontSize: 'clamp(15px, 2.5vw, 17px)', 
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.5
          }}>
            Join thousands who trust Extrahand for their tasks. Your security and satisfaction are guaranteed.
          </p>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(12px, 2vw, 20px)', 
            maxWidth: 500, 
            margin: '0 auto'
          }}>
            <button style={{
              background: ' #f9b233',
              color: '#222',
              padding: 'clamp(14px, 3vw, 16px) clamp(28px, 5vw, 36px)',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 18px)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px #f9b23322',
              fontFamily: 'Inter, sans-serif',
              transition: 'background 0.2s',
              width: '100%',
              maxWidth: 300,
            }}>Start Your First Task</button>
            <button style={{
              border: '2px solid #f9b233',
              color: '#f9b233',
              padding: 'clamp(14px, 3vw, 16px) clamp(28px, 5vw, 36px)',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 'clamp(16px, 3vw, 18px)',
              background: '#fff',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              transition: 'background 0.2s, color 0.2s',
              width: '100%',
              maxWidth: 300,
            }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#f9b233';
                e.currentTarget.style.color = '#000';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#000';
              }}
            >Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection; 
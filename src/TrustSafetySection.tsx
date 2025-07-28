import React from 'react';

const trustFeatures = [
  {
    icon: '🛡️',
    title: 'Verified Performers',
    description: 'All task performers undergo background checks and identity verification.',
  },
  {
    icon: '⭐',
    title: 'Review System',
    description: 'Transparent ratings and reviews from real users help you choose the right person.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'Your money is protected with escrow payments released only after task completion.',
  },
  {
    icon: '💬',
    title: 'Real-time Communication',
    description: 'Stay connected with live chat, live location sharing, and instant updates.',
  },
  {
    icon: '📷',
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
                  background: '#e0e7ff',
                  color: '#2250d7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  flexShrink: 0,
                  marginRight: 0,
                }}>{feature.icon}</div>
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
                background: '#e0e7ff',
                color: '#2250d7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(24px, 4vw, 32px)',
                flexShrink: 0,
                marginRight: 0,
              }}>{trustFeatures[4].icon}</div>
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
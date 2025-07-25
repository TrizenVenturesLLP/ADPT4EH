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
    <section style={{ padding: '64px 0 80px 0', background: 'linear-gradient(120deg, #f7f8fd 0%, #fdf8f3 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(34,197,94,0.10)',
            color: '#22c55e',
            padding: '8px 20px',
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 500,
            marginBottom: 18,
          }}>
            <span style={{ fontSize: 20 }}>🛡️</span>
            Trust & Safety First
          </div>
          <h2 style={{ fontSize: 44, fontWeight: 800, color: '#1a237e', margin: '18px 0 12px 0', fontFamily: 'Inter, sans-serif' }}>
            Your Security is Our <span style={{ color: '#f9b233' }}>Priority</span>
          </h2>
          <p style={{ fontSize: 20, color: '#374151cc', maxWidth: 700, margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
            We\'ve built multiple layers of protection to ensure every task is completed safely and securely.
          </p>
        </div>
        {/* Trust features grid */}
        <div style={{ marginBottom: 60 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
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
                  gap: 24,
                  background: '#f7f8fd',
                  borderRadius: 28,
                  boxShadow: '0 4px 24px #0001',
                  padding: '32px 28px',
                  border: '1px solid #f3f4f6',
                  minHeight: 100,
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'pointer',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.boxShadow = '0 8px 32px #2563EB33';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.boxShadow = '0 4px 24px #0001';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 20,
                  background: '#e0e7ff',
                  color: '#2250d7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  flexShrink: 0,
                  marginRight: 0,
                }}>{feature.icon}</div>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: '#222', margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif' }}>{feature.title}</h3>
                  <p style={{ fontSize: 16, color: '#374151', margin: 0, fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* 5th card full width below grid */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 24,
              background: '#f7f8fd',
              borderRadius: 28,
              boxShadow: '0 4px 24px #0001',
              padding: '32px 28px',
              border: '1px solid #f3f4f6',
              minHeight: 180,
              width: '100%',
              maxWidth: 600,
              margin: '0 auto',
            }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background: '#e0e7ff',
                color: '#2250d7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                flexShrink: 0,
                marginRight: 0,
              }}>{trustFeatures[4].icon}</div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#222', margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif' }}>{trustFeatures[4].title}</h3>
                <p style={{ fontSize: 16, color: '#374151', margin: 0, fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{trustFeatures[4].description}</p>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h3 style={{ fontSize: 26, fontWeight: 700, color: '#1a237e', marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>
            Ready to Experience Secure Task Delegation?
          </h3>
          <p style={{ color: '#374151cc', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', fontSize: 17, fontFamily: 'Inter, sans-serif' }}>
            Join thousands who trust Extrahand for their tasks. Your security and satisfaction are guaranteed.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20, maxWidth: 500, margin: '0 auto' }}>
            <button style={{
              background: 'linear-gradient(90deg, #f9b233 0%, #ffe7b2 100%)',
              color: '#222',
              padding: '16px 36px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 18,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px #f9b23322',
              fontFamily: 'Inter, sans-serif',
              transition: 'background 0.2s',
            }}>Start Your First Task</button>
            <button style={{
              border: '2px solid #1a237e',
              color: '#1a237e',
              padding: '16px 36px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 18,
              background: '#fff',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              transition: 'background 0.2s, color 0.2s',
            }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#1a237e';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#1a237e';
              }}
            >Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection; 
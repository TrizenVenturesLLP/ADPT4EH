import React from 'react';

const benefits = [
  {
    icon: '⏰',
    title: 'Save Time & Costs',
    description: 'No more expensive trips or wasted time. Get things done without leaving your location.',
    iconBg: '#e3e8f7',
    iconColor: '#1a237e',
  },
  {
    icon: '🛡️',
    title: 'Trustworthy & Verified',
    description: 'All task performers are background-checked and verified with real reviews from users.',
    iconBg: '#e3e8f7',
    iconColor: '#1a237e',
  },
  {
    icon: '⚡',
    title: 'Tech & Non-Tech Tasks',
    description: 'From router setup to grocery pickup, our network handles any type of task you need.',
    iconBg: '#e3e8f7',
    iconColor: '#1a237e',
  },
  {
    icon: '📍',
    title: 'GPS-Based Matching',
    description: 'Smart location-based matching ensures you get the fastest and most reliable service.',
    iconBg: '#e3e8f7',
    iconColor: '#1a237e',
  },
  {
    icon: '📈',
    title: 'Dual-Role Platform',
    description: 'Post tasks when you need help, or earn money by completing tasks in your area.',
    iconBg: '#e3e8f7',
    iconColor: '#1a237e',
  },
  {
    icon: '✅',
    title: 'High Success Rate',
    description: 'Thousands of tasks completed with a 98%+ satisfaction rate.',
    iconBg: '#e3e8f7',
    iconColor: '#1a237e',
  },
];

const BenefitsSection = () => {
  return (
    <section style={{ padding: '64px 0 80px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: '#1a237e', marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>
            Why Choose <span style={{ color: '#f9b233' }}>Extrahand</span>?
          </h2>
          <p style={{ fontSize: 20, color: '#374151cc', maxWidth: 700, margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
            We've built the most reliable platform for remote task delegation, designed with trust, efficiency, and user experience at its core.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {benefits.map((feature, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: 24,
                boxShadow: '0 4px 24px #0001',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 32,
                minHeight: 220,
                border: '1px solid #e5e7eb',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: feature.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 0,
                }}>
                  <span style={{ fontSize: 32, color: feature.iconColor }}>{feature.icon}</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#222', margin: 0, fontFamily: 'Inter, sans-serif' }}>{feature.title}</h3>
              </div>
              <p style={{ fontSize: 16, color: '#374151', margin: 0, fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 
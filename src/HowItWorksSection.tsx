import React from 'react';

const steps = [
  {
    image: '/assets/mobilescreens/post-task.jpg',
    title: 'Post a Task',
    highlight: 'Describe your task, location, and budget.',
    description:
      'Set your requirements and timeline from anywhere. The more details, the better your match!',
    cta: 'Start your first task',
  },
  {
    image: '/assets/mobilescreens/set-budget.jpg',
    title: 'Get Matched',
    highlight: 'Connect with trusted locals.',
    description:
      'Our smart algorithm finds verified, skilled helpers nearby. Review profiles, ratings, and chat instantly.',
    cta: 'See how matching works',
  },
  {
    image: '/assets/mobilescreens/approve-task.jpg',
    title: 'Task Complete',
    highlight: 'Track and confirm completion.',
    description:
      'Monitor progress in real-time and receive photo/video proof when your task is finished. Release payment securely.',
    cta: 'Learn about secure completion',
  },
];

const HowItWorksSection = () => {
  return (
    <section style={{ padding: '80px 0', background: '#fff', position: 'relative', overflowX: 'hidden' }} id="how-it-works">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 44, fontWeight: 700, color: '#1a202c', marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>How It Works</h2>
          <p style={{ fontSize: 20, color: '#374151cc', maxWidth: 600, margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
            Getting your tasks done remotely has never been easier. Follow these simple steps and watch the magic happen.
          </p>
        </div>
        {/* Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 32,
        }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 300px',
                minWidth: 260,
                maxWidth: 370,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 8px',
                background: 'none',
              }}
            >
              {/* Step Number Badge */}
              <div style={{ marginBottom: 24 }}>
                <span style={{
                  display: 'inline-block',
                  background: '#2563EB',
                  color: '#fff',
                  fontWeight: 700,
                  borderRadius: 999,
                  padding: '6px 20px',
                  fontSize: 20,
                  boxShadow: '0 2px 8px #2563EB22',
                }}>{idx + 1}</span>
              </div>
              {/* Step Image */}
              <div style={{ marginBottom: 24, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{ width: '100%', maxWidth: 260, height: 'auto', borderRadius: 16, boxShadow: '0 2px 12px #0001' }}
                />
              </div>
              {/* Step Text */}
              <h3 style={{ fontSize: 26, fontWeight: 800, color: '#1a202c', marginBottom: 10, fontFamily: 'Inter, sans-serif', lineHeight: 1.2 }}>{step.title}</h3>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#f9b233', marginBottom: 8, fontFamily: 'Inter, sans-serif' }}>{step.highlight}</div>
              <p style={{ fontSize: 15, color: '#374151', marginBottom: 16, maxWidth: 320, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Inter, sans-serif' }}>{step.description}</p>
            </div>
          ))}
        </div>
        {/* Centered Post your task Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <button
            style={{
              fontSize: 20,
              padding: '16px 48px',
              color: '#222',
              background: '#fff',
              border: '4px solid #f9b233',
              borderRadius: 12,
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s, border 0.2s, transform 0.2s',
              boxShadow: '0 2px 8px #f9b23322',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#f9b233';
              e.currentTarget.style.color = '#222';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#222';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Post your task now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 
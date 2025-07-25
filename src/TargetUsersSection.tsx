import React, { useRef } from 'react';

const taskTypes = [
  { title: 'Marketing', description: 'Help with website', image: '/assets/mobilescreens/work.png' },
  { title: 'Painting', description: 'Wall mount art and paintings', image: '/assets/mobilescreens/painting.png' },
  { title: 'Movers', description: 'Packing, wrapping, moving', image: '/assets/mobilescreens/moving.png' },
  { title: 'Cleaning', description: 'Clean, mop and tidy', image: '/assets/mobilescreens/cleaning.png' },
  { title: 'Furniture', description: 'Flatpack assembly and disassembly', image: '/assets/mobilescreens/furniture.png' },
  { title: 'Deliveries', description: 'Urgent deliveries and couriers', image: '/assets/mobilescreens/delivery.png' },
  { title: 'Gardening', description: 'Mulching, weeding and tidying up', image: '/assets/mobilescreens/garden.png' },
  { title: 'Handyperson', description: 'Help with home maintenance', image: '/assets/mobilescreens/handy.png' },
  { title: 'Business', description: 'Help with accounting and tax', image: '/assets/mobilescreens/business.png' },
];

const ScrollingGrid = ({ height }) => {
  const fullList = [...taskTypes, ...taskTypes]; // duplicate for seamless looping
  const gridRef = useRef(null);

  return (
    <div style={{ position: 'relative', height, overflow: 'hidden', width: '100%' }}>
      <div
        className="scrolling-inner"
        ref={gridRef}
        style={{
          position: 'absolute',
          width: '100%',
          animation: 'scroll-up 18s linear infinite',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE 10+
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 36,
        }}>
          {fullList.map((task, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                background: '#fff',
                borderRadius: 18,
                padding: 18,
                boxShadow: '0 4px 24px #0001',
                minHeight: 104,
                width: '100%',
                border: '1px solid #eaf1fb',
                marginBottom: 8,
                transition: 'box-shadow 0.2s',
              }}
            >
              <img
                src={task.image}
                alt={task.title}
                style={{
                  width: 70,
                  height: 70,
                  objectFit: 'cover',
                  background: '#f3f4f6',
                  borderRadius: 12,
                  flexShrink: 0,
                  border: '1px solid #eaf1fb',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ fontWeight: 800, fontSize: 18, color: '#1a237e', lineHeight: 1.2, marginBottom: 2, fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {task.title}
                </div>
                <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.3, fontFamily: 'Inter, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {task.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .scrolling-inner::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

const TargetUsersSection = () => {
  // Let's use 420px for a good match
  const gridHeight = 420;

  return (
    <section style={{ background: '#fdf8f3', padding: '0', minHeight: 600 }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 80,
        minHeight: 600,
      }}>
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: 420, maxWidth: 520, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: gridHeight, marginTop: 0 }}>
          <h2 style={{
            fontSize: 48,
            fontWeight: 800,
            color: '#1a237e',
            marginBottom: 32,
            lineHeight: 1.1,
            fontFamily: 'Inter, sans-serif',
          }}>
            Post Any Task.<br />Perform What You Love.
          </h2>
          <ol style={{ marginBottom: 40, paddingLeft: 0, listStyle: 'none' }}>
            {[
              'Post any kind of task—big or small, in any domain.',
              'Set your requirements and budget.',
              'Performers pick tasks that match their skills and capabilities.',
            ].map((step, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18 }}>
                <span style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  background: '#e0e7ff',
                  color: '#2250d7',
                  fontWeight: 700,
                  fontSize: 20,
                  fontFamily: 'Inter, sans-serif',
                }}>{idx + 1}</span>
                <span style={{ fontSize: 20, color: '#1a237e', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{step}</span>
              </li>
            ))}
          </ol>
          <button
            style={{
              background: '#2250d7',
              color: '#fff',
              fontWeight: 700,
              fontSize: 22,
              padding: '16px 0',
              width: 210,
              borderRadius: 10,
              boxShadow: '0 4px 16px #2250d733',
              border: 'none',
              cursor: 'pointer',
              marginTop: 12,
              fontFamily: 'Inter, sans-serif',
              transition: 'background 0.2s',
              display: 'block',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#1636a0')}
            onMouseOut={e => (e.currentTarget.style.background = '#2250d7')}
          >
            Post your task
          </button>
        </div>
        {/* Right Column: Animated Grid */}
        <div style={{ flex: 1.2, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: gridHeight }}>
          <ScrollingGrid height={gridHeight} />
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection; 
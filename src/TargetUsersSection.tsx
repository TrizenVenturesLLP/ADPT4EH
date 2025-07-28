import React, { useRef } from 'react';

const imgMarketing = require('../assets/mobilescreens/work.png');
const imgPainting = require('../assets/mobilescreens/painting.png');
const imgMovers = require('../assets/mobilescreens/moving.png');
const imgCleaning = require('../assets/mobilescreens/cleaning.png');
const imgFurniture = require('../assets/mobilescreens/furniture.png');
const imgDeliveries = require('../assets/mobilescreens/delivery.png');
const imgGardening = require('../assets/mobilescreens/garden.png');
const imgHandyperson = require('../assets/mobilescreens/handy.png');
const imgBusiness = require('../assets/mobilescreens/business.png');

const taskTypes = [
  { title: 'Marketing', description: 'Help with website', image: imgMarketing },
  { title: 'Painting', description: 'Wall mount art and paintings', image: imgPainting },
  { title: 'Movers', description: 'Packing, wrapping, moving', image: imgMovers },
  { title: 'Cleaning', description: 'Clean, mop and tidy', image: imgCleaning },
  { title: 'Furniture', description: 'Flatpack assembly and disassembly', image: imgFurniture },
  { title: 'Deliveries', description: 'Urgent deliveries and couriers', image: imgDeliveries },
  { title: 'Gardening', description: 'Mulching, weeding and tidying up', image: imgGardening },
  { title: 'Handyperson', description: 'Help with home maintenance', image: imgHandyperson },
  { title: 'Business', description: 'Help with accounting and tax', image: imgBusiness },
];

const ScrollingGrid = ({ height, isMobile }) => {
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
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          columnGap: isMobile ? '0.75rem' : '2.65rem',
          rowGap: isMobile ? '0.5rem' : '0.50rem',
          gridAutoRows: 'min-content',
          alignItems: 'start',
        }}>
          {fullList.map((task, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: isMobile ? 12 : 20,
                background: '#fff',
                borderRadius: isMobile ? 12 : 18,
                padding: isMobile ? 12 : 18,
                boxShadow: '0 4px 24px #0001',
                minHeight: isMobile ? 80 : 104,
                width: '100%',
                border: '1px solid #eaf1fb',
                marginBottom: isMobile ? 4 : 6,
                transition: 'box-shadow 0.2s',
                alignSelf: 'start',
              }}
            >
              <img
                src={task.image}
                alt={task.title}
                style={{
                  width: isMobile ? 60 : 120,
                  height: isMobile ? 60 : 120,
                  objectFit: 'cover',
                  background: '#f3f4f6',
                  borderRadius: isMobile ? 8 : 12,
                  flexShrink: 0,
                  border: '1px solid #eaf1fb',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', flex: 1 }}>
                <div style={{ 
                  fontWeight: 800, 
                  fontSize: isMobile ? 14 : 18, 
                  color: '#1a237e', 
                  lineHeight: 1.2, 
                  marginBottom: 2, 
                  fontFamily: 'Inter, sans-serif',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}>
                  {task.title}
                </div>
                <div style={{ 
                  fontSize: isMobile ? 12 : 15, 
                  color: '#374151', 
                  lineHeight: 1.3, 
                  fontFamily: 'Inter, sans-serif',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}>
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
      <div className="target-users-container" style={{
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
        <div className="target-users-text" style={{ 
          flex: 1, 
          minWidth: 420, 
          maxWidth: 520, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          height: gridHeight, 
          marginTop: 0 
        }}>
          <h2 className="target-users-title" style={{
            fontSize: 48,
            fontWeight: 800,
            color: '#1a237e',
            marginBottom: 32,
            lineHeight: 1.1,
            fontFamily: 'Inter, sans-serif',
          }}>
            Post Any Task.<br />Perform What You Love.
          </h2>
          <ol className="target-users-steps" style={{ marginBottom: 40, paddingLeft: 0, listStyle: 'none' }}>
            {[
              'Post any kind of task—big or small, in any domain.',
              'Set your requirements and budget.',
              'Performers pick tasks that match their skills and capabilities.',
            ].map((step, idx) => (
              <li key={idx} className="target-users-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 18 }}>
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
                  flexShrink: 0,
                }}>{idx + 1}</span>
                <span style={{ 
                  fontSize: 20, 
                  color: '#1a237e', 
                  fontWeight: 500, 
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.4,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}>{step}</span>
              </li>
            ))}
          </ol>
          <button
            className="target-users-button"
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
        <div className="target-users-grid" style={{ 
          flex: 1.2, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          width: '100%', 
          height: gridHeight,
          padding: '0 16px',
        }}>
          <ScrollingGrid height={gridHeight} isMobile={false} />
        </div>
      </div>
      
      {/* Mobile Grid - Hidden on desktop */}
      <div className="target-users-mobile-grid" style={{ 
        display: 'none',
        padding: '0 16px',
        marginTop: 32,
      }}>
        <ScrollingGrid height={300} isMobile={true} />
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .target-users-container {
              flex-direction: column !important;
              gap: 32px !important;
              padding: 0 16px !important;
              min-height: auto !important;
            }
            .target-users-text {
              flex: none !important;
              min-width: auto !important;
              max-width: 100% !important;
              height: auto !important;
              text-align: center !important;
              align-items: center !important;
            }
            .target-users-title {
              font-size: 32px !important;
              text-align: center !important;
            }
            .target-users-steps {
              margin-bottom: 24px !important;
            }
            .target-users-step {
              text-align: left !important;
              align-items: flex-start !important;
            }
            .target-users-step span:last-child {
              font-size: 16px !important;
            }
            .target-users-button {
              width: 100% !important;
              max-width: 280px !important;
              font-size: 18px !important;
              padding: 14px 0 !important;
            }
            .target-users-grid {
              display: none !important;
            }
            .target-users-mobile-grid {
              display: block !important;
            }
          }
          
          @media (min-width: 769px) and (max-width: 1200px) {
            .target-users-container {
              gap: 40px !important;
              padding: 0 32px !important;
            }
            .target-users-grid {
              padding: 0 8px !important;
            }
          }
          
          @media (max-width: 480px) {
            .target-users-title {
              font-size: 28px !important;
            }
            .target-users-step span:last-child {
              font-size: 14px !important;
            }
            .target-users-button {
              font-size: 16px !important;
              padding: 12px 0 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TargetUsersSection; 
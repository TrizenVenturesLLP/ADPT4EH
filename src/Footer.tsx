import React from 'react';

const footerColumns = [
  {
    title: 'Discover',
    links: [
      { label: 'How it works', href: '#' },
      { label: 'Earn money', href: '#' },
      { label: 'Cost Guides', href: '#' },
      { label: 'Service Guides', href: '#' },
      { label: 'New Users FAQ', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Media Enquiries', href: '#' },
      { label: 'Community Guidelines', href: '#' },
      { label: 'Tasker Principles', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Members',
    links: [
      { label: 'Post a Task', href: '#' },
      { label: 'Browse Tasks', href: '#' },
      { label: 'Login', href: '#' },
      { label: 'Support Centre', href: '#' },
      { label: 'Become a Tasker', href: '#' },
    ],
  },
  {
    title: 'Popular Categories',
    links: [
      { label: 'Electricians', href: '#' },
      { label: 'Plumbers', href: '#' },
      { label: 'Home Cleaning', href: '#' },
      { label: 'Packers & Movers', href: '#' },
      { label: 'Carpenters', href: '#' },
      { label: 'AC Services', href: '#' },
      { label: 'Appliance Repair', href: '#' },
    ],
  },
  {
    title: 'Popular Cities',
    links: [
      { label: 'Delhi NCR', href: '#' },
      { label: 'Mumbai', href: '#' },
      { label: 'Bangalore', href: '#' },
      { label: 'Hyderabad', href: '#' },
      { label: 'Chennai', href: '#' },
      { label: 'Kolkata', href: '#' },
      { label: 'Pune', href: '#' },
      { label: 'Ahmedabad', href: '#' },
      { label: 'Jaipur', href: '#' },
    ],
  },
];

const socialIcons = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="24" height="24" fill="#2250d7" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="24" height="24" fill="#FF0000" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="24" height="24" fill="#000" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="24" height="24" fill="#0077B5" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
    ),
  },
];

const AppStoreButton = () => (
  <a href="#" aria-label="Download on the App Store" style={{ display: 'inline-block', textDecoration: 'none' }}>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 'clamp(8px, 2vw, 12px)', 
      background: '#fff', 
      borderRadius: 16, 
      padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 4vw, 24px)', 
      boxShadow: '0 2px 8px #0002', 
      minWidth: 'clamp(140px, 25vw, 180px)', 
      minHeight: 'clamp(48px, 8vw, 56px)',
      width: '100%',
      maxWidth: 80
    }}>
      <svg width="clamp(32px, 6vw, 40px)" height="clamp(32px, 6vw, 40px)" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.7 14.7c-.1-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4.1-2.7.8-3.4 2-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.5 2.1 2.6 2.1 1 0 1.3-.7 2.6-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3 0-.1-2.1-.8-2.1-3.2zm-2-6c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.3-.6.6-1.1 1.6-.9 2.5 1 .1 2-.5 2.6-1.1z" fill="#111"/>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <span style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: '#111', lineHeight: 1, textDecoration: 'none' }}>Download on the</span>
        <span style={{ fontSize: 'clamp(12px, 2.5vw, 16px)', color: '#111', fontWeight: 600, lineHeight: 1, textDecoration: 'none' }}>App Store</span>
      </div>
    </div>
  </a>
);

const GooglePlayButton = () => (
  <a href="#" aria-label="Get it on Google Play" style={{ display: 'inline-block', textDecoration: 'none' }}>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 'clamp(8px, 2vw, 12px)', 
      background: '#fff', 
      borderRadius: 16, 
      padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 4vw, 24px)', 
      boxShadow: '0 2px 8px #0002', 
      minWidth: 'clamp(140px, 25vw, 180px)', 
      minHeight: 'clamp(48px, 8vw, 56px)',
      width: '100%',
      maxWidth: 80
    }}>
      <svg width="clamp(24px, 5vw, 28px)" height="clamp(24px, 5vw, 28px)" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="3,2 33,18 3,34" fill="#34A853"/>
        <polygon points="3,2 19,18 3,34" fill="#FBBC05"/>
        <polygon points="19,18 33,18 3,34" fill="#EA4335"/>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <span style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: '#111', lineHeight: 1, textDecoration: 'none' }}>Android App on</span>
        <span style={{ fontSize: 'clamp(12px, 2.5vw, 16px)', color: '#111', fontWeight: 600, lineHeight: 1, textDecoration: 'none' }}>Google Play</span>
      </div>
    </div>
  </a>
);

const Footer = () => {
  return (
    <footer style={{ 
      background: 'rgb(13 27 42)', 
      color: '#f9fafb', 
      width: '100%', 
      borderRadius: 18, 
      margin: '0 clamp(4px, 1vw, 8px)', 
      marginTop: 'clamp(24px, 5vw, 40px)' 
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        padding: 'clamp(32px, 6vw, 48px) clamp(16px, 4vw, 24px) clamp(16px, 3vw, 24px) clamp(16px, 4vw, 24px)' 
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(24px, 4vw, 36px)',
          textAlign: 'left',
        }}>
          {footerColumns.map((col, idx) => (
            <div key={idx}>
              <h3 style={{ 
                fontWeight: 600, 
                fontSize: 'clamp(14px, 2.5vw, 16px)', 
                marginBottom: 'clamp(12px, 2.5vw, 18px)', 
                color: '#f9fafbcc', 
                letterSpacing: 1 
              }}>{col.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      style={{ 
                        color: '#f9fafb99', 
                        textDecoration: 'none', 
                        fontSize: 'clamp(12px, 2.5vw, 14px)', 
                        fontWeight: 400, 
                        display: 'block', 
                        marginBottom: 'clamp(6px, 1.5vw, 8px)', 
                        transition: 'color 0.2s',
                        lineHeight: 1.4
                      }}
                      onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                      onMouseOut={e => (e.currentTarget.style.color = '#f9fafb99')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom" style={{ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'clamp(32px, 6vw, 48px)',
          paddingTop: 'clamp(24px, 4vw, 32px)',
          // borderTop: '1px solid #374151'
        }}>
          {/* Social Media Section */}
          <div className="social-section" style={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center', 
            gap: 'clamp(12px, 2.5vw, 18px)',
          }}>
            <span style={{ 
              color: '#f9fafb', 
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              fontWeight: 500
            }}>Follow us:</span>
            <div style={{ 
              display: 'flex', 
              gap: 'clamp(12px, 2vw, 18px)',
              alignItems: 'center'
            }}>
              {socialIcons.map((icon, idx) => (
                <a key={idx} href={icon.href} aria-label={icon.label} style={{ 
                  width: 'clamp(38px, 7vw, 42px)', 
                  height: 'clamp(38px, 7vw, 42px)', 
                  background: '#fff', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transition: 'opacity 0.2s',
                  flexShrink: 0
                }}
                  onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* App Download Buttons */}
          <div className="app-buttons" style={{ 
            display: 'flex', 
            flexDirection: 'row',
            gap: 'clamp(12px, 3.5vw, 26px)',
            alignItems: 'center'
          }}>
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
        
        {/* Mobile Responsive Styles */}
        <style>
          {`
            @media (max-width: 768px) {
              .footer-bottom {
                flex-direction: column !important;
                gap: 24px !important;
                text-align: center !important;
              }
              .social-section {
                flex-direction: column !important;
                gap: 16px !important;
              }
              .app-buttons {
                flex-direction: column !important;
                gap: 16px !important;
                width: 100% !important;
                max-width: 300px !important;
              }
            }
            
            @media (max-width: 480px) {
              .footer-bottom {
                gap: 20px !important;
              }
              .social-section {
                gap: 12px !important;
              }
              .app-buttons {
                gap: 12px !important;
                max-width: 280px !important;
              }
            }
            
            @media (max-width: 360px) {
              .footer-bottom {
                gap: 16px !important;
              }
              .social-section {
                gap: 10px !important;
              }
              .app-buttons {
                gap: 10px !important;
                max-width: 260px !important;
              }
            }
          `}
        </style>
        
        <div style={{ 
          borderTop: '1px solid rgb(102, 102, 102)', 
          marginTop: 'clamp(24px, 4vw, 32px)', 
          paddingTop: 'clamp(16px, 3vw, 24px)', 
          textAlign: 'center', 
          color: '#f9fafb99', 
          fontSize: 'clamp(13px, 2.5vw, 15px)',
          lineHeight: 1.4
        }}>
          © {new Date().getFullYear()} Extrahand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
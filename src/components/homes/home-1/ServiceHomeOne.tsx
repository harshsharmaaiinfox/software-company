import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Ecommerce Solutions',
    desc: 'Empowering your business with scalable, secure, and high-conversion online stores tailored to your needs.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    delay: '.3s',
  },
  {
    title: 'Software Development',
    desc: 'Custom-built software designed to streamline operations and drive innovation within your organization.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="2" x2="10" y2="22" />
      </svg>
    ),
    delay: '.5s',
  },
  {
    title: 'Website Development',
    desc: 'Stunning, responsive websites that deliver exceptional user experiences across all devices.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    delay: '.7s',
  },
  {
    title: 'Application Development',
    desc: 'Cutting-edge mobile and desktop applications built with performance and usability in mind.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
    delay: '.9s',
  },
  {
    title: 'CMS Solutions',
    desc: 'Dynamic Content Management Systems that give you full control over your digital content.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    delay: '1.1s',
  },
  {
    title: 'Creative Logo Design',
    desc: 'Memorable brand identities that capture the essence of your business and stand out in the market.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    delay: '1.3s',
  },
];

export default function ServiceHomeOne() {
  return (
    <div className="tv-service-area pt-130 pb-130" style={{ background: '#f8faff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 text-center">
            <div className="tv-section-title-box mb-60">
              <span className="tv-section-subtitle tv-spltv-text tv-spltv-in-right" style={{ color: '#2B4DFF', fontWeight: 700 }}>
                Our 360° Expertise
              </span>
              <h4 className="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right" style={{ fontSize: '40px', color: '#1a1a2e' }}>
                Smart Digital Solutions for Your Business Growth
              </h4>
              <p style={{ color: '#666', fontSize: '16px' }}>
                We combine creativity and technology to deliver results that matter.
                Explore our range of professional services designed to elevate your brand.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay={item.delay}
            >
              <div
                className="single-service-item mb-30"
                style={{
                  background: '#fff',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(43,77,255,0.05)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  border: '1px solid #eef2ff',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative background number */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '10px',
                  fontSize: '80px',
                  fontWeight: 900,
                  color: 'rgba(43,77,255,0.03)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}>
                  0{index + 1}
                </div>

                <span
                  className="service-icon"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: 'rgba(43,77,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '15px',
                    marginBottom: '25px',
                    color: '#2B4DFF',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {item.icon}
                </span>
                <h3 className="service-section-title" style={{ fontSize: '22px', marginBottom: '15px', fontWeight: 700, color: '#1a1a2e' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                  {item.desc}
                </p>
                <Link
                  to="/service-details"
                  className="tv-normal-btn"
                  style={{
                    fontWeight: 700,
                    color: '#2B4DFF',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '15px'
                  }}
                >
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-50">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
                background: '#fff',
                padding: '15px 40px',
                borderRadius: '100px',
                boxShadow: '0 10px 40px rgba(43,77,255,0.06)',
                border: '1px solid #f0f3ff'
              }}
            >
              <h4 style={{ margin: 0, fontSize: '28px', fontWeight: 500, color: '#1a1a2e' }}>
                Hire a <span style={{ fontWeight: 800, color: '#1a1a2e' }}>Dedicated Developer</span>
              </h4>
              <Link
                to="/contact"
                style={{
                  background: 'linear-gradient(90deg, #2B4DFF, #1a3ae0)',
                  padding: '12px 35px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                  border: 'none',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 20px rgba(43, 77, 255, 0.25)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Hire Now <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

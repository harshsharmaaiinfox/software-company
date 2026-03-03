
export default function CtaHomeOne() {
  return (
    <div
      className="tv-cta-area pt-130 pb-130"
      style={{
        background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderTop: '1px solid #eef2ff'
      }}
    >
      {/* Decorative Blobs - Teal Theme */}
      {/* Left Bottom Blob */}
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-50px',
        width: '300px',
        height: '300px',
        background: '#047C97',
        opacity: 0.05,
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%',
        filter: 'blur(40px)'
      }}></div>

      {/* Right Bottom Blob */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-40px',
        width: '250px',
        height: '280px',
        background: '#047C97',
        opacity: 0.08,
        borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
        filter: 'blur(30px)'
      }}></div>

      {/* Top Right White Circle */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '120px',
        height: '120px',
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0 15px 40px rgba(4,124,151,0.06)',
        zIndex: 0
      }}></div>

      {/* Top Right Concentric Lines */}
      <div style={{ position: 'absolute', top: '5%', right: '12%', opacity: 0.08, zIndex: 0 }}>
        <svg width="180" height="180" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="30" stroke="#047C97" strokeWidth="1" fill="none" />
          <circle cx="90" cy="90" r="45" stroke="#047C97" strokeWidth="1" fill="none" />
          <circle cx="90" cy="90" r="60" stroke="#047C97" strokeWidth="1" fill="none" />
          <circle cx="90" cy="90" r="75" stroke="#047C97" strokeWidth="1" fill="none" />
          <circle cx="90" cy="90" r="90" stroke="#047C97" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container p-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="tv-cta-content">
              <span
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  color: '#047C97',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '13px',
                  display: 'block',
                  marginBottom: '20px'
                }}
              >
                Let's Work Together
              </span>

              <h2
                className="wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  color: '#1a1a2e',
                  lineHeight: '1.2',
                  marginBottom: '40px'
                }}
              >
                Let's Discuss Your Requirements – We're All Ears!
              </h2>

              <div className="tv-cta-btn mb-45 wow fadeInUp" data-wow-delay=".7s">
                <a
                  href="/contact"
                  style={{
                    background: '#fff',
                    color: '#047C97',
                    border: '1px solid #047C97',
                    borderRadius: '50px',
                    padding: '16px 45px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '16px',
                    boxShadow: '0 10px 30px rgba(4,124,151,0.06)',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#047C97';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(4,124,151,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = '#047C97';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(4,124,151,0.06)';
                  }}
                >
                  Estimate Project <i className="fa-solid fa-chevron-right" style={{ fontSize: '13px' }}></i>
                </a>
              </div>

              <div className="tv-cta-contact wow fadeInUp" data-wow-delay=".9s" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                <span style={{ color: '#666', fontSize: '15px' }}>Or call us now</span>
                <a
                  href="tel:8368068740"
                  style={{
                    color: '#047C97',
                    fontSize: '22px',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <i className="fa-solid fa-phone" style={{ fontSize: '18px' }}></i> (+91) 836-8068-740
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function AboutHomeOne() {
  return (
    <section
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f5ff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(4,124,151,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(78,185,133,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="row align-items-center g-5">

          {/* ── LEFT: Image Column ── */}
          <div className="col-xl-6 col-lg-6">
            <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>

              {/* Decorative dashed ring behind the image */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  border: '2px dashed rgba(4,124,151,0.2)',
                  borderRadius: '24px',
                  zIndex: 0,
                }}
              />

              {/* Main image card */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(145deg, #f0f8ff 0%, #e8f4ff 100%)',
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: '0 30px 80px rgba(4,124,151,0.12)',
                  textAlign: 'center',
                }}
              >
                <img
                  src="assets/img/about.png"
                  alt="Edgiss Partnership"
                  style={{
                    width: '100%',
                    maxWidth: '440px',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                    filter: 'drop-shadow(0 10px 30px rgba(4,124,151,0.15))',
                  }}
                />
              </div>

              {/* Floating stat card — top right */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '-24px',
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '14px 20px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                  zIndex: 2,
                  minWidth: '130px',
                  textAlign: 'center',
                  border: '1px solid #f0f3ff'
                }}
              >
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#047C97', lineHeight: 1 }}>150+</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px', fontWeight: 500 }}>Projects Done</div>
              </div>

              {/* Floating stat card — bottom left */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '-24px',
                  background: 'linear-gradient(135deg, #036278 0%, #047C97 100%)',
                  borderRadius: '16px',
                  padding: '14px 20px',
                  boxShadow: '0 12px 40px rgba(4,124,151,0.3)',
                  zIndex: 2,
                  minWidth: '130px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>5★</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginTop: '4px', fontWeight: 500 }}>Client Rating</div>
              </div>



            </div>
          </div>

          {/* ── RIGHT: Content Column ── */}
          <div className="col-xl-6 col-lg-6">
            <div style={{ paddingLeft: '20px' }}>

              {/* Top label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #4EB985, #047C97)', borderRadius: '2px' }} />
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#047C97',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  We Excel in Creativity
                </span>
              </div>

              {/* Heading */}
              <h2
                style={{
                  fontSize: '44px',
                  fontWeight: 800,
                  color: '#1a1a2e',
                  lineHeight: 1.15,
                  marginBottom: '24px',
                }}
              >
                About{' '}
                <span
                  style={{
                    color: '#047C97'
                  }}
                >
                  us
                </span>
              </h2>

              {/* Paragraph 1 */}
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: '18px', fontSize: '15.5px' }}>
                Welcome to <strong style={{ color: '#1a1a2e' }}>Mangal Tech</strong> – our commitment to creativity and
                unwavering dedication has positioned us among the foremost industry leaders. Our
                diverse portfolio attests to our versatile capabilities, spanning a comprehensive
                360 degrees of expertise that includes Ecommerce, software development,
                application development, website development, CMS, and logo designing.
              </p>

              {/* Paragraph 2 */}
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: '28px', fontSize: '15.5px' }}>
                At <strong style={{ color: '#1a1a2e' }}>Mangal Tech</strong>, our dynamic team is driven to craft
                unparalleled solutions for your company's success. We take pride in our ability
                to decode market demands and engineer tailored solutions that fit seamlessly
                into any wireframe.
              </p>

              {/* Feature list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
                {[
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                        <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 4 2Z" />
                        <path d="M12 15v5s1-.5 4-1c0-1.5-.5-3-2-4Z" />
                      </svg>
                    ),
                    label: 'Ecommerce & Web Development'
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.71 1.7-1.63 0-.44-.19-.85-.49-1.15-.31-.3-.41-.74-.29-1.16.21-.71.86-1.21 1.6-1.21h1.98c4.14 0 7.5-3.36 7.5-7.5S17.52 2 12 2z" />
                      </svg>
                    ),
                    label: 'Creative Design & Branding'
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" cy="2" width="14" height="20" rx="2" ry="2" />
                        <path d="M12 18h.01" />
                      </svg>
                    ),
                    label: 'App Development & CMS Solutions'
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(4,124,151,0.04)';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateX(6px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)';
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #f0f8ff, #e6f4ff)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: idx === 0 ? '#4EB985' : '#047C97',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(4,124,151,0.08)',
                        border: '1px solid rgba(4,124,151,0.1)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <span style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '16px' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Blockquote */}
              <div
                style={{
                  borderLeft: '4px solid #4EB985',
                  background: 'rgba(78,185,133,0.03)',
                  padding: '18px 24px',
                  borderRadius: '0 12px 12px 0',
                  marginBottom: '36px',
                }}
              >
                <p
                  style={{
                    color: '#666',
                    fontStyle: 'italic',
                    lineHeight: 1.75,
                    margin: 0,
                    fontSize: '15px',
                  }}
                >
                  "Our journey is marked by a relentless pursuit of excellence, and we are
                  more than just a company; we are your partner in progress."
                </p>
              </div>



              {/* CTA Button */}
              <div>
                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#047C97',
                    color: '#fff',
                    padding: '14px 32px',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 25px rgba(4,124,151,0.25)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 35px rgba(4,124,151,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.background = '#036278';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 25px rgba(4,124,151,0.25)';
                    (e.currentTarget as HTMLAnchorElement).style.background = '#047C97';
                  }}
                >
                  Know More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

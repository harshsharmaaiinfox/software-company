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
          background: 'radial-gradient(circle, rgba(43,77,255,0.06) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(43,77,255,0.04) 0%, transparent 70%)',
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
                  border: '2px dashed rgba(43,77,255,0.2)',
                  borderRadius: '24px',
                  zIndex: 0,
                }}
              />

              {/* Main image card */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(145deg, #f0f3ff 0%, #e8eeff 100%)',
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: '0 30px 80px rgba(43,77,255,0.12)',
                  textAlign: 'center',
                }}
              >
                <img
                  src="assets/img/about/about-image.png"
                  alt="Edgiss Partnership"
                  style={{
                    width: '100%',
                    maxWidth: '440px',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                    filter: 'drop-shadow(0 10px 30px rgba(43,77,255,0.15))',
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
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#2B4DFF', lineHeight: 1 }}>150+</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px', fontWeight: 500 }}>Projects Done</div>
              </div>

              {/* Floating stat card — bottom left */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '-24px',
                  background: 'linear-gradient(135deg, #2B4DFF 0%, #1a3ae0 100%)',
                  borderRadius: '16px',
                  padding: '14px 20px',
                  boxShadow: '0 12px 40px rgba(43,77,255,0.3)',
                  zIndex: 2,
                  minWidth: '130px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>5★</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginTop: '4px', fontWeight: 500 }}>Client Rating</div>
              </div>

              {/* Floating experience badge — bottom right */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '32px',
                  background: '#fff',
                  borderRadius: '50px',
                  padding: '10px 20px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid #f0f3ff'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2B4DFF, #647eff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a2e' }}>8+ Years</div>
                  <div style={{ fontSize: '11px', color: '#999' }}>Experience</div>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT: Content Column ── */}
          <div className="col-xl-6 col-lg-6">
            <div style={{ paddingLeft: '20px' }}>

              {/* Top label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #2B4DFF, #647eff)', borderRadius: '2px' }} />
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#2B4DFF',
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
                    color: '#2B4DFF'
                  }}
                >
                  us
                </span>
              </h2>

              {/* Paragraph 1 */}
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: '18px', fontSize: '15.5px' }}>
                Welcome to <strong style={{ color: '#1a1a2e' }}>THE EDGISS</strong> – our commitment to creativity and
                unwavering dedication has positioned us among the foremost industry leaders. Our
                diverse portfolio attests to our versatile capabilities, spanning a comprehensive
                360 degrees of expertise that includes Ecommerce, software development,
                application development, website development, CMS, and logo designing.
              </p>

              {/* Paragraph 2 */}
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: '28px', fontSize: '15.5px' }}>
                At <strong style={{ color: '#1a1a2e' }}>THE EDGISS</strong>, our dynamic team is driven to craft
                unparalleled solutions for your company's success. We take pride in our ability
                to decode market demands and engineer tailored solutions that fit seamlessly
                into any wireframe.
              </p>

              {/* Feature list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                {[
                  { icon: '🚀', label: 'Ecommerce & Web Development' },
                  { icon: '🎨', label: 'Creative Design & Branding' },
                  { icon: '📱', label: 'App Development & CMS Solutions' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(43,77,255,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span style={{ fontWeight: 600, color: '#2d2d4e', fontSize: '15px' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Blockquote */}
              <div
                style={{
                  borderLeft: '4px solid #2B4DFF',
                  background: 'rgba(43,77,255,0.03)',
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

              {/* Stats row */}
              <div
                style={{
                  display: 'flex',
                  gap: '32px',
                  marginBottom: '36px',
                  padding: '20px 24px',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                  border: '1px solid #f0f3ff'
                }}
              >
                {[
                  { number: '150+', label: 'Projects' },
                  { number: '80+', label: 'Clients' },
                  { number: '8+', label: 'Years' },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center', flex: 1 }}>
                    <div
                      style={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: '#2B4DFF',
                        lineHeight: 1,
                      }}
                    >
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '13px', color: '#888', marginTop: '4px', fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#2B4DFF',
                    color: '#fff',
                    padding: '14px 32px',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 25px rgba(43,77,255,0.25)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 35px rgba(43,77,255,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.background = '#1a3ae0';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 25px rgba(43,77,255,0.25)';
                    (e.currentTarget as HTMLAnchorElement).style.background = '#2B4DFF';
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

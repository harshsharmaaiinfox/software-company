import { Link } from 'react-router-dom';

export default function FooterOne() {
  return (
    <footer style={{ background: '#036278', color: '#fff', paddingTop: '100px' }}>
      <div className="tv-footer-wrap z-index-1">

        {/* Top Widget Area */}
        <div className="tv-footer-area mb-65">
          <div className="container">
            <div className="row">
              {/* Column 1: Logo & Info */}
              <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                <div className="tv-footer-widget">
                  <div className="tv-footer-widget-logo mb-30">
                    <Link to="/">
                      <img src="assets/img/logo-white.png" alt="Mangal Tech Logo" style={{ maxWidth: '280px', height: 'auto' }} />
                    </Link>
                  </div>
                  <div className="tv-footer-widget-text">
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '14px', marginBottom: '15px' }}>
                      Mangal Tech is one of the best organization in IT sector on the globe. We are working to give you the best of IT and keep you ahead in competition.
                    </p>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
                      Read more +
                    </Link>
                  </div>
                </div>
              </div>

              {/* Column 2: Services */}
              <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                <div className="tv-footer-widget ml-50">
                  <h4 className="tv-footer-widget-title" style={{ color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Services
                  </h4>
                  <div className="tv-footer-widget-menu">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '10px' }}><Link to="/web-development" style={linkStyle}>WEBSITE DESIGN & DEVELOPMENT</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/ecommerce-development" style={linkStyle}>E-COMMERCE DESIGN & DEVELOPMENT</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/mobile-app-development" style={linkStyle}>MOBILE APP DEVELOPMENT</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/logo-designing" style={linkStyle}>LOGO DESIGNING</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 3: Mobile App Development */}
              <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                <div className="tv-footer-widget ml-30">
                  <h4 className="tv-footer-widget-title" style={{ color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Mobile App Development
                  </h4>
                  <div className="tv-footer-widget-menu">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '10px' }}><Link to="/android-app-development" style={linkStyle}>ANDROID APP DEVELOPMENT</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/ios-app-development" style={linkStyle}>IOS APP DEVELOPMENT</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/mobile-app-development" style={linkStyle}>FLUTTER APP DEVELOPMENT</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 4: Legal & Help & Company */}
              <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                <div className="tv-footer-widget">

                  <h4 className="tv-footer-widget-title" style={{ color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Legal & Help
                  </h4>
                  <div className="tv-footer-widget-menu mb-40">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '10px' }}><Link to="/terms-conditions" style={linkStyle}>TERMS & CONDITIONS</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/privacy-policy" style={linkStyle}>PRIVACY POLICY</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/disclaimer" style={linkStyle}>DISCLAIMER</Link></li>
                    </ul>
                  </div>

                  <h4 className="tv-footer-widget-title" style={{ color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Company
                  </h4>
                  <div className="tv-footer-widget-menu">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '10px' }}><Link to="/about" style={linkStyle}>ABOUT US</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/faq" style={linkStyle}>FAQ</Link></li>
                      <li style={{ marginBottom: '10px' }}><Link to="/blog-grid" style={linkStyle}>BLOG</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Contact Bar */}
        <div className="tv-footer-contact-bar" style={{ background: '#047C97', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Call Widget */}
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30 mb-md-0">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                    <i className="fa-solid fa-phone" style={{ color: '#047C97', fontSize: '24px' }}></i>
                  </div>
                  <div>
                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>YOU MAY CALL US AT</span>
                    <a href="tel:9528323105" style={{ color: '#fff', fontSize: '18px', fontWeight: 700, textDecoration: 'none' }}>(+91) 9528323105</a>
                  </div>
                </div>
              </div>

              {/* Email Widget */}
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30 mb-md-0">
                <div className="d-flex align-items-center justify-content-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#4EB985', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                    <i className="fa-solid fa-envelope" style={{ color: '#fff', fontSize: '24px' }}></i>
                  </div>
                  <div>
                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>YOU MAY EMAIL US AT</span>
                    <a href="mailto:contact@mangaltech.in" style={{ color: '#fff', fontSize: '18px', fontWeight: 700, textDecoration: 'none' }}>info@mangaltech.com</a>
                  </div>
                </div>
              </div>

              {/* Social Widget */}
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                    <i className="fa-solid fa-share-nodes" style={{ color: '#047C97', fontSize: '24px' }}></i>
                  </div>
                  <div>
                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>FOLLOW US AT</span>
                    <div className="d-flex gap-2">
                      <SocialIcon icon="fa-facebook-f" />
                      <SocialIcon icon="fa-instagram" />
                      <SocialIcon icon="fa-linkedin-in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="tv-copyright-area" style={{ background: '#024e5f', padding: '20px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
                  © 2025. All Rights Reserved By THE Mangal Tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  fontSize: '11px',
  fontWeight: 600,
  transition: 'all 0.3s',
  display: 'block'
};

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a
      href="#"
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#111',
        fontSize: '14px',
        transition: 'all 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#4EB985';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.color = '#111';
      }}
    >
      <i className={`fa-brands ${icon}`}></i>
    </a>
  );
}

import { Link } from 'react-router-dom';

export default function FooterOne() {
  return (
    <footer>
      <div className="tv-footer-wrap footer-bg z-index-1 pt-100" style={{ background: '#1a1a2e' }}>

        <div className="tv-footer-area mb-65">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="tv-footer-widget tv-footer-col-1">
                  <div className="tv-footer-widget-logo mb-30">
                    <Link to="/">
                      <img src="assets/img/logo/logo-white.png" alt="Edgiss Logo" style={{ maxWidth: '180px' }} />
                    </Link>
                  </div>
                  <div className="tv-footer-widget-text">
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                      Decoding market demands with creative excellence.
                      The Edgiss is your 360-degree partner for digital growth and innovation.
                    </p>
                  </div>
                  <div className="tv-footer-widget-contact-info" style={{ marginTop: '25px' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '15px' }}>
                        <a href="tel:8368068740" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className="fa-solid fa-phone" style={{ color: '#2B4DFF' }}></i> +91 836-8068-740
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@edgiss.com" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className="fa-solid fa-envelope" style={{ color: '#2B4DFF' }}></i> info@edgiss.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="tv-footer-widget tv-footer-col-2">
                  <h4 className="tv-footer-widget-title" style={{ color: '#fff', fontSize: '22px', fontWeight: 700, marginBottom: '30px' }}>Quick Links</h4>
                  <div className="tv-footer-widget-menu">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '12px' }}>
                        <Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2B4DFF'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>About Us</Link>
                      </li>
                      <li style={{ marginBottom: '12px' }}>
                        <Link to="/team" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2B4DFF'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Our Team</Link>
                      </li>
                      <li style={{ marginBottom: '12px' }}>
                        <Link to="/project" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2B4DFF'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Our Portfolio</Link>
                      </li>
                      <li style={{ marginBottom: '12px' }}>
                        <Link to="/price" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2B4DFF'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Pricing Plans</Link>
                      </li>
                      <li>
                        <Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2B4DFF'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="tv-footer-widget tv-footer-col-3">
                  <h4 className="tv-footer-widget-title" style={{ color: '#fff', fontSize: '22px', fontWeight: 700, marginBottom: '30px' }}>Services</h4>
                  <div className="tv-footer-widget-menu">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '12px' }}>
                        <Link to="/service-details" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Ecommerce</Link>
                      </li>
                      <li style={{ marginBottom: '12px' }}>
                        <Link to="/service-details" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Software Dev</Link>
                      </li>
                      <li style={{ marginBottom: '12px' }}>
                        <Link to="/service-details" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Web Development</Link>
                      </li>
                      <li style={{ marginBottom: '12px' }}>
                        <Link to="/service-details" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>App Development</Link>
                      </li>
                      <li>
                        <Link to="/service-details" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Logo Design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="tv-footer-widget tv-footer-col-4">
                  <h4 className="tv-footer-widget-title" style={{ color: '#fff', fontSize: '22px', fontWeight: 700, marginBottom: '30px' }}>Join the Journey</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '20px' }}>Follow us on social media for latest updates and tech insights.</p>
                  <div className="tv-footer-widget-social" style={{ display: 'flex', gap: '12px' }}>
                    <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#2B4DFF' }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tv-copyright-area" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '30px 0' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 text-center">
                <div className="tv-copyright-left">
                  <p className="mb-0" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                    © {new Date().getFullYear()} <Link to="/" style={{ color: '#2B4DFF', fontWeight: 600, textDecoration: 'none' }}>The Edgiss</Link>. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

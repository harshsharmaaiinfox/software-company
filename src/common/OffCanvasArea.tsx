import { Link } from 'react-router-dom';
import MobileMenu from '../layouts/headers/MobileMenu';

interface OffCanvasAreaProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OffCanvasArea({
  menuOpen,
  setMenuOpen,
}: OffCanvasAreaProps) {
  return (
    <>
      <div className="tv-offcanvas-area">
        <div className={`itoffcanvas ${menuOpen ? 'opened' : ''}`}>
          <div className="itoffcanvas__close-btn">
            <button onClick={() => setMenuOpen(false)} className="close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link to="/">
              <img src="/assets/img/logo-white.png" alt="MangalTech Logo" style={{ maxWidth: '260px', height: 'auto' }} />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
            </p>
          </div>
          <div className="tv-menu-mobile d-xl-none">
            <MobileMenu />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="tv-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:info@mangaltech.com">info@mangaltech.com</a>
              </div>
            </div>
            <div className="tv-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:+91 9528323105">+91 9528323105</a>
              </div>
            </div>
            <div className="tv-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <a
                  href="htits://www.google.com/maps/@37.4801311,22.8928877,3z"
                  target="_blank"
                >
                 
10th UNIT NO. 10104
GAUR CITY MALL SECTOR 4 GREATER NOIDA
Parthala Bridge Gaur City Mall
Gautambuddha Nagar Uttar Pradesh 201318
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${menuOpen ? 'apply' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  );
}

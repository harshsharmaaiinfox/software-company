import Navmenu from './Navmenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseSticky from '../../hooks/UseSticky';
import SearchArea from '../../common/SearchArea';
import OffCanvasArea from '../../common/OffCanvasArea';

export default function HeaderOne() {
  const { sticky } = UseSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="tv-header-height">

        <div
          id="header-sticky"
          className={`tv-header-area header-style-1 tv-header-ptb p-relative ${sticky ? 'header-sticky' : ''}`}
        >
          <div className="container container-1750">
            <div className="p-relative">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-6">
                  <div className="tv-header-logo">
                    <Link to="/">
                      <img
                        src="/assets/img/logo/logo-white.png"
                        alt="techor-logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className=" col-xxl-7 col-xl-7 d-none d-xl-block">
                  <div className="tv-header-menu tv-header-dropdown">
                    <nav className="tv-menu-content">
                      <Navmenu />
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-6">
                  <div className="tv-header-right-action d-flex justify-content-end align-items-center" style={{ gap: '12px' }}>
                    {/* White Phone Button */}
                    <a
                      href="tel:8368068740"
                      className="d-none d-xl-flex align-items-center"
                      style={{
                        background: '#ffffff',
                        color: '#2B4DFF',
                        borderRadius: '50px',
                        padding: '10px 22px',
                        fontWeight: 700,
                        fontSize: '15px',
                        textDecoration: 'none',
                        gap: '8px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 15px rgba(43,77,255,0.15)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        border: '2px solid #2B4DFF',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(43,77,255,0.25)';
                        (e.currentTarget as HTMLElement).style.background = '#f0f3ff';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(43,77,255,0.15)';
                        (e.currentTarget as HTMLElement).style.background = '#ffffff';
                      }}
                    >
                      <i className="fa-solid fa-phone" style={{ fontSize: '14px' }}></i>
                      836-8068-740
                    </a>

                    {/* Blue Request A Quote Button */}
                    <Link
                      to="/contact"
                      className="d-none d-md-flex align-items-center"
                      style={{
                        background: '#2B4DFF',
                        color: '#ffffff',
                        borderRadius: '50px',
                        padding: '10px 22px',
                        fontWeight: 700,
                        fontSize: '15px',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 15px rgba(43,77,255,0.35)',
                        transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                        border: '2px solid #2B4DFF',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(43,77,255,0.5)';
                        (e.currentTarget as HTMLElement).style.background = '#1a3ae0';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(43,77,255,0.35)';
                        (e.currentTarget as HTMLElement).style.background = '#2B4DFF';
                      }}
                    >
                      Request A Quote
                    </Link>

                    {/* Mobile hamburger */}
                    <div className="tv-header-bar">
                      <button
                        className="tv-menu-bar"
                        onClick={() => setMenuOpen(true)}
                      >
                        <span>
                          <i className="fa-solid fa-bars-staggered"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchArea searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <OffCanvasArea menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

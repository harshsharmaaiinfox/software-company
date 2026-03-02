import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function TeamHomeOne() {
  return (
    <div
      className="tv-team-area pt-130 pb-130 section-bg"
      style={{ background: '#f8faff', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 col-12">
            <div className="tv-team-slider-area">
              <Swiper
                loop={true}
                spaceBetween={35}
                speed={1500}
                slidesPerView={1}
                direction="horizontal"
                autoplay={{
                  delay: 4500,
                  reverseDirection: false,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: '.tv-team-pagination',
                  clickable: true,
                  renderBullet: (index: number, className: string) => {
                    const images = [
                      '/assets/img/team/team-1-1.png',
                      '/assets/img/team/team-1-2.png',
                      '/assets/img/team/team-1-3.png',
                    ];
                    return `
                  <span class="${className}">
                    <img src="${images[index]}" alt="Thumb ${index + 1}" style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid ${index === 0 ? '#2B4DFF' : 'transparent'};" />
                  </span>
                `;
                  },
                }}
                navigation={{ prevEl: '.arrow-prev', nextEl: '.arrow-next' }}
                modules={[Autoplay, Navigation, Pagination]}
                className="swiper-container tv-team-slide-active"
              >
                <SwiperSlide className="swiper-slide">
                  <div className="single-team-item" style={{ borderRadius: '24px', overflow: 'hidden', background: '#fff', boxShadow: '0 20px 50px rgba(43,77,255,0.08)' }}>
                    <img src="assets/img/team/team-1-1.png" alt="" style={{ width: '100%' }} />
                    <div className="team-social" style={{ background: 'rgba(43,77,255,0.9)' }}>
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="team-content d-flex justify-content-between align-items-center" style={{ padding: '25px' }}>
                      <div>
                        <h2 className="team-name">
                          <Link to="/team-details" style={{ color: '#1a1a2e', fontWeight: 700 }}>Rosy Gaggero</Link>
                        </h2>
                        <p className="designation" style={{ color: '#2B4DFF', fontWeight: 600 }}>Senior Web Developer</p>
                      </div>
                      <div>
                        <div className="round-shape" style={{ background: '#2B4DFF', color: '#fff' }}>+</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Repeat for other slides with blue styling */}
                <SwiperSlide className="swiper-slide">
                  <div className="single-team-item" style={{ borderRadius: '24px', overflow: 'hidden', background: '#fff', boxShadow: '0 20px 50px rgba(43,77,255,0.08)' }}>
                    <img src="assets/img/team/team-1-2.png" alt="" style={{ width: '100%' }} />
                    <div className="team-social" style={{ background: 'rgba(43,77,255,0.9)' }}>
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="team-content d-flex justify-content-between align-items-center" style={{ padding: '25px' }}>
                      <div>
                        <h2 className="team-name">
                          <Link to="/team-details" style={{ color: '#1a1a2e', fontWeight: 700 }}>Alex Rivers</Link>
                        </h2>
                        <p className="designation" style={{ color: '#2B4DFF', fontWeight: 600 }}>UI/UX Designer</p>
                      </div>
                      <div>
                        <div className="round-shape" style={{ background: '#2B4DFF', color: '#fff' }}>+</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-team-item" style={{ borderRadius: '24px', overflow: 'hidden', background: '#fff', boxShadow: '0 20px 50px rgba(43,77,255,0.08)' }}>
                    <img src="assets/img/team/team-1-3.png" alt="" style={{ width: '100%' }} />

                    <div className="team-content d-flex justify-content-between align-items-center" style={{ padding: '25px' }}>
                      <div>
                        <h2 className="team-name">
                          <Link to="/team-details" style={{ color: '#1a1a2e', fontWeight: 700 }}>Jordan Smith</Link>
                        </h2>
                        <p className="designation" style={{ color: '#2B4DFF', fontWeight: 600 }}>Project Manager</p>
                      </div>
                      <div>
                        <div className="round-shape" style={{ background: '#2B4DFF', color: '#fff' }}>+</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-12 order-md-0">
            <div className="tv-team-right-area" style={{ paddingLeft: '40px' }}>
              <div className="tv-section-title-box mb-40">
                <span className="tv-section-subtitle tv-spltv-text tv-spltv-in-right" style={{ color: '#2B4DFF', fontWeight: 700 }}>
                  Our Team Members
                </span>
                <h4 className="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right" style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff' }}>
                  Our Creative Minds are <br /> Ready To Help.
                </h4>
                <p style={{ color: '#ffffff', lineHeight: '1.8' }}>
                  We bring together diverse talents to deliver exceptional results.
                  Our team is dedicated to your growth and digital excellence.
                </p>
              </div>
              <div className="tv-team-arrow-box d-flex" style={{ gap: '15px', marginBottom: '30px' }}>
                <button className="arrow-prev" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: '#2B4DFF' }}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="arrow-next" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2B4DFF', color: '#fff' }}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="tv-team-pagination d-flex" style={{ gap: '10px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

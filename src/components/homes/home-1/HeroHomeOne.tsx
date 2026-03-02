import { Link } from 'react-router-dom';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function HeroHomeOne() {
  return (
    <div className="tv-slider-area">
      <div className="tv-slider-wrap">
        <Swiper
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: true }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: (index: number, className: string) =>
              `<span class="${className}">${index + 1}</span>`,
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          className="swiper-container tv-slider-active tv-slider-animation p-relative"
        >
          {/* Slide 1 */}
          <SwiperSlide className="swiper-slide">
            <div className="tv-slider-overlay z-index-1 fix p-relative">
              <div
                className="tv-slider-bg"
                style={{
                  backgroundImage: `url(/assets/img/slider/slider-1-1.jpg)`,
                  filter: 'brightness(0.7)'
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8">
                    <div className="tv-slider-content z-index-1">
                      <span className="tv-slider-subtitle" style={{ color: '#fff', borderLeft: '3px solid #2B4DFF', paddingLeft: '15px', fontWeight: 600, letterSpacing: '1px' }}>
                        Creative Web Development Company
                      </span>
                      <h1 className="tv-slider-title p-relative" style={{ fontSize: '72px', color: '#fff', fontWeight: 900, marginBottom: '25px', lineHeight: 1.1 }}>
                        Experience Over <br /> Everything <span style={{ color: '#2B4DFF' }}>Else</span>
                      </h1>
                      <div className="tv-slider-text pb-30">
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', maxWidth: '600px', lineHeight: 1.8 }}>
                          We believe in experience over anything else. We bring
                          to you the perfect blend of expertise and creativity
                          together under one roof.
                        </p>
                      </div>
                      <div className="tv-slider-btn">
                        <Link to="/contact" className="tv-btn-primary" style={{ background: '#2B4DFF', padding: '18px 45px', borderRadius: '50px', border: 'none', fontSize: '16px', fontWeight: 700 }}>
                          <span className="btn-wrap">
                            <span className="btn-text1">Get Started Now</span>
                            <span className="btn-text2">Get Started Now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="swiper-slide">
            <div className="tv-slider-overlay z-index-1 fix p-relative">
              <div
                className="tv-slider-bg"
                style={{
                  backgroundImage: `url(/assets/img/slider/slider-1-2.jpg)`,
                  filter: 'brightness(0.7)'
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8">
                    <div className="tv-slider-content z-index-1">
                      <span className="tv-slider-subtitle" style={{ color: '#fff', borderLeft: '3px solid #2B4DFF', paddingLeft: '15px', fontWeight: 600, letterSpacing: '1px' }}>
                        Innovating for the Future
                      </span>
                      <h1 className="tv-slider-title p-relative" style={{ fontSize: '72px', color: '#fff', fontWeight: 900, marginBottom: '25px', lineHeight: 1.1 }}>
                        Expertise &amp; <span style={{ color: '#2B4DFF' }}>Creativity</span> <br /> In Harmony
                      </h1>
                      <div className="tv-slider-text pb-30">
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', maxWidth: '600px', lineHeight: 1.8 }}>
                          Experience the best creative output for your company
                          with Edgiss! We deliver digital solutions that inspire,
                          engage, and convert.
                        </p>
                      </div>
                      <div className="tv-slider-btn">
                        <Link to="/contact" className="tv-btn-primary" style={{ background: '#2B4DFF', padding: '18px 45px', borderRadius: '50px', border: 'none', fontSize: '16px', fontWeight: 700 }}>
                          <span className="btn-wrap">
                            <span className="btn-text1">Let's Talk With Us</span>
                            <span className="btn-text2">Let's Talk With Us</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="swiper-slide">
            <div className="tv-slider-overlay z-index-1 fix p-relative">
              <div
                className="tv-slider-bg"
                style={{
                  backgroundImage: `url(/assets/img/slider/slider-1-3.jpg)`,
                  filter: 'brightness(0.7)'
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8">
                    <div className="tv-slider-content z-index-1">
                      <span className="tv-slider-subtitle" style={{ color: '#fff', borderLeft: '3px solid #2B4DFF', paddingLeft: '15px', fontWeight: 600, letterSpacing: '1px' }}>
                        Your Tech Partner
                      </span>
                      <h1 className="tv-slider-title p-relative" style={{ fontSize: '72px', color: '#fff', fontWeight: 900, marginBottom: '25px', lineHeight: 1.1 }}>
                        Your Vision, Our <br /> <span style={{ color: '#2B4DFF' }}>Excellence</span>
                      </h1>
                      <div className="tv-slider-text pb-30">
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', maxWidth: '600px', lineHeight: 1.8 }}>
                          We bring expertise and creativity together under one
                          roof. Discover the best creative output for your
                          business with Edgiss!
                        </p>
                      </div>
                      <div className="tv-slider-btn">
                        <Link to="/contact" className="tv-btn-primary" style={{ background: '#2B4DFF', padding: '18px 45px', borderRadius: '50px', border: 'none', fontSize: '16px', fontWeight: 700 }}>
                          <span className="btn-wrap">
                            <span className="btn-text1">Discover Edgiss</span>
                            <span className="btn-text2">Discover Edgiss</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="tv-slider-arrow-box d-none d-lg-block">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

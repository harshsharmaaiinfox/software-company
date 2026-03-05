import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// swiper css
import 'swiper/css';
import 'swiper/css/navigation';

const settings = {
  speed: 1500,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  navigation: {
    prevEl: '.arrow-prev',
    nextEl: '.arrow-next',
  },
};

const testimonials = [
  {
    text: "“ Mangal Tech transformed our outdated website into a high-converting masterpiece. Their blend of creativity and technical expertise is truly unmatched in the industry today. ”",
    author: "Rajesh Kumar",
    role: "CEO, Infotech Solutions India",
    avatar: "assets/img/testimonial/testi-avatar-1.png"
  },
  {
    text: "“ Working with Mangal Tech was a game-changer for our software project. They decoded our complex market demands and delivered a tailored solution ahead of schedule. ”",
    author: "Priya Sharma",
    role: "Founder, EduLearn EdTech",
    avatar: "assets/img/testimonial/testi-avatar-1.png"
  },
  {
    text: "“ Their 360-degree approach to digital solutions is exactly what we needed. From branding to the final web application, every step was handled with creative excellence. ”",
    author: "Amit Patel",
    role: "Director, Global Exports Pvt Ltd",
    avatar: "assets/img/testimonial/testi-avatar-1.png"
  },
  {
    text: "\u201C Mangal Tech understood our vision for a pan-India e-commerce platform. Their team delivered a scalable solution that handles our growing customer base seamlessly. \u201D",
    author: "Sneha Reddy",
    role: "COO, ShopDesi",
    avatar: "assets/img/testimonial/testi-avatar-1.png"
  },
  {
    text: "\u201C As a startup in Bangalore, we needed partners who move fast without compromising quality. Mangal Tech exceeded our expectations and helped us launch ahead of schedule. \u201D",
    author: "Vikram Singh",
    role: "CTO, FinServe Innovations",
    avatar: "assets/img/testimonial/testi-avatar-1.png"
  }
];

export default function TestimonialHomeOne() {
  return (
    <div
      className="tv-testimonial-area pt-130 pb-130"
      style={{
        backgroundImage: `url(/assets/img/testimonial/testi-bg-1-1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-5 col-lg-6">
            <div className="testimonial-left-content">
              <div className="tv-section-title-box mb-40">
                <span className="tv-section-subtitle tv-spltv-text tv-spltv-in-right" style={{ color: '#047C97', fontWeight: 700 }}>
                  Client Success
                </span>
                <h4 className="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right" style={{ fontSize: '40px', fontWeight: 800, color: '#1a1a2e' }}>
                  What Our Partners Say About Mangal Tech
                </h4>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  We believe in building long-term partnerships through
                  exceptional work and creative dedication.
                </p>
              </div>
              <div className="tv-testi-arrow-box d-flex" style={{ gap: '15px' }}>
                <button className="arrow-prev" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: '#047C97' }}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="arrow-next" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#047C97', color: '#fff', boxShadow: '0 8px 15px rgba(4,124,151,0.2)' }}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-7 col-lg-6">
            <div className="tv-testmonial-wrap">
              <Swiper
                {...settings}
                modules={[Navigation, Autoplay]}
                className="swiper-container tv-testi-slider-active"
              >
                {testimonials.map((testi, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="single-testi-slider-item" style={{ background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.06)', border: '1px solid #f0f3ff' }}>
                      <div className="rating" style={{ marginBottom: '25px' }}>
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star" style={{ color: '#ffc107', marginRight: '5px' }}></i>
                        ))}
                      </div>
                      <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#1a1a2e', lineHeight: '1.8', marginBottom: '35px', fontWeight: 500 }}>
                        {testi.text}
                      </p>
                      <div className="author-info d-flex align-items-center">
                        <img
                          src={testi.avatar}
                          alt={testi.author}
                          style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '20px', border: '3px solid rgba(4,124,151,0.1)' }}
                        />
                        <div>
                          <h5 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#1a1a2e' }}>
                            {testi.author}
                          </h5>
                          <span style={{ fontSize: '14px', color: '#047C97', fontWeight: 600 }}>{testi.role}</span>
                        </div>
                      </div>
                      <img
                        src="assets/img/testimonial/testi-shap-1.png"
                        alt=""
                        className="shap-icon"
                        style={{ opacity: 0.1 }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

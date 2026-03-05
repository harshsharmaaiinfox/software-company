import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// swiper css
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const settings = {
  speed: 1500,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
  },
  breakpoints: {
    '1400': {
      slidesPerView: 2,
      centeredSlides: true,
    },
    '1200': {
      slidesPerView: 2,
      centeredSlides: true,
    },
    '992': {
      slidesPerView: 2,
      centeredSlides: true,
    },
    '768': {
      slidesPerView: 1,
      centeredSlides: true,
    },
    '576': {
      slidesPerView: 1,
      centeredSlides: true,
    },
    '0': {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const testimonials = [
  {
    text: "\u201C Mangal Tech transformed our outdated website into a high-converting masterpiece. Their blend of creativity and technical expertise is truly unmatched in the industry today. \u201D",
    author: "Rajesh Kumar",
    role: "CEO, Infotech Solutions India",
    avatar: "assets/img/testimonial/testi-avatar-1.png"
  },
  {
    text: "\u201C Working with Mangal Tech was a game-changer for our software project. They decoded our complex market demands and delivered a tailored solution ahead of schedule. \u201D",
    author: "Priya Sharma",
    role: "Founder, EduLearn EdTech",
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

export default function TestimonialHomeThree() {
  return (
    <div className="tv-testimonial-area3 pb-130 pt-130">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="tv-section-title-box mb-60">
              <span className="tv-section-subtitle tv-spltv-text tv-spltv-in-right">
                Testimonial
              </span>
              <h4 className="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right">
                What Our Clients Ask <br /> About Mangal Tech
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tv-testmonial-wrap3">
        <Swiper
          {...settings}
          modules={[Autoplay, Pagination]}
          className="swiper-container tv-testi-slider-active3"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="single-testi-slider-item style-3">
                <div className="rating">
                  <i className="fa-solid fa-star-sharp"></i>
                  <i className="fa-solid fa-star-sharp"></i>
                  <i className="fa-solid fa-star-sharp"></i>
                  <i className="fa-solid fa-star-sharp"></i>
                  <i className="fa-solid fa-star-sharp"></i>
                </div>
                <p>{testi.text}</p>
                <div className="author-info d-flex align-items-center">
                  <img src={testi.avatar} alt={testi.author} />
                  <h5>
                    {testi.author}<span>{testi.role}</span>
                  </h5>
                </div>
                <img
                  src="assets/img/testimonial/testi-shap-1.png"
                  alt=""
                  className="shap-icon"
                />
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

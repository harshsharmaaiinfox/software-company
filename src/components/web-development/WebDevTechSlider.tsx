import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';

const techIcons = [
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

const WebDevTechSlider = () => {
    return (
        <div className="web-dev-tech-slider pt-60 pb-60" style={{ background: '#f8faff', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
            <div className="container">
                <div className="tech-slider-wrap">
                    <Swiper
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={2}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        modules={[Autoplay]}
                        breakpoints={{
                            '1200': { slidesPerView: 6 },
                            '992': { slidesPerView: 5 },
                            '768': { slidesPerView: 4 },
                            '576': { slidesPerView: 3 },
                            '0': { slidesPerView: 2 },
                        }}
                        className="tech-swiper-container"
                    >
                        {techIcons.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <div className="tech-item text-center" style={{ 
                                    padding: '20px', 
                                    transition: 'all 0.3s ease',
                                    opacity: 0.8
                                }}>
                                    <img src={tech.icon} alt={tech.name} style={{ 
                                        height: '60px', 
                                        maxWidth: '120px', 
                                        objectFit: 'contain' 
                                    }} />
                                    <div style={{ 
                                        marginTop: '10px', 
                                        fontSize: '14px', 
                                        fontWeight: '600', 
                                        color: '#036278',
                                    }}>{tech.name}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .tech-swiper-container .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                .tech-item:hover {
                    opacity: 1 !important;
                    transform: scale(1.1);
                }
            `}} />
        </div>
    );
};

export default WebDevTechSlider;

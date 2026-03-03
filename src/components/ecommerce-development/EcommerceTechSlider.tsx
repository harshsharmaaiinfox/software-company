import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';

const techIcons = [
    { name: 'Shopify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
    { name: 'Magento', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg' },
    { name: 'WooCommerce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

const EcommerceTechSlider = () => {
    return (
        <div className="ecommerce-tech-slider pt-60 pb-60" style={{ background: '#f8faff', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
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

export default EcommerceTechSlider;

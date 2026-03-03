import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';

const techIcons = [
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Swift (iOS)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'Kotlin (Android)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
    { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'Xcode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
];

const MobileAppTechSlider = () => {
    return (
        <div className="mobile-tech-slider pt-60 pb-60" style={{ background: '#f8faff', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
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

            <style dangerouslySetInnerHTML={{
                __html: `
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

export default MobileAppTechSlider;

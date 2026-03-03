
const IosFeatures = () => {
    const features = [
        {
            title: "Premium Experience",
            description: "High-quality, pixel-perfect user interfaces that meet Apple's stringent standards.",
            icon: "fa-solid fa-gem"
        },
        {
            title: "Enhanced Security",
            description: "Built-in protection for data privacy and app security on every iOS release.",
            icon: "fa-solid fa-lock"
        },
        {
            title: "Smooth Performance",
            description: "Deep software-hardware integration ensure fluid and responsive user interactions.",
            icon: "fa-solid fa-tachometer-alt"
        },
        {
            title: "Loyalty and Value",
            description: "High customer spending capabilities and loyalty among Apple users.",
            icon: "fa-solid fa-star"
        },
        {
            title: "Fast Deployment",
            description: "Streamlined processes to bring your iOS app to market with minimal delays.",
            icon: "fa-solid fa-rocket"
        },
        {
            title: "Apple Ecosystem",
            description: "Seamless synchronization across iPhone, iPad, Mac, and Apple Watch.",
            icon: "fa-solid fa-link"
        }
    ];

    return (
        <section className="ios-features-area pt-120 pb-120 p-relative overflow-hidden" style={{ background: '#f8fbff' }}>
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'url("/assets/img/service/service-details-shape.png")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.03,
                zIndex: 0
            }}></div>

            <div className="container text-center p-relative" style={{ zIndex: 1 }}>
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                        <span style={{
                            color: '#4EB985',
                            background: 'rgba(78, 185, 133, 0.1)',
                            padding: '4px 15px',
                            borderRadius: '4px',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'inline-block',
                            marginBottom: '15px',
                            fontSize: '13px'
                        }}>
                            KEY FEATURES
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            iOS App Features
                        </h2>
                        <p style={{ color: '#585b6f', maxWidth: '600px', margin: '0 auto' }}>
                            We specialize in building iOS apps that are scalable, maintainable, and highly secure.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {features.map((feature, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div className="feature-card-premium wow fadeInUp" data-wow-delay={`${idx * 0.1}s`} style={{
                                background: '#fff',
                                padding: '45px 35px',
                                borderRadius: '30px',
                                border: '1px solid rgba(225, 229, 235, 0.6)',
                                transition: 'all 0.4s ease',
                                height: '100%',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div className="feature-icon-box" style={{
                                    width: '75px',
                                    height: '75px',
                                    background: 'rgba(3, 98, 120, 0.05)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '32px',
                                    color: '#036278',
                                    margin: '0 auto 25px',
                                    transition: 'all 0.4s'
                                }}>
                                    <i className={feature.icon}></i>
                                </div>
                                <h3 style={{ color: '#036278', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{feature.title}</h3>
                                <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{feature.description}</p>

                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '-20px',
                                    width: '80px',
                                    height: '80px',
                                    background: 'rgba(78, 185, 133, 0.03)',
                                    borderRadius: '50%',
                                    zIndex: 0
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .feature-card-premium:hover { 
                    transform: translateY(-15px); 
                    border-color: #4EB985; 
                    box-shadow: 0 30px 60px rgba(3, 98, 120, 0.1); 
                }
                .feature-card-premium:hover .feature-icon-box {
                    background: #4EB985;
                    color: #fff;
                    transform: scale(1.1) rotate(10deg);
                    box-shadow: 0 15px 30px rgba(78, 185, 133, 0.2);
                }
                .feature-card-premium:hover h3 {
                    color: #4EB985;
                }
            `}} />
        </section>
    );
};

export default IosFeatures;


const AndroidFeatures = () => {
    const features = [
        {
            title: "100% Satisfaction",
            description: "We work until you are 100% satisfied with the final result of your Android application.",
            icon: "fa-solid fa-smile"
        },
        {
            title: "Experienced Team",
            description: "Dedicated developers with years of experience across various industry sectors.",
            icon: "fa-solid fa-user-tie"
        },
        {
            title: "Transparent Communication",
            description: "Stay updated on your project's progress with regular meetings and reports.",
            icon: "fa-solid fa-comments"
        },
        {
            title: "Data Security",
            description: "Advanced safety measures and security standards to keep your data safe and private.",
            icon: "fa-solid fa-shield-alt"
        },
        {
            title: "Fastest Support",
            description: "Our support agents are always ready to help you with any issue or update request.",
            icon: "fa-solid fa-headset"
        },
        {
            title: "Delivered on Time",
            description: "We value your time and ensure projects are delivered within the specified timeline.",
            icon: "fa-solid fa-calendar-check"
        }
    ];

    return (
        <section className="android-features-area pt-120 pb-120 p-relative overflow-hidden" style={{ background: '#f8fbff' }}>
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
                            CORE VALUES
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Key Features
                        </h2>
                        <p style={{ color: '#585b6f', maxWidth: '600px', margin: '0 auto' }}>
                            We are committed to delivering excellence through our core values and specialized approach to Android development.
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

export default AndroidFeatures;

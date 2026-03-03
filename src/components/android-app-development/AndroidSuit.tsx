
const AndroidSuit = () => {
    const services = [
        {
            title: "Custom Android App Development",
            description: "Dedicated Android app development for startups and established enterprises.",
            icon: "fa-solid fa-mobile-screen-button"
        },
        {
            title: "Native App Development",
            description: "Building native apps using Java/Kotlin for seamless device performance.",
            icon: "fa-brands fa-android"
        },
        {
            title: "Cross-Platform Optimization",
            description: "Strategic solutions for Flutter and React Native cross-platform apps.",
            icon: "fa-solid fa-arrows-spin"
        },
        {
            title: "Android Design & UI/UX",
            description: "Expert design team focused on creating immersive user experiences.",
            icon: "fa-solid fa-layer-group"
        },
        {
            title: "App Support & Maintenance",
            description: "Continuous monitoring and updates to keep your app running smoothly.",
            icon: "fa-solid fa-screwdriver-wrench"
        },
        {
            title: "App Marketing Services",
            description: "Strategically promoting your app on the Play Store for higher reach.",
            icon: "fa-solid fa-chart-line"
        }
    ];

    return (
        <section className="android-suit-area pt-120 pb-120" style={{ background: '#f8f9fa' }}>
            <div className="container text-center">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            DEVELOPMENT SUITE
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Deliver exceptional customer service <br /> using our suite of tools
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            We provide a comprehensive range of Android development services that cover every aspect of your app journey.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {services.map((service, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div className="android-suit-card wow fadeInUp" data-wow-delay={`${idx * 0.1}s`} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '20px',
                                border: '1px solid #e1e5eb',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    background: 'rgba(78, 185, 133, 0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '30px',
                                    color: '#4EB985',
                                    margin: '0 auto 25px',
                                    transition: 'all 0.3s'
                                }}>
                                    <i className={service.icon}></i>
                                </div>
                                <h3 style={{ color: '#036278', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.6' }}>{service.description}</p>

                                <div className="mt-20">
                                    <a href="#" style={{ color: '#4EB985', fontWeight: '700', textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase' }}>
                                        Read More <i className="fa-solid fa-chevron-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .android-suit-card:hover { transform: translateY(-10px); border-color: #4EB985; box-shadow: 0 15px 35px rgba(3, 98, 120, 0.08); }
                .android-suit-card:hover i { transform: rotateY(360deg); color: #036278; }
            `}} />
        </section>
    );
};

export default AndroidSuit;

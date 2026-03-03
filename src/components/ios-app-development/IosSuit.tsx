
const IosSuit = () => {
    const services = [
        {
            title: "Custom iPhone Development",
            description: "High-performance applications built from scratch to meet your business needs.",
            icon: "fa-solid fa-mobile-alt"
        },
        {
            title: "Native iPad App Development",
            description: "Optimized experiences specifically tailored for the larger screens of iPad devices.",
            icon: "fa-solid fa-tablet-alt"
        },
        {
            title: "UI/UX for Apple Ecosystem",
            description: "Exceptional interface design following Apple's human interface guidelines.",
            icon: "fa-solid fa-layer-group"
        },
        {
            title: "Swift Application Development",
            description: "Modern, scalable and maintainable apps developed using Swift's powerful features.",
            icon: "fa-solid fa-code"
        },
        {
            title: "Continuous Maintenance",
            description: "Regular updates and monitoring to ensure your app stays compatible with new iOS versions.",
            icon: "fa-solid fa-tools"
        },
        {
            title: "iOS Cloud Solutions",
            description: "Integrating your iOS app with powerful cloud infrastructure for seamless data sync.",
            icon: "fa-solid fa-cloud-upload-alt"
        }
    ];

    return (
        <section className="ios-suit-area pt-120 pb-120" style={{ background: '#f8f9fa' }}>
            <div className="container text-center">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            iOS DEVELOPMENT SUITE
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Professional iOS Solutions for <br /> Every Industry
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            Our expert team brings your mobile application ideas to life with state-of-the-art iOS development tools.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {services.map((service, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div className="ios-suit-card wow fadeInUp" data-wow-delay={`${idx * 0.1}s`} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '25px',
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
                                        DETAILS <i className="fa-solid fa-chevron-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ios-suit-card:hover { transform: translateY(-10px); border-color: #4EB985; box-shadow: 0 15px 35px rgba(3, 98, 120, 0.08); }
                .ios-suit-card:hover i { transform: rotateY(360deg); color: #036278; }
            `}} />
        </section>
    );
};

export default IosSuit;

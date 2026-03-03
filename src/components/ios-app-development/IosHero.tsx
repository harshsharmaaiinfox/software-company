
const IosHero = () => {
    const inputStyle = {
        width: '100%',
        padding: '14px 22px',
        borderRadius: '12px',
        border: '1px solid #e1e5eb',
        background: '#f9fbff',
        outline: 'none',
        fontSize: '15px',
        transition: 'all 0.3s'
    };

    return (
        <section className="ios-hero-area pt-150 pb-120 p-relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f0f7f4 0%, #ffffff 100%)',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center'
            }}>
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-5%',
                width: '500px',
                height: '500px',
                background: 'rgba(3, 98, 120, 0.05)',
                filter: 'blur(120px)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container p-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="ios-hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".2s" style={{
                                color: '#036278',
                                fontSize: '52px',
                                fontWeight: '800',
                                lineHeight: '1.2',
                                marginBottom: '25px'
                            }}>
                                Among the top <span style={{ color: '#4EB985' }}>iOS app developers</span> in India
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".4s" style={{
                                color: '#585b6f',
                                fontSize: '18px',
                                lineHeight: '1.7',
                                marginBottom: '35px',
                                maxWidth: '600px'
                            }}>
                                We build premium, high-performance, and secure iOS applications
                                for iPhone, iPad, and Apple Watch. Our team of expert Swift developers
                                ensures your app stands out in the competitive Apple App Store.
                            </p>

                            <ul className="wow fadeInUp mb-40" data-wow-delay=".6s" style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                                gap: '15px'
                            }}>
                                {[
                                    'Custom iPhone Apps',
                                    'Swift & Objective-C Experts',
                                    'iPad Application Development',
                                    'Apple Watch Integration',
                                    'iOS App Security Audit',
                                    'Playful UI/UX Design'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ color: '#036278', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fa-solid fa-circle-check" style={{ color: '#4EB985' }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="wow fadeInUp" data-wow-delay=".8s">
                                <button className="tv-btn" style={{
                                    background: 'linear-gradient(to right, #4EB985, #036278)',
                                    color: '#fff',
                                    padding: '16px 45px',
                                    borderRadius: '50px',
                                    border: 'none',
                                    fontWeight: '700',
                                    boxShadow: '0 10px 25px rgba(78, 185, 133, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    EXPLORE OUR WORK <i className="fa-solid fa-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="ios-contact-form wow fadeInRight" data-wow-delay=".6s" style={{
                            background: '#fff',
                            padding: '40px',
                            borderRadius: '30px',
                            boxShadow: '0 30px 60px rgba(3, 98, 120, 0.12)',
                            border: '1px solid rgba(78, 185, 133, 0.1)'
                        }}>
                            <h3 className="mb-30" style={{
                                color: '#036278',
                                fontWeight: '800',
                                fontSize: '24px',
                                textAlign: 'center'
                            }}>
                                Start Your <span style={{ color: '#4EB985' }}>iOS Project</span> Today
                            </h3>
                            <form action="#">
                                <div className="mb-20">
                                    <input type="text" placeholder="Full Name" style={inputStyle} />
                                </div>
                                <div className="mb-20">
                                    <input type="email" placeholder="Email Address" style={inputStyle} />
                                </div>
                                <div className="mb-20">
                                    <input type="text" placeholder="Phone Number" style={inputStyle} />
                                </div>
                                <div className="mb-25">
                                    <textarea placeholder="Describe your iOS app requirements" style={{ ...inputStyle, height: '100px', resize: 'none' }}></textarea>
                                </div>
                                <button className="w-100 submit-btn" style={{
                                    background: 'linear-gradient(to right, #4EB985, #036278)',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    fontWeight: '700',
                                    fontSize: '17px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 20px rgba(78, 185, 133, 0.2)'
                                }}>
                                    SEND MESSAGE <i className="fa-solid fa-paper-plane ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ios-hero-area .tv-btn:hover { transform: translateY(-5px); opacity: 0.9; }
                .submit-btn:hover { transform: scale(1.02); opacity: 0.96; }
                @media (max-width: 991px) {
                    .ios-hero-area { pt: 100px; text-align: center; }
                    .ios-hero-content { margin-bottom: 50px; }
                    .ios-hero-content h1 { font-size: 36px !important; }
                    .ios-hero-content ul { justify-items: center; }
                }
            `}} />
        </section>
    );
};

export default IosHero;

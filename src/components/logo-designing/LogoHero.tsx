
const LogoHero = () => {
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
        <section className="logo-hero-area pt-150 pb-120 p-relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f0f7f4 0%, #ffffff 100%)',
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center'
            }}>
            {/* Soft decorative blur circles */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: 'rgba(78, 185, 133, 0.05)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container p-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-7">
                        <div className="logo-content" style={{ paddingRight: '40px' }}>
                            <span className="wow fadeInUp" data-wow-delay=".2s" style={{
                                color: '#4EB985',
                                fontWeight: '700',
                                marginBottom: '15px',
                                display: 'inline-block',
                                fontSize: '16px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Creative Identity Design
                            </span>
                            <h1 className="wow fadeInUp" data-wow-delay=".4s" style={{
                                color: '#036278',
                                fontSize: '56px',
                                fontWeight: '800',
                                lineHeight: '1.2',
                                marginBottom: '25px'
                            }}>
                                Professional Logo <br /> Designing Services
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".6s" style={{
                                color: '#585b6f',
                                fontSize: '17px',
                                lineHeight: '1.7',
                                marginBottom: '40px'
                            }}>
                                A logo is the face of your brand. We design unique, memorable, and impactful logos
                                that capture your brand's essence and leave a lasting impression on your audience.
                                Our expert designers bring your vision to life with precision and creativity.
                            </p>

                            <div className="wow fadeInUp" data-wow-delay=".8s">
                                <a href="#our-creative-work" className="tv-btn" style={{
                                    display: 'inline-block',
                                    textDecoration: 'none',
                                    background: 'linear-gradient(to right, #4EB985, #036278)',
                                    color: '#fff',
                                    padding: '16px 40px',
                                    borderRadius: '50px',
                                    border: 'none',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    boxShadow: '0 10px 25px rgba(78, 185, 133, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    VIEW OUR PORTFOLIO <i className="fa-solid fa-palette ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="col-lg-5">
                        <div className="logo-form wow fadeInRight" data-wow-delay=".6s" style={{
                            background: '#fff',
                            padding: '40px',
                            borderRadius: '30px',
                            boxShadow: '0 30px 60px rgba(3, 98, 120, 0.12)',
                            border: '1px solid rgba(78, 185, 133, 0.1)'
                        }}>
                            <h3 className="mb-30" style={{
                                color: '#036278',
                                fontWeight: '800',
                                fontSize: '26px',
                                lineHeight: '1.3'
                            }}>
                                Get a Customized <br /> <span style={{ color: '#4EB985' }}>Logo Quote</span>
                            </h3>
                            <form action="#">
                                <div className="mb-20">
                                    <input type="text" placeholder="Enter your name" style={inputStyle} />
                                </div>
                                <div className="row mb-20">
                                    <div className="col-md-6 mb-20 mb-md-0">
                                        <input type="text" placeholder="Mobile number" style={inputStyle} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder="Email address" style={inputStyle} />
                                    </div>
                                </div>
                                <div className="mb-25">
                                    <textarea placeholder="Tell us about your brand vision" style={{ ...inputStyle, height: '110px', resize: 'none' }}></textarea>
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
                                    Submit Request <i className="fa-solid fa-paper-plane ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .tv-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(78, 185, 133, 0.4);
                }
                .logo-form .submit-btn:hover {
                    transform: scale(1.02);
                    opacity: 0.9;
                }
                @media (max-width: 991px) {
                    .logo-content { padding-right: 0; margin-bottom: 50px; text-align: center; }
                    .logo-content h1 { font-size: 38px !important; }
                }
            `}} />
        </section>
    );
};

export default LogoHero;

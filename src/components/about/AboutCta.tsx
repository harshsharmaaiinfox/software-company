import { Link } from 'react-router-dom';

const AboutCta = () => {
    return (
        <section className="about-cta-area pt-120 pb-120 p-relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)',
                textAlign: 'center'
            }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '5%',
                transform: 'translateY(-50%)',
                opacity: 0.05,
                zIndex: 0
            }}>
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="150" r="149" stroke="#4EB985" strokeWidth="2" strokeDasharray="10 10" />
                    <circle cx="150" cy="150" r="110" stroke="#4EB985" strokeWidth="2" strokeDasharray="5 5" />
                    <circle cx="150" cy="150" r="70" stroke="#4EB985" strokeWidth="2" />
                </svg>
            </div>

            <div className="container p-relative" style={{ zIndex: 1 }}>
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="cta-content">
                            <span className="mb-20 d-inline-block" style={{
                                color: '#4EB985',
                                fontWeight: '700',
                                fontSize: '14px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}>
                                Let's Work Together
                            </span>
                            <h2 className="mb-40" style={{
                                color: '#036278',
                                fontSize: '48px',
                                fontWeight: '800',
                                lineHeight: '1.2'
                            }}>
                                Let's Discuss Your Requirements – We're All Ears!
                            </h2>

                            <div className="mb-40">
                                <Link to="/contact" className="tv-btn" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '15px 40px',
                                    borderRadius: '50px',
                                    border: '2px solid #4EB985',
                                    color: '#4EB985',
                                    background: 'transparent',
                                    fontWeight: '700',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Estimate Project <i className="fa-solid fa-arrow-right ms-2"></i>
                                </Link>
                            </div>

                            <div className="cta-phone d-flex align-items-center justify-content-center">
                                <span style={{ color: 'rgba(3, 98, 120, 0.6)', fontSize: '16px' }}>Or call us now</span>
                                <a href="tel:+918368068740" style={{
                                    color: '#036278',
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    marginLeft: '15px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <i className="fa-solid fa-phone-volume me-2" style={{ color: '#4EB985' }}></i>
                                    (+91) 836-8068-740
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .tv-btn:hover {
                    background: #4EB985 !important;
                    color: #fff !important;
                    box-shadow: 0 10px 20px rgba(78, 185, 133, 0.2);
                }
                @media (max-width: 767px) {
                    .cta-content h2 { font-size: 32px !important; }
                    .cta-phone { flex-direction: column; }
                    .cta-phone a { margin-left: 0 !important; margin-top: 10px; }
                }
            `}} />
        </section>
    );
};

export default AboutCta;

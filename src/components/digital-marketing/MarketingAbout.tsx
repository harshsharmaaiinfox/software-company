import { Link } from 'react-router-dom';

const MarketingAbout = () => {
    const benefitList = [
        'Drive More Traffic & Conversions',
        'Improve Brand Visibility',
        'Higher ROI on Ad Spend',
        'Data-Driven Decision Making',
        'Targeted Customer Engagement',
        'Better Search Rankings (SEO)'
    ];

    return (
        <section className="marketing-about pt-150 pb-120 overflow-hidden" style={{ background: '#fff' }}>
            <div className="container">
                {/* Section 1: About the Mission */}
                <div className="row align-items-center mb-120">
                    <div className="col-lg-6">
                        <div className="about-visual wow itfadeLeft" data-wow-delay=".3s">
                            <div style={{
                                width: '100%',
                                height: '420px',
                                background: 'linear-gradient(135deg, #036278 0%, #4EB985 100%)',
                                borderRadius: '40px',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 30px 60px rgba(3, 98, 120, 0.15)'
                            }}>
                                <div style={{ fontSize: '180px', color: '#fff', opacity: 0.1 }}>
                                    <i className="fa-solid fa-lightbulb"></i>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: '40px',
                                    right: '-30px',
                                    background: '#fff',
                                    padding: '25px',
                                    borderRadius: '25px',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ color: '#4EB985', fontSize: '32px', fontWeight: '900', marginBottom: '5px' }}>99%</div>
                                    <div style={{ color: '#036278', fontSize: '13px', fontWeight: '800' }}>SUCCESS RATE</div>
                                </div>
                                <div style={{ color: '#fff', textAlign: 'center', zIndex: 1 }}>
                                    <h3 style={{ fontSize: '38px', fontWeight: '900' }}>CREATIVE</h3>
                                    <p style={{ letterSpacing: '8px', opacity: 0.8, fontSize: '14px' }}>SOLUTIONS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content pl-60 wow itfadeRight" data-wow-delay=".5s">
                            <span style={{ color: '#4EB985', fontWeight: '800', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '3px' }}>
                                OUR CORE MISSION
                            </span>
                            <h2 style={{ color: '#036278', fontSize: '48px', fontWeight: '900', lineHeight: '1.2', margin: '15px 0 30px' }}>
                                We Create Stunning <span style={{ color: '#4EB985' }}>Digital Journeys</span>
                            </h2>
                            <p style={{ color: '#585b6f', fontSize: '17px', lineHeight: '1.8', marginBottom: '40px' }}>
                                We believe in the power of digital synergy. By blending data, design, and technology, we help businesses like yours scale to new heights. Our mission is to make your brand the first choice in your industry.
                            </p>
                            <Link to="/about" className="tv-btn-teal" style={{
                                background: '#036278',
                                color: '#fff',
                                padding: '18px 45px',
                                borderRadius: '50px',
                                fontWeight: '800',
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 10px 25px rgba(3, 98, 120, 0.3)',
                                transition: 'all 0.3s'
                            }}>
                                LEARN MORE <i className="fa-solid fa-arrow-right-long ms-3"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 2: Benefits & Outcomes */}
                <div className="row align-items-center">
                    <div className="col-lg-6 order-last order-lg-first">
                        <div className="benefits-content pr-60 wow itfadeLeft" data-wow-delay=".3s">
                            <span style={{ color: '#4EB985', fontWeight: '800', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '3px' }}>
                                WHY CHOOSE US
                            </span>
                            <h2 style={{ color: '#036278', fontSize: '48px', fontWeight: '900', lineHeight: '1.2', margin: '15px 0 30px' }}>
                                The Benefits of Digital <br /> <span style={{ color: '#4EB985' }}>Marketing Services</span>
                            </h2>
                            <div className="row g-4">
                                {benefitList.map((benefit, idx) => (
                                    <div key={idx} className="col-md-6 d-flex align-items-center gap-3">
                                        <div style={{
                                            width: '28px',
                                            height: '28px',
                                            minWidth: '28px',
                                            borderRadius: '50%',
                                            background: '#4EB985',
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px'
                                        }}>
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                        <span style={{ color: '#036278', fontWeight: '700', fontSize: '16px' }}>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-50">
                                <Link to="/contact" style={{ color: '#4EB985', fontWeight: '800', textDecoration: 'none', borderBottom: '2px solid #036278', paddingBottom: '5px' }}>
                                    GET STARTED TODAY <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="benefits-visual wow itfadeRight" data-wow-delay=".5s">
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: '#f8fbff',
                                borderRadius: '40px',
                                border: '1px solid #e1e5eb',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                <div style={{ fontSize: '200px', color: '#036278', opacity: 0.05 }}>
                                    <i className="fa-solid fa-bullseye"></i>
                                </div>
                                <div className="floating-stat" style={{
                                    position: 'absolute',
                                    bottom: '40px',
                                    left: '40px',
                                    background: '#fff',
                                    padding: '20px',
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}>
                                    <div style={{ width: '40px', height: '40px', background: '#036278', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                        <i className="fa-solid fa-rocket"></i>
                                    </div>
                                    <div style={{ color: '#585b6f', fontWeight: '700', fontSize: '14px' }}>Fast-Growing Brands</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .tv-btn-teal:hover {
                    background: #4EB985 !important;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(3, 98, 120, 0.2) !important;
                }
            `}} />
        </section>
    );
};

export default MarketingAbout;

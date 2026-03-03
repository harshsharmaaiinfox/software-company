import { Link } from 'react-router-dom';

const MarketingCTA = () => {
    return (
        <section className="marketing-cta pb-120 pt-120 overflow-hidden" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center wow itfadeUp" data-wow-delay=".3s">
                        <h2 style={{ color: '#036278', fontSize: '56px', fontWeight: '900', lineHeight: '1.1', marginBottom: '30px' }}>
                            Let's Discuss Your Requirements <br /> <span style={{ color: '#4eb985' }}>- We're All Ears!</span>
                        </h2>

                        <div className="cta-action d-flex flex-column align-items-center mb-50">
                            <Link to="/contact" className="tv-cta-btn mb-15" style={{
                                background: '#036278',
                                color: '#fff',
                                padding: '20px 60px',
                                borderRadius: '50px',
                                fontWeight: '700',
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 15px 35px rgba(3, 98, 120, 0.2)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}>
                                REQUEST A QUOTE <i className="fa-solid fa-arrow-right-long ms-3"></i>
                            </Link>
                            <p className="mt-15" style={{ color: '#585b6f', fontSize: '18px', fontWeight: '800' }}>
                                Or call us: <span style={{ color: '#4EB985' }}>(+91) 836 8068 740</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative Pattern Background */}
                <div className="cta-bg-pattern text-center mt-60 opacity-10 wow zoomIn" data-wow-delay=".6s" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ fontSize: '180px', color: '#036278' }}>
                        <i className="fa-solid fa-ear-listen"></i>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .tv-cta-btn:hover { background: #4EB985 !important; transform: translateY(-8px) scale(1.05); }
                @media (max-width: 991px) {
                    .marketing-cta h2 { font-size: 38px; }
                }
            `}} />
        </section>
    );
};

export default MarketingCTA;

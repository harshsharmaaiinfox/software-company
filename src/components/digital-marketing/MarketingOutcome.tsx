import { Link } from 'react-router-dom';

const MarketingOutcome = () => {
    return (
        <section className="marketing-outcome-area pb-120 pt-100 p-relative overflow-hidden"
            style={{
                background: '#fff',
                backgroundImage: 'radial-gradient(#e1e5eb 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Visual Left */}
                    <div className="col-lg-6">
                        <div className="outcome-visual wow fadeInLeft" data-wow-delay=".3s"
                            style={{
                                padding: '30px',
                                textAlign: 'center'
                            }}>
                            <img src="/assets/img/shopify-marketing.png" alt="Marketing Expertise"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    animation: 'float 6s ease-in-out infinite'
                                }} />
                        </div>
                    </div>

                    {/* Content Right */}
                    <div className="col-lg-6">
                        <div className="outcome-content pl-50 wow fadeInRight" data-wow-delay=".5s">
                            <span style={{
                                color: '#4EB985',
                                fontWeight: '700',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                display: 'block',
                                marginBottom: '20px'
                            }}>
                                UNLOCK GROWTH WITH OUR MARKETING EXPERTISE
                            </span>
                            <h2 style={{
                                color: '#036278',
                                fontSize: '42px',
                                fontWeight: '800',
                                lineHeight: '1.2',
                                marginBottom: '25px'
                            }}>
                                Elevate Your Business: <span style={{ color: '#4EB985' }}>Boost Leads, Traffic, and Sales</span> with Our Outstanding Digital Marketing Strategies
                            </h2>
                            <p style={{
                                color: '#585b6f',
                                fontSize: '17px',
                                lineHeight: '1.8',
                                marginBottom: '40px'
                            }}>
                                Digital marketing fuels business growth by expanding online visibility, precisely targeting desired audiences, and providing cost-effective advertising solutions. Real-time analytics enable quick adjustments for optimal campaign performance, while engaging content and personalized strategies build lasting customer relationships. Embracing digital marketing is essential for businesses to stay competitive, connect with a global audience, and navigate the evolving digital landscape successfully.
                            </p>
                            <Link to="/contact" className="tv-link-btn" style={{
                                background: 'linear-gradient(to right, #4EB985, #036278)',
                                color: '#fff',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                fontWeight: '700',
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 10px 20px rgba(3, 98, 120, 0.2)',
                                transition: 'all 0.3s'
                            }}>
                                Learn More <i className="fa-solid fa-chevron-right ms-2" style={{ fontSize: '12px' }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .tv-link-btn:hover {
                    box-shadow: 0 15px 30px rgba(3, 98, 120, 0.4) !important;
                    transform: translateY(-5px);
                    opacity: 0.9;
                }
                @media (max-width: 991px) {
                    .outcome-content { pl-0; mt-50; text-align: center; }
                    .outcome-content h2 { font-size: 32px; }
                }
            `}} />
        </section>
    );
};

export default MarketingOutcome;

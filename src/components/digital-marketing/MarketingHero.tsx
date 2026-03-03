import { Link } from 'react-router-dom';

const MarketingHero = () => {
    const heroCards = [
        {
            title: 'Social Media Engagement',
            color: '#ff7442',
            icon: 'fa-brands fa-instagram',
            description: 'Building communities and brand loyalty.'
        },
        {
            title: 'Email Marketing',
            color: '#12a3e0',
            icon: 'fa-solid fa-envelope-open-text',
            description: 'Direct communication that drives ROI.'
        },
        {
            title: 'Paid Advertising',
            color: '#4EB985',
            icon: 'fa-solid fa-bullseye',
            description: 'Targeted reach for instant results.'
        },
    ];

    return (
        <section className="marketing-hero pt-170 pb-120 p-relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f0f7f4 0%, #ffffff 100%)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}>
            {/* Background Decorations */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(78, 185, 133, 0.05) 0%, transparent 50%)',
                zIndex: 0
            }}></div>

            <div className="container p-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-6">
                        <div className="hero-content-left pr-50">
                            <span className="wow fadeInUp" data-wow-delay=".2s" style={{
                                color: '#036278',
                                fontWeight: '700',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                display: 'block',
                                marginBottom: '20px'
                            }}>
                                UNLEASHING DIGITAL SUCCESS
                            </span>
                            <h1 className="wow fadeInUp" data-wow-delay=".4s" style={{
                                color: '#036278',
                                fontSize: '72px',
                                fontWeight: '900',
                                lineHeight: '1',
                                marginBottom: '25px',
                                textTransform: 'uppercase'
                            }}>
                                <span style={{ color: '#4EB985' }}>Digital</span> <br /> Marketing
                            </h1>
                            <div className="wow fadeInUp" data-wow-delay=".5s" style={{
                                color: '#585b6f',
                                fontSize: '14px',
                                fontWeight: '800',
                                letterSpacing: '1px',
                                marginBottom: '30px',
                                background: 'rgba(78, 185, 133, 0.1)',
                                display: 'inline-block',
                                padding: '8px 20px',
                                borderRadius: '5px',
                                borderLeft: '4px solid #4EB985'
                            }}>
                                SEO | SMO | PPC | DESIGNING | CONTENT WRITING
                            </div>
                            <p className="wow fadeInUp" data-wow-delay=".6s" style={{
                                color: '#585b6f',
                                fontSize: '18px',
                                lineHeight: '1.7',
                                marginBottom: '45px',
                                maxWidth: '500px'
                            }}>
                                Strategically craft your brand's presence in the digital landscape. We combine data-driven insights with creative excellence to drive traffic, build communities, and convert leads into loyal customers.
                            </p>
                            <div className="wow fadeInUp" data-wow-delay=".8s">
                                <Link to="/contact" className="tv-btn" style={{
                                    background: '#036278',
                                    color: '#fff',
                                    padding: '20px 50px',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    boxShadow: '0 15px 30px rgba(3, 98, 120, 0.15)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    CONTACT US
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Image/Cards */}
                    <div className="col-lg-6 mt-60 mt-lg-0">
                        <div className="hero-cards-stack d-flex justify-content-center justify-content-lg-end gap-3 flex-wrap">
                            {heroCards.map((card, idx) => (
                                <div key={idx} className="marketing-hero-card wow fadeInUp" data-wow-delay={`${0.4 + (idx * 0.2)}s`}
                                    style={{
                                        width: '180px',
                                        height: '280px',
                                        background: card.color,
                                        borderRadius: '25px',
                                        padding: '25px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                                        marginTop: idx === 1 ? '40px' : '0',
                                        position: 'relative',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        color: '#fff'
                                    }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'rgba(255,255,255,0.2)',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '24px'
                                    }}>
                                        <i className={card.icon}></i>
                                    </div>
                                    <div className="card-info">
                                        <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px', lineHeight: '1.2' }}>{card.title}</h4>
                                        <p style={{ fontSize: '11px', margin: 0, opacity: 0.8 }}>{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .marketing-hero-card:hover {
                    transform: translateY(-15px) scale(1.05);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.2);
                }
                .tv-btn:hover {
                    background: #4EB985 !important;
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(78, 185, 133, 0.3) !important;
                }
                @media (max-width: 991px) {
                    .hero-content-left { pr-0; text-align: center; }
                    .hero-content-left h1 { font-size: 50px; }
                    .hero-cards-stack { flex-wrap: wrap; margin-top: 60px; }
                    .marketing-hero-card { width: 140px; height: 220px; margin-top: 0 !important; }
                }
            `}} />
        </section>
    );
};

export default MarketingHero;

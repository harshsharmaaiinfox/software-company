
const LogoPortfolio = () => {
    const portfolioLogos = [
        '/assets/img/logo2.png',
        '/assets/img/logo3.jpg',
        '/assets/img/logo4.webp',
        '/assets/img/logo5.webp',
        '/assets/img/logo6.jpg',
        '/assets/img/logo7.jpg',
        '/assets/img/logo8.jpg',
        '/assets/img/logo9.png',
        '/assets/img/logo10.jpg',
        '/assets/img/logo11.png',
        '/assets/img/logo12.png',
        '/assets/img/logo1.png'
    ];

    return (
        <section id="our-creative-work" className="logo-portfolio-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            OUR CREATIVE WORK
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Logo Designing Masterpieces
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            We have worked with various industries and startups to create stunning visual identities.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {portfolioLogos.map((img, idx) => (
                        <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo-portfolio-item wow fadeInUp" data-wow-delay={`${idx * 0.1}s`} style={{
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid #eee',
                                background: '#fff',
                                padding: '20px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}>
                                <img src={img} alt={`Logo ${idx}`} style={{ width: '100%', height: '150px', objectFit: 'contain', transition: 'all 0.3s' }} />
                                <div className="mt-15" style={{ fontWeight: '600', color: '#036278', fontSize: '14px' }}>Client Project {idx + 1}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-60 justify-content-center">
                    <div className="col-auto">
                        <button className="tv-btn" style={{
                            background: 'transparent',
                            color: '#036278',
                            border: '2px solid #036278',
                            padding: '15px 40px',
                            borderRadius: '50px',
                            fontWeight: '700',
                            transition: 'all 0.3s'
                        }}>
                            View All Designs <i className="fa-solid fa-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .logo-portfolio-item:hover {
                    border-color: #4EB985;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(78, 185, 133, 0.15);
                }
                .logo-portfolio-item:hover img {
                    transform: scale(1.05);
                }
            `}} />
        </section>
    );
};

export default LogoPortfolio;

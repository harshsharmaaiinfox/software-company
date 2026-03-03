
const AndroidWork = () => {
    const portfolioLogos = [
        '/assets/img/logo2.png',
        '/assets/img/logo3.jpg',
        '/assets/img/logo4.webp',
        '/assets/img/logo5.webp',
        '/assets/img/logo6.jpg',
        '/assets/img/logo7.jpg'
    ];

    return (
        <section className="android-work-area pt-120 pb-120" style={{ background: '#f9fbff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            PORTFOLIO
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Our Latest Creative Work
                        </h2>
                    </div>
                </div>

                <div className="row g-4">
                    {portfolioLogos.map((img, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div className="portfolio-card wow fadeInUp" data-wow-delay={`${idx * 0.1}s`} style={{
                                background: '#fff',
                                padding: '15px',
                                borderRadius: '25px',
                                border: '1px solid #eee',
                                transition: 'all 0.3s ease',
                                textAlign: 'center',
                                cursor: 'pointer',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    background: '#f0f4f8',
                                    borderRadius: '20px',
                                    padding: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                    transition: 'all 0.3s',
                                    minHeight: '280px'
                                }}>
                                    <img src={img} alt={`Portfolio ${idx}`} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} />
                                </div>
                                <h4 style={{ color: '#036278', fontSize: '18px', fontWeight: '800', marginBottom: '5px' }}>Mobile Project {idx + 1}</h4>
                                <p style={{ color: '#585b6f', fontSize: '14px', margin: 0 }}>Category {idx + 1}</p>
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
                            VIEW ALL CASE STUDIES <i className="fa-solid fa-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .portfolio-card:hover { transform: translateY(-5px); border-color: #4EB985; box-shadow: 0 20px 40px rgba(3, 98, 120, 0.1); }
                .portfolio-card:hover div { background: #fff; transform: scale(1.02); }
                .portfolio-card:hover h4 { color: #4EB985; }
            `}} />
        </section>
    );
};

export default AndroidWork;

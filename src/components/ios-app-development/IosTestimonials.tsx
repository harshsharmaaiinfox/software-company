
const IosTestimonials = () => {
    const rankings = [
        { id: 1, title: "#1 Ranked", desc: "Top Mobile Agency", icon: "fa-solid fa-trophy" },
        { id: 2, title: "#1 Ranked", desc: "Best UI/UX Design", icon: "fa-solid fa-medal" },
        { id: 3, title: "#1 Ranked", desc: "App Development", icon: "fa-solid fa-award" },
        { id: 4, title: "#1 Ranked", desc: "Customer Support", icon: "fa-solid fa-star" }
    ];

    return (
        <section className="ios-testimonials-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="testimonial-content-premium pr-50 wow fadeInLeft" data-wow-delay=".4s">
                            <span style={{
                                color: '#4EB985',
                                background: 'rgba(78, 185, 133, 0.1)',
                                padding: '4px 15px',
                                borderRadius: '4px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                display: 'inline-block',
                                marginBottom: '20px',
                                fontSize: '13px'
                            }}>
                                OUR HAPPY CLIENTS
                            </span>
                            <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '30px', lineHeight: '1.2' }}>
                                Client Success Stories in <br /> <span style={{ color: '#4EB985' }}>iOS Development</span>
                            </h2>

                            <div className="quote-box mb-40" style={{ position: 'relative', paddingLeft: '30px' }}>
                                <i className="fa-solid fa-quote-left" style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '0',
                                    fontSize: '50px',
                                    color: 'rgba(78, 185, 133, 0.1)',
                                    zIndex: 0
                                }}></i>
                                <p style={{
                                    color: '#585b6f',
                                    fontSize: '19px',
                                    lineHeight: '1.8',
                                    fontStyle: 'italic',
                                    marginBottom: '25px',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    "The Mangal Tech team delivered an iOS app that exceeded our expectations.
                                    The app is smooth, secure, and has already helped us scale our user base significantly.
                                    Highly professional team!"
                                </p>
                            </div>

                            <div className="d-flex align-items-center gap-15">
                                <div style={{
                                    width: '65px',
                                    height: '65px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '3px solid #4EB985',
                                    boxShadow: '0 5px 15px rgba(78, 185, 133, 0.2)'
                                }}>
                                    <img src="/assets/img/team/team-1-2.png" alt="Client Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <h4 style={{ color: '#036278', fontSize: '20px', fontWeight: '800', marginBottom: '2px' }}>Jane Doe</h4>
                                    <p style={{ color: '#585b6f', fontSize: '14px', margin: 0, fontWeight: '600' }}>Product Manager, TechFlow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ranking-grid-container wow fadeInRight" data-wow-delay=".6s" style={{
                            padding: '50px',
                            background: 'linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)',
                            borderRadius: '40px',
                            border: '1px solid rgba(3, 98, 120, 0.05)',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(3, 98, 120, 0.05)'
                        }}>
                            <div className="row g-4 p-relative" style={{ zIndex: 1 }}>
                                {rankings.map((rank, idx) => (
                                    <div key={idx} className="col-sm-6">
                                        <div className="ranking-premium-card" style={{
                                            padding: '35px 25px',
                                            borderRadius: '25px',
                                            background: '#fff',
                                            transition: 'all 0.4s ease',
                                            border: '1px solid rgba(225, 229, 235, 0.6)',
                                            textAlign: 'center',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.02)'
                                        }}>
                                            <div className="rank-icon" style={{
                                                width: '60px',
                                                height: '60px',
                                                background: 'rgba(78, 185, 133, 0.1)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '24px',
                                                color: '#4EB985',
                                                margin: '0 auto 20px',
                                                transition: 'all 0.4s'
                                            }}>
                                                <i className={rank.icon}></i>
                                            </div>
                                            <h4 style={{ color: '#036278', fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>{rank.title}</h4>
                                            <p style={{ color: '#585b6f', fontSize: '13px', margin: 0, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{rank.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ranking-premium-card:hover { transform: translateY(-10px); border-color: #4EB985; box-shadow: 0 20px 40px rgba(3, 98, 120, 0.08); cursor: pointer; }
                .ranking-premium-card:hover .rank-icon { background: #036278; color: #fff; transform: scale(1.1); }
                @media (max-width: 991px) {
                    .testimonial-content-premium { pr: 0; margin-bottom: 50px; text-align: center; }
                    .quote-box { padding-left: 0; }
                    .quote-box i { left: 50%; transform: translateX(-50%); }
                    .testimonial-content-premium .d-flex { justify-content: center; }
                    .ranking-grid-container { padding: 30px; }
                }
            `}} />
        </section>
    );
};

export default IosTestimonials;

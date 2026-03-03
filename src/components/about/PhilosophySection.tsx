
const PhilosophySection = () => {
    const philosophyData = [
        {
            id: 1,
            tag: "LEADERSHIP",
            title: "Visionary Leadership",
            desc: "Our journey is marked by a relentless pursuit of excellence, and we are more than just a company; we are your partner in progress. With a passion for innovation, an unwavering commitment to quality, and an unquenchable thirst for pushing the boundaries, we are here to take your vision and turn it into reality. Join us at MANGALTECH, where possibilities are limitless, and success is inevitable.",
            img: "/assets/img/about/leadership.png",
        },
        {
            id: 2,
            tag: "STRENGTH",
            title: "Team Collaboration",
            desc: "When diverse minds come together, magic happens. Collaborative teams bring together different perspectives, experiences, and skill sets. This diversity sparks creativity, leading to innovative solutions and fresh ideas that may not have emerged in isolation. With clear communication and a shared understanding of objectives, tasks are completed more efficiently. This efficiency not only saves time but also reduces duplication of efforts and errors.",
            img: "/assets/img/about/collaboration.png",
        },
        {
            id: 3,
            tag: "QUALITY",
            title: "Transparency & Integrity",
            desc: "Transparency and integrity form the bedrock of trust in any endeavor. Transparency is the beacon of openness, providing clarity and honesty in actions and decisions. Integrity is the unwavering commitment to ethical principles. Together they build trust, foster accountability, and fortify the foundation upon which lasting relationships and success are built. We believe that open communication is the key to a successful partnership.",
            img: "/assets/img/about/transparency.png",
        },
    ];

    return (
        <section className="philosophy-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="tv-section-title-box text-center mb-80">
                            <span className="tv-section-subtitle mb-15" style={{ color: '#4EB985', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
                                Our Philosophy
                            </span>
                            <h2 className="tv-section-title" style={{ color: '#036278', fontSize: '48px', fontWeight: '700' }}>
                                Our Business Philosophy
                            </h2>
                        </div>
                    </div>
                </div>

                {philosophyData.map((item, index) => (
                    <div key={item.id} className={`row align-items-center mb-100 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="col-lg-6">
                            <div className={`philosophy-thumb p-relative wow ${index % 2 !== 0 ? 'phi-img-anim-right' : 'phi-img-anim-left'}`}
                                style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                                    transition: 'transform 0.4s ease'
                                }}>
                                <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </div>
                        <div className={`col-lg-6 ${index % 2 !== 0 ? 'pe-lg-5' : 'ps-lg-5'}`}>
                            <div className="philosophy-content mt-30 mt-lg-0">
                                <span className="mb-10 d-inline-block" style={{ color: '#4EB985', fontWeight: '700', fontSize: '14px', letterSpacing: '1px' }}>
                                    {item.tag}
                                </span>
                                <h3 className="mb-20" style={{ color: '#036278', fontSize: '32px', fontWeight: '700' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#585b6f', fontSize: '17px', lineHeight: '1.8', margin: '0' }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .philosophy-thumb:hover {
                    transform: translateY(-10px);
                }
                .phi-img-anim-left {
                    animation: fadeInLeft 1.5s both;
                }
                .phi-img-anim-right {
                    animation: fadeInRight 1.5s both;
                }
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @media (max-width: 991px) {
                    .mb-100 { margin-bottom: 60px !important; }
                    .tv-section-title { fontSize: 36px !important; }
                }
            `}} />
        </section>
    );
};

export default PhilosophySection;

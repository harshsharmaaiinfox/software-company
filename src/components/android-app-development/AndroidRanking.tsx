
const AndroidRanking = () => {
    const items = [
        { title: "Top Web Development", date: "Year 2023", icon: "🏆" },
        { title: "Best Mobile Apps", date: "Year 2022", icon: "🥈" },
        { title: "Top Innovator", date: "Year 2023", icon: "💎" },
        { title: "Excellent Service", date: "Year 2024", icon: "🏅" }
    ];

    return (
        <section className="android-ranking-area pt-100 pb-100" style={{ background: '#f8f9fa' }}>
            <div className="container text-center">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            OUR EXPERTISE
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '38px', fontWeight: '800', marginBottom: '20px' }}>
                            Ranked as Top Web & App Development <br /> Companies
                        </h2>
                    </div>
                </div>

                <div className="row g-4 align-items-center">
                    {items.map((item, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6">
                            <div className="ranking-item wow fadeInUp" data-wow-delay={`${idx * 0.1}s`} style={{
                                padding: '30px',
                                borderRadius: '20px',
                                background: '#fff',
                                transition: 'all 0.3s',
                                border: '1px solid #eee'
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
                                <h4 style={{ color: '#036278', fontSize: '18px', fontWeight: '800', marginBottom: '5px' }}>{item.title}</h4>
                                <p style={{ color: '#585b6f', fontSize: '14px', margin: 0 }}>{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-60">
                    <div className="col-lg-12">
                        <div style={{ background: 'linear-gradient(to right, #4EB985, #036278)', borderRadius: '25px', display: 'inline-flex', padding: '15px 40px', color: '#fff', fontWeight: '700', fontSize: '20px' }}>
                            We Promise - We Deliver! Let's Connect
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ranking-item:hover { transform: translateY(-5px); border-color: #4EB985; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
            `}} />
        </section>
    );
};

export default AndroidRanking;

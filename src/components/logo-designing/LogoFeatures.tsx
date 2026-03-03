
const LogoFeatures = () => {
    const features = [
        {
            title: "Innovative Iconography",
            description: "We create unique symbols and icons that represent your brand logic and industry relevance.",
            icon: "🎨"
        },
        {
            title: "Color Psychology",
            description: "Strategic use of colors to evoke specific emotions and build subconscious brand trust.",
            icon: "🌈"
        },
        {
            title: "Typography Experts",
            description: "Custom font selection and lettering that ensures readability and premium brand feel.",
            icon: "✍️"
        },
        {
            title: "Scalable Graphics",
            description: "All logos are provided in high-quality vector formats that look sharp on business cards up to billboards.",
            icon: "📈"
        },
        {
            title: "Industry Specific",
            description: "Designs tailored specifically to your niche, whether it's Tech, Fashion, Real Estate, or Food.",
            icon: "🏗️"
        },
        {
            title: "Copyright Ownership",
            description: "Full legal ownership and copyrights transfer once the final design is delivered and approved.",
            icon: "⚖️"
        }
    ];


    return (
        <section className="logo-features-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            OUR EXPERTISE
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '25px' }}>
                            Crafting Symbols of Excellence
                        </h2>
                    </div>
                </div>

                <div className="row g-4">
                    {features.map((item, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div className="logo-feature-card wow fadeInUp" data-wow-delay={`${idx * 0.1}s`} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '20px',
                                border: '1px solid #e1e5eb',
                                transition: 'all 0.3s ease',
                                height: '100%'
                            }}>
                                <div style={{ fontSize: '42px', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ color: '#036278', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
                                <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .logo-feature-card:hover {
                    border-color: #4EB985;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(3, 98, 120, 0.08);
                }
            `}} />
        </section>
    );
};

export default LogoFeatures;


const LogoPricing = () => {
    const plans = [
        {
            title: "BASIC",
            price: "5,000",
            features: [
                "2 Custom Logo Designs",
                "High Resolution Files",
                "Source Files (Vector)",
                "Transparent PNG",
                "2 Revision Rounds",
                "48 Hours Delivery"
            ],
            btnText: "Choose Basic",
            isPopular: false
        },
        {
            title: "PREMIUM",
            price: "10,000",
            features: [
                "5 Professional Logo Designs",
                "Corporate Visual Identity",
                "Social Media Kit",
                "Stationery Designs (Business Card)",
                "Unlimited Revisions",
                "Priority Support",
                "Exclusive Copyrights"
            ],
            btnText: "Go Premium",
            isPopular: true
        },
        {
            title: "PRO",
            price: "20,000",
            features: [
                "8 Premium Concept Designs",
                "Full Brand Guidelines",
                "3D Mockups",
                "Trademark Assistance",
                "Animation Logo Intro",
                "Dedicated Brand Manager",
                "VIP 24/7 Support"
            ],
            btnText: "Go Pro",
            isPopular: false
        }
    ];

    return (
        <section className="logo-pricing-area pt-120 pb-120" style={{ background: '#f8faff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            PRICING
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Logo Design Packages
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            Choose the perfect package that fits your brand identity and business scale.
                        </p>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {plans.map((plan, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div className="pricing-card wow fadeInUp" data-wow-delay={`${idx * 0.2}s`} style={{
                                background: '#fff',
                                borderRadius: '25px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(3, 98, 120, 0.08)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'all 0.3s ease',
                                border: plan.isPopular ? '2px solid #4EB985' : '1px solid #eee',
                                transform: plan.isPopular ? 'scale(1.05)' : 'none',
                                zIndex: plan.isPopular ? 2 : 1
                            }}>
                                <div style={{
                                    padding: '40px 35px 30px',
                                    textAlign: 'center',
                                    background: plan.isPopular ? 'linear-gradient(to right, #4EB985, #036278)' : '#fff',
                                    color: plan.isPopular ? '#fff' : '#036278'
                                }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>{plan.title}</h3>
                                    <div style={{ fontSize: '42px', fontWeight: '800' }}>
                                        <span style={{ fontSize: '20px', verticalAlign: 'super' }}>₹</span> {plan.price}
                                    </div>
                                </div>

                                <div style={{ padding: '40px 35px', flexGrow: 1 }}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {plan.features.map((feature, fIdx) => (
                                            <li key={fIdx} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                marginBottom: '15px',
                                                color: '#585b6f'
                                            }}>
                                                <i className="fa-solid fa-circle-check" style={{ color: '#4EB985' }}></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ padding: '0 35px 40px' }}>
                                    <button className="tv-btn w-100" style={{
                                        background: plan.isPopular ? 'linear-gradient(to right, #4EB985, #036278)' : 'transparent',
                                        color: plan.isPopular ? '#fff' : '#036278',
                                        border: plan.isPopular ? 'none' : '2px solid #036278',
                                        padding: '15px',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        transition: 'all 0.3s'
                                    }}>
                                        {plan.btnText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .pricing-card:hover {
                    box-shadow: 0 30px 60px rgba(3, 98, 120, 0.15) !important;
                }
            `}} />
        </section>
    );
};

export default LogoPricing;

const PricingSection = () => {
    const plans = [
        {
            title: "Advanced",
            subtitle: "Great For Small Business",
            price: "19,999",
            originalPrice: "39,000",
            discount: "50%",
            features: [
                "Fully Responsive (Mobiles & Tabs)",
                "Testimonials",
                "Email Notifications",
                "Live Chat",
                "Master Search For Product",
                "Dynamic Sub Menu",
                "User Login & Registration",
                "Product Display Page",
                "Search Filters"
            ],
            btnText: "Order Now"
        },
        {
            title: "Advanced +",
            subtitle: "Great For Small Business",
            price: "29,999",
            originalPrice: "59,999",
            discount: "50%",
            features: [
                "COMPLETE CUSTOMIZED WEBSITE",
                "SEO FRIENDLY",
                "DOMAIN & SERVER HOSTING",
                "STAR REVIEWS",
                "AUTO GENERATE INVOICE (PDF)",
                "COUPON SYSTEM",
                "FULLY DYNAMIC MENU",
                "SUB ADMIN CREATION",
                "WISHLIST"
            ],
            btnText: "Order Now",
            isPopular: true
        },
        {
            title: "Marketing",
            subtitle: "Great For Small Business",
            price: "Call Now",
            forEnquiry: true,
            features: [
                "WEBSITE DESIGN OPTIMIZATION FREE",
                "Search Engine Optimization (SEO)",
                "First Page Keywords Ranking Guaranteed",
                "Social Media Optimization (SMO)",
                "GOOGLE ADS (PPC)",
                "BRANDING ADS",
                "Banner Ads"
            ],
            btnText: "Order Now"
        }
    ];

    return (
        <section className="pricing-area pt-120 pb-120" style={{ background: '#f8faff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            UNIQUE PACKAGES
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.4' }}>
                            Our company offers highly flexible pricing models,<br /> making it easy for the clients
                        </h2>
                        <p style={{ color: '#585b6f', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            TO MAKE THE MOST VALUE WITHIN THEIR BUDGET
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
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'all 0.3s ease',
                                border: plan.isPopular ? '2px solid rgba(78, 185, 133, 0.3)' : 'none'
                            }}>
                                {/* Header */}
                                <div style={{ padding: '40px 35px 20px', position: 'relative' }}>
                                    <h3 style={{ color: '#036278', fontSize: '26px', fontWeight: '800', marginBottom: '5px' }}>{plan.title}</h3>
                                    <p style={{ color: '#585b6f', fontSize: '14px', margin: 0 }}>{plan.subtitle}</p>
                                </div>

                                {/* Price Section */}
                                <div style={{
                                    padding: '20px 35px',
                                    background: plan.isPopular ? 'rgba(78, 185, 133, 0.05)' : '#f9fbff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    position: 'relative'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        {plan.price === 'Call Now' ? (
                                            <div style={{ color: '#036278', fontSize: '28px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <i className="fa-solid fa-phone-volume"></i> {plan.price}
                                            </div>
                                        ) : (
                                            <div style={{ color: '#036278', fontSize: '32px', fontWeight: '800' }}>
                                                <span style={{ fontSize: '20px', marginRight: '5px' }}>₹</span>
                                                {plan.price}
                                            </div>
                                        )}
                                    </div>

                                    {plan.discount && (
                                        <div style={{
                                            background: '#0a88ff',
                                            color: '#fff',
                                            padding: '8px 15px',
                                            borderRadius: '8px 0 0 8px',
                                            position: 'absolute',
                                            right: 0,
                                            textAlign: 'center',
                                            boxShadow: '-5px 5px 15px rgba(10, 136, 255, 0.3)'
                                        }}>
                                            <div style={{ fontWeight: '800', fontSize: '16px' }}>{plan.discount}</div>
                                            <div style={{ fontSize: '10px', textDecoration: 'line-through', opacity: 0.8 }}>₹{plan.originalPrice}</div>
                                        </div>
                                    )}

                                    {plan.forEnquiry && (
                                        <div style={{
                                            background: '#0a88ff',
                                            color: '#fff',
                                            padding: '8px 15px',
                                            borderRadius: '8px 0 0 8px',
                                            position: 'absolute',
                                            right: 0,
                                            textAlign: 'center',
                                        }}>
                                            <div style={{ fontWeight: '800', fontSize: '14px' }}>For</div>
                                            <div style={{ fontSize: '12px', fontWeight: '600' }}>Enquiry</div>
                                        </div>
                                    )}
                                </div>

                                {/* Features List - Scrollable Mockup */}
                                <div style={{
                                    padding: '30px 35px',
                                    flexGrow: 1,
                                    maxHeight: '350px',
                                    overflowY: 'auto',
                                    scrollbarWidth: 'thin'
                                }}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {plan.features.map((feature, fIdx) => (
                                            <li key={fIdx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '12px',
                                                marginBottom: '15px',
                                                color: '#585b6f',
                                                fontSize: '14px',
                                                lineHeight: '1.4'
                                            }}>
                                                <i className="fa-solid fa-check" style={{ color: '#4EB985', marginTop: '3px' }}></i>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Actions */}
                                <div style={{ padding: '0 35px 40px', textAlign: 'center' }}>
                                    <button className="tv-btn w-100 mb-20" style={{
                                        background: plan.isPopular ? 'linear-gradient(to right, #ff7c5b, #ff5e3a)' : 'linear-gradient(to right, #5e61e7, #484bd8)',
                                        color: '#fff',
                                        padding: '14px',
                                        borderRadius: '12px',
                                        border: 'none',
                                        fontWeight: '700',
                                        fontSize: '16px',
                                        boxShadow: plan.isPopular ? '0 10px 20px rgba(255, 124, 91, 0.2)' : '0 10px 20px rgba(94, 97, 231, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {plan.btnText}
                                    </button>
                                    <div style={{ borderTop: '1px solid #eee', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#888' }}>
                                        <span>Call Us: +91 836-8068-740</span>
                                        <span>Need Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .pricing-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(3, 98, 120, 0.15) !important;
                }
                .pricing-card ul::-webkit-scrollbar {
                    width: 4px;
                }
                .pricing-card ul::-webkit-scrollbar-thumb {
                    background: #eee;
                    border-radius: 10px;
                }
                .tv-btn:hover {
                    opacity: 0.9;
                    transform: scale(1.02);
                }
            `}} />
        </section>
    );
};

export default PricingSection;

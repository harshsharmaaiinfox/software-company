

const ShopifySuit = () => {
    const services = [
        { title: 'Store Setup & Customization', description: 'Professional installation and configuration of your Shopify store to reflect your brand identity.', icon: 'fa-solid fa-store' },
        { title: 'Custom Shopify Theme', description: 'High-end custom theme development to provide a unique and engaging experience for your customers.', icon: 'fa-solid fa-palette' },
        { title: 'Shopify App Development', description: 'Custom apps built specifically for your store to add unique features and functionalities.', icon: 'fa-solid fa-puzzle-piece' },
        { title: 'Payment & Shipping Integration', description: 'Seamless integration with popular payment gateways and shipping providers for smooth transactions.', icon: 'fa-solid fa-wallet' },
        { title: 'Shopify SEO Services', description: 'Optimizing your store for search engines to increase organic traffic and visibility.', icon: 'fa-solid fa-magnifying-glass' },
        { title: '24/7 Support & Maintenance', description: 'Regular maintenance and support services to ensure your store stays up-to-date and secure.', icon: 'fa-solid fa-gears' },
    ];

    return (
        <section className="shopify-suit-area pt-120 pb-120 overflow-hidden" style={{ background: '#f8fbff', position: 'relative' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                        <div className="section-title text-center wow itfadeUp" data-wow-delay=".4s">
                            <span style={{ color: '#4eb985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                                OUR SHOPIFY EXPERTISE
                            </span>
                            <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                                Complete <span style={{ color: '#4eb985' }}>E-commerce Solutions</span> for <br /> Growing Brands
                            </h2>
                            <p style={{ color: '#585b6f', fontSize: '16px' }}>
                                We provide a comprehensive range of Shopify development services to help you scale your online business and achieve your goals.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {services.map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="shopify-suit-card wow itfadeUp" data-wow-delay={`${i * 0.1}s`} style={{ background: '#fff', padding: '40px', borderRadius: '30px', border: '1px solid #e1e5eb', height: '100%', transition: 'all 0.4s ease', position: 'relative' }}>
                                <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'rgba(78, 185, 133, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4eb985', fontSize: '28px', marginBottom: '30px', transition: 'all 0.4s' }} className="icon-box">
                                    <i className={item.icon} style={{ color: 'inherit' }}></i>
                                </div>
                                <h3 style={{ color: '#036278', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{item.title}</h3>
                                <p style={{ color: '#585b6f', fontSize: '15px' }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .shopify-suit-card:hover { transform: translateY(-10px); border-color: #4eb985; box-shadow: 0 20px 40px rgba(3, 98, 120, 0.08); }
                .shopify-suit-card:hover div { background: #4eb985; color: #fff; transform: scale(1.1); }
            `}} />
        </section>
    );
};

export default ShopifySuit;

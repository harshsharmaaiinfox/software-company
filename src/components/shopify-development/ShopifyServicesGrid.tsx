const ShopifyServicesGrid = () => {
    const services = [
        {
            id: '01.',
            title: 'Personalized Shopify Store Design',
            description: 'As a leading Shopify website design agency in India, we understand the value of customization. This is why our Shopify website developers in India design and develop stores that are not just visually stunning, but also fast, intuitive, and conversion-focused.',
            icon: 'fa-solid fa-display',
        },
        {
            id: '02.',
            title: 'Shopify Integration and Setup',
            description: 'Our Shopify developers in Gurgaon handle everything from the Shopify store setup to seamless third-party integration. Whether it’s payment gateways, shipping, or inventory tools, our Shopify website developers in Gurgaon make sure that your store runs smoothly from day one.',
            icon: 'fa-solid fa-layer-group',
        },
        {
            id: '03.',
            title: 'Hire The Best Shopify partners',
            description: 'Hire Shopify partners in Delhi from Edgios and launch your online business the smart way. Our Shopify website developers in Delhi set up fully automated Shopify stores with the right apps, supplier integration, and clean design, so you can start selling fast.',
            icon: 'fa-solid fa-user-gear',
        },
        {
            id: '04.',
            title: 'Shopify Migration Services',
            description: 'Switching platforms and need a Shopify website development service company in Gurgaon? Our Shopify experts in Gurgaon ensure that your products, customers, and orders are transferred securely, with zero downtime and no data loss.',
            icon: 'fa-solid fa-cart-arrow-down',
        },
        {
            id: '05.',
            title: 'Shopify Store Maintenance and Support',
            description: 'Your store’s performance is our priority. This is why our Shopify developers in India provide ongoing updates, speed optimization, bug fixes, and support, so your Shopify site stays secure, fresh, and ready to convert every day.',
            icon: 'fa-solid fa-headset',
        },
    ];

    return (
        <section className="shopify-services-grid pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row g-4">
                    {/* Header Card (Top Left) */}
                    <div className="col-lg-4">
                        <div className="services-header-content h-100 pr-50 wow itfadeUp" data-wow-delay=".2s">
                            <div className="d-flex align-items-center mb-20">
                                <span style={{
                                    background: '#ff6b35',
                                    color: '#fff',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '10px'
                                }}>
                                    <i className="fa-solid fa-star" style={{ fontSize: '12px' }}></i>
                                </span>
                                <span style={{ color: '#ff6b35', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    SERVICES
                                </span>
                            </div>
                            <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', lineHeight: '1.1', marginBottom: '30px' }}>
                                Top-Notch Shopify Website Development Services in Gurgaon
                            </h2>
                            <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.7' }}>
                                For businesses thriving in the 21st century, we provide a wide range of Shopify development services in Delhi.
                                Whether your brand needs a website that works like butter on mobile devices, or you need Shopify development services in India
                                that help boost your conversions, our developers can do it all. With our Shopify development company in Delhi, your
                                store isn't just beautiful, it's built to sell.
                            </p>
                        </div>
                    </div>

                    {/* Service Cards */}
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="shopify-service-card wow itfadeUp" data-wow-delay={`${0.3 + (index * 0.1)}s`}
                                style={{
                                    background: '#f1fafa',
                                    padding: '50px 40px',
                                    borderRadius: '15px',
                                    height: '100%',
                                    position: 'relative',
                                    transition: 'all 0.3s ease'
                                }}>
                                <div className="card-top d-flex justify-content-between align-items-start mb-35">
                                    <div style={{ color: '#111', fontSize: '40px' }}>
                                        <i className={service.icon}></i>
                                    </div>
                                    <div style={{ color: '#036278', fontSize: '18px', fontWeight: '700' }}>
                                        {service.id}
                                    </div>
                                </div>
                                <h3 style={{ color: '#036278', fontSize: '22px', fontWeight: '800', marginBottom: '20px' }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.7', marginBottom: '0' }}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .shopify-service-card:hover {
                    background: #fff !important;
                    box-shadow: 0 20px 40px rgba(3, 98, 120, 0.08);
                    transform: translateY(-5px);
                }
                @media (max-width: 991px) {
                    .services-header-content { pr-0; mb-40; text-align: center; }
                    .services-header-content .d-flex { justify-content: center; }
                }
            `}} />
        </section>
    );
};

export default ShopifyServicesGrid;

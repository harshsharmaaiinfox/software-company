
const EcommerceAbout = () => {
    return (
        <section className="ecommerce-about-area pt-120 pb-120 p-relative overflow-hidden" style={{ background: '#fff' }}>
            {/* Dot Pattern Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(#e1e5eb 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3,
                zIndex: 0
            }}></div>

            <div className="container p-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    {/* Left content */}
                    <div className="col-lg-6 mb-50 mb-lg-0">
                        <div className="ecommerce-about-content pr-40">
                            <span className="wow fadeInUp" data-wow-delay=".2s" style={{ 
                                color: '#4EB985', 
                                fontWeight: '700', 
                                fontSize: '16px', 
                                display: 'block', 
                                marginBottom: '15px',
                                textTransform: 'uppercase'
                            }}>
                                YOUR GROWTH PARTNER
                            </span>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s" style={{ 
                                color: '#036278', 
                                fontSize: '42px', 
                                fontWeight: '800', 
                                lineHeight: '1.2', 
                                marginBottom: '25px' 
                            }}>
                                Leading the Way in Scalable <br /> E-Commerce Growth.
                            </h2>
                            <div className="wow fadeInUp" data-wow-delay=".6s" style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.7' }}>
                                <p className="mb-20">
                                    In the fast-paced world of online retail, customer experience is everything. 
                                    We specialize in building multi-vendor marketplaces and single-vendor premium stores 
                                    that are optimized for maximum site speed and flawless checkout experiences.
                                </p>
                                <p className="mb-20">
                                    Our e-commerce solutions integrate seamlessly with inventory management systems, 
                                    shipping providers, and global payment gateways. We ensures your store is ready to 
                                    handle high traffic during peak sales periods without any downtime.
                                </p>
                                <p>
                                    Whether it's a headless commerce architecture or a traditional Shopify setup, 
                                    we prioritize mobile responsiveness and secure data handling to give your 
                                    customers the confidence they need to complete their purchase.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right overlapping images */}
                    <div className="col-lg-6">
                        <div className="ecommerce-about-images p-relative d-flex justify-content-center">
                            {/* Main large image with rounded corners */}
                            <div className="wow fadeInRight" data-wow-delay=".4s" style={{
                                width: '70%',
                                borderRadius: '40px 100px 40px 100px',
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px rgba(3, 98, 120, 0.15)',
                                zIndex: 2,
                                transform: 'translateX(30px)'
                            }}>
                                <img src="/assets/img/project/project-1-2.png" alt="Ecommerce Dashboard" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
                            </div>
                            
                            {/* Secondary overlapping image */}
                            <div className="wow fadeInLeft" data-wow-delay=".6s" style={{
                                position: 'absolute',
                                left: '0',
                                top: '10%',
                                width: '55%',
                                borderRadius: '80px 40px 80px 40px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(78, 185, 133, 0.2)',
                                zIndex: 1,
                                border: '10px solid #fff'
                            }}>
                                <img src="/assets/img/project/project-1-1.png" alt="Online Shopping" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                            </div>

                            {/* Decorative element */}
                            <div style={{
                                position: 'absolute',
                                right: '-5%',
                                bottom: '-5%',
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'rgba(78, 185, 133, 0.1)',
                                zIndex: 0
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 991px) {
                    .ecommerce-about-content { pr-0; text-align: center; }
                    .ecommerce-about-images { margin-top: 50px; }
                    .ecommerce-about-images div { transform: none !important; }
                }
            `}} />
        </section>
    );
};

export default EcommerceAbout;

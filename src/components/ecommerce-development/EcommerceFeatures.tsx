
const EcommerceFeatures = () => {
    const features = [
        {
            id: 1,
            title: 'Store Strategy',
            subtitle: '(Market Research & Data Analysis)',
            description: 'We don\'t just build stores; we build businesses. Every project starts with deep market research to identify your competitors and target audience. We map out the user journey and product categorization to ensure your store is structured for maximum visibility and sales from day one.',
            image: '/assets/img/project/project-1-3.png',
        },
        {
            id: 2,
            title: 'Visual Identity',
            subtitle: '(Brand Design & UI/UX flow)',
            description: 'Trust is the currency of e-commerce. Our designers create premium, trustworthy visual identities that resonate with shoppers. We focus on clear call-to-actions, intuitive navigation, and high-quality product displays that guide users seamlessly from the homepage to the checkout page.',
            image: '/assets/img/project/project-1-1.png',
        },
        {
            id: 3,
            title: 'Growth Optimization',
            subtitle: '(SEO & Performance Tuning)',
            description: 'To supplement an extraordinary store, we build a lightning-fast backend. We optimize every image and script for peak performance. Furthermore, we implement advanced SEO schemas and analytics tracking to ensure your store continues to climb the search rankings and convert traffic.',
            image: '/assets/img/project/project-1-2.png',
        }
    ];

    return (
        <section className="ecommerce-features-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10 text-center mb-60">
                        <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ 
                            color: '#036278', 
                            fontSize: '42px', 
                            fontWeight: '800', 
                            marginBottom: '30px' 
                        }}>
                            Why Launch With Us ?
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay=".4s" style={{ 
                            color: '#585b6f', 
                            fontSize: '16px', 
                            lineHeight: '1.8' 
                        }}>
                            We are more than just a development agency; we are your strategic e-commerce partner. 
                            In a crowded digital marketplace, we deliver the technical excellence and creative edge 
                            needed to outperform your competition. From complex payment integrations to automated 
                            inventory synchronization, our expert developers turn complex challenges into profitable solutions.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {features.map((feature, idx) => (
                        <div key={feature.id} className="col-lg-4 col-md-6">
                            <div className="feature-card text-center wow fadeInUp" data-wow-delay={`${0.2 * (idx + 1)}s`}>
                                <div className="feature-img mb-30" style={{ 
                                    borderRadius: '20px', 
                                    overflow: 'hidden',
                                    boxShadow: '0 15px 30px rgba(3, 98, 120, 0.1)'
                                }}>
                                    <img src={feature.image} alt={feature.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                                </div>
                                <h3 style={{ color: '#036278', fontWeight: '800', fontSize: '24px', marginBottom: '5px' }}>
                                    {feature.title}
                                </h3>
                                <div style={{ color: '#4EB985', fontWeight: '600', fontSize: '14px', marginBottom: '15px' }}>
                                    {feature.subtitle}
                                </div>
                                <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.6' }}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="row mt-100 justify-content-center">
                    <div className="col-xl-8 text-center">
                        <div className="ecommerce-cta d-flex align-items-center justify-content-center gap-4 flex-wrap">
                            <h2 style={{ color: '#036278', fontSize: '36px', fontWeight: '800', margin: 0 }}>
                                Grow Your <span style={{ color: '#4EB985' }}>Online Revenue</span>
                            </h2>
                            <button className="tv-btn" style={{
                                background: 'linear-gradient(to right, #4EB985, #036278)',
                                color: '#fff',
                                padding: '15px 35px',
                                borderRadius: '50px',
                                border: 'none',
                                fontWeight: '700',
                                fontSize: '16px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 20px rgba(78, 185, 133, 0.2)'
                            }}>
                                Hire E-com Experts <i className="fa-solid fa-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .feature-card:hover .feature-img img {
                    transform: scale(1.1);
                }
                .feature-img img {
                    transition: transform 0.5s ease;
                }
            `}} />
        </section>
    );
};

export default EcommerceFeatures;

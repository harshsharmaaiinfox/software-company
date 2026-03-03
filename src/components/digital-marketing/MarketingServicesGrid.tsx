import { Link } from 'react-router-dom';

const MarketingServicesGrid = () => {
    const services = [
        {
            title: 'Search Engine Optimization',
            color: '#f0f5ff',
            icon: 'fa-solid fa-search-plus',
            link: '/seo-optimization',
            description: 'Dominating search results with advanced SEO strategies.'
        },
        {
            title: 'Social Media Management',
            color: '#fff0f4',
            icon: 'fa-brands fa-hashtag',
            link: '/social-media-marketing',
            description: 'Building meaningful engagement on platforms your audience loves.'
        },
        {
            title: 'Pay Per Click (PPC)',
            color: '#f0fff5',
            icon: 'fa-solid fa-bullhorn',
            link: '/ppc-advertising',
            description: 'Instant traffic and high-converging ad campaigns.'
        },
        {
            title: 'Banner Ads & Creative Designing',
            color: '#fff9f0',
            icon: 'fa-solid fa-palette',
            link: '/graphic-designing',
            description: 'Eye-catching visuals that tell your brand story.'
        },
        {
            title: 'Content Writing & Marketing',
            color: '#f5f0ff',
            icon: 'fa-solid fa-pen-nib',
            link: '/content-marketing',
            description: 'Compelling content that informs, educates, and inspires.'
        },
    ];

    return (
        <section className="marketing-services-grid pt-120 pb-120" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-7 text-center wow itfadeUp" data-wow-delay=".3s">
                        <span style={{
                            color: '#4EB985',
                            fontWeight: '700',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            OUR EXPERTISE
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Our Digital Marketing <span style={{ color: '#4EB985' }}>Services</span>
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            Comprehensive digital solutions tailored to your unique business needs. We bridge the gap between your brand and your audience.
                        </p>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {services.map((service, idx) => (
                        <div key={idx} className="col-lg-10">
                            <div className="service-card-horizontal d-flex align-items-center wow itfadeUp"
                                data-wow-delay={`${0.2 * (idx + 1)}s`}
                                style={{
                                    background: '#fff',
                                    padding: '40px',
                                    borderRadius: '25px',
                                    border: '1px solid #e1e5eb',
                                    transition: 'all 0.4s',
                                    cursor: 'pointer',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.02)'
                                }}>
                                <div className="card-icon" style={{
                                    width: '100px',
                                    height: '100px',
                                    minWidth: '100px',
                                    borderRadius: '20px',
                                    background: service.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '38px',
                                    color: '#036278',
                                    marginRight: '40px'
                                }}>
                                    <i className={service.icon}></i>
                                </div>
                                <div className="card-content" style={{ flex: 1 }}>
                                    <h4 style={{ color: '#036278', fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>
                                        {service.title}
                                    </h4>
                                    <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                                        {service.description}
                                    </p>
                                </div>
                                <div className="card-action">
                                    <Link to={service.link} style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        border: '1px solid #e1e5eb',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#036278',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s'
                                    }} className="arrow-btn">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .service-card-horizontal:hover { transform: translateX(10px); border-color: #4EB985; box-shadow: 0 15px 40px rgba(3, 98, 120, 0.08); }
                .service-card-horizontal:hover .arrow-btn { background: #036278; color: #fff; border-color: #036278; }
                @media (max-width: 768px) {
                    .service-card-horizontal { flex-direction: column; text-align: center; padding: 30px; }
                    .card-icon { margin-right: 0; margin-bottom: 25px; width: 80px; height: 80px; min-width: 80px; }
                    .card-action { margin-top: 25px; }
                }
            `}} />
        </section>
    );
};

export default MarketingServicesGrid;

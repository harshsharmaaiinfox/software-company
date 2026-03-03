
const WebDevFeatures = () => {
    const features = [
        {
            id: 1,
            title: 'Arranging',
            subtitle: '(Needs learning, data and experience)',
            description: 'The initial step we take is that we plan everything how the things will complete. It is the most necessary part while outlining a site since arranging is the establishment of any work. Without appropriate arranging and an arranging with absence of learning will never assist you with accomplishing the objectives.',
            image: '/assets/img/project/project-1-1.png',
        },
        {
            id: 2,
            title: 'Outlining',
            subtitle: '(Needs intrigue, practice and aptitudes)',
            description: 'Without intrigue and practice no one can ace any field. Our team has mastery in light of its accomplished group that will never disappoint you. Our creative Website designing expertise conveys a gigantic number of guests to your site, ensuring your brand stands out in the digital landscape.',
            image: '/assets/img/project/project-1-2.png',
        },
        {
            id: 3,
            title: 'Improvement',
            subtitle: '(Needs solid assurance and master group)',
            description: 'To supplement an extraordinary plan we build up a smooth working backend. Shrewd work and assurance towards the objectives makes the new vitality in us. Furthermore, we give you fantastic administrations and support, ensuring your website continues to perform at its peak long after launch.',
            image: '/assets/img/project/project-1-3.png',
        }
    ];

    return (
        <section className="web-dev-features-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10 text-center mb-60">
                        <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ 
                            color: '#036278', 
                            fontSize: '42px', 
                            fontWeight: '800', 
                            marginBottom: '30px' 
                        }}>
                            What Makes Us Different ?
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay=".4s" style={{ 
                            color: '#585b6f', 
                            fontSize: '16px', 
                            lineHeight: '1.8' 
                        }}>
                            We take pride in being a premier website development agency that aces in delivering innovative, customized and scalable solutions. 
                            Whether you need a more dynamic site to represent your brand's creative front, an engaging e-commerce store, or a robust business portal, 
                            our team of expert Website Developers ensures your vision comes to life. Imagination at the top of the priority list can make marvels 
                            and we totally depend on this quality. Our inventive web architectures inspire everyone.
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
                        <div className="hire-dev-cta d-flex align-items-center justify-content-center gap-4 flex-wrap">
                            <h2 style={{ color: '#036278', fontSize: '36px', fontWeight: '800', margin: 0 }}>
                                Hire a <span style={{ color: '#4EB985' }}>Dedicated Developer</span>
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
                                Hire Developer <i className="fa-solid fa-arrow-right ms-2"></i>
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
                .tv-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(78, 185, 133, 0.4);
                }
            `}} />
        </section>
    );
};

export default WebDevFeatures;

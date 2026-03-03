
const MobileAppStriking = () => {
    const features = [
        {
            title: "Excellent Mobile UI & Ux Development",
            description: "We take pride in presenting UI/UX design services that are very innovative. Using the latest technology for all designs and graphics, we create best-in-class concepts, prototypes, and graphics that ensure a perfect balance for your application.",
            icon: "🎨"
        },
        {
            title: "Creative Graphic Designing Team",
            description: "Graphic designs and user interface design strategies are the soul of our company. An app without good graphics is like food without salt. We bring visual effects that increase the value of your app in the competitive market.",
            icon: "📐"
        },
        {
            title: "Outstanding App Design",
            description: "Whether you wish to start from scratch or refresh an existing app, we design using the latest trends. With the help of cutting-edge capabilities, we completely customize the app design as per your unique business requirements.",
            icon: "📱"
        },
        {
            title: "Superb Support",
            description: "Every great building depends on its pillars. We provide the best support for your App in terms of security, uptime, accessibility, and maintenance. We build a professional relationship to ensure your business growth.",
            icon: "🛠️"
        }
    ];

    return (
        <section className="striking-area pt-120 pb-120" style={{ background: '#f0fdf9' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            WE DELIVER OUR BEST
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '25px' }}>
                            A Mobile App That Looks Striking On Device
                        </h2>
                        <p style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.8' }}>
                            Easily accessible and adaptable mobile apps are the choice of everyone. Our mobile apps have auto-adjust features,
                            meaning you can adjust display size, font, resolution, and other important options as per the device requirements.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {features.map((feature, idx) => (
                        <div key={idx} className="col-lg-6">
                            <div className="striking-card wow fadeInUp" data-wow-delay={`${idx * 0.2}s`} style={{
                                background: '#fff',
                                padding: '50px 40px',
                                borderRadius: '20px',
                                border: '1px solid #e1e5eb',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                textAlign: 'center'
                            }}>
                                <div className="striking-icon mb-30" style={{
                                    fontSize: '50px',
                                    display: 'inline-block'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ color: '#036278', fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .striking-card:hover {
                    box-shadow: 0 20px 40px rgba(3, 98, 120, 0.08);
                    border-color: #4EB985;
                    transform: translateY(-5px);
                }
            `}} />
        </section>
    );
};

export default MobileAppStriking;

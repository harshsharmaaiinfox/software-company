
const MobileAppProcess = () => {
    const steps = [
        {
            id: 1,
            title: 'Concept & Discovery',
            description: 'Every great app starts with a clear vision. We brainstorm with you to define the core value proposition of your application. We calculate all technical requirements and user demographics to establish a solid foundation for the project.',
            image: '/assets/img/blog/blog-details-thumb-1-2.png',
            layout: 'left'
        },
        {
            id: 2,
            title: 'Wireframing & Prototyping',
            description: 'Before writing a single line of code, we map out the entire app flow. We focus on "striking on device" designs that feel natural to touch and navigate. We establish clear timelines and budgets right at the beginning for customer satisfaction.',
            image: '/assets/img/blog/blog-details-thumb-1-3.png',
            layout: 'right'
        },
        {
            id: 3,
            title: 'Development & UI/UX Crafting',
            description: 'Our expert developers bring the designs to life using Flutter, Swift, or React Native. We focus on creating innovative latest technologies for all graphics and smooth transitions that increase the value of your application.',
            image: '/assets/img/blog/blog-details-thumb-1-2.png',
            layout: 'left'
        },
        {
            id: 4,
            title: 'Real-time Communication',
            description: 'While the app is under development, we keep in spring touch with our customers. Our transparent communication via Skype or calls ensures you are part of the process, providing feedback at every milestone.',
            image: '/assets/img/blog/blog-details-thumb-1-3.png',
            layout: 'right'
        },
        {
            id: 5,
            title: 'Rigorous Testing & QA',
            description: 'Quality is our prime focus. We conduct controlled testing across various devices like iPhones, Pixels, and tablets to ensure your app is fully responsive and auto-adjusts its layout perfectly for every screen size.',
            image: '/assets/img/blog/blog-details-thumb-1-2.png',
            layout: 'left'
        },
        {
            id: 6,
            title: 'Deployment & Launch Warranty',
            description: 'We take full responsibility for your App store launch. Any issues within 3 months of delivery will be resolved without additional charges. Our customer support service ensures a smooth transition to your full-scale business operations.',
            image: '/assets/img/blog/blog-details-thumb-1-3.png',
            layout: 'right'
        }
    ];

    return (
        <section className="mobile-app-process-area pt-120 pb-120" style={{ background: '#f8faff' }}>
            <div className="container">
                <div className="row justify-content-center mb-100">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            THE BLUEPRINT
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '25px' }}>
                            Our Professional App Development Roadmap
                        </h2>
                        <p style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.7' }}>
                            We follow a systematic "Discovery to Deployment" process. Every app we create is
                            engineered for performance, scalability, and user retention from day one.
                        </p>
                    </div>
                </div>

                <div className="process-steps">
                    {steps.map((step) => (
                        <div key={step.id} className={`row align-items-center mb-80 ${step.layout === 'right' ? 'flex-row-reverse' : ''}`}>
                            <div className="col-lg-6">
                                <div className={`process-img wow ${step.layout === 'left' ? 'fadeInLeft' : 'fadeInRight'}`} data-wow-delay=".2s" style={{
                                    borderRadius: '30px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(3, 98, 120, 0.1)'
                                }}>
                                    <img src={step.image} alt={step.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`process-content ${step.layout === 'left' ? 'pl-60' : 'pr-60'} wow ${step.layout === 'left' ? 'fadeInRight' : 'fadeInLeft'}`} data-wow-delay=".4s">
                                    <div className="step-number" style={{
                                        width: '80px',
                                        height: '80px',
                                        background: '#fff',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        fontWeight: '800',
                                        color: '#4EB985',
                                        boxShadow: '0 10px 20px rgba(78, 185, 133, 0.1)',
                                        marginBottom: '30px'
                                    }}>
                                        {step.id}
                                    </div>
                                    <h3 style={{ color: '#036278', fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.8' }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 991px) {
                    .process-content { pl-0; pr-0; mt-40; text-align: center; }
                    .step-number { margin-left: auto; margin-right: auto; }
                }
            `}} />
        </section>
    );
};

export default MobileAppProcess;


const EcommerceProcess = () => {
    const steps = [
        {
            id: 1,
            title: 'Market Analysis & Confirmation',
            description: 'We begin by analyzing your industry niche and competitor landscape. We calculate all technical parameters including inventory size and payment requirements. Only after establishing a solid strategy does the project move to our specialized e-commerce development department.',
            image: '/assets/img/project/project-1-1.png',
            layout: 'left'
        },
        {
            id: 2,
            title: 'Store Architecture & Budget',
            description: 'Precision is key for retail. We provide a detailed breakdown of platform costs, third-party app requirements, and development timelines. We establish clear parity to ensure the project stays within budget while meeting all your business objectives.',
            image: '/assets/img/project/project-1-2.png',
            layout: 'right'
        },
        {
            id: 3,
            title: 'UX/UI & Conversion Flow',
            description: 'Our design leads map out the entire customer journey. We focus on "frictionless" shopping—ensuring product discovery is easy and the path to checkout is as short as possible. We progressively assign tasks for wireframing and interactive prototyping.',
            image: '/assets/img/project/project-1-3.png',
            layout: 'left'
        },
        {
            id: 4,
            title: 'Development & API Integration',
            description: 'We integrate essential e-commerce tools: ERPs, CRMs, Shipping APIs, and Payment Gateways. We maintain transparent communication via dedicated channels, providing real-time updates and gathering feedback during every Sprint.',
            image: '/assets/img/project/project-1-1.png',
            layout: 'right'
        },
        {
            id: 5,
            title: 'QA, Security & Stress Testing',
            description: 'Quality is non-negotiable. We conduct rigorous security audits and load testing to ensure your store can handle high traffic. We perform cross-device testing on over 50 real devices to ensure a flawless shopping experience for every user.',
            image: '/assets/img/project/project-1-2.png',
            layout: 'left'
        },
        {
            id: 6,
            title: 'Deployment & Growth Warranty',
            description: 'We take full responsibility for your go-live success. Our 3-month post-delivery warranty covers all technical issues and ensures your store is performing at peak efficiency. Our support team is always available for immediate queries.',
            image: '/assets/img/project/project-1-3.png',
            layout: 'right'
        }
    ];

    return (
        <section className="ecommerce-process-area pt-120 pb-120" style={{ background: '#f8faff' }}>
            <div className="container">
                <div className="row justify-content-center mb-100">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            THE BLUEPRINT
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '25px' }}>
                            Our Professional E-Commerce Roadmap
                        </h2>
                        <p style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.7' }}>
                            We follow a data-driven process designed to maximize your online store's conversion rate.
                            From the initial strategy to the final post-launch optimization, every step is executed with precision.
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

export default EcommerceProcess;

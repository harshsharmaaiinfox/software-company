
const WebDevProcess = () => {
    const steps = [
        {
            id: 1,
            title: 'Understanding Of The Project With Confirmation',
            description: 'Right after receiving the project, our team goes through an intense brainstorming process wherein all the parameters of the project are calculated. Only after this, the project moves to the technical department which provides us with the scope of confirmation of the work.',
            image: '/assets/img/blog/blog-details-thumb-1-2.png',
            layout: 'left' // Image on left
        },
        {
            id: 2,
            title: 'Completion Time And Budget',
            description: 'We are serious when it comes to punctuality factor. To keep the purity clear, we put forward our time analysis and cost for the project right at the beginning. There can a non disclosure agreement for customer\'s satisfaction.',
            image: '/assets/img/blog/blog-details-thumb-1-3.png',
            layout: 'right' // Image on right
        },
        {
            id: 3,
            title: 'Planning The Project',
            description: 'Once the task reaches the technical desk, the work gets started. Technical leaders and individual projects leaders lay their ideas on a common desk for greater vision and understanding of the project. Once the assimilation is done, leaders assign group members depending on the project type and work is progressively assigned.',
            image: '/assets/img/blog/blog-details-thumb-1-2.png',
            layout: 'left'
        },
        {
            id: 4,
            title: 'Project Development And Communication',
            description: 'While the project development, we keep in spring touch with our customers to take real time feedback. The communication channels we follow are plate crystal clear via Skype of call. Our project leaders serve as a common link between team members and the customers for a hassle free work process.',
            image: '/assets/img/blog/blog-details-thumb-1-3.png',
            layout: 'right'
        },
        {
            id: 5,
            title: 'Functionality And Testing',
            description: 'Our prime focus is our quality. And we cannot compromise with that. We there keep a scheduled guard on the quality check and controlled testing of the results we create. We have a team dedicated towards functionality check and device testing a focused devices such as Chrome, safari and Firefox.',
            image: '/assets/img/blog/blog-details-thumb-1-2.png',
            layout: 'left'
        },
        {
            id: 6,
            title: 'Error Hunt And Warranty',
            description: 'We take complete responsibility of our work. Any issues within 3 months of the delivery date that lies under our domain and capacity will be resolved without additional charges. The code in case has to kept intact. Immediate queries and issues and responded on quick response basis under our customer support service.',
            image: '/assets/img/blog/blog-details-thumb-1-3.png',
            layout: 'right'
        }
    ];

    return (
        <section className="web-dev-process-area pt-120 pb-120" style={{ background: '#f8faff' }}>
            <div className="container">
                <div className="row justify-content-center mb-100">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            Process
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '25px' }}>
                            Our Working Process In Utmost Detail
                        </h2>
                        <p style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.7' }}>
                            We believe in developing your business dreams into reality. Our services are rightfully exclusive 
                            and contain every beneficiary aspect required by a business. We come up with multiple services under one roof.
                        </p>
                    </div>
                </div>

                <div className="process-steps">
                    {steps.map((step, idx) => (
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

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 991px) {
                    .process-content { pl-0; pr-0; mt-40; text-align: center; }
                    .step-number { margin-left: auto; margin-right: auto; }
                    .mb-80 { mb-60; }
                }
            `}} />
        </section>
    );
};

export default WebDevProcess;


const LogoProcess = () => {
    const steps = [
        {
            title: "Project Briefing",
            description: "Understanding your brand vision, mission, and target audience expectations.",
            icon: "📝"
        },
        {
            title: "Creative Research",
            description: "Analyzing competitors and industry trends to ensure a unique position.",
            icon: "🔍"
        },
        {
            title: "Sketching & Drafting",
            description: "Brainstorming multiple concepts and hand-sketching the most promising ideas.",
            icon: "🎨"
        },
        {
            title: "Final Polishing",
            description: "Refining the selected design with precise geometry and perfect colors.",
            icon: "✨"
        }
    ];

    return (
        <section className="logo-process-area pt-120 pb-120" style={{ background: '#f8faff' }}>
            <div className="container">
                <div className="row justify-content-center mb-80">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            HOW WE WORK
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Our Design Thinking Process
                        </h2>
                    </div>
                </div>

                <div className="row g-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6">
                            <div className="process-step-card text-center wow fadeInUp" data-wow-delay={`${idx * 0.2}s`}>
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '40px',
                                    margin: '0 auto 30px',
                                    boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    {step.icon}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-5px',
                                        right: '-5px',
                                        width: '35px',
                                        height: '35px',
                                        background: '#4EB985',
                                        borderRadius: '50%',
                                        color: '#fff',
                                        fontSize: '16px',
                                        fontWeight: '800',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '4px solid #f8faff'
                                    }}>
                                        {idx + 1}
                                    </div>
                                </div>
                                <h3 style={{ color: '#036278', fontSize: '20px', fontWeight: '800', marginBottom: '15px' }}>{step.title}</h3>
                                <p style={{ color: '#585b6f', fontSize: '14px', lineHeight: '1.6' }}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoProcess;

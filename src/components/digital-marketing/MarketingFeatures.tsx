const MarketingFeatures = () => {
    const benefitList1 = [
        { title: 'Global Reach', desc: 'Break geographical constraints and connect with a worldwide audience.' },
        { title: 'Cost-Effectiveness', desc: 'Maximize budget efficiency compared to traditional marketing channels.' },
        { title: 'Measurable Results', desc: 'Gain real-time insights into campaign performance with robust analytics.' },
        { title: 'Flexibility', desc: 'Adjust campaigns in real-time for optimal impact.' },
        { title: 'Targeted Advertising', desc: 'Pinpoint specific demographics, ensuring relevant content delivery.' },
        { title: 'Interactivity', desc: 'Engage directly with the audience through social media and interactive content.' },
        { title: 'Brand Consistency', desc: 'Establish and maintain a uniform brand image across online channels.' }
    ];

    const benefitList2 = [
        { title: 'Strategic Expertise', desc: 'Our team brings a wealth of strategic insight to tailor campaigns for your unique goals.' },
        { title: 'Data-Driven Approach', desc: 'We leverage cutting-edge analytics to inform decisions, ensuring optimal performance.' },
        { title: 'Creative Innovation', desc: 'Unleash the power of inventive campaigns that captivate and resonate with your audience.' },
        { title: 'Personalized Solutions', desc: 'Every client is unique, and our solutions are tailored to meet your specific business needs.' },
        { title: 'Transparent Communication', desc: 'Open lines of communication keep you informed and involved in every step of your digital journey.' },
        { title: 'Proven Results', desc: 'With a track record of success, we deliver tangible and measurable outcomes for your business.' }
    ];

    return (
        <section className="marketing-features pt-120 pb-120" style={{ background: '#f8fafb' }}>
            <div className="container">
                {/* Benefits Part */}
                <div className="row align-items-center mb-100">
                    <div className="col-lg-6 order-last order-lg-first">
                        <div className="features-content pr-50 wow itfadeLeft" data-wow-delay=".3s">
                            <span style={{ color: '#4EB985', fontWeight: '800', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                                UNLOCKING BUSINESS SUCCESS
                            </span>
                            <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '900', lineHeight: '1.2', marginBottom: '25px' }}>
                                The Benefits of Digital Marketing Services
                            </h2>
                            <p style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.7', marginBottom: '35px' }}>
                                In an era dominated by digital interactions, leveraging digital marketing services is a strategic imperative for businesses seeking sustainable growth. Here&apos;s why:
                            </p>
                            <ul className="list-unstyled">
                                {benefitList1.map((item, idx) => (
                                    <li key={idx} className="mb-3 d-flex align-items-start">
                                        <div style={{ marginRight: '15px', marginTop: '5px' }}>
                                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#4EB985', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <span style={{ color: '#036278', fontWeight: '800', fontSize: '16px', display: 'block' }}>{item.title}: <span style={{ fontWeight: '500', color: '#585b6f' }}>{item.desc}</span></span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="features-visual text-center wow itfadeRight" data-wow-delay=".5s">
                            <img src="/assets/img/benefits-1.png" alt="Benefits" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>

                {/* Stunning Journeys Part */}
                <div className="row align-items-center mb-100">
                    <div className="col-lg-6">
                        <div className="features-visual text-center wow itfadeLeft" data-wow-delay=".3s">
                            <img src="/assets/img/benefits-2.png" alt="Excellence" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-50 mt-lg-0">
                        <div className="features-content pl-50 wow itfadeRight" data-wow-delay=".5s">
                            <span style={{ color: '#4EB985', fontWeight: '800', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                                WHAT SETS US APART
                            </span>
                            <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '900', lineHeight: '1.2', marginBottom: '25px' }}>
                                We Create Stunning Digital Journeys
                            </h2>
                            <p style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.7', marginBottom: '35px' }}>
                                Choosing digital marketing services is not just a choice; it&apos;s a strategic move to navigate the digital landscape successfully and achieve long-term business success.
                            </p>
                            <ul className="list-unstyled">
                                {benefitList2.map((item, idx) => (
                                    <li key={idx} className="mb-3 d-flex align-items-start">
                                        <div style={{ marginRight: '15px', marginTop: '5px' }}>
                                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#4EB985', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <span style={{ color: '#036278', fontWeight: '800', fontSize: '16px', display: 'block' }}>{item.title}: <span style={{ fontWeight: '500', color: '#585b6f' }}>{item.desc}</span></span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 991px) {
                    .features-content { padding: 0 !important; text-align: center; }
                    .features-content h2 { font-size: 32px; }
                }
            `}} />
        </section>
    );
};

export default MarketingFeatures;

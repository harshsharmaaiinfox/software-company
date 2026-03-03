import { useState } from 'react';

const MobileAppFaq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How long does it take to build a custom mobile app?",
            answer: "An MVP (Minimum Viable Product) usually takes between 8 to 12 weeks. High-scale enterprise applications with complex integrations can take 4 to 6 months. We break the project into Sprints so you can see live progress every 2 weeks."
        },
        {
            question: "Should I build a Native or Cross-Platform app?",
            answer: "It depends on your target. If you need maximum performance and access to all hardware features, Native (Swift/Kotlin) is best. If you want to reach both iOS and Android with a single codebase and lower cost, Cross-Platform (React Native/Flutter) is the ideal choice."
        },
        {
            question: "Will you help with the App Store and Google Play launch?",
            answer: "Yes, we handle the entire submission process, from creating developer accounts to optimizing your app store listing for maximum downloads. We stay with you until your app is live and fully approved by both Apple and Google."
        },
        {
            question: "Does the app auto-adjust for different screen sizes?",
            answer: "Absolutely! Every app we build features a 'striking on device' design. We use auto-layout and responsive design principles to ensure your app looks perfect on everything from small smartphones to large tablets."
        },
        {
            question: "What happens after the app is launched?",
            answer: "We provide 3 months of technical support and warranty post-launch. After that, we offer various maintenance plans for security updates, bug fixes, and upgrading the app for new OS versions (iOS 17, Android 14, etc.)."
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="mobile-app-faq-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-7 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            SUPPORT CENTER
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Mobile App FAQs
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            Find quick answers to common questions about our mobile app engineering services.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="faq-wrapper">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item mb-20" style={{
                                    border: '1px solid #e1e5eb',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeIndex === index ? '0 10px 30px rgba(3, 98, 120, 0.05)' : 'none',
                                    borderColor: activeIndex === index ? '#4EB985' : '#e1e5eb'
                                }}>
                                    <div
                                        onClick={() => toggleFaq(index)}
                                        style={{
                                            padding: '20px 30px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            background: activeIndex === index ? '#f8faff' : '#fff',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <h4 style={{
                                            margin: 0,
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            color: activeIndex === index ? '#4EB985' : '#036278'
                                        }}>
                                            {faq.question}
                                        </h4>
                                        <div style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            background: activeIndex === index ? '#4EB985' : '#f0f2f5',
                                            color: activeIndex === index ? '#fff' : '#036278',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`} style={{ fontSize: '14px' }}></i>
                                        </div>
                                    </div>

                                    <div style={{
                                        maxHeight: activeIndex === index ? '200px' : '0',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease-in-out',
                                        background: '#fff'
                                    }}>
                                        <div style={{ padding: '0 30px 25px 30px', color: '#585b6f', lineHeight: '1.7' }}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .faq-item:hover {
                    border-color: #4EB985;
                    transform: translateY(-2px);
                }
            `}} />
        </section>
    );
};

export default MobileAppFaq;

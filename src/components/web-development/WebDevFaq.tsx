import { useState } from 'react';

const WebDevFaq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How long does it take to develop a custom website?",
            answer: "A typical custom website project takes between 4 to 8 weeks depending on complexity. This includes the initial research, UI/UX design, development, and thorough testing phases to ensure a high-quality launch."
        },
        {
            question: "Do you provide SEO-friendly website development?",
            answer: "Absolutely! Every website we build follows SEO best practices, including semantic HTML, fast loading speeds, clean URL structures, and mobile optimization to ensure your brand ranks well on search engines like Google."
        },
        {
            question: "Can you redesign my existing website?",
            answer: "Yes, we specialize in modernizing legacy websites. We can perform a full UX audit, refresh your visual identity, and migrate your content to a more powerful, modern framework for better performance and conversions."
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "Yes, 100%. We use a mobile-first design approach. Every website we deliver is fully responsive, meaning it will look and function perfectly on smartphones, tablets, laptops, and large desktop monitors."
        },
        {
            question: "What kind of support do you provide after launch?",
            answer: "We offer 3 months of post-launch warranty and technical support. Beyond that, we provide various maintenance plans to keep your website secure, updated, and performing at its peak with regular backups and security audits."
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="web-dev-faq-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-7 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            Common Questions
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            Find answers to the most common queries about our website design and development services.
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
            
            <style dangerouslySetInnerHTML={{ __html: `
                .faq-item:hover {
                    border-color: #4EB985;
                    transform: translateY(-2px);
                }
            `}} />
        </section>
    );
};

export default WebDevFaq;

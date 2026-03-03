import { useState } from 'react';

const EcommerceFaq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Which e-commerce platform is best for my business?",
            answer: "The choice depends on your specific needs. Shopify is excellent for ease of use and speed. Magento (Adobe Commerce) is perfect for large enterprise stores needing deep customization. WooCommerce is great for those who want full control within the WordPress ecosystem. We help you choose the one that matches your growth goals."
        },
        {
            question: "Can you migrate my existing store to a new platform?",
            answer: "Yes, we are experts in store migration. We can migrate your products, customer data, and order history from any legacy platform (like BigCommerce or custom PHP sites) to Shopify, Magento, or WooCommerce while ensuring zero SEO loss and minimal downtime."
        },
        {
            question: "Do you integrate with local and international payment gateways?",
            answer: "Yes, we integrate with all major payment providers including Stripe, PayPal, Razorpay, Authorize.net, and various local bank gateways. We ensure that your checkout process is secure, PCI-compliant, and optimized for high completion rates."
        },
        {
            question: "What kind of inventory management support do you offer?",
            answer: "We can synchronize your online store with your warehouse management systems (WMS), ERPs (like SAP or Oracle), and marketplace accounts (Amazon, eBay). This ensures that your stock levels are updated in real-time across all selling channels."
        },
        {
            question: "Is e-commerce maintenance expensive?",
            answer: "We offer tailored maintenance packages that fit your brand's scale. Our goal is to prevent issues before they occur. Regular security patches, plugin updates, and performance optimizations are included in our plans to ensure your store remains a profitable asset."
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="ecommerce-faq-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-7 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            STORE EXPERTISE
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            E-Commerce FAQs
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            Get answers to the most frequent questions from our retail and e-commerce clients.
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

export default EcommerceFaq;

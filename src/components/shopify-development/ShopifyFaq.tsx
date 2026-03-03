import { useState } from 'react';

const ShopifyFaq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Why should I choose Shopify for my e-commerce store?",
            answer: "Shopify is the world's leading e-commerce platform because it offers a secure, scalable, and easy-to-manage solution. It includes built-in SEO tools, integrated payment gateways, and a vast app ecosystem to extend your store's functionality."
        },
        {
            question: "Can you migrate my existing store from another platform to Shopify?",
            answer: "Yes, we specialize in seamless migrations from platforms like WooCommerce, Magento, and BigCommerce to Shopify. We ensure all your data—including products, customers, and order history—is transferred safely without downtime."
        },
        {
            question: "How long does it take to build a custom Shopify store?",
            answer: "A basic Shopify store setup can take 2-3 weeks, while a fully custom theme development project typically takes 6-10 weeks. This timeline covers strategy, design, development, and thorough QA testing."
        },
        {
            question: "Is Shopify better than WooCommerce for SEO?",
            answer: "Both platforms are SEO-friendly, but Shopify offers a more streamlined, out-of-the-box SEO structure (clean URLs, automated sitemaps, and SSL). Our Shopify developers optimize your store's technical SEO to ensure it ranks high on SERPs."
        },
        {
            question: "Do you provide Shopify app development services?",
            answer: "Absolutely! We build custom Shopify apps using Polaris and Node.js/React to add unique features to your store that aren't available in the public app store or to integrate with your existing ERP/CRM systems."
        },
        {
            question: "What kind of ongoing support do you offer after the store goes live?",
            answer: "We offer various maintenance and support plans that include regular speed optimization, security updates, bug fixes, and new feature implementation to keep your store performing at its best 24/7."
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="shopify-faq-area pt-120 pb-120" style={{ background: '#f8fbff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-7 text-center wow itfadeUp" data-wow-delay=".3s">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            KNOWLEDGE HUB
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Common Queries About <span style={{ color: '#4eb985' }}>Shopify</span>
                        </h2>
                        <p style={{ color: '#585b6f' }}>
                            Find quick answers to the most common questions our clients ask about Shopify development and e-commerce strategy.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                        <div className="faq-wrapper wow itfadeUp" data-wow-delay=".5s">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item mb-20" style={{
                                    border: '1px solid #e1e5eb',
                                    borderRadius: '20px',
                                    background: '#fff',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: activeIndex === index ? '0 15px 40px rgba(3, 98, 120, 0.08)' : 'none',
                                    borderColor: activeIndex === index ? '#4EB985' : '#e1e5eb',
                                    transform: activeIndex === index ? 'translateY(-5px)' : 'none'
                                }}>
                                    <div
                                        onClick={() => toggleFaq(index)}
                                        style={{
                                            padding: '25px 35px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            background: activeIndex === index ? 'linear-gradient(to right, #f8fcfb, #fff)' : '#fff',
                                        }}
                                    >
                                        <h4 style={{
                                            margin: 0,
                                            fontSize: '19px',
                                            fontWeight: '700',
                                            color: activeIndex === index ? '#4EB985' : '#036278',
                                            paddingRight: '20px',
                                            lineHeight: '1.4'
                                        }}>
                                            {faq.question}
                                        </h4>
                                        <div style={{
                                            minWidth: '35px',
                                            height: '35px',
                                            borderRadius: '50%',
                                            background: activeIndex === index ? '#4EB985' : 'rgba(3, 98, 120, 0.05)',
                                            color: activeIndex === index ? '#fff' : '#036278',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s'
                                        }}>
                                            <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`} style={{ fontSize: '14px' }}></i>
                                        </div>
                                    </div>

                                    <div style={{
                                        maxHeight: activeIndex === index ? '300px' : '0',
                                        overflow: 'hidden',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        background: '#fff'
                                    }}>
                                        <div style={{ padding: '0 35px 30px 35px', color: '#585b6f', lineHeight: '1.8', fontSize: '16px' }}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Question Info */}
                <div className="row mt-60">
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay=".7s">
                        <div style={{
                            background: 'rgba(78, 185, 133, 0.1)',
                            padding: '15px 40px',
                            borderRadius: '50px',
                            display: 'inline-block'
                        }}>
                            <span style={{ color: '#036278', fontWeight: '700' }}>
                                Have more questions? <a href="/contact" style={{ color: '#4eb985', textDecoration: 'none', marginLeft: '5px' }}>Contact our experts <i className="fa-solid fa-arrow-right-long ms-2"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .faq-item:hover {
                    borderColor: #4EB985 !important;
                    box-shadow: 0 10px 30px rgba(3, 98, 120, 0.05) !important;
                }
            `}} />
        </section>
    );
};

export default ShopifyFaq;

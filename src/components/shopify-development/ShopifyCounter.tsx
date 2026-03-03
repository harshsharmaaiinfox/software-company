import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ShopifyCounter = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const counters = [
        {
            value: 1,
            suffix: 'k+',
            label: 'Work Completed',
        },
        {
            value: 99,
            suffix: '%',
            label: 'Satisfaction Rate',
        },
        {
            value: 35,
            suffix: '+',
            label: 'Expert members',
        },
    ];

    return (
        <section className="shopify-counter-area pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="counter-wrapper wow fadeInUp" data-wow-delay=".3s" ref={ref}
                    style={{
                        background: 'linear-gradient(90deg, #e3f5ed 0%, #f0f7f4 100%)',
                        borderRadius: '20px',
                        padding: '40px 60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(78, 185, 133, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>

                    {/* Decorative Background Elements */}
                    <div style={{
                        position: 'absolute',
                        left: '-5%',
                        top: '-10%',
                        width: '200px',
                        height: '200px',
                        background: 'rgba(78, 185, 133, 0.03)',
                        borderRadius: '50%',
                        zIndex: 0
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        right: '-5%',
                        bottom: '-10%',
                        width: '200px',
                        height: '200px',
                        background: 'rgba(3, 98, 120, 0.03)',
                        borderRadius: '50%',
                        zIndex: 0
                    }}></div>

                    {/* Left Text */}
                    <div className="counter-text" style={{ zIndex: 1, flex: '1' }}>
                        <h4 style={{
                            color: '#585b6f',
                            fontSize: '24px',
                            fontWeight: '500',
                            margin: 0,
                            lineHeight: '1.4'
                        }}>
                            We've been helping brands <br />
                            <span style={{ color: '#036278', fontWeight: '800' }}>grow, connect and succeed</span>
                        </h4>
                    </div>

                    {/* Right Counters */}
                    <div className="counter-grid" style={{
                        zIndex: 1,
                        display: 'flex',
                        border: '1px solid #036278',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.4)',
                        backdropFilter: 'blur(5px)'
                    }}>
                        {counters.map((item, index) => (
                            <div key={index} className="counter-item" style={{
                                padding: '30px 45px',
                                textAlign: 'center',
                                borderRight: index !== counters.length - 1 ? '1px solid #036278' : 'none'
                            }}>
                                <div style={{
                                    color: '#036278',
                                    fontSize: '48px',
                                    fontWeight: '800',
                                    lineHeight: '1',
                                    marginBottom: '10px'
                                }}>
                                    {inView && (
                                        <CountUp start={0} end={item.value} duration={2.5} />
                                    )}
                                    {item.suffix}
                                </div>
                                <div style={{
                                    color: '#585b6f',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 991px) {
                    .counter-wrapper { flex-direction: column; text-align: center; padding: 40px 30px; }
                    .counter-text { margin-bottom: 40px; }
                    .counter-grid { flex-direction: column; width: 100%; border-right: 1px solid #036278; }
                    .counter-item { border-right: none !important; border-bottom: 1px solid #036278; }
                    .counter-item:last-child { border-bottom: none; }
                }
            `}} />
        </section>
    );
};

export default ShopifyCounter;


const WebDevAbout = () => {
    return (
        <section className="web-dev-about-area pt-120 pb-120 p-relative overflow-hidden" style={{ background: '#fff' }}>
            {/* Dot Pattern Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(#e1e5eb 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3,
                zIndex: 0
            }}></div>

            <div className="container p-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    {/* Left content */}
                    <div className="col-lg-6 mb-50 mb-lg-0">
                        <div className="web-dev-about-content pr-40">
                            <span className="wow fadeInUp" data-wow-delay=".2s" style={{ 
                                color: '#4EB985', 
                                fontWeight: '700', 
                                fontSize: '16px', 
                                display: 'block', 
                                marginBottom: '15px',
                                textTransform: 'uppercase'
                            }}>
                                WHY WE ARE BEST !
                            </span>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s" style={{ 
                                color: '#036278', 
                                fontSize: '42px', 
                                fontWeight: '800', 
                                lineHeight: '1.2', 
                                marginBottom: '25px' 
                            }}>
                                We've Been the Most Dependable Web Design Company.
                            </h2>
                            <div className="wow fadeInUp" data-wow-delay=".6s" style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.7' }}>
                                <p className="mb-20">
                                    Customer satisfaction is our prime motto and we strive towards excellence. 
                                    Our approach involves deeply understanding your business needs to create custom-made 
                                    websites that resonate with your target audience and maximize digital conversion.
                                </p>
                                <p className="mb-20">
                                    Choosing us comes with an assortment of benefits. We prioritize transparency, security, 
                                    and validated coding standards. Our dedicated Q/A team ensures every line of code 
                                    performs flawlessly before your project goes live.
                                </p>
                                <p>
                                    A website ought to be accessible effortlessly on any gadget of any size and should 
                                    look engaging as well. We provide a 100% responsive plan for every website we build, 
                                    ensuring a seamless experience across all platforms.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right overlapping images */}
                    <div className="col-lg-6">
                        <div className="web-dev-about-images p-relative d-flex justify-content-center">
                            {/* Main large image with rounded corners */}
                            <div className="wow fadeInRight" data-wow-delay=".4s" style={{
                                width: '70%',
                                borderRadius: '40px 100px 40px 100px',
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px rgba(3, 98, 120, 0.15)',
                                zIndex: 2,
                                transform: 'translateX(30px)'
                            }}>
                                <img src="/assets/img/blog/blog-details-thumb-1-2.png" alt="Team Meeting" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
                            </div>
                            
                            {/* Secondary overlapping image */}
                            <div className="wow fadeInLeft" data-wow-delay=".6s" style={{
                                position: 'absolute',
                                left: '0',
                                top: '10%',
                                width: '55%',
                                borderRadius: '80px 40px 80px 40px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(78, 185, 133, 0.2)',
                                zIndex: 1,
                                border: '10px solid #fff'
                            }}>
                                <img src="/assets/img/blog/blog-details-thumb-1-3.png" alt="Working" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                            </div>

                            {/* Decorative element */}
                            <div style={{
                                position: 'absolute',
                                right: '-5%',
                                bottom: '-5%',
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'rgba(78, 185, 133, 0.1)',
                                zIndex: 0
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 991px) {
                    .web-dev-about-content { pr-0; text-align: center; }
                    .web-dev-about-images { margin-top: 50px; }
                    .web-dev-about-images div { transform: none !important; }
                }
            `}} />
        </section>
    );
};

export default WebDevAbout;

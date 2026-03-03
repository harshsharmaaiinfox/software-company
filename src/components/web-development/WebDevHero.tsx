import React from 'react';

const WebDevHero = () => {
    return (
        <section className="web-dev-hero-area pt-150 pb-120 p-relative overflow-hidden" 
                 style={{ 
                     background: 'linear-gradient(135deg, #f0f7f4 0%, #ffffff 100%)',
                     minHeight: '80vh',
                     display: 'flex',
                     alignItems: 'center'
                 }}>
            {/* Soft decorative blur circles */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: 'rgba(78, 185, 133, 0.05)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '300px',
                height: '300px',
                background: 'rgba(3, 98, 120, 0.05)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container p-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-7">
                        <div className="web-dev-content pr-50">
                            <span className="wow fadeInUp" data-wow-delay=".2s" style={{ 
                                color: '#4EB985', 
                                fontWeight: '700', 
                                marginBottom: '15px', 
                                display: 'inline-block',
                                fontSize: '16px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Solution-Oriented Services
                            </span>
                            <h1 className="wow fadeInUp" data-wow-delay=".4s" style={{ 
                                color: '#036278', 
                                fontSize: '56px', 
                                fontWeight: '800', 
                                lineHeight: '1.1',
                                marginBottom: '25px'
                            }}>
                                Website Design & <br /> Development
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".6s" style={{ 
                                color: '#585b6f', 
                                fontSize: '18px', 
                                lineHeight: '1.6', 
                                marginBottom: '40px'
                            }}>
                                We are a premier digital solutions company dedicated to crafting high-performance, 
                                scalable websites that drive business growth. Our expert team combines cutting-edge 
                                technology with user-centric design to build digital experiences that leave a lasting impression.
                            </p>

                            <div className="row mb-50 wow fadeInUp" data-wow-delay=".8s">
                                {[
                                    ['# 800+ Mobile Delivered', '# 200+ Team Strength'],
                                    ['# User-Friendly Interface', '# 400 Happy Clients'],
                                    ['# 95% Repeat business', '# Quality Service UX']
                                ].map((pair, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className="col-sm-6 mb-15">
                                            <div style={{ fontWeight: '700', color: '#036278', fontSize: '16px' }}>{pair[0]}</div>
                                        </div>
                                        <div className="col-sm-6 mb-15">
                                            <div style={{ fontWeight: '700', color: '#036278', fontSize: '16px' }}>{pair[1]}</div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="wow fadeInUp" data-wow-delay="1s">
                                <button className="tv-btn" style={{
                                    background: 'linear-gradient(to right, #4EB985, #036278)',
                                    color: '#fff',
                                    padding: '18px 45px',
                                    borderRadius: '50px',
                                    border: 'none',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    boxShadow: '0 10px 25px rgba(78, 185, 133, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    GET STARTED <i className="fa-solid fa-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="col-lg-5">
                        <div className="web-dev-form wow fadeInRight" data-wow-delay=".6s" style={{
                            background: '#fff',
                            padding: '45px',
                            borderRadius: '30px',
                            boxShadow: '0 30px 60px rgba(3, 98, 120, 0.1)',
                            border: '1px solid rgba(78, 185, 133, 0.1)'
                        }}>
                            <h3 className="mb-35 text-center" style={{ 
                                color: '#036278', 
                                fontWeight: '800', 
                                fontSize: '28px',
                                lineHeight: '1.3'
                            }}>
                                Want To Start Your Website Development?
                            </h3>
                            <form action="#">
                                <div className="mb-20">
                                    <input type="text" placeholder="Enter name" style={{
                                        width: '100%',
                                        padding: '15px 25px',
                                        borderRadius: '12px',
                                        border: '1px solid #e1e5eb',
                                        background: '#f9fbff',
                                        outline: 'none'
                                    }} />
                                </div>
                                <div className="row mb-20">
                                    <div className="col-md-6 mb-20 mb-md-0">
                                        <input type="text" placeholder="Enter mobile" style={{
                                            width: '100%',
                                            padding: '15px 25px',
                                            borderRadius: '12px',
                                            border: '1px solid #e1e5eb',
                                            background: '#f9fbff',
                                            outline: 'none'
                                        }} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder="Enter email" style={{
                                            width: '100%',
                                            padding: '15px 25px',
                                            borderRadius: '12px',
                                            border: '1px solid #e1e5eb',
                                            background: '#f9fbff',
                                            outline: 'none'
                                        }} />
                                    </div>
                                </div>
                                <div className="mb-30">
                                    <textarea placeholder="Enter your message" style={{
                                        width: '100%',
                                        height: '120px',
                                        padding: '15px 25px',
                                        borderRadius: '12px',
                                        border: '1px solid #e1e5eb',
                                        background: '#f9fbff',
                                        outline: 'none',
                                        resize: 'none'
                                    }}></textarea>
                                </div>
                                <button className="w-100 submit-btn" style={{
                                    background: 'linear-gradient(to right, #4EB985, #036278)',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    fontWeight: '700',
                                    fontSize: '18px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 20px rgba(78, 185, 133, 0.2)'
                                }}>
                                    Submit <i className="fa-solid fa-arrow-right ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .tv-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(78, 185, 133, 0.4);
                }
                .web-dev-form .submit-btn:hover {
                    box-shadow: 0 15px 30px rgba(78, 185, 133, 0.4) !important;
                    transform: scale(1.02);
                    opacity: 0.9;
                }
                input:focus, textarea:focus {
                    border-color: #4EB985 !important;
                    background: #fff !important;
                }
                @media (max-width: 991px) {
                    .web-dev-hero-area { pt-100; pb-80; }
                    .web-dev-content { pr-0; mb-60; text-align: center; }
                    .web-dev-content h1 { font-size: 42px !important; }
                    .cta-phone { justify-content: center; }
                }
            `}} />
        </section>
    );
};

export default WebDevHero;

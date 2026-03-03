import React from 'react';

const MobileAppHero = () => {
    return (
        <section className="mobile-app-hero-area pt-150 pb-120 p-relative overflow-hidden"
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
                        <div className="mobile-app-content pr-50">
                            <span className="wow fadeInUp" data-wow-delay=".2s" style={{
                                color: '#4EB985',
                                fontWeight: '700',
                                marginBottom: '15px',
                                display: 'inline-block',
                                fontSize: '16px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Future-Ready Mobile Apps
                            </span>
                            <h1 className="wow fadeInUp" data-wow-delay=".4s" style={{
                                color: '#036278',
                                fontSize: '56px',
                                fontWeight: '800',
                                lineHeight: '1.1',
                                marginBottom: '25px'
                            }}>
                                Mobile App Design & <br /> Development
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".6s" style={{
                                color: '#585b6f',
                                fontSize: '18px',
                                lineHeight: '1.6',
                                marginBottom: '40px'
                            }}>
                                We create stunning mobile applications that offer seamless user experiences across iOS and Android.
                                Our apps are designed to be "striking on device"—featuring auto-adjusting layouts, high-speed
                                performance, and innovative features that keep your users engaged.
                            </p>

                            <div className="row mb-50 wow fadeInUp" data-wow-delay=".8s">
                                {[
                                    ['# 1000+ Apps Delivered', '# Native & Cross-Platform'],
                                    ['# Intuitive UI/UX Design', '# Highly Scalable Backend'],
                                    ['# Top App Store Ranking', '# Dedicated 24/7 Support']
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
                                    START YOUR APP JOURNEY <i className="fa-solid fa-mobile-screen ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="col-lg-5">
                        <div className="mobile-app-form wow fadeInRight" data-wow-delay=".6s" style={{
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
                                Want To Build Your Own Mobile App?
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
                                    <textarea placeholder="Tell us about your app idea" style={{
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
                                    Get A Quote <i className="fa-solid fa-arrow-right ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .tv-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(78, 185, 133, 0.4);
                }
                .mobile-app-form .submit-btn:hover {
                    box-shadow: 0 15px 30px rgba(78, 185, 133, 0.4) !important;
                    transform: scale(1.02);
                    opacity: 0.9;
                }
                input:focus, textarea:focus {
                    border-color: #4EB985 !important;
                    background: #fff !important;
                }
                @media (max-width: 991px) {
                    .mobile-app-hero-area { pt-100; pb-80; }
                    .mobile-app-content { pr-0; mb-60; text-align: center; }
                    .mobile-app-content h1 { font-size: 42px !important; }
                }
            `}} />
        </section>
    );
};

export default MobileAppHero;

import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section
            style={{
                padding: '120px 0',
                background: 'linear-gradient(135deg, #effef5 0%, #f7fffb 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative vector elements (approximating common premium tech site shapes) */}
            <div style={{
                position: 'absolute',
                right: '5%',
                bottom: '10%',
                width: '100px',
                height: '100px',
                opacity: 0.1,
                zIndex: 0
            }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 50 C 10 20, 90 20, 90 50 S 10 80, 10 50" stroke="#4EB985" strokeWidth="2" strokeDasharray="5 5" />
                </svg>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    {/* Content Column */}
                    <div className="col-lg-6 col-md-12 pe-lg-5">
                        <div className="about-content-left mb-50">
                            <div className="breadcrumb-mini mb-20">
                                <Link to="/" style={{ color: 'rgba(3, 98, 120, 0.6)', textDecoration: 'none', fontSize: '15px' }}>Home</Link>
                                <span style={{ margin: '0 10px', color: 'rgba(3, 98, 120, 0.3)' }}>•</span>
                                <span style={{ color: '#036278', fontWeight: 600, fontSize: '15px' }}>About Us</span>
                            </div>

                            <h2 className="mb-30" style={{
                                fontSize: '56px',
                                fontWeight: 800,
                                color: '#036278',
                                lineHeight: '1.2'
                            }}>
                                About Mangaltech
                            </h2>

                            <p className="mb-25" style={{
                                fontSize: '17px',
                                lineHeight: '1.8',
                                color: 'rgba(3, 98, 120, 0.85)',
                                fontWeight: 400
                            }}>
                                Welcome to MANGALTECH – our commitment to creativity and unwavering dedication has positioned us among the foremost industry leaders. Our diverse portfolio attests to our versatile capabilities, spanning a comprehensive 360 degrees of expertise that includes Ecommerce, software development, application development, website development, CMS, and logo designing.
                            </p>

                            <p className="mb-40" style={{
                                fontSize: '17px',
                                lineHeight: '1.8',
                                color: 'rgba(3, 98, 120, 0.85)',
                                fontWeight: 400
                            }}>
                                At MANGALTECH, our dynamic team is driven to craft unparalleled solutions for your company's success. We take pride in our ability to decode market demands and engineer tailored solutions that fit seamlessly into any wireframe. With a keen eye on innovation, we embrace the latest technologies and leave no stone unturned in our pursuit of delivering the finest products to our valued clients.
                            </p>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image-wrap p-relative text-end" style={{ height: '500px' }}>

                            {/* Main Image (Right) */}
                            <div style={{
                                width: '85%',
                                height: '420px',
                                display: 'inline-block',
                                borderRadius: '0 0 100px 0',
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <img
                                    src="/assets/img/about_laptop_hands.png"
                                    alt="Mangaltech Team Working"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Overlapping Image (Left) */}
                            <div style={{
                                position: 'absolute',
                                left: '0',
                                top: '15%',
                                width: '45%',
                                height: '320px',
                                borderRadius: '100px 0 0 0',
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px rgba(0,0,0,0.2)',
                                zIndex: 2,
                                border: '10px solid #effef5'
                            }}>
                                <img
                                    src="/assets/img/about_desk_coding.png"
                                    alt="Mangaltech Development Setup"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Decorative shapes and waves */}
                            <div style={{
                                position: 'absolute',
                                right: '-30px',
                                top: '50%',
                                opacity: 0.2,
                                zIndex: 0
                            }}>
                                <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10C10 10 15 15 15 20C15 25 20 30 30 30" stroke="#4EB985" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M0 25C10 25 15 30 15 35C15 40 20 45 30 45" stroke="#4EB985" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M0 40C10 40 15 45 15 50C15 55 20 60 30 60" stroke="#4EB985" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Dotted circle overlay */}
                            <div style={{
                                position: 'absolute',
                                left: '40%',
                                bottom: '-30px',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                border: '2px dotted #4EB985',
                                opacity: 0.3,
                                zIndex: 0
                            }} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

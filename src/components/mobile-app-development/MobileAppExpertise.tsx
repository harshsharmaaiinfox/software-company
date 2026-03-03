
const MobileAppExpertise = () => {
    const expertiseList = [
        {
            title: "iOS App Development",
            description: "We furnish you with a technically proficient, aesthetically pleasing and value-driven app for your iPhone. Developing an iOS app requires the latest technology and a handful of experts. We are considered the best in Delhi because of our quality parameters.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
        },
        {
            title: "Android App Development",
            description: "Android apps live in a highly fragmented multi-device world. With such a vast user base, Android app development emerges as a potentially profitable deal since one creates highly marketable mobile app products for larger audiences.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
        },
        {
            title: "Cross Platform App Development",
            description: "It creates applications compatible with multiple operating systems like iOS, Android, and Windows. Utilizing frameworks like React Native or Flutter, we craft efficient apps that reach a wider audience while maintaining a consistent user experience.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            title: "PhoneGap App Development",
            description: "PhoneGap is a platform by Adobe to create economical Apps using technology like HTML5, CSS, and JavaScript. We assist developers in creating Apps which can run on different Mobile OS without any error.",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cordova/cordova-original.svg"
        }
    ];

    return (
        <section className="expertise-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 text-center">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            SERVICES
                        </span>
                        <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '25px' }}>
                            We Are Expert In
                        </h2>
                        <p style={{ color: '#585b6f', fontSize: '16px', lineHeight: '1.8' }}>
                            We are a leading **Mobile App Development Company In Delhi**. We design and
                            develop user-friendly apps and everything that you need in a Mobile Application.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {expertiseList.map((item, idx) => (
                        <div key={idx} className="col-lg-6">
                            <div className="expertise-card wow fadeInUp" data-wow-delay={`${idx * 0.2}s`} style={{
                                background: '#fff',
                                padding: '40px',
                                borderRadius: '20px',
                                border: '1px solid #e1e5eb',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '30px',
                                height: '100%',
                                transition: 'all 0.3s ease'
                            }}>
                                <div className="expertise-icon" style={{ flexShrink: 0 }}>
                                    <img src={item.icon} alt={item.title} style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
                                </div>
                                <div className="expertise-content">
                                    <h3 style={{ color: '#036278', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hire Dedicated Developer CTA Row */}
                <div className="row mt-80 justify-content-center">
                    <div className="col-xl-10">
                        <div className="hire-dev-cta text-center d-flex align-items-center justify-content-center gap-4 flex-wrap">
                            <h2 style={{ color: '#036278', fontSize: '32px', fontWeight: '800', margin: 0 }}>
                                Hire a <span style={{ color: '#4EB985' }}>Dedicated Developer</span>
                            </h2>
                            <button className="tv-btn" style={{
                                background: 'linear-gradient(to right, #ff4e50, #f9d423)',
                                color: '#fff',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                border: 'none',
                                fontWeight: '700',
                                fontSize: '16px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 20px rgba(255, 78, 80, 0.2)'
                            }}>
                                Hire Now <i className="fa-solid fa-chevron-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .expertise-card:hover {
                    box-shadow: 0 15px 35px rgba(3, 98, 120, 0.08);
                    border-color: #4EB985;
                    transform: translateX(5px);
                }
            `}} />
        </section>
    );
};

export default MobileAppExpertise;

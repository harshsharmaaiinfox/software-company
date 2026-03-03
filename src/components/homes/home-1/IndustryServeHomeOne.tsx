
const industries = [
    { title: "Social Networking", icon: "fa-light fa-share-nodes", delay: ".1s" },
    { title: "Digital Marketing", icon: "fa-light fa-chart-line-up", delay: ".2s" },
    { title: "Ecommerce Development", icon: "fa-light fa-cart-shopping", delay: ".3s" },
    { title: "Video Service", icon: "fa-light fa-video", delay: ".4s" },
    { title: "Banking Service", icon: "fa-light fa-building-columns", delay: ".5s" },
    { title: "Enterprise Service", icon: "fa-light fa-briefcase", delay: ".6s" },
    { title: "Education Service", icon: "fa-light fa-graduation-cap", delay: ".7s" },
    { title: "Tour and Travels", icon: "fa-light fa-plane-up", delay: ".8s" },
    { title: "Health Service", icon: "fa-light fa-heart-pulse", delay: ".9s" },
    { title: "Event & Ticket", icon: "fa-light fa-ticket", delay: "1s" },
    { title: "Restaurant Service", icon: "fa-light fa-utensils", delay: "1.1s" },
    { title: "Business Consultant", icon: "fa-light fa-user-tie", delay: "1.2s" },
];

export default function IndustryServeHomeOne() {
    return (
        <section className="tv-industry-area pt-130 pb-130" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5">
                        <div className="industry-content pe-xl-4">
                            <span className="tv-section-subtitle mb-20 d-inline-block" style={{ color: '#047C97', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>
                                INDUSTRIES WE SERVE
                            </span>
                            <h2 style={{ fontSize: '44px', fontWeight: 900, color: '#1a1a2e', lineHeight: 1.2, marginBottom: '25px' }}>
                                Unlocking Success <br /> Across Sectors
                            </h2>
                            <p style={{ color: '#666', lineHeight: 1.8, fontSize: '16px', marginBottom: '0' }}>
                                Join hands with us as we navigate the complexities of these industries, transforming challenges into opportunities. Your success is our mission!
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="row g-4 mt-md-0 mt-5">
                            {industries.map((item, index) => (
                                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow itfadeUp" data-wow-delay={item.delay}>
                                    <div
                                        className="industry-item"
                                        style={{
                                            background: '#fff',
                                            padding: '35px 20px',
                                            borderRadius: '30px 30px 0 30px',
                                            textAlign: 'center',
                                            boxShadow: '0 10px 40px rgba(4,124,151,0.04)',
                                            border: '1px solid #f0f3ff',
                                            transition: 'all 0.3s ease',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'default'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-10px)';
                                            e.currentTarget.style.background = '#047C97';
                                            e.currentTarget.style.borderColor = '#047C97';
                                            const icon = e.currentTarget.querySelector('i') as HTMLElement;
                                            const text = e.currentTarget.querySelector('h5') as HTMLElement;
                                            if (icon) icon.style.color = '#fff';
                                            if (text) text.style.color = '#fff';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.background = '#fff';
                                            e.currentTarget.style.borderColor = '#f0f3ff';
                                            const icon = e.currentTarget.querySelector('i') as HTMLElement;
                                            const text = e.currentTarget.querySelector('h5') as HTMLElement;
                                            if (icon) icon.style.color = '#047C97';
                                            if (text) text.style.color = '#1a1a2e';
                                        }}
                                    >
                                        <div
                                            className="icon-box mb-20"
                                            style={{
                                                fontSize: '36px',
                                                color: '#047C97',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <i className={item.icon}></i>
                                        </div>
                                        <h5
                                            style={{
                                                fontSize: '15px',
                                                fontWeight: 700,
                                                color: '#1a1a2e',
                                                margin: 0,
                                                lineHeight: 1.4,
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {item.title}
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

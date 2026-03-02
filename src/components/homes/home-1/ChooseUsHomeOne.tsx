import { Link } from 'react-router-dom';

export default function ChooseUsHomeOne() {
    const features = [
        {
            title: "We excel in creativity",
            desc: "We create your Identity. We trust that imagination is crucial to progress. Inventiveness is something that ought to be clear as well, regardless of whether it is tied in with creating, planning or composing something.",
            icon: "fa-light fa-lightbulb-on",
            color: "#2B4DFF"
        },
        {
            title: "Professionalism is our priority",
            desc: "The interesting proficient conduct of Edgiss makes you want to try us since we don't pursue the benefits in actuality we work genuinely to satisfy our customers desires.",
            icon: "fa-light fa-briefcase",
            color: "#2B4DFF"
        },
        {
            title: "Full-time customer assistance",
            desc: "We give the most ideal help as far as security, on-time administrations, openness and support. We bolster you for the smooth activity of your business.",
            icon: "fa-light fa-headset",
            color: "linear-gradient(135deg, #2B4DFF, #1a3ae0)"
        }
    ];

    return (
        <section className="tv-choose-us-area pt-130 pb-130" style={{ background: '#fcfdff', position: 'relative' }}>
            {/* Decorative background pattern */}
            <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.03, pointerEvents: 'none' }}>
                <svg width="600" height="600" viewBox="0 0 100 100">
                    <circle cx="100" cy="0" r="80" fill="#2B4DFF" />
                </svg>
            </div>

            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <span className="tv-section-subtitle mb-20 d-inline-block" style={{ color: '#2B4DFF', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>
                            What Makes You Choose Us?
                        </span>
                        <h2 style={{ fontSize: '46px', fontWeight: 900, color: '#1a1a2e', lineHeight: 1.2 }}>
                            Why The <span style={{ color: '#2B4DFF' }}>EDGISS</span> Ranked Top Among Leading <br />
                            <span style={{ color: '#2B4DFF' }}>Web & App Development</span> Companies
                        </h2>
                    </div>
                </div>

                <div className="row align-items-center g-5">
                    {/* Left Side: Features List */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="choose-us-content pe-xl-5">
                            <p className="mb-40" style={{ color: '#666', lineHeight: 1.8, fontSize: '17px', fontWeight: 400 }}>
                                Picking us among all isn't a choice however an inclination that you will acknowledge in the wake of going along with us. We are imaginative, basic yet proficient towards our work and customers.
                            </p>

                            <div className="features-grid d-flex flex-column gap-5">
                                {features.map((f, i) => (
                                    <div key={i} className="single-feature-item d-flex gap-4 p-relative wow itfadeUp" data-wow-delay={`.${i + 2}s`}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                            color: typeof f.color === 'string' && f.color.startsWith('linear') ? '#fff' : f.color,
                                            background: typeof f.color === 'string' && f.color.startsWith('linear') ? f.color : '#fff',
                                            fontSize: '28px'
                                        }}>
                                            <i className={f.icon} style={{ color: typeof f.color === 'string' && f.color.startsWith('linear') ? '#fff' : f.color }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a2e', marginBottom: '12px' }}>{f.title}</h4>
                                            <p style={{ color: '#666', lineHeight: 1.7, margin: 0, fontSize: '15.5px' }}>{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Professional Visuals */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="choose-us-visuals position-relative p-relative">
                            {/* Image Frame with offset stack effect */}
                            <div style={{
                                position: 'absolute',
                                top: '40px',
                                left: '40px',
                                bottom: '-20px',
                                right: '-20px',
                                background: 'rgba(43,77,255,0.06)',
                                borderRadius: '30px',
                                zIndex: 0
                            }}></div>

                            <div className="main-image-card" style={{
                                position: 'relative',
                                zIndex: 1,
                                borderRadius: '30px',
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px rgba(26,26,46,0.12)',
                                background: '#fff',
                                border: '1px solid rgba(255,255,255,0.8)'
                            }}>
                                <img
                                    src="assets/img/partnership.png"
                                    alt="Edgiss Business Partnership"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>

                            {/* Floating CTA Card */}
                            <div className="cta-glass-card mt-5 wow itfadeUp" data-wow-delay=".5s" style={{
                                marginTop: '40px',
                                background: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(20px)',
                                padding: '40px',
                                borderRadius: '30px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                                border: '1px solid #fff',
                                textAlign: 'center',
                                position: 'relative',
                                zIndex: 2
                            }}>
                                <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#1a1a2e', marginBottom: '15px' }}>
                                    Let's Start a <span style={{ color: '#2B4DFF' }}>New Project</span> Together
                                </h3>
                                <p style={{ color: '#666', fontSize: '15px', marginBottom: '25px', lineHeight: 1.6 }}>
                                    We are your one stop destination to give a boost to your venture with boundless imagination and creative excellence.
                                </p>
                                <Link
                                    to="/contact"
                                    className="tv-btn-primary"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        background: 'linear-gradient(90deg, #2B4DFF, #1a3ae0)',
                                        color: '#fff',
                                        padding: '16px 45px',
                                        borderRadius: '50px',
                                        fontWeight: 700,
                                        boxShadow: '0 10px 30px rgba(43,77,255,0.3)',
                                        border: 'none'
                                    }}
                                >
                                    Get A Free Quote <i className="fa-solid fa-arrow-right-long"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

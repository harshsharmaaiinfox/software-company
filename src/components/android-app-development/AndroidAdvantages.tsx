
const AndroidAdvantages = () => {
    const advantages = [
        {
            title: "Business Automation",
            description: "Implementing automation to optimize business processes and reduce overhead costs.",
            icon: "fa-solid fa-microchip"
        },
        {
            title: "Improve Operational Efficiency",
            description: "Enhance your business operations with data-driven mobile apps designed for core utility.",
            icon: "fa-solid fa-bolt-lightning"
        },
        {
            title: "Internal Capabilities",
            description: "Empower your internal workforce with powerful mobile tools that drive results.",
            icon: "fa-solid fa-users-gear"
        }
    ];

    return (
        <section className="android-advantages-area pt-120 pb-120" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="android-advantage-thumb wow fadeInLeft" data-wow-delay=".4s">
                            <img src="/assets/img/android.jpg" alt="Android App Advantages" style={{
                                width: '100%',
                                borderRadius: '30px',
                                boxShadow: '0 40px 80px rgba(3, 98, 120, 0.15)',
                                border: '1px solid rgba(78, 185, 133, 0.1)'
                            }} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="android-advantage-content pl-60">
                            <span style={{
                                color: '#4EB985',
                                background: 'rgba(78, 185, 133, 0.1)',
                                padding: '4px 15px',
                                borderRadius: '4px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                display: 'inline-block',
                                marginBottom: '20px',
                                fontSize: '13px'
                            }}>
                                ADVANTAGES
                            </span>
                            <h2 style={{ color: '#036278', fontSize: '42px', fontWeight: '800', marginBottom: '40px', lineHeight: '1.2' }}>
                                Android App Development <br /> <span style={{ color: '#4EB985' }}>Advantages</span>
                            </h2>

                            <div className="row g-4">
                                {advantages.map((adv, idx) => (
                                    <div key={idx} className="col-lg-12">
                                        <div className="advantage-item wow fadeInUp" data-wow-delay={`${idx * 0.2}s`} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '25px',
                                            padding: '30px',
                                            borderRadius: '25px',
                                            background: '#f9fbff',
                                            border: '1px solid rgba(225, 229, 235, 0.5)',
                                            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                        }}>
                                            <div className="icon-box" style={{
                                                width: '65px',
                                                height: '65px',
                                                background: '#fff',
                                                borderRadius: '18px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '24px',
                                                color: '#4EB985',
                                                boxShadow: '0 10px 20px rgba(3, 98, 120, 0.05)',
                                                flexShrink: 0,
                                                transition: 'all 0.4s'
                                            }}>
                                                <i className={adv.icon}></i>
                                            </div>
                                            <div>
                                                <h4 style={{ color: '#036278', fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>{adv.title}</h4>
                                                <p style={{ color: '#585b6f', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{adv.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .advantage-item {
                    cursor: pointer;
                }
                .advantage-item:hover { 
                    border-color: #4EB985; 
                    background: #fff !important;
                    box-shadow: 0 15px 35px rgba(3, 98, 120, 0.1); 
                    transform: translateY(-5px);
                }
                .advantage-item:hover .icon-box {
                    background: #4EB985 !important;
                    color: #fff !important;
                    transform: scale(1.1);
                }
                @media (max-width: 991px) {
                    .android-advantage-thumb { margin-bottom: 50px; }
                    .android-advantage-content { padding-left: 0; text-align: center; }
                    .advantage-item { flex-direction: column; text-align: center; }
                }
            `}} />
        </section>
    );
};

export default AndroidAdvantages;

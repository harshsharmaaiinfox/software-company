
const stats = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#blueGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71Z" />
                <path d="m12 15-3-3l1.35-1.35a6.03 6.03 0 0 1 8.49 0l.16.16a6.03 6.03 0 0 1 0 8.49L17.65 20.65 15 18" />
                <path d="m10 10 3 3" />
                <path d="M10 21c-2 0-3.5-1.5-3.5-3.5" />
                <path d="M7 5l3 3" />
                <path d="M3.5 10.5C5.5 10.5 7 9 7 7" />
                <path d="M16.5 4.5l1.5 1.5" />
                <path d="M21 7.5l-1.5 1.5" />
                <defs>
                    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047C97" />
                        <stop offset="100%" stopColor="#036278" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        number: '15+',
        label: 'Years In Business',
        delay: '.2s'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#blueGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        number: '80+',
        label: 'Team Members',
        delay: '.3s'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#blueGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M7 3C4.239 3 2 5.239 2 8c0 2.21 1.79 4 4 4 2.21 0 4-1.79 4-4 0-2.761-2.239-5-5-5Z" />
            </svg>
        ),
        number: '450',
        label: 'Happy Clients',
        delay: '.4s'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#blueGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="3" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        number: '48k',
        label: 'Projects Done',
        delay: '.5s'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#blueGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        number: '95k',
        label: 'Hours Worked',
        delay: '.6s'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#blueGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        number: '24/7',
        label: 'Support Available',
        delay: '.7s'
    }
];

export default function StatSection() {
    return (
        <section className="tv-stat-area pt-120 pb-120" style={{
            background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f4f9ff 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background number/text */}
            <h2 style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '300px',
                fontWeight: 900,
                color: 'rgba(4, 124, 151, 0.024)',
                zIndex: 0,
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase'
            }}>
                Impact
            </h2>

            {/* Modern floating shapes */}
            <div style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(4, 124, 151, 0.05) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(78, 185, 133, 0.04) 0%, transparent 70%)', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row justify-content-center">
                    {/* Top Row: 2 items */}
                    <div className="col-12 d-flex justify-content-center flex-wrap gap-md-5 gap-4 mb-50">
                        {stats.slice(0, 2).map((stat, index) => (
                            <div
                                key={index}
                                className="stat-item d-flex align-items-center gap-4 wow itfadeUp"
                                data-wow-delay={stat.delay}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '25px 35px',
                                    borderRadius: '30px',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.8)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(4, 124, 151, 0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.03)';
                                }}
                            >
                                <div style={{
                                    background: '#fff',
                                    width: '90px',
                                    height: '90px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '24px 24px 0 24px',
                                    boxShadow: '0 10px 25px rgba(4, 124, 151, 0.08)',
                                    flexShrink: 0
                                }}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '42px', fontWeight: 900, color: '#1a1a2e', margin: 0, lineHeight: 1 }}>{stat.number}</h3>
                                    <p style={{ margin: '8px 0 0', color: '#555', fontSize: '18px', fontWeight: 600 }}>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: 4 items */}
                    <div className="col-12 d-flex justify-content-center flex-wrap gap-md-4 gap-3">
                        {stats.slice(2).map((stat, index) => (
                            <div
                                key={index}
                                className="stat-item d-flex align-items-center gap-3 wow itfadeUp"
                                data-wow-delay={stat.delay}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.6)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '20px 25px',
                                    borderRadius: '24px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.7)',
                                    transition: 'all 0.3s ease',
                                    minWidth: '240px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(4, 124, 151, 0.06)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)';
                                }}
                            >
                                <div style={{
                                    background: '#fff',
                                    width: '70px',
                                    height: '70px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '18px 18px 0 18px',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
                                    flexShrink: 0
                                }}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#1a1a2e', margin: 0, lineHeight: 1 }}>{stat.number}</h3>
                                    <p style={{ margin: '5px 0 0', color: '#666', fontSize: '15px', fontWeight: 500 }}>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

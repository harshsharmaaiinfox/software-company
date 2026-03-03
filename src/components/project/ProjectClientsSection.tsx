
const ProjectClientsSection = () => {
    const clients = [
        { id: 1, logo: '/assets/img/brand/brand-1-1.png', name: 'Client 1' },
        { id: 2, logo: '/assets/img/brand/brand-1-2.png', name: 'Client 2' },
        { id: 3, logo: '/assets/img/brand/brand-1-3.png', name: 'Client 3' },
        { id: 4, logo: '/assets/img/brand/brand-1-4.png', name: 'Client 4' },
        { id: 5, logo: '/assets/img/brand/brand-1-5.png', name: 'Client 5' },
        { id: 6, logo: '/assets/img/brand/brand-1-1.png', name: 'Client 6' },
        { id: 7, logo: '/assets/img/brand/brand-1-2.png', name: 'Client 7' },
        { id: 8, logo: '/assets/img/brand/brand-1-3.png', name: 'Client 8' },
    ];

    return (
        <section className="project-clients-area pt-100 pb-100" style={{ background: '#f8faff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xl-6 text-center">
                        <div className="section-title">
                            <span style={{
                                color: '#4EB985',
                                fontWeight: '700',
                                display: 'block',
                                marginBottom: '10px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Our Trusted Clients
                            </span>
                            <h2 style={{ color: '#036278', fontSize: '36px', fontWeight: '800' }}>
                                Joining Hands with Global Industry Leaders
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {clients.map((client) => (
                        <div key={client.id} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="client-logo-card" style={{
                                background: '#fff',
                                padding: '30px',
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '140px',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(0,0,0,0.05)',
                                cursor: 'pointer'
                            }}>
                                <img src={client.logo} alt={client.name} style={{
                                    maxWidth: '120px',
                                    maxHeight: '60px',
                                    filter: 'grayscale(100%)',
                                    opacity: 0.6,
                                    transition: 'all 0.3s ease'
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .client-logo-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(3, 98, 120, 0.1);
                    border-color: #4EB985;
                }
                .client-logo-card:hover img {
                    filter: grayscale(0%);
                    opacity: 1;
                    transform: scale(1.1);
                }
            `}} />
        </section>
    );
};

export default ProjectClientsSection;

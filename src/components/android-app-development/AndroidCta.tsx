
const AndroidCta = () => {
    return (
        <section className="android-cta-area pt-100 pb-100" style={{ background: '#036278', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'rgba(78, 185, 133, 0.15)',
                filter: 'blur(150px)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container p-relative text-center" style={{ zIndex: 1 }}>
                <div className="row justify-content-center mb-40">
                    <div className="col-xl-8">
                        <span style={{ color: '#4EB985', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
                            GET IN TOUCH
                        </span>
                        <h2 style={{ color: '#fff', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                            Let's Discuss Your Requirements – <br /> We're All Ears!
                        </h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <button className="tv-btn" style={{
                            background: '#4EB985',
                            color: '#fff',
                            padding: '18px 50px',
                            borderRadius: '50px',
                            border: 'none',
                            fontWeight: '700',
                            fontSize: '18px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 30px rgba(78, 185, 133, 0.4)'
                        }}>
                            Let's Connect <i className="fa-solid fa-paper-plane ms-2"></i>
                        </button>
                    </div>
                </div>

                <div className="mt-40">
                    <p style={{ color: '#fff', fontSize: '20px', fontWeight: '600' }}>Call Us: <a href="tel:+918368068740" style={{ color: '#4EB985', textDecoration: 'none' }}>+91 836 8068 740</a></p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .android-cta-area .tv-btn:hover { background: #fff; color: #036278; transform: translateY(-5px); }
            `}} />
        </section>
    );
};

export default AndroidCta;

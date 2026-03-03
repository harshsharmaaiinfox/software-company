export default function ProcessHomeOne() {
  return (
    <div className="tv-process-area pt-130 pb-130 gray-bg" style={{ background: '#f8faff' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <div className="tv-section-title-box mb-60">
              <span className="tv-section-subtitle tv-spltv-text tv-spltv-in-right wow itfadeUp" data-wow-delay=".3s" style={{ color: '#047C97', fontWeight: 700 }}>
                Our Success Process
              </span>
              <h4 className="tv-section-title tv-spltv-text tv-spltv-in-right wow itfadeUp" data-wow-delay=".5s" style={{ fontSize: '42px', fontWeight: 800, color: '#1a1a2e' }}>
                A Strategic Roadmap to <br /> Your Digital Success
              </h4>
            </div>
          </div>

          <div className="tv-process-box-area">
            <div className="row p-relative">
              {/* Optional: Line shape indicator between steps */}
              <div className="shap d-none d-xl-block">
                <img src="assets/img/process/line-shap.png" alt="" />
              </div>

              {/* Step 01 */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div
                  className="single-process-box text-center"
                  style={{
                    background: '#fff',
                    padding: '45px 30px',
                    borderRadius: '24px',
                    boxShadow: '0 15px 45px rgba(4,124,151,0.06)',
                    position: 'relative',
                    zIndex: 1,
                    border: '1px solid #eef2ff',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = '#047C97';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(4,124,151,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#eef2ff';
                    e.currentTarget.style.boxShadow = '0 15px 45px rgba(4,124,151,0.06)';
                  }}
                >
                  <div style={{ marginBottom: '25px' }}>
                    <img src="assets/img/process/process-1-1.png" alt="Discovery" style={{ width: '120px' }} />
                  </div>
                  <div className="process-box-content">
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '1px',
                      display: 'inline-block',
                      marginBottom: '20px',
                      background: 'linear-gradient(90deg, #047C97, #036278)',
                      padding: '6px 25px',
                      borderRadius: '50px',
                      boxShadow: '0 4px 12px rgba(4,124,151,0.2)'
                    }}>STEP - 01</span>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a2e', marginBottom: '15px' }}>Discovery & Strategy</h2>
                    <p style={{ color: '#666', lineHeight: '1.7' }}>
                      We start by understanding your vision, analyzing market demands, and crafting a unique strategy for your success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 02 */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div
                  className="single-process-box text-center"
                  style={{
                    background: '#fff',
                    padding: '45px 30px',
                    borderRadius: '24px',
                    boxShadow: '0 15px 45px rgba(4,124,151,0.06)',
                    position: 'relative',
                    zIndex: 1,
                    border: '1px solid #eef2ff',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = '#047C97';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(4,124,151,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#eef2ff';
                    e.currentTarget.style.boxShadow = '0 15px 45px rgba(4,124,151,0.06)';
                  }}
                >
                  <div style={{ marginBottom: '25px' }}>
                    <img src="assets/img/process/process-1-2.png" alt="Development" style={{ width: '120px' }} />
                  </div>
                  <div className="process-box-content">
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '1px',
                      display: 'inline-block',
                      marginBottom: '20px',
                      background: 'linear-gradient(90deg, #047C97, #036278)',
                      padding: '6px 25px',
                      borderRadius: '50px',
                      boxShadow: '0 4px 12px rgba(4,124,151,0.2)'
                    }}>STEP - 02</span>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a2e', marginBottom: '15px' }}>Creative Development</h2>
                    <p style={{ color: '#666', lineHeight: '1.7' }}>
                      Our expert team brings the blueprint to life with cutting-edge technology and aesthetic design excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 03 */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div
                  className="single-process-box text-center"
                  style={{
                    background: '#fff',
                    padding: '45px 30px',
                    borderRadius: '24px',
                    boxShadow: '0 15px 45px rgba(4,124,151,0.06)',
                    position: 'relative',
                    zIndex: 1,
                    border: '1px solid #eef2ff',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = '#047C97';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(4,124,151,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#eef2ff';
                    e.currentTarget.style.boxShadow = '0 15px 45px rgba(4,124,151,0.06)';
                  }}
                >
                  <div style={{ marginBottom: '25px' }}>
                    <img src="assets/img/process/process-1-3.png" alt="Deployment" style={{ width: '120px' }} />
                  </div>
                  <div className="process-box-content">
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '1px',
                      display: 'inline-block',
                      marginBottom: '20px',
                      background: 'linear-gradient(90deg, #047C97, #036278)',
                      padding: '6px 25px',
                      borderRadius: '50px',
                      boxShadow: '0 4px 12px rgba(4,124,151,0.2)'
                    }}>STEP - 03</span>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a2e', marginBottom: '15px' }}>Launch & Beyond</h2>
                    <p style={{ color: '#666', lineHeight: '1.7' }}>
                      After rigorous testing, we launch your product and provide ongoing support to ensure sustained business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
